import React from "react";

function Nft() {
  return (
    <>
      <section className="nft">
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
              src="/assets/nft1.png"
              alt="nft1"
              className="nft-img"
              id="nft1"
            />
            <img
              src="/assets/nft2.png"
              alt="nft2"
              className="nft-img"
              id="nft2"
            />
            <img
              src="/assets/nft3.png"
              alt="nft3"
              className="nft-img"
              id="nft3"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Nft;
