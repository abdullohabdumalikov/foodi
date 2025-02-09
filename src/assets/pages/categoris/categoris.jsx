import React from 'react'
import './categoris.css'
import CardPopular from '../../componenets/cardPopular/card';
import cardImage1 from '../../../../public/images/burger.png'
import cardImage2 from '../../../../public/images/clap.png'
import cardImage3 from '../../../../public/images/ice-cream.png'
import cardImage4 from "../../../../public/images/juce.png";
function PopularCategories() {
  return (
    <>
      <section className="popular">
        <h4 className="popular__title">Customer Favorites</h4>
        <h2 className="popular-subtitle">Popular Catagories</h2>
        <div className="popular__cards">
          <CardPopular img={cardImage1} title={"Main Dish"} subtitle={'(86 dishes)'} />
          <CardPopular img={cardImage2} title={"Break Fast"} subtitle={'(12 break fast)'} />
          <CardPopular img={cardImage3} title={"Dessert"} subtitle={"(48 dessert)"} />
          <CardPopular img={cardImage4} title={"Browse All"} subtitle={"(255 Items)"} />
        </div>
      </section>
    </>
  );
}

export default PopularCategories
