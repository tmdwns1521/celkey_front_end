import {useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import api from "../api/api.ts";
import {setUserInfoFromToken} from "../../store/util.ts";

export default function KakaoCallback() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/auth/kakao/callback?code=${code}`);

        // accessToken 저장
        const { accessToken } = res.data;
        api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

        setUserInfoFromToken(accessToken);

        navigate('/');
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (code) {
      fetchData();
    }
  }, [code, navigate]);
  return (
    <div>Kakao</div>
  )
}