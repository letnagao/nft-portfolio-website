import React, { useEffect, useState } from "react";
import "./Contact.css";

import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

function Contact() {
  const [active, setactive] = useState(false);

  useEffect(() => {
    function scrollAnimation() {
      const animationPoint = 300;
      const windowHeight = window.innerHeight;
      const contact = document.querySelector(".contact");
      var contact_top = contact.getBoundingClientRect().top;

      if (contact_top < windowHeight - animationPoint) {
        setactive(true);
      }
    }

    scrollAnimation();
    window.addEventListener("scroll", scrollAnimation);
  }, []);
  return (
    <div className={`contact ${active && "active"}`} id="Contact">
      <h1>
        <span>Contact</span> <b>me</b>
      </h1>

      <div className="socials">
        <div className="icon" style={{ "--c": "#00ff00" }}>
          <BsWhatsapp className="social-icons" />
          <div className="tooltip">whatsapp</div>
        </div>

        <div className="icon" style={{ "--c": "#1d3fff" }}>
          <BsFacebook className="social-icons" />
          <div className="tooltip">facebook</div>
        </div>

        <div className="icon" style={{ "--c": "#ff5cff" }}>
          <BsInstagram className="social-icons" />
          <div className="tooltip">instagram</div>
        </div>

        <div className="icon" style={{ "--c": "#ff0000" }}>
          <BsYoutube className="social-icons" />
          <div className="tooltip">youtube</div>
        </div>

        <div className="icon" style={{ "--c": "#6abef3" }}>
          <BsTwitter className="social-icons" />
          <div className="tooltip">twitter</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
