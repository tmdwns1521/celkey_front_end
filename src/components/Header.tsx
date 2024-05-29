import styles from '../../styles/header.module.scss';
import {Link} from "react-router-dom";
import useUserInfoStore from "../../store/useUserInfoStore.ts";
import api from "../api/api.ts";
import { useNavigate } from 'react-router-dom';
import {clearUserInfo} from "../../store/util.ts";

export default function Header() {
  const { userInfo } = useUserInfoStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      if(userInfo !== null && userInfo !== undefined) {
        const res = await api.post('/auth/logout');
        console.log('LOGOUT', res)
        clearUserInfo();
        delete api.defaults.headers.common['Authorization'];
        navigate('/login');
      } else {
        console.error('logout Error');
      }
    } catch(e) {
      console.error('Error logging out:', e);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header_wrap}>
        <Link to="/" className={styles.logo}>
          <img src="../../public/image/logo_0.png" alt="로고"/>
        </Link>
        {userInfo ? (
          <div className={styles.login_info}>
            <div>{userInfo.email}</div>
            <button onClick={handleLogout} className={styles.logout}>로그아웃</button>
          </div>
        ) : (
          <Link to="/login" className={styles.login_btn}>로그인</Link>
        )}
      </div>
    </div>
  )
}