import React from "react";
import "./about.css";

function About(props) {
  return (
    <div>
      <div className="card">
        <header className="name">
          <h1>
            {props.firstName} {props.lastName}
          </h1>
        </header>

        <div class="roll-no">
          <p>{props.rollNo}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
