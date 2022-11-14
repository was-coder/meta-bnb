import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-div">
          <div className="footer-flex1">
            <div className="footer-flex1-one">
              <img src="/assets/footer.png" alt="house" />
              <h1>Metabnb</h1>
            </div>
            <div className="footer-flex1-two">
              <img src="/assets/facebook.png" alt="facebook" />
              <img src="/assets/instagram.png" alt="instagram" />
              <img src="/assets/twitter.png" alt="twitter" />
            </div>
            <div>
              <p> &copy; 2022 Metabnb</p>
            </div>
          </div>
          <div className="footer-list">
            <div className="footer-flex2">
              <h3>Community</h3>
              <ul>
                <li>NFT</li>
                <li>Tokens</li>
                <li>Landlords</li>
                <li>Discord</li>
              </ul>
            </div>
            <div className="footer-flex3">
              <h3>Places</h3>
              <ul>
                <li>Castle</li>
                <li>Farms</li>
                <li>Beach</li>
                <li>Learn more</li>
              </ul>
            </div>
            <div className="footer-flex4">
              <h3>About us</h3>
              <ul>
                <li>Road map</li>
                <li>Creators</li>
                <li>Career</li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
