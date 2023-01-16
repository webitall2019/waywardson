import react, { useState, useEffect, useRef, forwardRef } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import shareIcon from "../assets/img/icons/share-icon.svg";

const Shows = forwardRef((props, showsRef) => {
    const [shows, setShows] = useState([]);

    let getEvents = async () => {
        await axios
            .get("/DB.json?shows")
            .then((response) => setShows(response.data.shows));
    };

    useEffect(() => {
        getEvents();
    }, [shows.length]);

    return (
        <div
            className="max-w-7xl mx-auto px-4 mt-10 lg:mt-28"
            ref={showsRef}
            id="shows"
        >
            <h2 className="uppercase font-extrabold text-xl md:text-4xl text-center mb-8">
                UPCOMING SHOWS
            </h2>
            <div className="show-cards md:grid  md:grid-cols-3 gap-5 content-around">
                {shows.map((event, index) => {
                    return (
                        <div
                            key={index + Math.random() * 100}
                            className="card mb-4 md:mb-0 rounded-lg bg-card-background py-4 px-3 grid content-between min-h-[180px] md:min-h-[230px]"
                        >
                            <h2 className="font-medium text-lg lg:text-[22px] uppercase">
                                {event.title}
                            </h2>
                            <p className="text-text-white-contrast">
                                {event.describe}
                            </p>

                            <div className="card-footer flex items-center justify-between self-end text-[#8B8B8C]">
                                <span className="uppercase">{event.date}</span>
                                <Popup
                                    trigger={
                                        <div
                                            className="cursor-pointer"
                                            onClick={() =>
                                                navigator.clipboard.writeText(
                                                    event.share
                                                )
                                            }
                                        >
                                            <img src={shareIcon} alt="icon" />
                                        </div>
                                    }
                                    position="right center"
                                >
                                    <div className="text-black">
                                        Popup content here !!
                                    </div>
                                </Popup>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
});
export default Shows;
