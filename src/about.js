import React from "react";
import mainImg from "./assets/bread.png";

const About = () => {
  return (
    <>
      <h2>About Us</h2>
      <section className="about-section">
        <div className="txt-col">
          <h1 className="head">Little Lemon</h1>
          <h3 className="subhead">Toronto</h3>
          <p className="about-txt">
            Mediterranean cuisine is known for its fresh, vibrant flavors,
            featuring ingredients like olive oil, fresh herbs, vegetables, and
            seafood. It combines the culinary traditions of countries along the
            Mediterranean Sea, including Greece, Italy, and Turkey. With its
            emphasis on wholesome, simple ingredients, it's both delicious and
            healthy.
          </p>
        </div>
        <div className="image-container">
          <div className="image owner1">
            <img src={mainImg} alt="Owner 1" className="about-img" />
          </div>
          <div className="image owner2">
            <img src={mainImg} alt="Owner 2" className="about-img" />
          </div>
        </div>{" "}
      </section>
    </>
  );
};

export default About;
