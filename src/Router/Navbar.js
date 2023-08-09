import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info ">
                <div className="container justify-content-end">
                        <ul className="navbar-nav">
                            <Link className='text-decoration-none mx-3' to='/'><li className="nav-item nav-link text-black">Home</li></Link>
                            <Link className='text-decoration-none mx-3' to='/dashboard'> <li className="nav-item nav-link text-black">Dashboard</li></Link>
                            <Link className='text-decoration-none mx-3' to='/about'> <li className="nav-item nav-link text-black">About</li></Link>
                        </ul>
                    </div>
            </nav>
        </div>
    )
}

export default Navbar