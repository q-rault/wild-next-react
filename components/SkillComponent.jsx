import styles from "../styles/SkillStyles.module.css";
import InlineButton from "./InlineButtonComponent";

const Skill = ({ skill, handleMinus, handlePlus }) => {
  const { title, votes } = skill;
  // const [count, setCount] = useState(0);
  return (
    <li className={styles.li}>
      <InlineButton handleClick={handleMinus}>-</InlineButton>
      {title}
      <InlineButton handleClick={handlePlus}>+</InlineButton>
      <span className={styles.votes}>{votes}</span>
    </li>
  );
};

export default Skill;
