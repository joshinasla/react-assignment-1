import React from "react";
import "./hobbies.css";
import cooking from "./img/cooking.png";
import drawing from "./img/drawing.png";
import makeup from "./img/makeup.png";
import design from "./img/photoshop.png";
import basketball from "./img/basketball.png";
function Hobbies() {
  return (
    <div className="hobbies-list">
      <ul class="ul-hobbies">
        <li>
          <img src={cooking} alt="cooking" className="icon"></img>
          <span className="hobby">Cooking/Baking</span>
        </li>
        <li>
          <img src={drawing} alt="drawing" className="icon"></img>
          <span className="hobby">Drawing</span>
        </li>
        <li>
          <img src={makeup} alt="makeup" className="icon"></img>
          <span className="hobby">Makeup</span>
        </li>
        <li>
          <img src={design} alt="design" className="icon"></img>
          <span className="hobby">Graphic Design</span>
        </li>
        <li>
          <img src={basketball} alt="basketball" className="icon"></img>
          <span className="hobby">Basketball</span>
        </li>
      </ul>
    </div>
  );
}

export default Hobbies;
