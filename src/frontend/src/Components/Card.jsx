import React from "react";
import "./Card.css";
export const Card = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <img className="card-image" src={props.img} />
        <p className="card-description">{props.title}</p>
        <h2 className="card-title">{props.description}</h2>
        <button className="card-btn">{props.button}</button>
      </div>
    </div>
  );
};
