import React, { useEffect, useState } from "react";
import "./Section2.css";

function Details() {
  const [active, setactive] = useState(false);

  useEffect(() => {
    function scrollAnimation() {
      const animationPoint = 300;
      const windowHeight = window.innerHeight;
      const section2 = document.querySelector(".section2");
      var section2_top = section2.getBoundingClientRect().top;

      if (section2_top < windowHeight - animationPoint) {
        setactive(true);
      }
    }

    scrollAnimation();
    window.addEventListener("scroll", scrollAnimation);
  }, []);

  return (
    <div className={`section2 ${active && "active"}`} id="Section2">
      <div className="text-content">
        <div className="text text1">
          <h1>
            How i <span>Started</span>
          </h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            alias iusto aut eius animi suscipit exercitationem hic molestias
            ullam eos facere velit consectetur aliquid sunt. Molestiae
            perspiciatis autem illum ea.
          </h2>
        </div>

        <div className="text text2">
          <h1>
            <span>Experiences</span> so far
          </h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsa
            libero, ut perferendis repudiandae unde commodi nemo exercitationem
            corrupti explicabo consequuntur, possimus optio iste velit deserunt.
          </h2>
        </div>
      </div>

      <div className="progress">
        <div className="container" style={{ "--x": 1 }}>
          <h2>1</h2>
          <span>Lorem</span>
        </div>

        <div className="container" style={{ "--x": 2 }}>
          <h2>2</h2>
          <span>Ipsum</span>
        </div>

        <div className="container" style={{ "--x": 3 }}>
          <h2>3</h2>
          <span>Dolor</span>
        </div>
      </div>
    </div>
  );
}

export default Details;
