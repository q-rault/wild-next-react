export const updateSkills = (skills, skillToUpdate, increment) => {
  const existingSkill = skills.find(
    (skill) => skill.title === skillToUpdate.title
  );

  if (!existingSkill) {
    return [...skills, { ...skillToUpdate, votes: increment }];
  }

  if (existingSkill.votes + increment < 1) {
    console.log("votes+increment<1");
    return skills.filter((skill) => skill.id !== existingSkill.id);
  }

  return skills.map((skill) => {
    console.log(skill);
    return skill.id === skillToUpdate.id
      ? { ...skill, votes: skill.votes + increment }
      : skill;
  });
};

export const updateWilder = (wilder, newSkills) => {
  return { ...wilder, skills: newSkills };
};
