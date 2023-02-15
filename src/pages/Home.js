import React from "react";
import PlatformCard from "../components/PlatformCard";
import NipperImg from "../images/nippert.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="home home--display">
        <div className="home--img-group">
          <div className="home img-container">
            <img
              className="home img"
              src={NipperImg}
              alt="Vu + Taylor on Nippert Stadium"
            />
          </div>
          <div className="home--brand">
            <h1>Taylor & Vu</h1>
            <p>work for you</p>
          </div>
        </div>
        <div className="home platformCard--group">
          <PlatformCard
            title="Infrastructure"
            description="Making campus to be accessible for you"
            icon="foundation"
            number="one"
          />
          <PlatformCard
            title="Equity and Inclusion"
            description="Uplift and educate for our diversity"
            icon="diversity_3"
            number="two"
          />
          <PlatformCard
            title="Collaboration"
            description="Engage student leadership"
            icon="handshake"
            number="three"
          />
          <PlatformCard
            title="Leadership"
            description="Always proudly serving UC!"
            icon="social_leaderboard"
            number="four"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
