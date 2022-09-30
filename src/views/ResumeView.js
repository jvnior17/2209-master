import React from "react";
import styled from "styled-components";
import SmallTitle from "../components/SmallTitle";
import { Title } from "../components/Title";
import { InnerLayout, MainLayout } from "../styles/Layouts";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@mui/icons-material/School";
import ResumeItem from "../components/ResumeItem";
import Button from '@mui/material/Button';

export const ResumeView = () => {
  const work = <WorkIcon />;
  const school = <SchoolIcon />;
  return (
    <MainLayout>
      <ResumeViewStyled>
        <Title title={"Resume"} span={"Resume"} />
        <InnerLayout>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://drive.google.com/file/d/12E8Gr7sM_h5CyQqqsrQ-VA5_IfcV_KYE/view?usp=sharing"
        >                
        <Button>CLICK HERE FOR FULL RESUME</Button>
        </a>
          <div className="smalltitle">
            <SmallTitle icon={work} title={"Experience"} />
          </div>
          <div className="resume-content">
          <ResumeItem
            title={"Email Developer"}
            subtitle={"FutureStar Sports Agency"}
            description={
            "Coding, producing, proofing, testing and troubleshooting html email campaigns. Constructing Templates, Creating responsive emails aligning with perception of the company's brand. Creation of promotion and transactional email templates."
            }
            year={"May 2020 - Jan 2021"}
            />
            <ResumeItem
              title={"Sales Administrator"}
              subtitle={"Sekur Merchant Solutions"}
              description={
              "Services existing accounts, obtains orders, and establishes new accounts by planning and organizing schedules to call on existing or potential sales outlets and other trade factors. Monitors competition by gathering current marketplace information on pricing, products, new products, delivery schedules, and merchandising techniques."
              }
              year={"Feb 2019 - Nov 2019"}
            />
          </div>
          <div className="smalltitle">
            <SmallTitle
              className="smalltitle"
              icon={school}
              title={"Education"}
            />
          </div>
          <div className="education-content">
            <ResumeItem
              title={"Bachelor of Business Administration(BBA)"}
              subtitle={"Georgia Southern University"}
              description={
                "Over the course of my degree I learned  in depth all the different variations of business. Enrolled in many  finance courses where I learned to stream operations through financial planning, investing, problem-solving and budgeting. While learning these major finance tools, I was simultaneously diving into the world of development. Learning many different languages and skills over the course of my degree and hope to learn much more in the near future!"
              }
              year={"Sept 2017 - Apr 2020"}
            />
          </div>
          <div className="education-content">
            <ResumeItem
              title={"Business Commerce (Marketing)"}
              subtitle={"Carleton University"}
              description={
                "I was also given the opportunity to explore the many facets of marketing, some of which are consumer interaction, marketing analytics, brand management, marketing for social change, advertisement and social media strategy. While learning these facets of marketing I was simultaneously diving into the world of development. Learning many different languages and skills over the course of my degree and hope to learn much more in the near future! "
              }
              year={"Sept 2021 - Dec 2022"}
            />
          </div>
        </InnerLayout>
      </ResumeViewStyled>
    </MainLayout>
  );
};

const ResumeViewStyled = styled.header`
  height: max-content;
  width: 100%;
  .smalltitle {
    padding: 2rem 0;
  }
  .resume-content,
  .education-content {
    border-left: 2px solid var(--border-color);
  }
`;
