import React from "react";
import styled from "styled-components";

const Skill = ({ title, image }) => {
  return (
    <SkillStyled>
      <div className="image-content">
        <img src={image} alt={title} />
      </div>
      <div className="title-content">
        <span>{title}</span>
      </div>
    </SkillStyled>
  );
};
const SkillStyled = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  display: grid;
  margin-left: auto;
  margin-right: auto;

  span {
    font-size: clamp(0.5rem, 1vw + 1rem, 1rem);
    font-weight: 700;
  }
  .image-content,
  .title-content {
    width: 100%;
    justify-content: center;
  }
`;

export default Skill;
