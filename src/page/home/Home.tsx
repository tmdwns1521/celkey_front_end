import styles from '../../../styles/home.module.scss'
import SearchBar from "../../components/SearchBar.tsx";
import api from "../../api/api.ts";
export default function Home() {

  const test = async () => {
    const res = await api.get('/user/test')
    console.log(res)
  }

  return (
    <>
      <main>
        <button onClick={test}>TEST BTN</button>
        <h1>무엇을 분석할까요?</h1>
        <div className={styles.tab_wrap}>
          <div className={styles.on}>키워드</div>
          <div>포스팅</div>
        </div>
        <SearchBar />
      </main>
    </>
  )
}