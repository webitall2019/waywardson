import React, { useEffect, useRef } from "react";
import song from "../assets/music/coi-pa4ka.mp3";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import playBtn from "../assets/img/icons/play-icon.svg";
import pauseBtn from "../assets/img/icons/pause-icon.svg";
import test from "../assets/img/big-logo.png";
export default function Tunes({ title, songs }) {
    const iframeRef = useRef(null);

    useEffect(() => {}, []);

    return (
        <div className="px-4 my-6 max-w-7xl mx-auto">
            <div className="container">
                <h3 className="text-4xl font-extrabold pb-6 border-b-[1px] border-[#ffffff20]">
                    {title ? title : "Tunes"}
                </h3>

                <div className="tunes lg:grid gap-3 grid-cols-2 mt-6">
                    {songs.map((item, index) => {
                        return (
                            <AudioPlayer
                                key={index + Math.random() + 100}
                                src={song}
                                onPlay={(e) => console.log("onPlay")}
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
                                            {/* {item.songName} */}
                                            some song name
                                        </h1>
                                        <p className="text-[#8B8B8C] text-xs">
                                            {/* {item.author} */}
                                            some author
                                        </p>
                                    </div>
                                }
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
