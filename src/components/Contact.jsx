import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <footer>
        <h1>Contact Me</h1>
      <div className="footerLinks">
        <a
          href="https://github.com/rathorenikita123"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="footerIcon"/>
        </a>
        <a
          href="https://www.linkedin.com/in/nikita-rathore-375610206/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="footerIcon"/>
        </a>
        <a
          href="mailto:nikitarathore271201@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <GrMail className="footerIcon"/>
        </a>

        <a
          href="https://leetcode.com/9752rathorenikita/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLeetcode className="footerIcon"/>
        </a>
      </div>
    </footer>
  );
};

export default Contact;
