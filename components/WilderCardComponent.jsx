import Image from "next/image";
import blank_profile from "../public/blank_profile_picture.png";

import Skill from "./SkillComponent";
import styles from "../styles/WilderCardStyles.module.css";
import InlineButton from "./InlineButtonComponent";
import apiRequests from "../config/apiRequests.config";
import axios from "axios";
import { updateSkills, updateWilder } from "../utils/wilder.utils";

const WilderCard = ({ wilder, handleTrigger }) => {
  const { name, city, skills } = wilder;
  const handleRemove = async (e) => {
    try {
      const data = await axios.delete(
        `${apiRequests.wilderDeleteString}${wilder._id}`
      );
      handleTrigger();
    } catch (err) {
      console.log(err);
    }
  };

  const handleWilderUpdate = async (newWilder) => {
    try {
      const data = await axios.put(
        `${apiRequests.wilderUpdateString}${wilder._id}`,
        newWilder
      );
      handleTrigger();
    } catch (err) {
      console.log(err);
    }
  };

  const handleMinus = async (e, skillToUpdate) => {
    try {
      const newSkills = updateSkills(skills, skillToUpdate, -1);
      const newWilder = updateWilder(wilder, newSkills);
      await handleWilderUpdate(newWilder);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePlus = async (e, skillToUpdate) => {
    try {
      const newSkills = updateSkills(skills, skillToUpdate, +1);
      const newWilder = updateWilder(wilder, newSkills);
      await handleWilderUpdate(newWilder);
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
            handleMinus={(e) => handleMinus(e, skill)}
            handlePlus={(e) => handlePlus(e, skill)}
          />
        ))}
      </ul>
    </article>
  );
};

export default WilderCard;
