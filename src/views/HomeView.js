import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import { Landing } from "./LandingView";
import { ProjectsView } from "./ProjectsView";
import { SkillsView } from "./SkillsView";
import { ResumeView } from "./ResumeView";
import { AboutView } from "./AboutView";
import { ContactView } from "./ContactView";

export const HomeView = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="HomeView">
      <Navbar />
      <div data-aos="fade" data-aos-once="false">
        <section id="landing">
          <Landing />
        </section>
      </div>
      <div data-aos="fade" data-aos-once="false">
        <section id="projects">
          <ProjectsView />
        </section>
      </div>
      <div data-aos="fade" data-aos-once="false">
        <section id="skills">
          <SkillsView />
        </section>
      </div>
      <div data-aos="fade" data-aos-once="false">
        <section id="resume">
          <ResumeView />
        </section>
      </div>
      <div data-aos="fade" data-aos-once="false">
        <section id="about">
          <AboutView />
        </section>
      </div>
      <div data-aos="fade" data-aos-once="false">
        <section id="contact">
          <ContactView />
        </section>
      </div>
    </div>
  );
};
