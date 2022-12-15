import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="socialMedia">
        <p>Copyright &copy; 2022, {"<h-aln>"}</p>
        <div className="icons">
          <FaInstagram />
          <FaTwitter />
          <FaFacebook />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
