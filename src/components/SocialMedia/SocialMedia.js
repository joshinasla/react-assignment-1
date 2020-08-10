import React from "react";
import "./socialmedia.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
function SocialMedia(props) {
  return (
    <div>
      <span class="social-media-icon">
        <FaFacebookF />
      </span>
      <span class="social-media-icon">
        <FaTwitter />
      </span>
      <span class="social-media-icon">
        <FaLinkedinIn />
      </span>
      <span class="social-media-icon">
        <FaGithub />
      </span>
      <span class="social-media-icon">
        <FaEnvelope />
      </span>
    </div>
  );
}

export default SocialMedia;
