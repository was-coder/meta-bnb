import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    id: "home",
    content: "Home",
    to: "/",
  },
  {
    id: "places",
    content: "Place to stay",
    to: "/places",
  },
  {
    id: "nft",
    content: "NFTs",
    to: "/",
  },
  {
    id: "community",
    content: "Community",
    to: "/",
  },
];

function Navbar() {
  const [navExpanded, setNavExpanded] = useState(false);

  return (
    <>
      <nav className="header">
        <button
          className="hamburger"
          onClick={() => {
            setNavExpanded(!navExpanded);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="logo-div">
          <img src="/assets/logo_img.png" alt="Logo" className="logo-img" />
          <img
            src="/assets/metabnb.png"
            alt="metabnb"
            className="logo-header"
          />
        </div>

        <div className="link-div">
          <ul className={navExpanded ? "link-ul expanded" : "link-ul"}>
            {links.map((links) => (
              <li className="link-li">
                <NavLink className="link" key={links.id} to={links.to}>
                  {links.content}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="wallet-div">
          <button className="btn" id="wallet-btn">
            Connect Wallet
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
