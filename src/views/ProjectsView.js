import React, { useState } from "react";
import styled from "styled-components";
import { Title } from "../components/Title";
import { MainLayout } from "../styles/Layouts";
import projectsData from "../data/projects";
import Project from "../components/Project";
import Button from "../components/Button";


const allButtons = ["All", ...new Set(projectsData.map((item) => item.side))];

export const ProjectsView = () => {
  const [projects, setProjects] = useState(projectsData);
  const [button] = useState(allButtons);

  const filter = (button) => {
    if (button === "All") {
      setProjects(projectsData);
      return;
    }
    const filteredData = projectsData.filter((item) => item.side === button);
    setProjects(filteredData);
  };

  return (
    <ProjectsViewStyled>
      <MainLayout>
        <Title title={"Projects"} span={"Projects"} />
        <div className="buttons">
          <Button filter={filter} button={button} />
        </div>
        <div className="projects">
          {projects.map((project) => (
            <div className="project">
              <Project project={project}></Project>
            </div>
          ))}
        </div>
      </MainLayout>
    </ProjectsViewStyled>
  );
};

const ProjectsViewStyled = styled.header`
  width: 100%;
  min-height: 100vh;
  max-height: max-content;
  border: 0;
  margin: 0;
  padding: 0;
  cursor: default;
  p {
    opacity: 0.4;
  }

  @media (min-width: 540px) {
    .projects {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 960px) {
    .projects {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 4fr));
    gap: 2rem;
    margin: 4rem 5vw;
    padding: 0;
    list-style-type: none;
  }
  .project {
    transition: 0.4s;
    transform: scale(1.05) translateZ(0);
  }

  .projects:hover > .project:not(:hover) {
    opacity: 0.4;
    filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
  }
`;
