import React from "react";
import Particle from "../components/Particle";
import styled from "styled-components";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import avatar from "../images/avatar.jpg";
import { Link } from "react-scroll";

export const Landing = () => {
  return (
    <LandingPageStyled>
      <div className="landing-con">
        <div className="particles-con">
          <Particle value={14} type={"triangle"} value_area={800} />
        </div>
        <div className="typography">
          <h1>
            Hello World, I'm
            <br />{" "}
            <span>
              <h1 className="name">Paul Amponsah</h1>
            </span>
          </h1>
          <div className="card">
            <div className="scroller">
              <span>
                Front-End Developer
                <br />
                Email Developer
                <br /> 
                Data Clerk/Analyst 
                <br />
                Freelancer
              </span>
            </div>
          </div>
          <div className="avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <p className="subtitle">Welcome to my portfolio!</p>
          <div className="icons">
            <a
              href="https://github.com/jvnior17"
              rel="noopener noreferrer"
              target="_blank"
              id="Github"
              className="icon i-github"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/paul-amponsah-5949b016a/"
              rel="noopener noreferrer"
              target="_blank"
              id="Linkedin"
              className="icon i-linkedin"
            >
              <LinkedinIcon />
            </a>
          </div>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div className="chev-con">
              <div class="chevrons">
                <div class="chevron"></div>
                <div class="chevron"></div>
                <div class="chevron"></div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </LandingPageStyled>
  );
};

const LandingPageStyled = styled.header`
  .landing-con {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;

    .icons,
    h1,
    .chev-con,
    .scroller,
    .card,
    .avatar,
    .subtitle,
    .typography {
      margin-left: auto;
      margin-right: auto;
      width: max-content;
    }
  }
  .typography {
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    position: absolute;
    text-align: center;

    .name {
      position: relative;
      overflow: hidden;
      display: block;
      line-height: 1.2;
    }
    .name::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: var(--white-color);
      border-right: red;
      animation: a-ltr-after 2s cubic-bezier(0.77, 0, 0.18, 1) forwards;
      transform: translateX(-101%);
    }
    .name::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: var(--background-dark-color);
      animation: a-ltr-before 2s cubic-bezier(0.77, 0, 0.18, 1) forwards;
      transform: translateX(0);
    }

    .name:nth-of-type(1)::before,
    .name:nth-of-type(1)::after {
      animation-delay: 1s;
    }

    .name:nth-of-type(2)::before,
    .name:nth-of-type(2)::after {
      animation-delay: 1.5s;
    }
  }
  .icons {
    display: flex;
    .icon {
      display: inline-block;
      padding: 0.25rem 0.25rem;
      transition: all 0.4s ease-in-out;
      &:hover {
        color: var(--primary-color);
      }
    }
  }
  h1 {
    color: var(--primary-color);
    position: relative;
    .name {
      text-align: center;
      font-size: clamp(2rem, 3vw + 1rem, 4rem);
      color: white;
      align-items: center;
    }
  }

  .name::before,
  .name::after {
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
  }

  .avatar {
    border-color: var(--border-color);
    position: relative;
    padding: 1rem 0;
    transition-delay: 2s;
    animation: 3s fadeIn;
    animation: float 2.5s infinite normal ease-in-out;
    img {
      display: block;
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  }
  .particles-con {
    height: 100%;
    width: 100%;
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

  @keyframes fadeIn {
    99% {
      visibility: hidden;
    }
    100% {
      visibility: visible;
    }
  }

  @keyframes a-ltr-after {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(101%);
    }
  }

  @keyframes a-ltr-before {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(200%);
    }
  }

  .chev-con {
    display: flex;
    cursor: pointer;
  }

  .chevrons {
    position: relative;
    width: 28px;
    height: 24px;
  }

  .chevron {
    position: absolute;
    width: 28px;
    height: 8px;
    opacity: 0;
    transform: scale3d(0.5, 0.5, 0.5);
    animation: move 3s ease-out infinite;
  }

  .chevron:first-child {
    animation: move 3s ease-out 1s infinite;
  }

  .chevron:nth-child(2) {
    animation: move 3s ease-out 2s infinite;
  }

  .chevron:before,
  .chevron:after {
    content: " ";
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: #fff;
  }

  .chevron:before {
    left: 0;
    transform: skew(0deg, 30deg);
  }

  .chevron:after {
    right: 0;
    width: 50%;
    transform: skew(0deg, -30deg);
  }

  @keyframes move {
    25% {
      opacity: 1;
    }
    33% {
      opacity: 1;
      transform: translateY(30px);
    }
    67% {
      opacity: 1;
      transform: translateY(40px);
    }
    100% {
      opacity: 0;
      transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
    }
  }

  @keyframes pulse {
    to {
      opacity: 1;
    }
  }

  .card {
    position: relative;
    cursor: default;
    padding: 0.5rem 0;
  }

  .scroller {
    height: 1.2em;
    line-height: 1.2em;
    text-align: center;
    position: relative;
    overflow: hidden;
    width: 100%;
  }
  .scroller > span {
    position: relative;
    top: 0;
    animation: slide 8s infinite;
    color: var(--white-color);
    font-weight: bold;
  }
  @keyframes slide {
    0% {
      top: 0;
    }
    25% {
      top: -1.2em;
    }
    50% {
      top: -2.4em;
    }
    75% {
      top: -3.6em;
    }
  }

  @media (max-width: 385px) {
    .typography {
      h1 {
        .name {
          font-size: clamp(1.5rem, 1vw + 1rem, 2rem);
        }
      }
      .avatar {
        border-color: var(--border-color);
        position: relative;
        padding: 1rem 0;
        transition-delay: 2s;
        animation: 3s fadeIn;
        animation: float 2.5s infinite normal ease-in-out;
        img {
          display: block;
          width: 10rem;
          height: 10rem;
          border-radius: 50%;
          border: 8px solid var(--border-color);
        }
      .subtitle {
      }
      .scroller {
        span {
          font-weight: 100;
        }
      }
    }
  }
`;
