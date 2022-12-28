import React, { useState } from "react";
import merchBanner from "../assets/img/merch-banner.png";
import FsLightbox from "fslightbox-react";
import merch from "../assets/img/merch/merch.png";
import merch2 from "../assets/img/merch/merch-2.png";
import merch5 from "../assets/img/merch/merch-5.png";
import merch10 from "../assets/img/merch/merch-10.png";
import arrow from "../assets/img/merch/arrow.svg";
import walletIcon from "../assets/img/icons/Wallet.svg";
import shinees from "../assets/img/icons/Paper-Upload.svg";
import heart from "../assets/img/icons/Bookmark.svg";
import ContactSection from "../components/ContactSection";
import SocialSection from "../components/SocialSection";
export default function Merch() {
    let images = [merch, merch2, merch5, merch10];
    const [toggler, setToggler] = useState(false);
    const features = [
        {
            name: "Best Price",
            description:
                "Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis neque.",
            icon: walletIcon,
        },
        {
            name: "Best Product",
            description:
                "Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis neque.",
            icon: shinees,
        },
        {
            name: "Show Love",
            description:
                "Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis neque.",
            icon: heart,
        },
    ];

    return (
        <>
            <FsLightbox toggler={toggler} sources={images} />
            <div className="container px-4 py-6">
                <div className="relative h-[250px] sm:h-auto">
                    <img
                        src={merchBanner}
                        alt="wayward son banner"
                        className="mx-auto object-cover w-full h-full"
                    />
                    <div className="headline w-2/3 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center">
                        <h1 className="uppercase font-extrabold text-3xl lg:text-6xl mb-4">
                            MERCH STORE
                        </h1>
                        <p className="text-[#C7D2FE] font-medium drop-shadow-xl contrast-125 mb-6">
                            Checkout our new brandaed merch including T's, Tanks
                            & more.
                        </p>
                        <div className="bg-cta-blue inline-block px-6 py-2 cursor-pointer hover:bg-indigo-400">
                            <a
                                href="https://www.storefrontier.com/waywardsonmerch"
                                target="blank"
                                nofollow="true"
                            >
                                Get yours now
                            </a>
                        </div>
                    </div>
                </div>
                <div className="headline text-center mt-20">
                    <h2 className="text-2xl lg:text-4xl uppercase font-extrabold mb-4">
                        Latest Merch
                    </h2>
                    <p className="md:text-xl text-text-grey mb-12">
                        Ornare sagittis, suspendisse in hendrerit quis. Sed dui
                        aliquet lectus sit pretium egestas vel mattis neque.
                    </p>
                    <ul className="merch-list text-left flex flex-wrap gap-y-14 md:gap-x-4 lg:gap-x-10 justify-center">
                        {images.map((item, index) => {
                            return (
                                <li
                                    onClick={() => setToggler(!toggler)}
                                    key={index + Math.random() * 100}
                                    className="cursor-pointer basis-full lg:basis-[45%] pb-[60%] sm:pb-[45%] lg:pb-[40%] relative drop-shadow-lg max-w-[480px]"
                                >
                                    <img
                                        src={item}
                                        alt="merch"
                                        className="mx-auto w-full h-full object-cover rounded-lg absolute l-0 t-0"
                                    />
                                    <span className="circle z-10 rounded-[50%] w-[70px] h-[70px] md:w-[90px] md:h-[90px] bg-white flex absolute justify-center items-center -bottom-[35px] -md:bottom-[45px] left-1/2 -translate-x-1/2">
                                        <span className="inner rounded-[50%] bg-text-dark-grey w-[45px] h-[45px] md:w-[60px] md:h-[60px] flex relative justify-center ">
                                            <img
                                                src={arrow}
                                                alt="arrow"
                                                className="max-w-[15px]"
                                            />
                                        </span>
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="text-center my-20">
                    <a
                        href="https://www.storefrontier.com/waywardsonmerch"
                        nofollow="true"
                        target="blank"
                        className="bg-cta-blue inline-block px-6 py-2 cursor-pointer hover:bg-indigo-400 mx-auto"
                    >
                        Get yours now
                    </a>
                </div>

                <div className="bg-[#25282C] py-6 md:py-12 lg:py-16 px-4 md:px-10 lg:px-14">
                    <div className="mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
                        <h2 className="text-3xl font-extrabold mb-20 text-center">
                            Designed with passion
                        </h2>
                        <dl className="grid grid-cols-1 gap-10 xl:gap-16 lg:grid lg:grid-cols-3">
                            {features.map((feature) => (
                                <div
                                    key={feature.name}
                                    className="text-white text-center md:text-left"
                                >
                                    <dt>
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl mb-10 mx-auto md:mx-0">
                                            <img
                                                src={feature.icon}
                                                className="h-full w-full"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <p className="mt-6 text-2xl font-extrabold leading-8 tracking-tight">
                                            {feature.name}
                                        </p>
                                    </dt>
                                    <dd className="mt-6 text-xl leading-7 text-text-white-contrast">
                                        {feature.description}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <SocialSection />
            <ContactSection />
        </>
    );
}
