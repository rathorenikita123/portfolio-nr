import React from "react";
import Typed from "./Typed";
import PI from "../images/PI.png";


const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi!</h1>
          <h1>
            I'm <b>NIKITA RATHORE</b>
          </h1>
          <Typed />
        </div>
        <div className="image-cropper">
        <img src={PI} alt="ProfileImage" className="profile" />
        </div>
      </div>
    </div>
  );
};

export default Home;
