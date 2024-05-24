import styles from '../../styles/search.module.scss';

export default function SearchBar() {
  return (
    <form>
      <div className={styles.input_wrap}>
        <input type="text" placeholder="검색어를 입력하세요."/>
        <button>검색</button>
      </div>
    </form>
  )
}