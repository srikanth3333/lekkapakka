import React from 'react';
import {Link} from 'react-router-dom';

function Header({headerBgColor,textColor}) {

    return (
        <section className={`auth_header fixed-auth-top ${headerBgColor}`}>
            <div className="container-fluid">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <div className="logo-area">
                        <h1 className="logo-text">LEKKA <span className="text-warning">PAKKA</span></h1>
                    </div>
                    <div>
                        <Link to="/" className={`btn btn-default ${textColor}`}>Login</Link>
                        <Link to="/register" className="btn btn-warning">Sign Up</Link>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Header;
