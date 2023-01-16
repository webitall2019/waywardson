import React, { useEffect, useRef, useState } from "react";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";

export default function Tunes({ songs }) {
    let [isPlaying, setIsPlaying] = useState(false);
    let [allPlayers, setAllPlayers] = useState([]);
    const [currentSong, setCurrentSong] = useState(null);

    const muteOtherAudio = (songIndex) => {
        setCurrentSong(songIndex);
    };
    const findAllPlayers = (item) => {
        allPlayers.push(item);
    };

    return (
        <div className="px-4 my-6 lg:my-12 max-w-7xl mx-auto" id="tunes">
            <div className="container">
                <h3 className="text-4xl font-extrabold pb-6 border-b-[1px] border-[#ffffff20]">
                    Tunes
                </h3>

                <div className="tunes lg:grid gap-3 grid-cols-2 mt-6">
                    {songs.map((item, songIndex) => {
                        return (
                            <AudioPlayer
                                key={songIndex + Math.random() + 100}
                                src={item.songSrc}
                                onLoadStart={() => findAllPlayers(songIndex)}
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
            </div>
        </div>
    );
}
