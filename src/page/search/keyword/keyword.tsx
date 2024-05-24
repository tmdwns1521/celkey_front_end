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

      <section className={styles.amount_section}>
        <MonthlySearch KEYWORD_MONTHLY={KEYWORD_MONTHLY}/>

        <div className={styles.amount_wrap}>
          <h2 className="sub_title">월간 문서 발행량</h2>
          {KEYWORD_MONTHLY.map((item) => {
            return (
              <ul className={styles.monthly_doc_list}>
                <li className={styles.total}>
                  <p>{item.publishing_total.toLocaleString()}</p>
                  <div>TOTAL</div>
                </li>
                <li>
                  <span>블로그</span>
                  <p>{item.publishing_blog.toLocaleString()}</p>
                  <img src="data:image/svg+xml,%3Csvg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.586 52.246C17.758 52.246 18.555 51.636 19.961 50.371L28.071 43.176H43.094C50.078 43.176 53.828 39.309 53.828 32.441V14.488C53.828 7.62103 50.078 3.75403 43.094 3.75403H12.906C5.946 3.75403 2.172 7.59803 2.172 14.488V32.441C2.172 39.332 5.945 43.176 12.906 43.176H14.031V49.269C14.031 51.074 14.969 52.246 16.586 52.246ZM17.546 47.957V41.16C17.546 39.895 17.078 39.402 15.789 39.402H12.929C8.172 39.402 5.945 36.988 5.945 32.418V14.488C5.945 9.91803 8.172 7.52803 12.93 7.52803H43.094C47.828 7.52803 50.054 9.91803 50.054 14.488V32.418C50.054 36.988 47.828 39.402 43.094 39.402H27.906C26.617 39.402 25.938 39.59 25.046 40.504L17.546 47.957ZM16.07 17.512H39.93C40.68 17.512 41.29 16.926 41.29 16.152C41.29 15.402 40.68 14.816 39.93 14.816H16.07C15.894 14.8139 15.7193 14.847 15.5562 14.9134C15.3931 14.9797 15.245 15.0781 15.1205 15.2025C14.996 15.327 14.8977 15.4752 14.8313 15.6382C14.7649 15.8013 14.7319 15.976 14.734 16.152C14.734 16.926 15.32 17.512 16.07 17.512ZM16.07 25.129H39.93C40.68 25.129 41.29 24.543 41.29 23.769C41.29 23.043 40.68 22.41 39.93 22.41H16.07C15.32 22.41 14.734 23.043 14.734 23.77C14.734 24.543 15.32 25.129 16.07 25.129ZM16.07 32.769H31.586C32.336 32.769 32.946 32.184 32.946 31.434C32.946 30.66 32.336 30.051 31.586 30.051H16.07C15.32 30.051 14.734 30.661 14.734 31.434C14.734 32.184 15.32 32.769 16.07 32.769Z' fill='black'/%3E%3C/svg%3E%0A" alt="블로그 발행량"/>
                </li>
                <li>
                  <span>카페</span>
                  <p>{item.publishing_cafe.toLocaleString()}</p>
                  <img src="data:image/svg+xml,%3Csvg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.094 52.316C17.031 52.316 17.688 51.848 18.789 50.816L27.273 43.082L43.093 43.105C50.078 43.129 53.828 39.238 53.828 32.371V14.418C53.828 7.55096 50.078 3.68396 43.094 3.68396H12.906C5.946 3.68396 2.172 7.52696 2.172 14.418V32.371C2.172 39.261 5.945 43.105 12.906 43.082H14.008V49.902C14.008 51.355 14.781 52.316 16.094 52.316ZM14.898 16.81C14.055 16.81 13.398 16.153 13.398 15.286C13.398 14.513 14.055 13.833 14.898 13.833H41.125C41.945 13.833 42.625 14.513 42.625 15.286C42.6282 15.485 42.5917 15.6826 42.5178 15.8674C42.4438 16.0521 42.3338 16.2203 42.1942 16.3622C42.0546 16.504 41.8882 16.6166 41.7046 16.6935C41.521 16.7704 41.324 16.81 41.125 16.81H14.898ZM14.898 25.2C14.7003 25.2027 14.504 25.1657 14.3208 25.0913C14.1376 25.0168 13.9712 24.9064 13.8313 24.7666C13.6915 24.6268 13.5811 24.4604 13.5067 24.2772C13.4323 24.0939 13.3953 23.8977 13.398 23.7C13.4017 23.3055 13.5617 22.9286 13.8429 22.6519C14.1241 22.3752 14.5035 22.2213 14.898 22.224H41.125C41.945 22.224 42.625 22.904 42.625 23.7C42.625 24.544 41.945 25.2 41.125 25.2H14.898ZM14.898 33.614C14.055 33.614 13.398 32.934 13.398 32.114C13.398 31.247 14.055 30.614 14.898 30.614H31.961C32.758 30.614 33.438 31.247 33.438 32.114C33.438 32.934 32.758 33.614 31.961 33.614H14.898Z' fill='black'/%3E%3C/svg%3E%0A" alt="카페 발행량"/>
                </li>
              </ul>
            )
          })}
        </div>
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