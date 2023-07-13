import React from "react";
import "./home.css";
import video from '../../Assets/splash-1440p.mp4'


const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop typeof="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">
            Our Package
          </span>
          <h1 className="homeTitle">
            Search Your Holiday
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
