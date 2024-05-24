import '../styles/reset.css';
import '../styles/common.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import base64 from "base-64";
import Header from "./components/Header.tsx";
import Home from "./page/home/Home.tsx";
import Login from "./page/login/Login.tsx";
import KakaoCallback from "./page/auth/kakao/callback/KakaoCallback.tsx";
import SearchKeyword from "./page/search/keyword/keyword.tsx";
import useUserInfoStore from "../store/useUserInfoStore.ts";
import {useEffect} from "react";
import api from "./api/api.ts";

function App() {
  const setUserInfo = useUserInfoStore(state => state.setUserInfo);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await api.get<any>('/auth/kakao/refresh-token', { withCredentials: true });
        console.log(res)
        const newAccessToken = `Bearer ${res.data.accessToken}`;
        api.defaults.headers.common['Authorization'] = newAccessToken;

        const payload = newAccessToken.split('.')[1];
        const decodingInfo = base64.decode(payload);
        const userInfo = JSON.parse(decodingInfo);
        setUserInfo(userInfo);

      } catch (error) {
        console.error('Error refreshing token:', error);
        setUserInfo(null);
      }
    }
    fetchUserInfo();
  }, [setUserInfo])

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/auth/kakao/callback" element={<KakaoCallback />}></Route>
          <Route path="/search/keyword" element={<SearchKeyword />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
