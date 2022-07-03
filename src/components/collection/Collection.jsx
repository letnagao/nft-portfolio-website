import React, { useState, useEffect } from "react";
import "./Collection.css";

function Collection() {
  const [active, setactive] = useState(false);

  useEffect(() => {
    function scrollAnimation() {
      const animationPoint = 300;
      const windowHeight = window.innerHeight;
      const collection = document.querySelector(".collection");
      var collection_top = collection.getBoundingClientRect().top;

      if (collection_top < windowHeight - animationPoint) {
        setactive(true);
      }
    }

    scrollAnimation();
    window.addEventListener("scroll", scrollAnimation);
  }, []);

  return (
    <div className={`collection ${active && "active"}`} id="Collection">
      <h1>
        my <span>ULTIMATE</span> collection
      </h1>

      <div className="collections-container">
        <div className="cl-row row1">
          <div className="nft"></div>
          <div className="nft"></div>
          <div className="nft"></div>
          <div className="nft"></div>
          <div className="nft"></div>
          <div className="nft"></div>
          <div className="nft"></div>
        </div>
        <div className="cl-row row2">
          <div className="nft"></div>
          <div className="nft"></div>
          <div className="nft"></div>
          <div className="nft"></div>
          <div className="nft"></div>
          <div className="nft"></div>
          <div className="nft"></div>
        </div>
        <div className="cl-row row3">
          <div className="nft"></div>
          <div className="nft"></div>
          <div className="nft"></div>
          <div className="nft"></div>
          <div className="nft"></div>
          <div className="nft"></div>
          <div className="nft"></div>
        </div>
        <div className="cl-row row4">
          <div className="nft"></div>
          <div className="nft"></div>
          <div className="nft"></div>
          <div className="nft"></div>
          <div className="nft"></div>
          <div className="nft"></div>
          <div className="nft"></div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
