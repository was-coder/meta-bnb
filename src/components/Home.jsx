import React from "react";

function Home() {
  return (
    <>
      <section className="home">
        <div className="home-top-div">
          <div className="home-text-div">
            <h1 className="home-text-header">
              Rent a <span>Place</span> away from <span>Home</span> in the
              <span> Metaverse</span>
            </h1>
            <p className="home-text-p">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
            <form className="home-form">
              <input
                type="text"
                placeholder="Search for location"
                className="form-input"
              />
              <button className="form-btn">Search</button>
            </form>
          </div>

          <div className="home-images">
            <div className="first-home-images">
              <img
                src="/assets/home1.png"
                alt="home1"
                className="home-img"
                id="home1"
              />
              <img
                src="/assets/home2.png"
                alt="home2"
                className="home-img"
                id="home2"
              />
            </div>
            <div className="second-home-images">
              <img
                src="/assets/home3.png"
                alt="home3"
                className="home-img"
                id="home3"
              />
              <img
                src="/assets/home4.jpg"
                alt="home4"
                className="home-img"
                id="home4"
              />
            </div>
          </div>
        </div>

        <div className="home-bottom-div">
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

export default Home;
