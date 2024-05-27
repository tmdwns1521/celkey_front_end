import styles from "../../../styles/competition.module.scss";

interface ICompetition {
  label: string;
  value: number;
  textColor: string;
}
export default function CompetitionBar({label, value, textColor}: ICompetition) {
  const strength = value <= 40 ? '약 ' : value <= 70 ? '보통 ' : '강 ';

  return (
    <div className={styles.competition_bar_wrap}>
      <span>{label}</span>
      <div className={styles.bar_wrap}>
        <div style={{width: `${value}%`}} className={styles.total_bar}></div>
        <div className={`${styles.percentage_num} ${textColor}`}>
          {strength}({value}%)
        </div>
      </div>
      <div className={styles.percentage}>
        <span>0</span>
        <span>100</span>
      </div>
    </div>
  )
}