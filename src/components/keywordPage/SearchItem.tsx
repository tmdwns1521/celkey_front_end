import styles from "../../../styles/keyword.module.scss";

interface ISearch {
  label: string,
  value: number,
  icon: string,
}
export default function SearchItem({label, value, icon}: ISearch) {
  return (
    <li className={label === 'TOTAL' ? styles.total : ''}>
      <span>{label !== 'TOTAL' && label}</span>
      <p>{value.toLocaleString()}</p>
      {label !== 'TOTAL' && <img src={icon} alt={`${label} 검색량`}/>}
      {label === 'TOTAL' && <div>{label}</div>}
    </li>
  )
}