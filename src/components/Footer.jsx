import React from "react";
import logo from "../assets/img/logo.svg";
import FooterNavigation from "./FooterNavigation";
import { NavLink } from "react-router-dom";
export default function Footer({ props }) {
    let data = new Date();
    return (
        <footer className="border-t-[5px] border-text-dark-grey pt-16 pb-4">
            <div className="mb-8 block mx-auto text-center">
                <a href="/" className="inline-block mx-auto">
                    <img src={logo} alt="logo" className="w-[120px] mx-auto" />
                </a>
            </div>
            <nav
                className={`text-sm md:text-base flex-wrap flex gap-x-4 md:gap-x-6 text-text-grey font-medium pt-2 px-10 lg:px-14 justify-center items-center`}
            >
                <NavLink to="/#home">Home</NavLink>
                <a href="/#tunes">Tunes</a>
                <a href="/#contact">Contact</a>
                <a href="/epk#shows">Shows</a>
                <NavLink to="/epk">EPK</NavLink>
                <NavLink to="/merch">Merch</NavLink>
            </nav>
            <p
                aria-label="privacy-police"
                className="mt-8 text-center text-text-light-grey text-sm md:text-base"
            >
                &copy; {data.getFullYear()} wayward son music. All rights
                reserved
            </p>
        </footer>
    );
}
