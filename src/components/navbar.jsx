import { NavLink } from 'react-router-dom';
import './style/navbar.css'
import { useState } from 'react';

export default function Navbar() {
    
    const [navbarState, setNavbarState] = useState(false);
    
    if (navbarState)
        return (
            <nav className='navbar'>
                <button onClick={() => {setNavbarState(false)}} 
                    className={"fa-solid fa-xmark fa-l"} style={{color: "var(--black)"}}></button>
                <ul className='navbar-links send-front'>
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/cv" className="nav-link">CV</NavLink>
                    <NavLink to="/projets" className="nav-link">Projets</NavLink>
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                </ul>
            </nav>
        )
    else
        return (
            <div className='closed-navbar send-front'>
                <button onClick={() => {setNavbarState(true)}}
                    className={"fa-solid fa-bars closed-nav"} style={{color: "var(--black)"}}></button>
            </div>
        )
}