import React from "react";
import mainImg from "./assets/bread.png";
import Review from "./Reviews.js";
import About from "./about.js"
import "./styles.css";


const Main = () => {
  return (
    <main>
      {/*Hero xection*/}

      <section className="hero-section">
        <div className="grid-container">
          <div className="text-column">
            <h1>Little Lemon</h1>
            <h2>Toronto</h2>
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
      <div className= "temp">
      {/*Highlight section*/}
        <section className="highlight-section">
          <div className="col1 bor">This weeks Specials!</div>
          <div className="col2 bor">
            <button>Online Menu</button>
          </div>
          <div className="col3 bor">
            <img src={mainImg} alt="description" />
            <p>
              Mediterranean cuisine is known for its fresh, vibrant flavors,
              featuring ingredients like olive oil, fresh herbs, vegetables, and
              seafood. It combines the culinary traditions of countries along
              the Mediterranean Sea, including Greece, Italy, and Turkey. With
              its emphasis on wholesome, simple ingredients, it's both delicious
              and healthy.
            </p>
          </div>
          <div className="col4 bor">
            <img src={mainImg} alt="Description" />
            <p>
              Mediterranean cuisine is known for its fresh, vibrant flavors,
              featuring ingredients like olive oil, fresh herbs, vegetables, and
              seafood. It combines the culinary traditions of countries along
              the Mediterranean Sea, including Greece, Italy, and Turkey. With
              its emphasis on wholesome, simple ingredients, it's both delicious
              and healthy.
            </p>
          </div>
          <div className="col5 bor">
            <img src={mainImg} alt="Description" />
            <p>
              Mediterranean cuisine is known for its fresh, vibrant flavors,
              featuring ingredients like olive oil, fresh herbs, vegetables, and
              seafood. It combines the culinary traditions of countries along
              the Mediterranean Sea, including Greece, Italy, and Turkey. With
              its emphasis on wholesome, simple ingredients, it's both delicious
              and healthy.
            </p>
          </div>
        </section>
        {/*End of highlight section*/}

        {/*Reviews section*/}
        <Review />
        {/*End of reviews section*/}

        {/*About section*/}
        <About/>
        {/*End of about section*/}

        {/*Footer*/}        {/*End of footer*/}
        </div>
    </main>
  );
}

export default Main;
