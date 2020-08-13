import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./header.css";

function Header() {
  return (
    <div>
      <div className="nav-bar">
        <span>
          <a href="#">HOME</a>
        </span>
        <span>
          <a href="#">PORTFOLIO</a>
        </span>
        <span>
          <a href="#">REVIEWS</a>
        </span>
        <span>
          <a href="#">ABOUT</a>
        </span>
        <span>
          <a href="#">SERVICES</a>
        </span>
        <span>
          <a href="#">CONTACT</a>
        </span>
      </div>
    </div>
  );
}

export default Header;
