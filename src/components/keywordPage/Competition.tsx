import styles from "../../../styles/keyword.module.scss";
import {useEffect, useState} from "react";
import CompetitionBar from "./CompetitionBar.tsx";

interface ICompetition {
  keyword: string;
  competition_blog: number;
  competition_cafe: number;
  competition_total: number;
}
interface Props {
  KEYWORD_MONTHLY: ICompetition[];
}

export default function  Competition({KEYWORD_MONTHLY}: Props) {
  // 경쟁강도 상태 초기화
  const [competitionData, setCompetitionData] = useState(
    KEYWORD_MONTHLY.map(item => ({
      ...item,
      competition_blog: 0,
      competition_cafe: 0,
      competition_total: 0,
    }))
  );
  // 경쟁강도 BAR 애니메이션
  useEffect(() => {
    const timer = setTimeout(() => {
      setCompetitionData(KEYWORD_MONTHLY);
    }, 100);

    return () => clearTimeout(timer);
  }, [KEYWORD_MONTHLY]);


  // 경쟁강도 텍스트 상태 초기화
  const [textColor, setTextColor] = useState(styles.transparent);
  // 경쟁강도 텍스트 애니메이션
  useEffect(() => {
    const timer = setTimeout(() => {
      setTextColor(styles.on);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.competition_wrap}>
      <h2 className="sub_title">키워드 경쟁 강도</h2>
      {competitionData.map((item) => {
        return (
          <div key={item.keyword}>
            <CompetitionBar label="TOTAL" value={item.competition_total} textColor={textColor} />
            <CompetitionBar label="BLOG" value={item.competition_blog} textColor={textColor} />
            <CompetitionBar label="CAFE" value={item.competition_cafe} textColor={textColor} />
          </div>
        )
      })}
    </div>
  )
}