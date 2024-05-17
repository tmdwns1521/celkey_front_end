import {useEffect} from "react";
import {api} from "../../../../api/api.ts";

export default function KakaoCallback() {
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    console.log(code)
    const fetchData = async () => {
      try {
        const res = await api.get(`/auth/kakao/callback?code=${code}`);
        console.log(res.data);

        // refreshToken 저장
        // const { refreshToken } = res.data;
        // const cookies = document.cookie;
        // console.log(cookies)

        // accessToken 저장
        const { accessToken } = res.data;
        api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        console.log(api.defaults.headers.common['Authorization'])
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (code) {
      fetchData();
    }
  }, []);
  return (
    <div>Kakao</div>
  )
}