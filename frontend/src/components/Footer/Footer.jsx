import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="logo" src={assets.logo} alt="" />

          <p>
            Welcome to FoodLee, your ultimate destination for delicious meals at
            the click of a button! Specializing in a wide variety of cuisines,
            we deliver freshly prepared dishes right to your doorstep. Whether
            you're craving a healthy salad, a hearty sandwich, or a delectable
            dessert, FoodLee has something for everyone. Join us on our mission
            to bring joy and convenience to your dining experience. Bon appétit!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-2124567890</li>
            <li>contact@FoodLee.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © FoodLee.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
