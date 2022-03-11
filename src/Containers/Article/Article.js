import React from "react";
import { useLocation } from "react-router-dom";

export default function Article() {
  const location = useLocation();
  console.log(location)

  return (
    <div className="m-5">
      <h2>Votre article: {location.state.title}</h2>
      <p className="mt-3">{location.state.body}</p>
    </div>
  );
}
