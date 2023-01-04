import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Navbar from "./navBar";
// import Navigation from "./Navigation";
export default function Layout() {
     const showsRef = React.createRef();
    return (
        <div className="wrapper body-background">
            <header className="sm:body-background">
                <Navbar showsRef={showsRef} />
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
