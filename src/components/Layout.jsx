import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Navbar from "./navBar";
import Navigation from "./Navigation";
export default function Layout() {
    return (
        <div className="wrapper body-background">
            <header className="sm:body-background">
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
