import React from "react";
import styled from "styled-components";

const ResumeItem = ({ year, title, subtitle, description }) => {
  return (
    <ResumeItemStyled>
      <div className="left-content">
        <p>{year}</p>
      </div>
      <div className="right-content">
        <h5>{title}</h5>
        <h6>{subtitle}</h6>
        <p>{description}</p>
      </div>
    </ResumeItemStyled>
  );
};
const ResumeItemStyled = styled.div`
  display: flex;
  p,
  h5,
  h6 {
    font-size: clamp(0.8rem, 2vw + 0.8rem, 1rem);
  }

  &:not(:last-child) {
    padding-bottom: 3rem;
  }

  .left-content {
    max-width: 16ch;
    min-width: 8ch;

    padding-left: 20px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: -10px;
      top: 5px;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 2px solid var(--border-color);
      background-color: var(--background-dark-color);
    }
    p {
      display: inline-block;
    }
  }
  .right-content {
    margin-left: 5rem;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: -80px;
      top: 15px;
      height: 2px;
      width: 2rem;
      background-color: var(--border-color);
    }
    h5 {
      color: var(--primary-color);
    }
    h6 {
      padding-bottom: 0.4rem;
      color: var(--white-color);
    }
    p {
      padding-bottom: 0.4rem;
      text-align: justify;
      line-height: 1.4;
    }
  }

  @media (max-width: 540px) {
    display: grid;
    p {
      font-size: clamp(0.8rem, 1vw + 0.3rem, 0.4rem);
    }
  }
`;
export default ResumeItem;
