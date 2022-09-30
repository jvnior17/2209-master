import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import { Title } from "../components/Title";
import ContactItem from "../components/ContactItem";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
// import PrimaryButton from "../components/PrimaryButton";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";


export const ContactView = () => {
 
  const locationIcon = <LocationOnIcon />;
  const phoneIcon = <a 
  href="tel:+1-289-939-8879"
  rel="noopener noreferrer"
  target="_blank"><PhoneIcon /></a>;

  const emailIcon = 
  <a 
  href="mailto:paulj.amponsah@gmail.com"
  rel="noopener noreferrer"
  target="_blank"><EmailIcon/></a>;
  

  return (
    <MainLayout>
      <Title title="Contact" span="Contact" />
      <ContactViewStyled>
        <InnerLayout className="contact-section">
          <div className="right-content">
            <div className="contact-item">
              <ContactItem
                // title={"Email: "}
                icon={emailIcon}
                contact1={"paulj.amponsah@gmail.com"}
              />
            </div>
            <div className="contact-item">
              <ContactItem
                // title={"Phone: "}
                icon={phoneIcon}
                contact1={"289-939-8879"}
              />
            </div>
            <div className="contact-item">
              <ContactItem
                // title={"Location: "}
                icon={locationIcon}
                contact1={"Ontario, Canada"}
              />
            </div>
            <div className="social-icons">
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
          </div>
        </InnerLayout>
      </ContactViewStyled>
    </MainLayout>
  );
};

const ContactViewStyled = styled.section`
  .contact-section {
    display: grid;
    margin-left: auto;
    margin-right: auto;
    width: max-content;
    /* grid-template-columns: repeat(1, 1fr); */
    grid-column-gap: 2rem;

    .right-content {
      .contact-item {
        padding: 1rem;
        
      }
      .social-icons {
        display: flex;
        width: max-content;
        .icon {
          display: inline-block;
          padding: 0.25rem 0.25rem;
          transition: all 0.4s ease-in-out;
          &:hover {
            color: var(--primary-color);
          }
        }
      }
      .contact-item,
      .social-icons {
        margin-left: auto;
        margin-right: auto;
      }
    }
    .left-content {
      width: 100% 50%;
      .contact-title {
        h4 {
          color: var(--white-color);
          padding: 1rem 0;
          font-size: 1.8rem;
          
        }
      }
      .form {
        width: 100%;
        .form-field {
          margin-top: 2rem;
          position: relative;
          width: 100%;
          label {
            position: absolute;
            left: 20px;
            top: -20px;
            display: inline-block;
            background-color: var(--background-dark-color);
            padding: 0 0.5rem;
            color: inherit;
          }
          input {
            border: 1px solid var(--border-color);
            outline: none;
            background: transparent;
            height: 50px;
            padding: 0 15px;
            width: 100%;
            color: inherit;
          }

          textarea {
            background-color: transparent;
            border: 1px solid var(--border-color);
            outline: none;
            color: inherit;
            width: 100%;
            padding: 0.8rem 1rem;
          }
        }
      }
    }
  }

  @media (max-width: 685px) {
    .contact-section {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
  }

  @media (max-width: 380px) {
    .contact-section {
      grid-template-columns: repeat(1, 1fr);
      display: grid;
    }
  }
`;
