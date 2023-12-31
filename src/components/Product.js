import React from "react";

export default function Product(props) {
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product" />
      <h5>{props.name}</h5>
    </div>
  );
}