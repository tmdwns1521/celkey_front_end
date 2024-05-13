import styles from '../../styles/header.module.scss';
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>
        <img src="../../public/image/logo.png" alt="로고"/>
      </Link>
      <div className={styles.buttons}>
        <Link to="/login" className={styles.login_btn}>로그인</Link>
        <Link to="/join" className={styles.join_btn}>가입하기</Link>
      </div>
    </div>
  )
}