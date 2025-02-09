import React from "react";
import "./special.css";
function Bigcard(props) {
  return (
    <>
      <div className="big-card">
        <img src={props.img} alt="" />
        <h4>{props.title}</h4>
        <p>{props.desc}</p>
        <div className="right-left">
          <p className="price">
            <span>$</span> {props.price}
          </p>
          <div className="right">
            <i class="fas fa-star"></i>
            <p>{props.rate}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bigcard;
