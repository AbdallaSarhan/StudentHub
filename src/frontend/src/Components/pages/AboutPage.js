import "./AboutPageStyles.css";
import React from "react";
import heroimg from "../../images/quickPostimg1.jpg";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Card } from "../Card";

export const AboutPage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={heroimg} alt="work" />
      </div>

      <div className="content">
        <h1 style={{ color: "white" }}>Why QuickPost?</h1>
        <div className="wrapper">
          <Card
            title="Fast"
            description="An Individual can get your item shipped from A to B within the day"
            img={heroimg}
            button="Try it out"
          />
          <Card
            title="Convinient"
            description="Search for flights to your desired destination on the day you need"
            button="Look for flights"
          />
          <Card
            title="Reduce Expenses"
            description="Travellers get extra money to help on their trip and you get express delivery at an affordable rate"
          />
        </div>
        {/* <p>A fast way to ship your packages or letters anywhere in the world</p> */}
      </div>
    </div>
  );
};
