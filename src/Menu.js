import React from "react";
import mainImg from "./assets/bread.png";

const Menu = () => {
  return (
    <>
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
    </>
  );
};

export default Menu;
