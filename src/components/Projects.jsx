import React from "react";
import ProjectCard from "./ProjectCard";
import ChatAppImage from "../images/ChatAppImage.png";
import NotekeeperImage from "../images/NotekeeperImage.png";
import FakeShopImage from "../images/FakeShopImage.png";
import FaceRegocnitionImage from "../images/FaceRegocnitionImage.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectCard projectPhoto={ChatAppImage} projectName="Converse" />
        <ProjectCard projectPhoto={NotekeeperImage} projectName="Notekeeper" />
        <ProjectCard projectPhoto={FakeShopImage} projectName="FakeShop" />
        <ProjectCard
          projectPhoto={FaceRegocnitionImage}
          projectName="FaceRecognition"
        />
      </div>
    </div>
  );
};

export default Projects;
