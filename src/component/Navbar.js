import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar () {
    return (
        <div className="navigasi">
            <nav>
                <ul className="header">
                    <h6 className="judul">
                        <Link to="/">Mat'am.id</Link>
                    </h6>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/makanan">Makanan</Link>
                    </li>
                    <li>
                        <Link to="/minuman">Minuman</Link>
                    </li>
                    <li>
                        <Link to="/kontak">Kontak</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;