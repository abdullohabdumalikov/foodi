import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="container">
        <div className="footer">
          <div className="foot1">
            <div className="foot-logo">
              <img src="./public/images/logo.png" alt="" />
              <p>
                Savor the artistry where every dish is a culinary masterpiece
              </p>
            </div>
            <div className="foot-text">
              <ul>
                <p>Useful links</p>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
              <ul>
                <p>Main Menu</p>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Offers</a>
                </li>
                <li>
                  <a href="#">Menus</a>
                </li>
                <li>
                  <a href="#">Reservation</a>
                </li>
              </ul>
              <ul>
                <p>Contact Us</p>
                <li>
                  <a href="#">example@email.com</a>
                </li>
                <li>
                  <a href="#">+64 958 248 966</a>
                </li>
                <li>
                  <a href="#">Social media</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="foot2">
            <div className="foot-icons">
              <div className="icon">
                <i class="fab fa-facebook-f"></i>
              </div>
              <div className="icon">
                <i class="fab fa-instagram"></i>
              </div>
              <div className="icon">
                <i class="fab fa-twitter"></i>
              </div>
              <div className="icon">
                <i class="fab fa-youtube"></i>
              </div>
            </div>
            <div className="foot-LBIPC">
              <p>Copyright 2023 Dscode | All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
