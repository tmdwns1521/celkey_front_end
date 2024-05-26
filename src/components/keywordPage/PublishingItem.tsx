import styles from "../../../styles/keyword.module.scss";

interface IPublishing {
  label: string;
  value: number;
  icon: string;
}

export default function PublishingItem({label, value, icon}: IPublishing) {
  return (
    <li className={label === 'TOTAL' ? styles.total : ''}>
      <span>{label !== 'TOTAL' && label}</span>
      <p>{value.toLocaleString()}</p>
      {label !== 'TOTAL' && <img src={icon} alt={`${label} 발행량`} />}
      {label === 'TOTAL' && <div>{label}</div>}
    </li>
  )
}