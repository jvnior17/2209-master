import React from "react";
import styled from "styled-components";
import GithubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@mui/icons-material/Web";

const Project = ({ project }) => {
  return (
    <ProjectComponentStyled>
      <div className="card">
        <div className="card-image">
          <img src={project.image} alt={project.name} />
          <div className="header-title">{project.name}</div>
        </div>
        <div className="card-overlay">
          <div className="card-header">
            <svg className="card-arc" xmlns="http://www.w3.org/2000/svg">
              {/* <path d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" id="path" /> */}
            </svg>
            <ul>
              <li>
                <img className="card-thumb" src={project.image} alt="" />
              </li>
              <li>
                <div className="links">
                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      rel="noopener noreferrer"
                      target="_blank"
                      id="Web"
                      className="icon i-web"
                    >
                      <WebIcon />
                    </a>
                  ) : null}

                  <a
                    href={project.repoLink}
                    rel="noopener noreferrer"
                    target="_blank"
                    id="Github"
                    className="icon i-github"
                  >
                    <GithubIcon />
                  </a>
                </div>
              </li>
            </ul>
          </div>
          {/* <p className="card-description">{project.description}</p> */}
        </div>
      </div>
    </ProjectComponentStyled>
  );
};

const ProjectComponentStyled = styled.div`
  * {
    box-sizing: border-box;
  }

  .links {
    display: flex;
    display: inline-block;
    .icon {
      padding: 0.25rem 0.25rem;
      transition: all 0.4s ease-in-out;
      &:hover {
        color: var(--primary-color);
      }
    }.
  }

  .card {
    position: relative;
    display: block;
    height: 100%;
    border-radius: calc(var(--curve) * 1px);
    overflow: hidden;
    text-decoration: none;
  }
  .card-image {
    align-text: center;
    border-radius: var(--spacing-l);
    filter: brightness(1) saturate(1.2) contrast(0.85);
    transform-origin: center;
    transform: scale(1) translateZ(0), translateX(-50%);
    transition: filter 200ms linear, transform 200ms linear;
    .header-title {
      font-weight: 700;
      background: rgb(2,0,36);
      background: linear-gradient(38deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 42%, rgba(0,212,255,1) 100%);
      color:white;
      border-radius: calc(var(--curve) * 1px);
      height:1.5rem;
      width:15rem;
      transition: 0.2s ease-out;
      position: absolute;
      text-transform: uppercase;
      top: 0.005rem;
      right: 0rem;
      text-align: center;
      font-family: "Montserrat", sans-serif;
      font-size: clamp(1rem, 3vw + 1rem, 1rem);
      text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
      line-height: 1.4;
      font-family: "Montserrat", sans-serif;
    }
    img{
      max-height: 300px;
      left: 50%;
      top: 50%;
      height: 100%;
      width: auto;
      background-size: cover;
      background-position: fill;
    }
  }

  .card-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.35);
    border-radius: calc(var(--curve) * 1px) 0 0 0;
    text-align: center;
    transform: translateY(100%);
    transition: 0.5s ease-in-out;
  }

  .card:hover {
    transition: all 0.2s ease-in-out;
  }
  .card:hover .card-overlay {
    transform: translateY(0);
  }
  .card-arc {
    width: 80px;
    height: 80px;
    position: absolute;
    bottom: 100%;
    right: 0;
    z-index: 1;
  }

  .card-arc path {
    fill: rgba(0, 0, 0, 0.35);
    /* width: path("M 40 80 c 22 0 40 -22 40 -40 v 40 Z"); */
  }
  .card:hover {
    .card-header {
      transform: translateY(0);
    }
    .header-title {
      color:white;
      /* transition: all 0.2s ease-in-out; */
      /* opacity: 0; */
    /* text-shadow: 1px 1px 2px var(--border-color); */
    }
    .card-image {
      transform: scale(1.05) translateZ(0);
    }
  }

  .card-thumb {
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .card-title {
    font-size: 1em;
    margin: 0 0 0.3em;
    color: var(--primary-color);
  }

  .card-year {
    font-size: 0.8em;
    color: var(--border-color);
  }

  .card-description {
    padding: 0 1em 2em;
    margin: 0;
    color: var(--white-color);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
`;
export default Project;
