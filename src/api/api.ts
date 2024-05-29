import axios, {AxiosRequestConfig} from "axios";
import {clearUserInfo, setUserInfoFromToken} from "../../store/util.ts";

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

const handleUnauthorized = async (originalRequest: AxiosRequestConfig) => {
  try {
    if (originalRequest.url === '/auth/kakao/refresh-token') {
      clearUserInfo();
      return Promise.reject(originalRequest);
    }

    if (isLoggedIn()) {
      const res = await api.get('/auth/kakao/refresh-token', { withCredentials: true });
      const newAccessToken = `Bearer ${res.data.accessToken}`;

      api.defaults.headers.common['Authorization'] = newAccessToken;
      if (originalRequest.headers) {
        originalRequest.headers['Authorization'] = newAccessToken;
      }

      setUserInfoFromToken(newAccessToken);
      return api(originalRequest);
    } else {
      clearUserInfo();
      window.location.href = '/login';
      return Promise.reject(originalRequest);
    }
  } catch (err) {
    clearUserInfo();
    window.location.href = '/login';
    return Promise.reject(err);
  }
}

const isLoggedIn = () => {
  const accessToken = api.defaults.headers.common['Authorization'];
  return accessToken !== null && accessToken !== undefined;
}

// 응답 인터셉터
api.interceptors.response.use(
  response => response,

  async error => {
    const originalRequest:CustomAxiosRequestConfig = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return handleUnauthorized(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default api;
