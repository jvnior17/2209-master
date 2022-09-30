import React from "react";
import styled from "styled-components";

export const Title = ({ title, span }) => {
  return (
    <TitleStyled>
      <h1>
        {title}
        <span>{span}</span>
      </h1>
    </TitleStyled>
  );
};

const TitleStyled = styled.div`
  position: relative;

  h1 {
    color: var(--white-color);
    font-size: clamp(1.8rem, 3vw + 1.8rem, 2.8rem);
    font-weight: 600;
    text-transform: uppercase;
    &::before {
      bottom: 0;
      content: "";
      position: absolute;
      width: 12rem;
      height: 0.33rem;
      border-radius: 15px;
      background-color: var(--background-light-color-2);
      left: 0;
    }
    &::after {
      bottom: 0;
      content: "";
      position: absolute;
      width: 5rem;
      height: 0.33rem;
      border-radius: 15px;
      background-color: var(--primary-color);
      left: 0;
    }
    span {
      animation: float 2.5s infinite normal ease-in-out;
      font-weight: 800;
      color: rgba(25, 29, 43, 0.44);
      font-size: clamp(2.8rem, 3vw + 4.8rem, 4.8rem);
      position: absolute;
      left: 0;
      top: 10%;
      z-index: -1;
    }
  }
  @keyframes float {
    0% {
      top: -10px;
    }
    50% {
      top: 5px;
    }
    100% {
      top: -10px;
    }
  }
`;
