import React from 'react';

import './Navbar.css';
// import styled from 'styled-components';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-md bg-light navbar-light fixed-top ">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a href="#brand" className="navbar-brand" style={{ fontSize: 25, lineHeight: 1.1, textAlign: "right" }}>Placement<br /> Saga</a>
            <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <ul class="navbar-nav " >
                    <li class="nav-item">
                        <a class="nav-link" href="#questionlibrary" ><h5>Question Library</h5></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#theoryseries" ><h5>Theory Series</h5></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#mocktests" ><h5>Mock Tests</h5></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#subscribe" ><h5>Subscribe</h5></a>
                    </li>
                </ul>
            </div>
            <button className="btn btn-primary login">Login</button>
            {/* <a className="nav-item">Login</a> */}

        </nav>
        // <nav class="navbar navbar-expand-md bg-light navbar-light fixed-top justify-content-around" >


        //     <a class="navbar-brand" href="#" >Navbar</a>


        //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        //         <span class="navbar-toggler-icon"></span>
        //     </button>

        // <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
        //     <ul class="navbar-nav" >
        //         <li class="nav-item">
        //             <a class="nav-link" href="#" >Link</a>
        //         </li>
        //         <li class="nav-item">
        //             <a class="nav-link" href="#" >Link</a>
        //         </li>
        //         <li class="nav-item">
        //             <a class="nav-link" href="#" >Link</a>
        //         </li>
        //     </ul>
        // </div>

        // </nav>



    );
}

export default Navbar;
