import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

const Navigation = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="navigation">
            <ul className={`navigation--list ${openMenu ? "burger" : ""}`}>
                {/* <li>
                    <NavLink to='/home' className={e => (e.isActive ? 'navigation--item active' : 'navigation--item')}>Home</NavLink>
                </li> */}
                <li>
                    <NavLink to='/about' className={e => (e.isActive ? 'navigation--item active' : 'navigation--item')}>About Us</NavLink>
                </li>
                <li>
                    <NavLink to='/goals' className={e => (e.isActive ? 'navigation--item active' : 'navigation--item')}>Our Goals</NavLink>
                </li>
                <li>
                    <NavLink to='/team' className={e => (e.isActive ? 'navigation--item active' : 'navigation--item')}>Our Team</NavLink>
                </li>
                {/* <li>
                    <NavLink to='/support' className={e => (e.isActive ? 'navigation--item active' : 'navigation--item')}>Our supporters</NavLink>
                </li> */}
            </ul>
            <div className="navigation--burger" onClick={() => setOpenMenu(!openMenu)}>
                <HamburgerMenu />
            </div>
            <div className="navigation--overlay"/>
        </div>
    )
}

export default Navigation;