import React from "react";
import Instagram from "../images/instagram.svg";
import TikTok from "../images/tiktok.svg";
import BeReal from "../images/bereal.svg";

const Footer = ({ openMenu }) => {
  return (
    <footer className={`footer ${openMenu ? "hidden" : ""}`}>
      <p>Connect with us</p>
      <div className="footer--socials">
        <img className="footer--icon" src={TikTok} alt="TikTok logo" />
        <a href="https://www.instagram.com/morganpham2023/">
          <img className="footer--icon" src={Instagram} alt="Instagram logo" />
        </a>
        <img className="footer--icon" src={BeReal} alt="BeReal logo" />
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
