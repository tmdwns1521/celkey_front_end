import '../styles/reset.css';
import '../styles/common.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header.tsx";
import Home from "./page/home/Home.tsx";
import Login from "./page/login/Login.tsx";
import KakaoCallback from "./components/KakaoCallback.tsx";
import SearchKeyword from "./page/search/keyword/keyword.tsx";
import {useEffect} from "react";
import api from "./api/api.ts";
import {clearUserInfo, setUserInfoFromToken} from "../store/util.ts";

function App() {

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await api.get<any>('/auth/kakao/refresh-token', { withCredentials: true });
        console.log('AccessToken', res.data);
        const newAccessToken = `Bearer ${res.data.accessToken}`;
        api.defaults.headers.common['Authorization'] = newAccessToken;

        setUserInfoFromToken(newAccessToken);

      } catch (error) {
        console.error('Error refreshing token:', error);
        clearUserInfo();
      }
    }
    fetchUserInfo();
  }, [])

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
