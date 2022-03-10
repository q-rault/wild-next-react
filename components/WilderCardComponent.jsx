import Image from "next/image";
import blank_profile from "../public/blank_profile_picture.png";

import { useState } from "react";
import Skill from "./SkillComponent";
import styles from "../styles/WilderCardStyles.module.css";

const WilderCard = ({ wilder }) => {
  // const [count, setCount] = useState(0);
  const { name, city, skills } = wilder;
  return (
    <article className={styles.card}>
      <Image src={blank_profile} alt={`${name}Profile`} />
      <h3>
        {name} @ {city}
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className={styles.skills}>
        {skills.map((skill) => (
          <Skill key={skill.title} skill={skill} styles={styles} />
        ))}
      </ul>
    </article>
  );
};

export default WilderCard;
