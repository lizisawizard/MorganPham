import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CloseButton from "./CloseButton";
import HamburgerMenu from "./HamburgerMenu";

const Navigation = ({openMenu, setOpenMenu}) => {

    return (
        <div className="navigation">
            <div className="navigation--burger" onClick={() => setOpenMenu(!openMenu)}>
                {openMenu ? <CloseButton /> : <HamburgerMenu />}
            </div>
            <div className={`navigation--overlay ${openMenu ? "open" : ""}`}/>
            <ul className={`navigation--list ${openMenu ? "burger" : ""}`}>
                {/* <li>
                    <NavLink to='/home' className={e => (e.isActive ? 'navigation--item active' : 'navigation--item')}>Home</NavLink>
                </li> */}
                <li>
                    <NavLink to='/about' className={e => (e.isActive ? 'navigation--item active' : 'navigation--item')} onClick={() => setOpenMenu(false)}>About Us</NavLink>
                </li>
                <li>
                    <NavLink to='/goals' className={e => (e.isActive ? 'navigation--item active' : 'navigation--item')} onClick={() => setOpenMenu(false)}>Our Goals</NavLink>
                </li>
                <li>
                    <NavLink to='/team' className={e => (e.isActive ? 'navigation--item active' : 'navigation--item')} onClick={() => setOpenMenu(false)}>Our Team</NavLink>
                </li>
                {/* <li>
                    <NavLink to='/support' className={e => (e.isActive ? 'navigation--item active' : 'navigation--item')}>Our supporters</NavLink>
                </li> */}
            </ul>
        </div>
    )
}

export default Navigation;