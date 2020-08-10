import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header/Header";
import Photo from "./components/Photo/Photo";
import About from "./components/About/About";
import Hobbies from "./components/Hobbies/Hobbies";
import SocialMedia from "./components/SocialMedia/SocialMedia";

function App() {
  return (
    <div className="App">
      <Header />
      <Photo
        photo={
          <img
            src={require("./components/Photo/photo.JPG")}
            alt="photo"
            width="200"
          ></img>
        }
      ></Photo>
      <About firstName="Nasla" lastName="Joshi" rollNo="2074/BCT/41" />
      <Hobbies />
      <hr />
      <SocialMedia />
    </div>
  );
}

export default App;
