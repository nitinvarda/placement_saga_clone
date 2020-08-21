import React from 'react';

const Navbar = () => {
    return (
        <div style={{ marginLeft: 100, marginRight: 100 }}>
            <nav className="navbar" style={{ padding: 0 }}>
                <h3 className="navbar nav-brand" style={{ textAlign: "right" }}>Placement <br />Saga</h3>
                <ul className="navbar nav-list">
                    <li className="navbar nav-items"><h5>Question Library</h5></li>
                    <li className="navbar nav-items"><h5>Theory Stories</h5></li>
                    <li className="navbar nav-items"><h5>Mock Tests</h5></li>
                    <li className="navbar nav-items"><h5>Subscribe</h5></li>
                    <li className="navbar nav-items"><h3><button className="btn btn-primary btn-lg" >Login</button></h3></li>

                </ul>
            </nav>

        </div>
    );
}

export default Navbar;
