import React from "react";
import logo from "./logo.svg";
import "./App.css";
import photo from "./components/Photo/img/photo.JPG";
import Header from "./components/Header/Header";
import Photo from "./components/Photo/Photo";
import About from "./components/About/About";
import Hobbies from "./components/Hobbies/Hobbies";
import SocialMedia from "./components/SocialMedia/SocialMedia";

function App() {
  return (
    <div className="App">
      <Header />
      <Photo photo={<img src={photo} alt="photo" width="200"></img>}></Photo>
      <About firstName="Nasla" lastName="Joshi" rollNo="2074/BCT/41" />
      <Hobbies />
      <hr />
      <SocialMedia
        facebookLink="https://www.facebook.com/"
        twitterLink="https://twitter.com/"
        linkedLink="https://www.linkedin.com/"
        githubLink="https://github.com/"
        mailLink="https://mail.google.com/"
      />
    </div>
  );
}

export default App;
