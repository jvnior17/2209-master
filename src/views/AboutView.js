import React from "react";
import styled from "styled-components";
import { InnerLayout, MainLayout } from "../styles/Layouts";
import { Title } from "../components/Title";
import image from "../images/avatar.jpg";

export const AboutView = () => {
  return (
    <MainLayout>
      <Title title={"About Me"} span={"About Me"} />
      <InnerLayout>
        <AboutStyled>
          <div className="left-content">
            <img src={image} alt="about" />
          </div>
          <div className="right-content">
            <p className="paragraph">
              <strong>H</strong>i my names Paul Amponsah, I'm an active sports 
              loving full Stack developer. I’m a marketing major but I'm an extremely 
              passionate and dedicated to full stack development. I'm looking to 
              display my skills and develop more knowledge along the way.
              <br />
              <br />
              <strong>W</strong>eb development has allowed me to tap into
              multiple sub-industries within the tech realm and allowed me to
              grow and gain a better understanding of what goes on within a program.
              <br />
              <br />
              <strong>O</strong>ver the course of my degree, I have learned
              languages such as Python, JavaScript, Java, SQL,
              Node.js, React, JSON, CSS, SASS, MongoDB, 
              PostgreSQL,and Git. Learned these skills both on my own and
              through multiple coding camps/certificates.
              <br />
              <br />
              <strong>P</strong>rogramming is a skill I am extremely passionate about,
              specifically due to my enjoyment of problem-solving. I'm always
              looking to sharpen my skills and gain more useful skills!
            </p>
            <div>
              <div className="about-info">
                <div className="info-title">
                  <p>Full Name </p>
                  <p>Languages </p>
                </div>
                <div className="info">
                  <p> : Paul Amponsah</p>
                  <p> : English / French</p>
                </div>
              </div>
            </div>
          </div>
        </AboutStyled>
      </InnerLayout>
    </MainLayout>
  );
};

const AboutStyled = styled.section`
  display: flex;
  height: max-content;
  strong {
    color: var(--primary-color);
  }

  .right-content {
    padding: 0 2rem;
    .about-info {
      padding-bottom: 0.4rem;
      display: flex;
      font-size: 0.8rem;
    }
    .paragraph {
      font-size: clamp(0.8rem, 2vw + 0.8rem, 1rem);
      padding: 1rem 0;
      color: var(--white-color);
      text-align: justify;
      line-height: 1.4;
    }
  }
  .left-content {
    width: max-content;
    padding: 1rem 0;
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 100vw;
      height: 80vh;
      object-fit: cover;
      max-width: 300px;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    .left-content {
      width: 100%;
      img {
        max-width: 100px;
        margin-left: auto;
        margin-right: auto;
      }
    }
    .right-content {
      .paragraph,
      p {
        font-size: 75%;
      }
    }
  }
`;
