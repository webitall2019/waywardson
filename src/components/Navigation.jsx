import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.svg";
export default function Navigation({ color, weight }) {
    const setActive = ({ isActive }) => (isActive ? "active-link" : "");
    // console.log(window.location.href);
    return (
        <nav
            className={`flex gap-x-4 text-${color} font-${weight} pt-2 px-10 lg:px-14 justify-between items-center`}
        >
            <div className="logo-holder">
                <NavLink to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>
            <div className="nav-wrap flex gap-x-8">
                <NavLink to="/" className={`setActive, link`}>
                    Home
                </NavLink>
                <a href="#music">Music & More</a>
                <a href="#contact">Contact</a>
                <a href="#shows">Shows</a>
                <NavLink to="/epk" className={setActive}>
                    EPK
                </NavLink>
            </div>
            <NavLink
                to="/merch"
                className="bg-cta-blue p-2 md:px-6 md:py-4 hover:text-grey-400 hover:bg-indigo-400 hover:rounded-md"
            >
                By Merch
            </NavLink>
        </nav>
    );
}
