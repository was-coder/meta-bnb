import React from "react";

function Nft() {
  return (
    <>
      <section className="nft" id="nft">
        <div className="nft-div">
          <div className="nft-text-div">
            <h1>Metabnb NFTs</h1>
            <p>
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>
            <button className="btn nft-btn">Learn more</button>
          </div>
          <div className="nft-image-div">
            <img
              src="/assets/nft-logo.png"
              alt="nft logo"
              className="logo nft-logo"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Nft;
