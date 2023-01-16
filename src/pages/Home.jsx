import React from "react";
import BandSection from "../components/BandSection";
import HeroSection from "../components/HeroSection";
import News from "../components/News";
import Sponsors from "../components/Sponsors";
import SocialSection from "../components/SocialSection";
import ContactSection from "../components/ContactSection";
import Music from "../components/Music";
import Tunes from "../components/Tunes";
import songOne from "../assets/music/coi-pa4ka.mp3";
import songTwo from "../assets/music/Король и Шут - Лесник.mp3";
import Navbar from "../components/navBar";
import Footer from "../components/Footer";

const songs = [
    {
        songName: "Song Name",
        author: "Song Author ",
        songShortText:
            "Checkout the new single 'Why Do You Love Me So Good' by Wayward Son front-man Song Author ! Released under our Record Label Emanant Music!Available Now For Purchase! You can hear it live at all of our upcoming shows! Enjoy!",
        songSrc: songOne,
    },
    {
        songName: "Song Name",
        author: "Song Author ",
        songShortText:
            "Checkout the new single 'Why Do You Love Me So Good' by Wayward Son front-man Song Author ! Released under our Record Label Emanant Music!Available Now For Purchase! You can hear it live at all of our upcoming shows! Enjoy!",
        songSrc: songTwo,
    },
    {
        songName: "Song Name",
        author: "Song Author ",
        songShortText:
            "Checkout the new single 'Why Do You Love Me So Good' by Wayward Son front-man Song Author ! Released under our Record Label Emanant Music!Available Now For Purchase! You can hear it live at all of our upcoming shows! Enjoy!",
        songSrc: songOne,
    },
    {
        songName: "Song Name",
        author: "Song Author ",
        songShortText:
            "Checkout the new single 'Why Do You Love Me So Good' by Wayward Son front-man Song Author ! Released under our Record Label Emanant Music!Available Now For Purchase! You can hear it live at all of our upcoming shows! Enjoy!",
        songSrc: songTwo,
    },
    {
        songName: "Song NameD",
        author: "Song Author ",
        songShortText:
            "Checkout the new single 'Why Do You Love Me So Good' by Wayward Son front-man Song Author ! Released under our Record Label Emanant Music!Available Now For Purchase! You can hear it live at all of our upcoming shows! Enjoy!",
        songSrc: songOne,
    },
    {
        songName: "Song Name",
        author: "Song Author ",
        songShortText:
            "Checkout the new single 'Why Do You Love Me So Good' by Wayward Son front-man Song Author ! Released under our Record Label Emanant Music!Available Now For Purchase! You can hear it live at all of our upcoming shows! Enjoy!",
        songSrc: songTwo,
    },
];

export default function Home() {
    return (
        <>
            <Navbar />
            <Music />
            <HeroSection />
            <BandSection />
            <News />
            <Sponsors />
            <Tunes songs={songs} id="tunes" />
            <SocialSection />
            <ContactSection />
            <Footer />
        </>
    );
}
