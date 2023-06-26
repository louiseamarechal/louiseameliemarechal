import { NavLink, useLocation } from "react-router-dom";
import "./style/navbar.css";
// import { useState } from 'react';
import useNavbar from "../hooks/useNavbar";

export default function Navbar() {
  const location = useLocation();
  const { navbarState, setNavbarState } = useNavbar();
  // const [navbarState, setNavbarState] = useState(false);

  if (location.pathname === "/game") return;
  if (navbarState)
    return (
      <nav className="navbar">
        <button
          onClick={() => {
            setNavbarState(false);
          }}
          className={"fa-solid fa-xmark fa-l"}
          style={{ color: "var(--black)" }}
        ></button>
        <ul className="navbar-links send-front">
          <NavLink
            to="/"
            className="nav-link"
            onClick={() => {
              setNavbarState(false);
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/cv"
            className="nav-link"
            onClick={() => {
              setNavbarState(false);
            }}
          >
            CV
          </NavLink>
          {/* <NavLink to="/projets" className="nav-link" onClick={() => {setNavbarState(false)}}>Projets</NavLink> */}
          {/* <NavLink to="/game" className="nav-link" onClick={() => { setNavbarState(false); }} > Game</NavLink> */}
          <NavLink
            to="/contact"
            className="nav-link"
            onClick={() => {
              setNavbarState(false);
            }}
          >
            Contact
          </NavLink>
        </ul>
      </nav>
    );
  else
    return (
      <div className="closed-navbar send-front">
        <button
          onClick={() => {
            setNavbarState(true);
          }}
          className={"fa-solid fa-bars closed-nav"}
          style={{ color: "var(--black)" }}
        ></button>
      </div>
    );
}
