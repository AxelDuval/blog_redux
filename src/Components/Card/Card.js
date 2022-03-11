import React from "react";
import "../Card/Card.css";

export default function Card(props) {
  return <div className="card m-3">{props.children}</div>;
}
