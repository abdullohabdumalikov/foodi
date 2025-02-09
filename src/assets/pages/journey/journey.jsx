import React from "react";
import "./journey.css";

function Journey() {
  return (
    <>
      <section className="section4">
        <div className="container">
          <div className="servis">
            <div className="culinary">
              <a href="#">Our Story & Services</a>
              <h2>Our Culinary Journey And Services</h2>
              <p>
                Rooted in passion, we curate unforgettable dining experiences
                and offer exceptional services, blending culinary artistry with
                warm hospitality.
              </p>
              <button>Explore</button>
            </div>
            <div className="cards">
              <div className="cards1">
                <div className="card">
                  <img src="./public/images/tozza.png" alt="" />
                  <h3>Catering</h3>
                  <p>Delight your guests with our flavors and presentation</p>
                </div>
                <div  className="card">
                  <img src="./public/images/tezz.png" alt="" />
                  <h3>Catering</h3>
                  <p>Delight your guests with our flavors and presentation</p>
                </div>
              </div>
              <div className="cards2">
                <div  className="card">
                  <img src="./public/images/sifatli.png" alt="" />
                  <h3>Catering</h3>
                  <p>Delight your guests with our flavors and presentation</p>
                </div>
                <div className="card">
                  <img src="./public/images/sovg'a.png" alt="" />
                  <h3>Catering</h3>
                  <p>Delight your guests with our flavors and presentation</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Journey;
