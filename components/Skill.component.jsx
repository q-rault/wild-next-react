const Skill = ({ skill }) => {
  const { title, votes } = skill;
  // const [count, setCount] = useState(0);
  return (
    <li>
      {title}
      <span className="votes">{votes}</span>
    </li>
  );
};

export default Skill;
