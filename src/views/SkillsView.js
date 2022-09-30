import React from "react";
import Skill from "../components/Skill";
import styled from "styled-components";
import { MainLayout } from "../styles/Layouts";
import { Title } from "../components/Title";
// import avatar from "../images/avatar.jpg";
import skillsData from "../data/skills";

export const SkillsView = () => {
  return (
    <SkillsViewStyled>
      <MainLayout>
        <Title title={"Skills"} span={"Skills"} />
        <div className="skills-grid">
          {skillsData.map((skill) => (
            <div className="skill">
              <Skill title={skill.name} image={skill.image} />
            </div>
          ))}
        </div>
      </MainLayout>
    </SkillsViewStyled>
  );
};

const SkillsViewStyled = styled.div`
  width: 100%;
  height: max-content;
  border: 0;
  margin: 0;
  padding: 0;
  cursor: default;

  @media (min-width: 540px) {
    .skills-grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (min-width: 960px) {
    .skills-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    gap: 2rem;
    margin: 4rem 5vw;
    padding: 0;
    list-style-type: none;
  }
  .skill {
    transition: 0.4s;
    transform: scale(1.05) translateZ(0);
    padding: 1rem;
  }

  .skills-grid:hover > .skill:not(:hover) {
    opacity: 0.4;
    filter: brightness(0.5) saturate(0) contrast(1.2) blur(5px);
  }
`;
