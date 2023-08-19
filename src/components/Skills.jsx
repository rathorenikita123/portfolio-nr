import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaLinux,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import {
  SiExpress,
  SiMongodb,
  SiVercel,
  SiHeroku,
  SiFirebase,
  SiPostgresql,
  SiMysql,
  SiTypescript,
  SiTailwindcss,
  SiDocker,
  SiNextdotjs,
  SiChakraui,
  SiSocketdotio
} from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";

const Skills = ({ skill }) => {
  const icon = {
    "C++": <CgCPlusPlus />,
    Python: <FaPython />,
    React: <FaReact />,
    Javascript: <DiJavascript1 />,
    Node: <DiNodejs />,
    Express: <SiExpress />,
    MongoDb: <SiMongodb />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Figma: <FaFigma />,
    Bootstrap: <FaBootstrap />,
    Vercel: <SiVercel />,
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    Linux: <FaLinux />,
    Heroku: <SiHeroku />,
    Firebase: <SiFirebase />,
    Postgre: <SiPostgresql />,
    MySQL: <SiMysql />,
    TypeScript: <SiTypescript />,
    Tailwind: <SiTailwindcss />,
    Docker: <SiDocker />,
    Next: <SiNextdotjs />,
    Chakra: <SiChakraui />,
    Socket: <SiSocketdotio/>,
    Netlify: <BiLogoNetlify/>
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
