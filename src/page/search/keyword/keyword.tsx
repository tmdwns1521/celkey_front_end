import SearchBar from "../../../components/SearchBar.tsx";
import styles from '../../../../styles/keyword.module.scss';
import MonthlySearch from "../../../components/keywords/monthlySearch.tsx";

export default function SearchKeyword() {
  const KEYWORD_MONTHLY = [{
    keyword: '뉴진스',
    search_pc: 393000,
    search_mobile: 2030000,
    search_total: 2430000,
    publishing_blog: 19400,
    publishing_cafe: 21300,
    publishing_total: 40900,
  }];
  // const RELATED_KEYWORD = [
  //   {
  //     keyword: '세븐틴',
  //     monthly: 665500,
  //   },
  //   {
  //     keyword: '아이브',
  //     monthly: 653100,
  //   },
  //   {
  //     keyword: '위버스',
  //     monthly: 228500,
  //   },
  // ]

  return (
    <div className={styles.container}>
      {/*<h1>키워드 분석</h1>*/}
      <SearchBar/>
      <div className={styles.search_word}>
        <p><b>{KEYWORD_MONTHLY[0].keyword}</b> 키워드를 분석했어요!</p>
      </div>

      <MonthlySearch KEYWORD_MONTHLY={KEYWORD_MONTHLY}/>

      <section>
        <h2 className="sub_title">월간 문서 발행량</h2>
        <div></div>
      </section>

      {/*<section>*/}
      {/*  <div className={`${styles.keywords_wrap} content_wrap`}>*/}
      {/*    <h2 className="sub_title">연관 키워드</h2>*/}
      {/*    <div className={styles.keywords_box}>*/}
      {/*      <div className={styles.keywords}>*/}
      {/*        <h3>키워드</h3>*/}
      {/*        <ul>*/}
      {/*          {RELATED_KEYWORD.map((keyword) => {*/}
      {/*            return (*/}
      {/*              <li>{keyword.keyword}</li>*/}
      {/*            )*/}
      {/*          })}*/}
      {/*        </ul>*/}
      {/*      </div>*/}
      {/*      <div className={styles.monthly}>*/}
      {/*        <h3>월 검색량</h3>*/}
      {/*        <ul>*/}
      {/*          {RELATED_KEYWORD.map((monthly) => {*/}
      {/*            return (*/}
      {/*              <li>{monthly.monthly}</li>*/}
      {/*            )*/}
      {/*          })}*/}
      {/*        </ul>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </div>
  )
}