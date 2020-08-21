import React, { useState } from 'react';
import './Navbar.css';
import styled from 'styled-components';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => {

    }
    console.log(open);
    const Styled = styled.ul`
        
        display: ${({ open }) => open ? 'flex' : 'none'};
        flex-direction: column;
        justify-content: center;
    
    `;
    return (
        <React.Fragment style={{ marginBottom: -20 }}>
            <nav>
                <Styled open={open} onClick={() => { setOpen(!open) }}>

                    <a href="#" onClick={toggle} className="hamburger">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>

                    </a>
                </Styled>
                <h2 className="brand">Placement <br />Saga</h2>
                <ul className="list-start">
                    <li className=""><h5>Question Library</h5></li>
                    <li className=""><h5>Theory Stories</h5></li>
                    <li className=""><h5>Mock Tests</h5></li>
                    <li className=""><h5>Subscribe</h5></li>
                </ul>
                <h4><button className="login-btn">Login</button></h4>
            </nav>
            <hr />
        </React.Fragment>



        // <div style={{ marginLeft: 100, marginRight: 100 }}>
        //     <nav className="navbar" style={{ padding: 0 }}>
        //         <h3 className="navbar nav-brand" style={{ textAlign: "right" }}>Placement <br />Saga</h3>
        //         <ul className="navbar nav-list">
        //             <li className="navbar nav-items"><h5>Question Library</h5></li>
        //             <li className="navbar nav-items"><h5>Theory Stories</h5></li>
        //             <li className="navbar nav-items"><h5>Mock Tests</h5></li>
        //             <li className="navbar nav-items"><h5>Subscribe</h5></li>
        //             <li className="navbar nav-items"><h3><button className="btn btn-primary btn-lg" >Login</button></h3></li>

        //         </ul>
        //     </nav>

        // </div>
    );
}

export default Navbar;
