import styles from '../../../styles/login.module.scss';
import api from "../../api/api.ts";

export default function Login() {

  const test = async () => {
    const res = await api.get('/user/test')
    console.log(res)
  }

  return (
    <div className={styles.container}>
      <div className={styles.login_wrap}>
        <h1>로그인</h1>
        <a href={`${import.meta.env.VITE_BASE_URL}/auth/kakao`} className={styles.kakao_login}>
          <img src="../../../public/image/kakao_login_btn.png" alt="카카오 로그인"/>
        </a>
        <button className={styles.naver_login}
                onClick={test}
        >
          <img src="../../../public/image/naver_login_btn.png" alt="네이버 로그인"/>
        </button>
        <button className={styles.google_login}>
          <img src="../../../public/image/google_login_btn.png" alt="네이버 로그인"/>
        </button>
        <span>OR</span>
        <form className={styles.email_login_form}>
          <div className={styles.email_box}>
            <label htmlFor="">이메일 주소</label>
            <input type="text"/>
          </div>
          <div className={styles.password_box}>
            <label htmlFor="">비밀번호</label>
            <input type="password"/>
          </div>
        </form>
      </div>
    </div>
  )
}