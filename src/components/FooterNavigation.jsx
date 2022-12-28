import React from "react";
import { NavLink } from "react-router-dom";

export default function FooterNavigation() {
    return (
        <nav
            className={`text-sm md:text-base flex-wrap flex gap-x-4 md:gap-x-6 text-text-grey font-medium pt-2 px-10 lg:px-14 justify-center items-center`}
        >
            <a href="/#home">Home</a>
            <a href="/#music">Music & More</a>
            <a href="/#contact">Contact</a>
            <a href="/epk#shows">Shows</a>
            <NavLink to="/epk">EPK</NavLink>
            <NavLink to="/merch">Merch</NavLink>
        </nav>
    );
}
