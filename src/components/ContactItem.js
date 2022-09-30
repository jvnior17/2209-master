import React from "react";
import styled from "styled-components";
const ContactItem = ({ icon, title, contact1 }) => {
  return (
    <ContactItemStyled>
      <div className="left-content">{icon}</div>
      <div className="right-content">
        <span>
          {title}
          {contact1}
        </span>
      </div>
    </ContactItemStyled>
  );
};
const ContactItemStyled = styled.div`
  padding: 1rem;
  outline: solid var(--primary-color) 1px;
  background-color: var(--background-dark-grey);
  display: flex;
  height: max-content;
  width: 450px;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
  .right-content {
    text-align: center;
    width: 100%;

    span {
      transition: all 0.4s ease-in-out;
      font-size: 1rem;
      padding: 0.1rem 0;

      &:hover {
        color: var(--color-white);
      }
    }
  }
  .left-content {
    padding: 1.5rem;
    border: 1px solid var(--border-color);
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
    svg {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 380px) {
    display: grid;
    .right-content {
      height: 55%;
    }
    span {
      font-size: 5%;
    }
  }
`;

export default ContactItem;
