import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Epk from "./pages/Epk.jsx";
import Layout from "./components/Layout";
import Merch from "./pages/Merch";
import NotFound from "./components/NotFound";
import Shows from "./components/Shows";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/epk" element={<Epk />}>
                        <Route
                            path="/epk/show"
                            element={<Shows test="test" />}
                        />
                    </Route>
                    <Route path="/merch" element={<Merch />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
