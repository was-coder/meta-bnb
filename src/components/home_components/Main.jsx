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
            <div className="first-main-images">
              <img
                src="/assets/home1.png"
                alt="home1"
                className="main-img"
                id="home1"
              />
              <img
                src="/assets/home2.png"
                alt="home2"
                className="main-img"
                id="home2"
              />
            </div>
            <div className="second-main-images">
              <img
                src="/assets/home3.png"
                alt="home3"
                className="main-img"
                id="home3"
              />
              <img
                src="/assets/home4.jpg"
                alt="home4"
                className="main-img"
                id="home4"
              />
            </div>
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
