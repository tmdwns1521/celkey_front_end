import axios from "axios";
import {clearUserInfo, setUserInfoFromToken} from "../../store/util.ts";

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

const isLoggedIn = () => {
  const accessToken = api.defaults.headers.common['Authorization'];
  return accessToken !== null && accessToken !== undefined;
}

// 응답 인터셉터
api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        if(isLoggedIn()) {
          const res = await api.get('/auth/kakao/refresh-token', { withCredentials: true });
          const newAccessToken = `Bearer ${res.data.accessToken}`;

          api.defaults.headers.common['Authorization'] = newAccessToken;
          originalRequest.headers['Authorization'] = newAccessToken;

          setUserInfoFromToken(newAccessToken);
          return api(originalRequest);
        } else {
          clearUserInfo();
        }

      } catch (err) {
        clearUserInfo();
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
