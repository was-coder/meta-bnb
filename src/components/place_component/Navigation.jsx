import React from "react";

function Navigation() {
  return (
    <>
      <section className="Navigation">
        <div className="navigation-div">
          <div className="navigation-text">
            <p>Resturant</p>
            <p>Cottage</p>
            <p>Castle</p>
            <p>Fantast city</p>
            <p>Beach</p>
            <p>Carbins</p>
            <p>Off-grid</p>
            <p>Farm</p>
          </div>
          <div className="location-div">
            <input type="text" placeholder="Location" id="nav-input" />
            <img src="/assets/location.png" alt="location" id="location-img" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Navigation;
