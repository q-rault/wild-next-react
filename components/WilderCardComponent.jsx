import Image from "next/image";
import blank_profile from "../public/blank_profile_picture.png";

import Skill from "./SkillComponent";
import styles from "../styles/WilderCardStyles.module.css";
import InlineButton from "./InlineButtonComponent";
import apiRequests from "../config/apiRequests.config";
import axios from "axios";
import { updateWilderFromSkills } from "../utils/wilder.utils";
import { useState } from "react";
import SkillForm from "./SkillForm";
import { deleteWilder } from "../api/wilderAPI";

const WilderCard = ({ wilder, handleTrigger }) => {
  const { name, city, skills } = wilder;
  const [newSkill, setNewSkill] = useState([]);

  const newSkillChange = (event) => {
    setNewSkill({ title: event.target.value, votes: 0 });
  };

  const handleRemove = async (e) => {
    try {
      await deleteWilder(wilder._id);
      handleTrigger();
    } catch (err) {
      console.log(err);
    }
  };

  const handleWilderUpdate = async (skillToUpdate, increment) => {
    try {
      const newWilder = updateWilderFromSkills(
        wilder,
        skillToUpdate,
        increment
      );
      await updateWilder(wilder._id, newWilder);
      handleTrigger();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <article className={styles.card}>
      <Image src={blank_profile} alt={`${name}Profile`} />
      <h3>
        {name} @ {city}{" "}
        <InlineButton handleClick={handleRemove}>&#10005;</InlineButton>
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
          <Skill
            key={skill.title}
            skill={skill}
            handleMinus={(e) => handleWilderUpdate(skill, -1)}
            handlePlus={(e) => handleWilderUpdate(skill, +1)}
          />
        ))}
        <SkillForm
          newSkillChange={newSkillChange}
          handleValidation={(e) => handleWilderUpdate(newSkill, +1)}
        />
      </ul>
    </article>
  );
};

export default WilderCard;
