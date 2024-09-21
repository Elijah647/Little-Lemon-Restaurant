import React from "react";
import lemonDes from "./assets/lemonDes.jpg";
import salad from "./assets/greekSalad.png";
import bread from "./assets/bread.png";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <section className="highlight-section">
          <div className="col1">This weeks Specials!</div>
          <div className="col1">
            <button className = "om-btn"><Link to = "/Menu">Online Menu</Link></button>
          </div>
          <div className="col3">
            <img src={lemonDes} alt="Lemon Cake Dessert" className="spec-img"/>
            <h3>Lemon Dessert</h3>
            <p>
              Mediterranean cuisine is known for its fresh, vibrant flavors,
              featuring ingredients like olive oil, fresh herbs, vegetables, and
              seafood. It combines the culinary traditions of countries along
              the Mediterranean Sea, including Greece, Italy, and Turkey. With
              its emphasis on wholesome, simple ingredients, it's both delicious
              and healthy.
            </p>
          </div>
          <div className="col4">
            <img src={salad} alt="Greek Salad" className="spec-img"/>
            <h3>Greek Salad</h3>
            <p>
              Mediterranean cuisine is known for its fresh, vibrant flavors,
              featuring ingredients like olive oil, fresh herbs, vegetables, and
              seafood. It combines the culinary traditions of countries along
              the Mediterranean Sea, including Greece, Italy, and Turkey. With
              its emphasis on wholesome, simple ingredients, it's both delicious
              and healthy.
            </p>
          </div>
          <div className="col5">
            <img src={bread} alt="Description" className="spec-img"/>
            <h3>Bread</h3>
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
    </>
  );
};

export default Menu;
