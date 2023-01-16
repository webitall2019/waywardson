import React from "react";
import badass from "../assets/img/badass-whiskey.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Sponsors() {
    return (
        <div className="mt-16 lg:mt-28">
            <div className="container">
                <div className="headline text-center">
                    <AnimationOnScroll animateIn="animate__fadeIn">
                        <h2 className="uppercase font-extrabold text-xl md:text-4xl">
                            Our Sponsor
                        </h2>
                        <p className="px-4 lg:w-4/5 inline-block mx-auto text-text-light-grey text-md lg:text-xl mt-4 mb-4">
                            Garage Oil Spirits/American Badass Whiskey is now
                            the official Sponsor of Wayward Son! We're thrilled
                            about this new endeavor, and can't wait for y'all to
                            try some for yourselves. Greasy, gritty, southern
                            fried rock, blended with the ultra smooth taste of
                            American Badass Whiskey.. What more could ya ask
                            for? Get Ya Some At Garage Oil Spirits
                        </p>
                    </AnimationOnScroll>
                </div>
                <div className="mt-14">
                    <AnimationOnScroll animateIn="animate__fadeIn" duration={3}>
                        <img
                            src={badass}
                            alt="badass whiskey"
                            className="mx-auto"
                        />
                    </AnimationOnScroll>
                </div>
            </div>
        </div>
    );
}
