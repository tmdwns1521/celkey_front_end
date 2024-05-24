import styles from '../../styles/header.module.scss';
import {Link} from "react-router-dom";
import useUserInfoStore from "../../store/useUserInfoStore.ts";
import api from "../api/api.ts";
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const { userInfo, setUserInfo } = useUserInfoStore();
  const navigate = useNavigate();

  console.log(userInfo);

  const handleLogout = () => {
    //
    setUserInfo(null);
    api.defaults.headers.common['Authorization'] = '';
    navigate('/login');
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
            <button onClick={handleLogout}>로그아웃</button>
          </div>
        ) : (
          <div className={styles.buttons}>
            <Link to="/login" className={styles.login_btn}>로그인</Link>
            <Link to="/join" className={styles.join_btn}>가입하기</Link>
          </div>
        )}
      </div>
    </div>
  )
}