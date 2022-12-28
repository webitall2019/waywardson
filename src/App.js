import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Epk from "./pages/Epk.jsx";
import Layout from "./components/Layout";
import Merch from "./pages/Merch";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/epk" element={<Epk />} />
                    <Route path="/merch" element={<Merch />}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
