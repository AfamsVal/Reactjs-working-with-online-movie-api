import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
      <Link className="navbar-brand" to="/">
        Breaking Bad Movie
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-center"
        id="collapsibleNavbar"
      >
        <ul className="navbar-nav">
          <li className="nav-item active mr-4">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item mr-4">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact-us">
              Contact-us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
