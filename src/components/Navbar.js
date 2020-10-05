import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
      <a className="navbar-brand" href="/#">
        Breaking Bad Movie
      </a>

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
            <a className="nav-link" href="/#">
              Home
            </a>
          </li>
          <li className="nav-item mr-4">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact-us">
              Contact-us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
