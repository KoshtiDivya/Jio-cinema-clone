import React from "react";
import "../styles/footer.css";
import playStore from "../images/playStore.png";
import appStore from "../images/app-store-logo.png";
const Footer = () => {
  return (
    <>
      <section>
        <div className="footer-section">
          <div className="footer-links">
            <div className="jioCinema">
              <h3>JioCinema</h3>
              <ul>
                <li>For You</li>
                <li>Sports</li>
                <li>Movies</li>
                <li>TV Shows</li>
              </ul>
            </div>
            <div className="support">
              <h3>Support</h3>
              <ul>
                <li>Help Center</li>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>Content Complaints</li>
              </ul>
            </div>
          </div>
          <div className="connect">
            <div className="social">
              <h3>Connect With Us</h3>
              <i class="fa-brands fa-square-facebook"></i>
              <i class="fa-brands fa-x-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
            <div className="download">
              <h3>Download the App</h3>
              <div className="download-store">
                              <img src={playStore} alt="playStore" />
                              <img src={appStore} alt="appStore" />
              </div>
              
            </div>
          </div>
        </div>
              

        <div className="copy-right">
          <p>
            Copyright © 2025 Star India Private Limited. All rights reserved.
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
