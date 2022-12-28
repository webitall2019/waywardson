import React from "react";
import BandSection from "../components/BandSection";
import HeroSection from "../components/HeroSection";
import News from "../components/News";
import Sponsors from "../components/Sponsors";
import SocialSection from "../components/SocialSection";
import ContactSection from "../components/ContactSection";
import Navbar from "../components/navBar";

export default function Home() {
    return (
        <>
            <HeroSection />
            <BandSection />
            <News />
            <Sponsors />
            <SocialSection />
            <ContactSection />
        </>
    );
}
