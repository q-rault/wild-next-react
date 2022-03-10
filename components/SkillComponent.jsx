const Skill = ({ skill, styles }) => {
  const { title, votes } = skill;
  // const [count, setCount] = useState(0);
  return (
    <li>
      {title}
      <span className={styles.votes}>{votes}</span>
    </li>
  );
};

export default Skill;
