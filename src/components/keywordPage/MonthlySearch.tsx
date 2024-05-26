import styles from "../../../styles/keyword.module.scss";
import SearchItem from "./SearchItem.tsx";

interface ISearch {
  keyword: string;
  search_pc: number;
  search_mobile: number;
  search_total: number;
}

interface Props {
  KEYWORD_MONTHLY: ISearch[];
}

export default function MonthlySearch({KEYWORD_MONTHLY}: Props) {
  const pcIcon = 'data:image/svg+xml,%3Csvg width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M4.25 3C3.65326 3 3.08097 3.23705 2.65901 3.65901C2.23705 4.08097 2 4.65326 2 5.25V15.75C2 16.3467 2.23705 16.919 2.65901 17.341C3.08097 17.7629 3.65326 18 4.25 18H9.5V19.25C9.5 19.94 8.94 20.5 8.25 20.5H7.75C7.55109 20.5 7.36032 20.579 7.21967 20.7197C7.07902 20.8603 7 21.0511 7 21.25C7 21.4489 7.07902 21.6397 7.21967 21.7803C7.36032 21.921 7.55109 22 7.75 22H16.25C16.4489 22 16.6397 21.921 16.7803 21.7803C16.921 21.6397 17 21.4489 17 21.25C17 21.0511 16.921 20.8603 16.7803 20.7197C16.6397 20.579 16.4489 20.5 16.25 20.5H15.75C15.06 20.5 14.5 19.94 14.5 19.25V18H19.75C20.3467 18 20.919 17.7629 21.341 17.341C21.7629 16.919 22 16.3467 22 15.75V5.25C22 4.65326 21.7629 4.08097 21.341 3.65901C20.919 3.23705 20.3467 3 19.75 3H4.25ZM13 18V19.25C13 19.7 13.108 20.125 13.3 20.5H10.7C10.892 20.125 11 19.7 11 19.25V18H13ZM3.5 14.5H20.5V15.75C20.5 15.9489 20.421 16.1397 20.2803 16.2803C20.1397 16.421 19.9489 16.5 19.75 16.5H4.25C4.05109 16.5 3.86032 16.421 3.71967 16.2803C3.57902 16.1397 3.5 15.9489 3.5 15.75V14.5Z\' fill=\'black\'/%3E%3C/svg%3E%0A';
  const mobileIcon = 'data:image/svg+xml,%3Csvg width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M7.616 22C7.15533 22 6.771 21.846 6.463 21.538C6.155 21.23 6.00067 20.8457 6 20.385V3.615C6 3.155 6.15433 2.771 6.463 2.463C6.77167 2.155 7.156 2.00067 7.616 2H16.385C16.845 2 17.229 2.15433 17.537 2.463C17.845 2.77167 17.9993 3.156 18 3.616V20.385C18 20.845 17.846 21.2293 17.538 21.538C17.23 21.8467 16.8453 22.0007 16.384 22H7.616ZM12 20.038C12.2067 20.038 12.3867 19.9613 12.54 19.808C12.6933 19.6547 12.77 19.475 12.77 19.269C12.77 19.063 12.6933 18.883 12.54 18.729C12.3867 18.575 12.2067 18.4987 12 18.5C11.7933 18.5013 11.6133 18.578 11.46 18.73C11.3067 18.882 11.23 19.062 11.23 19.27C11.23 19.478 11.3067 19.6577 11.46 19.809C11.6133 19.9603 11.7933 20.036 12 20.038ZM7 16.539H17V5.5H7V16.539Z\' fill=\'black\'/%3E%3C/svg%3E%0A'

  return (
    <div className={styles.amount_wrap}>
      <h2 className="sub_title">월간 검색량</h2>
        {KEYWORD_MONTHLY.map((item) => {
          return (
            <ul key={item.keyword} className={styles.monthly_search_list}>
              <SearchItem label="TOTAL" value={item.search_total} icon="" />
              <SearchItem label="PC" value={item.search_pc} icon={pcIcon} />
              <SearchItem label="MOBILE" value={item.search_mobile} icon={mobileIcon} />
            </ul>
          )
        })}
    </div>
  )
}