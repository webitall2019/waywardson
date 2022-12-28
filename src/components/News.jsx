import React from "react";
import eventOne from "../assets/img/3-column cards/news-1.svg";
import eventSecond from "../assets/img/3-column cards/news-2.svg";
import eventThird from "../assets/img/3-column cards/news-3.svg";

export default function News() {
    let events = [
        {
            text: "Garage Oil Spirits/American Badass Whiskey is now the official Sponsor of Wayward Son! We’re thrilled about this new endeavor, and can’t wait for y’all to try some for yourselves. Greasy, gritty, southern fried rock, blended with the ultra smooth taste of American Badass Whiskey.. What more could ya ask for?",
            picture: eventOne,
            subTitle: "NEW SPONSOR",
            subText: "Garage Oil Spirits",
        },
        {
            text: "We've signed with Emanant & have had our first single “Why Do You Love Me so Good” by frontman & keyboardist Rick Jones released on all streaming outlets! We'll be coming out with more tunes soon, so stay tuned! Checkout the new single below!",
            picture: eventSecond,
            subTitle: "NEW LABEL",
            subText: "Checkout the new single below!",
        },
        {
            text: "We've completed shooting on our first music video Why Do You Love Me So Good, and we're now in post-production! We still have a ways to go before its global release, please consider joining us on this exciting endeavor to help see it through. Click the button below to get started. Thank you for supporting local artists & music!",
            picture: eventThird,
            subTitle: "NEW MUSIC VIDEO",
            subText: "Way Ward Son",
        },
    ];
    return (
        <div className="mt-24">
            <div className="headline text-center">
                <h2 className="uppercase font-extrabold text-xl md:text-4xl">
                    Big news
                </h2>
                <p className="px-4 lg:w-3/5 inline-block mx-auto text-text-light-grey text-md lg:text-xl mt-4 mb-4">
                    Vitae aliquet nec ullamcorper sit amet risus nullam eget
                    felis semper quis lectus nulla at volutpat diam ut venenatis
                    tellus—in ornare.
                </p>
            </div>
            <div className="mt-20">
                <div className="container px-4">
                    <div className="lg:flex gap-x-4 ">
                        {events.map((event, index) => (
                            <div
                                key={index}
                                className="max-w-xl mx-auto mt-16 lg:mb-0 rounded-lg bg-text-dark-grey p-6 pt-0 lg:flex-1 flex flex-col"
                            >
                                <div className="img-wrap mx-auto text-center xl:w-[300px] h-[190px]">
                                    <img
                                        src={event.picture}
                                        alt="event"
                                        className="max-w-xs  mx-auto -mt-12 w-full h-full"
                                    />
                                </div>
                                <div className="text-lg h-3/4 flex flex-col justify-between">
                                    <p className="description text-text-light-grey mb-4">
                                        {event.text}
                                    </p>
                                    <p className="text-base font-medium">
                                        {event.subTitle}
                                        <span className="text-text-red ml-4">
                                            {event.subText}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="font-medium justify-center inline-flex w-full mt-24">
                    <a
                        href="https://www.paypal.com/donate/?hosted_button_id=3M697LQ66YTU4"
                        rel="nofollow"
                        className="bg-cta-blue p-4 hover:bg-indigo-700 rounded-sm"
                    >
                        Donate here
                    </a>
                </div>
            </div>
        </div>
    );
}
