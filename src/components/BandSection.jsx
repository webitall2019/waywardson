import React from "react";
import vox from "../assets/img/Avatar-1.png";
import guiter from "../assets/img/Avatar-2.png";
import bass from "../assets/img/Avatar-3.png";
import drums from "../assets/img/Avatar-4.png";
let person = [
    { name: "Rick Jones", role: "Lead Vox/Keys", image: vox },
    { name: "James Roberts", role: "Guitar/Vox", image: guiter },
    { name: '"CB" Brown', role: "Bass/Vox", image: bass },
    { name: "Jeff Siegel", role: "Drums/Percussion", image: drums },
];

export default function BandSection() {
    return (
        <div className="mt-12 lg:mt-24">
            <div className="headline text-center">
                <h2 className="uppercase font-extrabold text-xl md:text-4xl">
                    The band
                </h2>
                <p className="px-4 inline-block mx-auto text-text-light-grey text-md lg:text-xl mt-4 mb-12">
                    Ornare sagittis, suspendisse in hendrerit quis. Sed dui
                    aliquet lectus sit pretium egestas vel mattis neque.
                </p>
            </div>
            <div className="container px-4">
                <div className="cards flex flex-wrap gap-4 lg:gap-8 justify-center">
                    {person.map((person, index) => {
                        return (
                            <div
                                key={index}
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
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
