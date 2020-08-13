import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import "./socialmedia.css";

function SocialMedia(props) {
  return (
    <div>
      <span class="social-media-icon">
        <a href={props.facebookLink} className="social-media">
          <FaFacebookF />
        </a>
      </span>
      <span class="social-media-icon">
        <a href={props.twitterLink} className="social-media">
          <FaTwitter />
        </a>
      </span>
      <span class="social-media-icon">
        <a href={props.linkedLink} className="social-media">
          <FaLinkedinIn />
        </a>
      </span>
      <span class="social-media-icon">
        <a href={props.githubLink} className="social-media">
          <FaGithub />
        </a>
      </span>
      <span class="social-media-icon">
        <a href={props.mailLink} className="social-media">
          <FaEnvelope />
        </a>
      </span>
    </div>
  );
}

export default SocialMedia;
