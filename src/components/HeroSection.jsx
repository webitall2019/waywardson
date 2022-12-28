import React from "react";
import bigLogo from "../assets/img/big-logo.png";
import shape from "../assets/img/Combined-Shape.svg";
export default function HeroSection() {
    return (
        <>
            <div
                className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-center"
                id="home"
            >
                <h2 className="inline-block text-3xl font-extrabold mb-5 text-[#D9E3EA] sm:block sm:text-4xl lg:text-[50px] lg:leading-[62px]">
                    Greasy, Gritty, Southern Fried Rock
                </h2>
                <p className="inline text-lg lg:text-xl text-text-white-contrast sm:block lg:text-[20px] lg:leading-[28px] w-3/5 mx-auto ">
                    Wayward Son delivers a greasy, gritty, soulful sound,
                    blending country & southern rock music and giving it a
                    massive kick in the pants! So bring their high-energy
                    Southern Rock show to your town & book us for your next
                    event!
                </p>
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
                <div className="shape absolute -left-5 md:left-0 bottom-0 w-24 md:w-1/5">
                    <img src={shape} alt="shape" />
                </div>
                <div className="big-logo mt-12 mx-auto">
                    <img src={bigLogo} alt="Waywardson logo" />
                </div>
            </div>
        </>
    );
}
