import React from "react";
import "./footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <div className="footer">
      <div className="contain">
        <div className="col">
          <h1>Company</h1>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Get in touch</li>
          </ul>
        </div>
        <div className="col">
          <h1>Products</h1>
          <ul>
            <li>About</li>
            <li>Mission</li>
            <li>Services</li>
            <li>Social</li>
            <li>Get in touch</li>
          </ul>
        </div>
        <div className="col">
          <h1>Support</h1>
          <ul>
            <li>Contact us</li>
            <li>Web chat</li>
            <li>Open ticket</li>
          </ul>
        </div>
        {/* <div className="col social">
          <h1>Social</h1>
          <ul>
            <li>
              <img
                src="https://svgshare.com/i/5fq.svg"
                alt="social-icon"
                width="32"
              />
            </li>
            <li>
              <img
                src="https://svgshare.com/i/5eA.svg"
                alt="social-icon"
                width="32"
              />
            </li>
            <li>
              <img
                src="https://svgshare.com/i/5f_.svg"
                alt="social-icon"
                width="32"
              />
            </li>
          </ul>
        </div> */}
        <div className="clearfix"></div>
      </div>
    </div>
  );
};

export default Footer;
