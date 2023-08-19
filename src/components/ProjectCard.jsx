import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    ConverseDesc:
      "A Converse website that allows you to chat with your friends. It is a full-stack website made using React.js, Node.js, Express.js, and MongoDB.",
    ConverseGithub: "https://github.com/rathorenikita123/converse",
    ConverseWebsite: "https://converse-onw4.onrender.com/",

    NotekeeperDesc:
      "A NoteKeeper website that keeps track of your notes. It is a full-stack website made using React.js, Node.js, Express.js, and MongoDB.",
    NotekeeperGithub: "https://github.com/rathorenikita123/notekeeper-frontend",
    NotekeeperWebsite: "",

    FakeShopDesc: "A E-commerce website for buying products.",
    FakeShopGithub: "https://github.com/rathorenikita123/FakeShop",
    FakeShopWebsite: "https://fake-shop-rathorenikita123.vercel.app/",

    FaceRecognitionDesc:
      "A FaceRecognition website that detects faces in the image. It uses Clarifai API to detect faces. It is a full-stack website made using React.js, Node.js, Express.js, and PostgreSQL.",
    FaceRecognitionGithub:
      "https://github.com/rathorenikita123/facerecognition",
    FaceRecognitionWebsite:
      "https://facerecognition-rathorenikita123.vercel.app/",
  };

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a
          style={{ display: show }}
          href={desc[projectName + "Github"]}
          target="_blank" rel="noreferrer"
        >
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank" rel="noreferrer">
          <button className="projectbtn">
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
