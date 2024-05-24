import {useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import api from "../../../../api/api.ts";
import base64 from 'base-64';
import useUserInfoStore from "../../../../../store/useUserInfoStore.ts";

export default function KakaoCallback() {
  const navigate = useNavigate();
  const setUserInfo = useUserInfoStore((state) => state.setUserInfo);
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/auth/kakao/callback?code=${code}`);

        // accessToken 저장
        const { accessToken } = res.data;
        api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        console.log(api.defaults.headers.common['Authorization'])

        const payload = accessToken.split('.')[1];
        let decodingInfo = base64.decode(payload);
        let userInfo = JSON.parse(decodingInfo);
        console.log(userInfo)

        setUserInfo(userInfo);

        navigate('/');
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (code) {
      fetchData();
    }
  }, [code, setUserInfo, navigate]);
  return (
    <div>Kakao</div>
  )
}