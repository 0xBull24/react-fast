import React from 'react'
import './navbar.css'

const Navbar = props => (
    <div className='navbar-fixed'>
        <nav>
            <div className="nav-wrapper">
                <a href='/' className="brand-logo center">X-Men Memory</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li>Current Score: {props.currentScore}</li>
                </ul>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>HighScore: {props.highScore}</li>
                </ul>
            </div>
        </nav>
    </div>
)

export default Navbar;