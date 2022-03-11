import styles from "../styles/SkillStyles.module.css";
import InlineButton from "./InlineButtonComponent";
import { useForm } from "react-hook-form";
const SkillForm = ({ newSkillChange, handleValidation }) => {
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleValidation();
    }
  };
  return (
    <li className={styles.li} onKeyUp={handleKeyUp}>
      <input
        className=""
        type="search"
        placeholder="new Skill"
        onChange={newSkillChange}
      />
    </li>
  );
};

export default SkillForm;
