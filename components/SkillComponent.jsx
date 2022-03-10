import styles from "../styles/SkillStyles.module.css";
const Skill = ({ skill }) => {
  const { title, votes } = skill;
  // const [count, setCount] = useState(0);
  return (
    <li className={styles.li}>
      {title}
      <span className={styles.votes}>{votes}</span>
    </li>
  );
};

export default Skill;
