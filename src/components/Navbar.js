import React from 'react';

import './Navbar.css';


const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-md bg-light navbar-light ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a href="#brand" className="navbar-brand" style={{ fontSize: 28, lineHeight: 1.1, textAlign: "right" }}>Placement<br /> Saga</a>
            <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <ul className="navbar-nav " >
                    <li className="nav-item">
                        <a className="nav-link" href="#questionlibrary" ><h5>Question Library</h5></a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href="#theoryseries" ><h5>Theory Series</h5></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#mocktests" ><h5>Mock Tests</h5></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#subscribe" ><h5>Subscribe</h5></a>
                    </li>
                </ul>
            </div>
            <button className="btn  login">Login</button>

        </nav>

    );
}

export default Navbar;
