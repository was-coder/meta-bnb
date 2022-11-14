import React from "react";

function Main() {
  return (
    <>
      <section className="main">
        <div className="main-top-div">
          <div className="main-text-div">
            <h1 className="main-text-header">
              Rent a <span>Place</span> away from <span>Home</span> in the
              <span> Metaverse</span>
            </h1>
            <p className="main-text-p">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
            <form className="main-form">
              <input
                type="text"
                placeholder="Search for location"
                className="form-input"
              />
              <button className="form-btn">Search</button>
            </form>
          </div>

          <div className="main-images">
            <img src="/assets/home-logo.png" alt="home logo" className="logo" />
          </div>
        </div>

        <div className="main-bottom-div">
          <div>
            <img
              src="/assets/mb.png"
              alt="mbtoken"
              className="logo-img mb-logo"
            />
            <h2 className="bottom-h3 mb-h3">MBToken</h2>
          </div>
          <div>
            <img src="/assets/meta.png" alt="metamask" className="logo-img" />
            <h3 className="bottom-h3">METAMASK</h3>
          </div>
          <div>
            <img src="/assets/sea.png" alt="opensea" className="logo-img" />
            <h3 className="bottom-h3">OpenSea</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
