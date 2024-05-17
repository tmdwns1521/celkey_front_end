import '../styles/reset.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./page/login/Login.tsx";
import Home from "./page/home/Home.tsx";
import Header from "./components/Header.tsx";
import KakaoCallback from "./page/auth/kakao/callback/KakaoCallback.tsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/auth/kakao/callback" element={<KakaoCallback />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
