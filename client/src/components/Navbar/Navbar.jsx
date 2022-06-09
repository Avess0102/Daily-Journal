import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Navbar() {
  return (
      <>
        <nav className="navbar navbar-default bg-light">
            <div className="container">
                <div className="navbar-header">
                    <p>
                        <Link to="/" className="navbar-brand">DAILY JOURNAL</Link>
                    </p>
                </div>
                {/* <ul className="nav navbar-nav navbar-right">
                    <li className='nav-item' id="home">Home</li>
                    <li className='nav-item' id="about">About</li>
                    <li className='nav-item' id="contact">Contact</li>
                </ul> */}
                <ul className="nav navbar-nav navbar-right">
                    <li className='nav-item' id="home"><Link to="/">HOME</Link></li>
                    <li className='nav-item' id="about"><Link to="/about">ABOUT US</Link></li>
                    <li className='nav-item' id="contact"><Link to="/contact">CONTACT US</Link></li>
                    <li className='nav-item' id="contact"><Link to="/compose">COMPOSE</Link></li>
                </ul>
            </div>
        </nav>
      </>
  )
}
