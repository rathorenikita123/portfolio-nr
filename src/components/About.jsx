import React from "react";
import Skills from "./Skills";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/laptop.json";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <p>
            Greetings! I'm <b>Nikita Rathore</b>, a final year student at{" "}
            <b>IIITM Gwalior</b>. My passion lies in <b>coding and crafting</b>{" "}
            awe-inspiring <b>web applications</b>. With a strong command over
            both <b>frontend</b> and <b>backend</b> development, I've honed my
            skills through hands-on experiences gained during <b>internships</b>{" "}
            and <b>personal projects</b>. My journey in the world of technology
            has been marked by continuous learning and growth. I thrive on
            staying up-to-date with the latest trends and advancements in the
            field, which fuels my drive to create innovative and impactful
            solutions. Beyond the realms of coding, I find joy in the art of{" "}
            <b>bullet journaling</b>, where I merge my creativity and
            organization skills to curate visually pleasing and functional
            spreads.
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="React" />
        <Skills skill="Next" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Postgre" />
        <Skills skill="MySQL" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Javascript" />
        <Skills skill="TypeScript" />
        <Skills skill="C++" />
        <Skills skill="Python" />
        <Skills skill="Figma" />
        <Skills skill="Vercel" />
        <Skills skill="Tailwind" />
        <Skills skill="Bootstrap" />
        <Skills skill="Firebase" />
        <Skills skill="Docker" />
        <Skills skill="Linux" />
        <Skills skill="Chakra" />
        <Skills skill="Socket" />
        <Skills skill="Netlify" />
      </div>
    </>
  );
};

export default About;
