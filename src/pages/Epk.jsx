import React, { useState, useEffect } from "react";
import Shows from "../components/Shows";
import Tunes from "../components/Tunes";
import "reactjs-popup/dist/index.css";
import SocialSection from "../components/SocialSection";
import bigLogo from "../assets/img/logos/big-logo-2.svg";
import shape from "../assets/img/Combined-Shape.svg";
import vox from "../assets/img/Avatar-1.png";
import guiter from "../assets/img/Avatar-2.png";
import bass from "../assets/img/Avatar-3.png";
import drums from "../assets/img/Avatar-4.png";
import shapeSmall from "../assets/img/combined-shape-2.svg";
import riderIcon from "../assets/img/icons/rider-icon.svg";
import riderIcon2 from "../assets/img/icons/rider-icon-2.svg";
import riderIcon3 from "../assets/img/icons/rider-icon-3.svg";
import riderIcon4 from "../assets/img/icons/rider-icon-4.svg";
import riderIcon5 from "../assets/img/icons/rider-icon-5.svg";
import songOne from "../assets/music/coi-pa4ka.mp3";
import songTwo from "../assets/music/Король и Шут - Лесник.mp3";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import Navbar from "../components/navBar";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Footer from "../components/Footer";

export default function Epk() {
    let person = [
        { name: "Rick Jones", role: "Lead Vox/Keys", image: vox },
        { name: "James Roberts", role: "Guitar/Vox", image: guiter },
        { name: '"CB" Brown', role: "Bass/Vox", image: bass },
        { name: "Jeff Siegel", role: "Drums/Percussion", image: drums },
    ];
    let riderList = [
        {
            riderName: "Production/Tech Rider",
            link: "https://waywardsonmusic.com/files/1169486/production-rider.pdf",
            icon: riderIcon,
        },
        {
            riderName: "Default Stage Plot",
            link: "https://waywardsonmusic.com/files/1169487/default-stage-plot.pdf",
            icon: riderIcon2,
        },
        {
            riderName: "Default Stage Plot With B3",
            link: "https://waywardsonmusic.com/files/1169488/default-stage-plot-with-b3.pdf",
            icon: riderIcon3,
        },
        {
            riderName: "Backline Rider",
            link: "https://waywardsonmusic.com/files/1169489/backline-rider.pdf",
            icon: riderIcon4,
        },
        {
            riderName: "Travel Rider",
            link: "https://waywardsonmusic.com/files/1169490/travel-rider.pdf",
            icon: riderIcon5,
        },
    ];
    const songs = [
        {
            songName: "WHY DO YOU LOVE ME SO GOOD",
            author: "Rick Jones",
            songShortText:
                "Checkout the new single 'Why Do You Love Me So Good' by Wayward Son front-man Rick Jones! Released under our Record Label Emanant Music!Available Now For Purchase! You can hear it live at all of our upcoming shows! Enjoy!",
            songSrc: songOne,
        },
        {
            songName: "WHY DO YOU LOVE ME SO GOOD",
            author: "Rick Jones",
            songShortText:
                "Checkout the new single 'Why Do You Love Me So Good' by Wayward Son front-man Rick Jones! Released under our Record Label Emanant Music!Available Now For Purchase! You can hear it live at all of our upcoming shows! Enjoy!",
            songSrc: songTwo,
        },
    ];

    return (
        <div>
            <Navbar />
            <div className="container px-4 mx-auto max-w-lg lg:max-w-4xl pt-10 lg:pt-16">
                <div className="headline text-center ">
                    <AnimationOnScroll animateIn="animate__fadeIn" duration={2}>
                        <h1 className="uppercase font-extrabold text-3xl lg:text-5xl mb-4">
                            Jim Lamon - Candidate for U.S. Senate in AZ.
                        </h1>
                    </AnimationOnScroll>
                    <p className="text-text-white-contrast font-medium contrast-125 mb-6 max-w-3xl mx-auto">
                        As a born and raised Alabama boy who has lived in
                        Arizona for the last few decades, I invited Wayward Son
                        to play at a fundraiser for my US Senate run, and they
                        did not disappoint. They made the event a lot of fun,
                        and I would recommend them to anyone looking for a good
                        ole southern band for their event. Great job guys!” -
                        Jim Lamon - Candidate for U.S. Senate in AZ.
                    </p>
                </div>
                <form className="mt-8 sm:flex justify-center">
                    <label htmlFor="email-address" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="w-full rounded-md border-gray-300 px-5 py-3 placeholder-gray-900 focus:border-red-400 focus:ring-red-900 sm:max-w-md text-text-dark-grey text-center md:text-left"
                        placeholder="Enter your email to join our mailing list"
                    />
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                        <button
                            type="submit"
                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-cta-blue px-5 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
            <div className="logo-section relative">
                <div className="shape absolute -left-5 md:left-0 bottom-0 w-24 md:w-1/6">
                    <AnimationOnScroll animateIn="animate__fadeInLeft">
                        <img src={shape} alt="shape" />
                    </AnimationOnScroll>
                </div>
                <div className="big-logo mt-12 mx-auto w-2/3 md:w-1/3">
                    <AnimationOnScroll animateIn="animate__pulse">
                        <img src={bigLogo} alt="Waywardson logo" />
                    </AnimationOnScroll>
                </div>
            </div>
            <div className="mt-12 lg:mt-24 lg:pb-20 relative overflow-hidden">
                <div className="headline text-center px-4">
                    <AnimationOnScroll animateIn="animate__fadeInDownBig">
                        <h2 className="uppercase font-extrabold text-xl md:text-4xl">
                            GREASY, GRITTY, SOUTHERN FRIED ROCK
                        </h2>

                        <p className="px-4 inline-block mx-auto text-text-light-grey text-md lg:text-xl mt-4 mb-12 lg:w-3/4">
                            Wayward Son delivers a greasy, gritty, soulful sound
                            by blending country and southern rock music, and
                            giving it a massive kick in the pants! There's a
                            legacy connecting the swagger of Lynyrd Skynyrd &
                            the Allman Brothers, the rustic expansiveness of the
                            Marshall Tucker Band, The Outlaws, The Eagles &
                            more! So come experience the rough-and-ready mix of
                            raw guitar power, shuffling grooves, soulful
                            acoustic ballads & lump in your throat vocals, and
                            see what this band is all about!
                            <br />
                            <br />
                            Wayward Son are hittin' the road touring their new
                            tunes along with their high-energy Southern Rock
                            show in a town near you! Check out some of their
                            featured tunes below including the title track to
                            their upcoming music video "Why Do You Love Me So
                            Good", set for national release soon!
                        </p>
                    </AnimationOnScroll>
                </div>

                <div className="container px-4 ">
                    <div className="cards flex flex-wrap gap-4 lg:gap-8 justify-center">
                        {person.map((person, index) => {
                            return (
                                <AnimationOnScroll
                                    animateIn="animate__fadeIn"
                                    duration={3}
                                    key={index + Math.random() * 100}
                                    className="card bg-text-dark-grey rounded-lg w-full md:w-[48%] lg:w-1/3 max-w-lg text-center p-10"
                                >
                                    <div className="img-wrap mb-6 md:mb-10">
                                        <img
                                            src={person.image}
                                            alt="Avatar"
                                            className="mx-auto max-w-[224px] w-full object-cover"
                                        />
                                    </div>
                                    <p className="text-base font-medium md:text-lg">
                                        {person.name}
                                    </p>
                                    <p className="text-base md:text-lg font-medium text-text-grey">
                                        {person.role}
                                    </p>
                                </AnimationOnScroll>
                            );
                        })}
                    </div>
                </div>
                <div className="hidden md:block -z-[1] absolute w-28 xl:w-[150px] right-0 -bottom-0">
                    <img src={shapeSmall} alt="shape" className="w-full" />
                </div>
            </div>
            {/* <Tunes songs={songs} /> */}
            <div className="px-4 my-6 lg:my-12 max-w-7xl mx-auto" id="tunes">
                <div className="container">
                    <AnimationOnScroll animateIn="animate__fadeIn">
                        <h3 className="text-4xl font-extrabold pb-6 border-b-[1px] border-[#ffffff20]">
                            Tunes
                        </h3>

                        <div className="tunes lg:grid gap-3 grid-cols-2 mt-6">
                            {songs.map((item, songIndex) => {
                                return (
                                    <AudioPlayer
                                        key={songIndex + Math.random() + 100}
                                        src={item.songSrc}
                                        // onLoadStart={() =>
                                        //     findAllPlayers(songIndex)
                                        // }
                                        // onPlay={(e) => muteOtherAudio(songIndex)}
                                        layout="horizontal-reverse"
                                        showJumpControls={false}
                                        customVolumeControls={[]}
                                        customAdditionalControls={[]}
                                        customProgressBarSection={[
                                            RHAP_UI.PROGRESS_BAR,
                                            RHAP_UI.CURRENT_TIME,
                                            <div className="px-2">/ </div>,
                                            RHAP_UI.DURATION,
                                        ]}
                                        header={
                                            <div>
                                                <h1 className="uppercase font-medium text-lg">
                                                    {item.songName}
                                                    {/* some song name */}
                                                </h1>
                                                <p className="text-[#8B8B8C] text-xs">
                                                    {item.author}
                                                    {/* some author */}
                                                </p>
                                            </div>
                                        }
                                        footer={
                                            <div>
                                                <p className="text-lg text-text-grey">
                                                    {item.songShortText}
                                                </p>
                                            </div>
                                        }
                                    />
                                );
                            })}
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
            <AnimationOnScroll animateIn="animate__fadeIn" duration={2}>
                <Shows />
            </AnimationOnScroll>
            <div className="text-center px-4 mt-10 lg:mt-28">
                <AnimationOnScroll animateIn="animate__fadeIn" duration={2}>
                    <h2 className="uppercase font-extrabold text-xl md:text-4xl text-center my-10">
                        RIDER & STAGE PLOT
                    </h2>
                    <p className="text-lg md:text-xl text-text-white-contrast">
                        For All Production, Stage, Tech & Travel Rider Info,
                        Please Download Below.
                    </p>
                </AnimationOnScroll>
            </div>
            <div className="riders-list w-full px-4 md:flex gap-6 lg:gap-10 justify-center flex-wrap mt-6">
                {riderList.map((rider, index) => {
                    return (
                        <AnimationOnScroll
                            animateIn="animate__fadeIn"
                            duration={2}
                            key={index + Math.random() + 100}
                            className="bg-card-background mb-4 md:mb-0 px-4 py-6 rounded-lg flex basis-[30%] flex-shrink-0 flex-col justify-between"
                        >
                            <img
                                src={rider.icon}
                                alt="icon"
                                className="block w-10 h-10 mb-4"
                            />
                            <a
                                href={rider.link}
                                target="black"
                                className="font-medium sm:text-lg md:text-xl underline hover:no-underline"
                            >
                                {rider.riderName}
                            </a>
                        </AnimationOnScroll>
                    );
                })}
            </div>
            <div className="pb-12 mt-24">
                <div className="relative">
                    <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="relative overflow-hidden bg-[#7E0E0F] px-6 py-10 shadow-xl sm:px-12 sm:py-20">
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
                            >
                                <svg
                                    className="absolute inset-0 h-full w-full"
                                    preserveAspectRatio="xMidYMid slice"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 1463 360"
                                >
                                    <path
                                        className="text-[#8e1f1f] text-opacity-40"
                                        fill="currentColor"
                                        d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                                    />
                                    <path
                                        className="text-[#9d0000] text-opacity-40"
                                        fill="currentColor"
                                        d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                                    />
                                </svg>
                            </div>
                            <div className="relative">
                                <div className="sm:text-center">
                                    <h2 className="text-3xl font-bold  text-white sm:text-3xl mb-6">
                                        BOOKING
                                    </h2>
                                    <p className=" md:text-xl mb-8 md:mb-12">
                                        Bring the high-energy southern rock show
                                        of Wayward Son to your Club, Casino,
                                        Festival, Corporate or Private event by
                                        clicking on “BOOK NOW” below. We look
                                        forward to hearing from you!
                                    </p>
                                    <a
                                        href="mailto:bookwaywardson@gmail.com"
                                        target="blank"
                                        nofollow="true"
                                        className="bg-cta-blue inline-block px-6 py-4 rounded-md transition-duration-500 transform hover:scale-90 hover:text-white"
                                    >
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SocialSection />
            <Footer />
        </div>
    );
}
