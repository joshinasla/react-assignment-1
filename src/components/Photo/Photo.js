import React from "react";
import "./photo.css";

function Photo(props) {
  return (
    <div>
      <div className={"profile-photo"}>{props.photo}</div>
    </div>
  );
}

export default Photo;
