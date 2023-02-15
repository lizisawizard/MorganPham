import React from "react";
import Instagram from "../images/instagram.svg";
import TikTok from "../images/tiktok.svg";
import BeReal from "../images/bereal.svg";

const Footer = ({ openMenu }) => {
  return (
    <footer className={`footer ${openMenu ? "hidden" : ""}`}>
      <p>Connect with us</p>
      <div className="footer--socials">
        <img className="footer--icon" src={TikTok} />
        <img className="footer--icon" src={Instagram} />
        <img className="footer--icon" src={BeReal} />
      </div>
      <p>
        <a href="https://github.com/lizisawizard/MorganPham">Project Home</a> |{" "}
        <a href="https://github.com/lizisawizard/MorganPham/issues/new">
          Issues
        </a>
      </p>
    </footer>
  );
};

export default Footer;
