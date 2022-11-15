import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "./Data";

function Navbar() {
  const [navExpanded, setNavExpanded] = useState(false);

  const [popup, setPopup] = useState(false);

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
              <li
                onClick={() => {
                  setNavExpanded(!navExpanded);
                }}
                className="link-li"
              >
                <NavLink className="link" key={links.id} to={links.to}>
                  {links.content}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="wallet-div">
          <button
            className="btn"
            id="wallet-btn"
            onClick={() => {
              setPopup(!popup);
            }}
          >
            Connect Wallet
          </button>
        </div>
      </nav>

      <div className={popup ? "modal-popup expanded" : "modal-popup"}>
        <div className="modal-popup1">
          <div>
            <h2>Connect Wallet</h2>
            <img
              src="/assets/x.png"
              alt="close button"
              id="close-btn"
              onClick={() => {
                setPopup(!popup);
              }}
            />
          </div>
          <hr />
        </div>
        <div className="modal-popup2">
          <p>Choose your preferred wallet:</p>
          <div>
            <img
              src="/assets/modal1.png"
              alt="Modal one"
              className="modal-img"
            />
            <img src="/assets/arrow.png" alt="Arrow" className="arrow" />
          </div>
          <div>
            <img
              src="/assets/modal2.png"
              alt="Modal two"
              className="modal-img"
            />
            <img src="/assets/arrow.png" alt="Arrow" className="arrow" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
