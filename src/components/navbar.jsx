import { NavLink } from 'react-router-dom';
import './style/navbar.css'
import { useState } from 'react';

export default function Navbar() {
    
    const [navbarState, setNavbarState] = useState(true);
    
    if (navbarState)
        return (
            <nav>
                <button onClick={() => {setNavbarState(false)}} 
                    className={"fa-solid fa-xmark fa-l opened-nav"} style={{color: "var(--black)"}}></button>
                <ul className='navbar'>
                    <li>
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cv" className="nav-link">CV</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projets" className="nav-link">Projets</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="nav-link">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        )
    else
        return (
            <div className='closed-navbar'>
                <button onClick={() => {setNavbarState(true)}}
                    className={"fa-solid fa-bars closed-nav"} style={{color: "var(--black)"}}></button>
            </div>
        )
}