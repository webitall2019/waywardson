import React from "react";
import BgGradient from "../assets/img/background/bg-gradient.png";
import logo1 from "../assets/img/logos/facebook.png";
import logo3 from "../assets/img/logos/youtube.png";
import logo4 from "../assets/img/logos/melody.png";
import logo5 from "../assets/img/logos/mp3.png";
import logo6 from "../assets/img/logos/spotify.png";
import logo7 from "../assets/img/logos/soundcloud.png";

export default function SocialSection() {
    let apps = [
        { logo: logo1, href: "https://www.facebook.com/waywardsonmusic" },

        {
            logo: logo3,
            href: "https://www.youtube.com/watch?v=lA9OIzte1ks&ab_channel=RickJones-Topic",
        },
        {
            logo: logo4,
            href: "https://music.apple.com/us/album/why-do-you-love-me-so-good-single/1636358824",
        },
        {
            logo: logo5,
            href: "https://www.amazon.com/music/player/albums/B0B7L8HK8F?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_uKoiMD83UD3EWjf3f4tV5PnWz",
        },
        {
            logo: logo6,
            href: "https://open.spotify.com/album/2pU6sDRIuxjKbUY6VFCoRq?si=mEys039rTBeJ8hu872XPKA&nd=1",
        },
        {
            logo: logo7,
            href: "https://soundcloud.com/rickjonesofficial/why-do-you-love-me-so-good",
        },
    ];
    return (
        <div className={`container relative pt-20 pb-8`}>
            <div className="absolute-shape absolute -translate-x-[50%] left-1/2 w-full -z-[1] bottom-0">
                <img
                    src={BgGradient}
                    alt="gradient"
                    className="w-full object-cover"
                />
            </div>
            <div className="headline text-center mb-8">
                <h2 className="uppercase font-extrabold text-xl md:text-4xl">
                    Join Social Media
                </h2>
                <p className="px-4 lg:w-3/5 inline-block mx-auto text-text-light-grey text-md lg:text-xl mt-4">
                    Follow us on Facebook, download the full version our latest
                    single & more below!
                </p>
            </div>
            <ul className="social-list">
                {apps.map((app, index) => {
                    return (
                        <li key={index + Math.random()}>
                            <a href={app.href} target="blank" className="">
                                <img src={app.logo} alt="app logo" />
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
