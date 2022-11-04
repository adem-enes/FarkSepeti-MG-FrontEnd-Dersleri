import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    const { datas: cardItems } = useSelector(state => state.cardItems);
    
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">FarkSepeti</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink tag={Link} to="/urunler" className="nav-link">Ürünler</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink tag={Link} to="/urunler" className="nav-link">Ürünler</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink tag={Link} to="/urunler" className="nav-link">Counter</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink tag={Link} to="/sepet" className="nav-link">
                                    Sepet <span>{cardItems.length}</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;