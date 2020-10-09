import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, Container } from "react-bootstrap";

const NavbarMenu = () => {
  const [state, setState] = useState({
    collapsed: true,
  });

  const toggleNavbar = () => {
    setState({
      ...collapsed,
      collapsed: !state.collapsed,
    });
  };

  const collapsed = state.collapsed;
  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
      <Link className="navbar-brand" to="/">
        Breaking Bad Movie
      </Link>
      <button
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleNavbar}
        className={`${classTwo}`}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className={`${classOne} justify-content-center `}
        id="navbarNavAltMarkup"
        onClick={toggleNavbar}
      >
        <ul class="navbar-nav ">
          <li className="nav-item mr-4">
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
    // <Navbar bg="dark" variant="dark" fixed="top" expand="sm" collapseOnSelect>
    //   <Container>
    //     <LinkContainer to="/">
    //       <Navbar.Brand>Breaking Bad Movie</Navbar.Brand>
    //     </LinkContainer>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="ml-auto">
    //         <Nav.Link>
    //           <Link className="nav-link" to="/">
    //             Home
    //           </Link>
    //         </Nav.Link>
    //         <Nav.Link>
    //           <Link className="nav-link" to="about">
    //             About
    //           </Link>
    //         </Nav.Link>
    //         <Nav.Link>
    //           <Link className="nav-link" to="/contact-us">
    //             Contact-us
    //           </Link>
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default NavbarMenu;
