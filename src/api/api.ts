import axios from "axios";
import { useNavigate } from 'react-router-dom';
import base64 from "base-64";
import useUserInfoStore from "../../store/useUserInfoStore.ts";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

// 요청 인터셉터
// api.interceptors.request.use(
//   config => {
//     console.log(config)
//     console.log(api.defaults.headers.common)
//     console.log(api.defaults.headers.common.Authorization)
//     console.log(api.defaults.headers.common['Authorization'])
//     const accessToken = config.headers['Authorization'];
//     if (accessToken) {
//       config.headers['Authorization'] = accessToken;
//     }
//     return config;
//   },
//   error => Promise.reject(error)
// );

// 응답 인터셉터
api.interceptors.response.use(
  response => {
    return response
  },
  async error => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await api.get('/auth/kakao/refresh-token', { withCredentials: true });
        const newAccessToken = `Bearer ${res.data.accessToken}`;
        console.log(newAccessToken)

        api.defaults.headers.common['Authorization'] = newAccessToken;
        originalRequest.headers['Authorization'] = newAccessToken;

        const payload = newAccessToken.split('.')[1];
        let decodingInfo = base64.decode(payload);
        let userInfo = JSON.parse(decodingInfo);
        console.log(userInfo)

        const setUserInfo = useUserInfoStore.getState().setUserInfo;
        setUserInfo(userInfo);

        return api(originalRequest);
      } catch (err) {
        const navigate = useNavigate();
        console.error('Refresh token error', err);
        navigate('/login')
      }
    }

    return Promise.reject(error);
  }
);

export default api;
