import React from "react";
import BannerImage from "../assets/2blackbean.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" placeholder="Enter your name..." />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter your email..." />
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            name="name"
            placeholder="Enter yor message..."
          />

          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
