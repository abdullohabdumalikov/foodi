import React from "react";
import "./dishes.css";
import taom1 from "../../../../public/images/taom1.png";
import taom2 from "../../../../public/images/taom2.png";
import taom3 from "../../../../public/images/taom3.png";
import Bigcard from '../../componenets/cardSpecial/special'
function Dishes() {
  return (
    <React.Fragment>
      <div className="dishes">
        <div className="dishes-top">
          <div className="dishes__text">
            <p>Special Dishes</p>
            <h2>Standout Dishes From Our Menu</h2>
          </div>
          <div className="special__djostik">
            <div className="djostik1">
              <i className="fas fa-chevron-left"></i>
            </div>
            <div className="djostik2">
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
        
        <div className="cards">
        <Bigcard
          img={taom1}
          title={`Fattoush salad`}
          desc={`Description of the item`}
          price={`24.00`}
          rate={"4.9"}
        />
        <Bigcard
          img={taom2}
          title={`Vegetable salad`}
          desc={`Description of the itemm`}
          price={`26.00`}
          rate={"4.6"}
        />
        <Bigcard
          img={taom3}
          title={`Egg vegi salad`}
          desc={`Description of the item`}
          price={`23.00`}
          rate={"4.5"}
        />
        </div>

      </div>
    </React.Fragment>
  );
}

export default Dishes;
