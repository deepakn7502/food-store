import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div>
      <div className="card-container">
        <div className="card-image">
          <img src={props.imageURL} alt={props.name}></img>
        </div>
        <div className="card-content">
          <h1>{props.name}</h1>
          <h2>{props.desc}</h2>
          <h3>Rs {props.price}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
