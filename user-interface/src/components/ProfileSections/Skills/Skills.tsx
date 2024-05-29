import React from "react";
import { SkillsProps, useSkills } from "./useSkills";
import "./Skills.css";
import skillsBg from "../../../assets/skills-bg.png";
import { NavItemsEnum } from "../../../utils/navItems";

const Skills: React.FC<SkillsProps> = (props) => {
  // eslint-disable-next-line no-empty-pattern
  const { data } = useSkills(props);
  // console.log("Data from Skills:", data);
  const skills = data.skills[0];

  const backgroundImageStyle = {
    backgroundImage: `url(${skills.profileImgPath2})`,
  };
  return (
    <>
      <section
        className="section skills has-before"
        id={NavItemsEnum.Skills}
        aria-label="skills"
        style={{ backgroundImage: `url('${skillsBg}')` }}
      >
        <div className="container">
          <div className="skills-content">
            <p className="section-subtitle">Skills</p>

            <h2 className="h2 section-title"> Professional Abilities</h2>

            <p className="section-text">{skills.resume}</p>

            <ul className="skills-list">
              {skills.skills.map((skill, index) => (
                <li className="skills-item" key={index}>
                  <div className="wrapper">
                    <h3 className="skill-title"> {skill.name}</h3>

                    <data
                      className="skill-value"
                      value={`${skill.percentage}%`}
                    >
                      {skill.percentage}%
                    </data>
                  </div>

                  <div className="progress-box">
                    <div
                      className="progress"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="skills-banner has-before"
            style={backgroundImageStyle}
          ></div>
        </div>
      </section>
    </>
  );
};

export default Skills;
