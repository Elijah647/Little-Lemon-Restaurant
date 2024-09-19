import React from "react";
import mainImg from "./assets/bread.png";
import Review from "./Reviews";
import About from "./about";
import Menu from "./Menu";

import "./styles.css";

const Main = () => {
  return (
    <main>
      {/*Hero xection*/}

      <section className="hero-section">
        <div className="grid-container">
          <div className="text-column">
            <h1>Little Lemon</h1>
            <h2 className="subhead">Toronto</h2>
            <p>
              Mediterranean cuisine is known for its fresh, vibrant flavors,
              featuring ingredients like olive oil, fresh herbs, vegetables, and
              seafood. It combines the culinary traditions of countries along
              the Mediterranean Sea, including Greece, Italy, and Turkey. With
              its emphasis on wholesome, simple ingredients, it's both delicious
              and healthy.
            </p>
            <button className="cta-button">Reserve a table</button>
          </div>
          <div className="image-column">
            <img src={mainImg} alt="Description" className="main-image" />
          </div>
        </div>
      </section>

      {/*End of hero section*/}
      <div className="temp">
        {/*Highlight section*/}
        <Menu />
        {/*End of highlight section*/}

        {/*Reviews section*/}
        <Review />
        {/*End of reviews section*/}
      </div>

      {/*About section*/}
      <About />
      {/*End of about section*/}

      {/*Footer*/}
      {/*End of footer*/}
    </main>
  );
};

export default Main;
