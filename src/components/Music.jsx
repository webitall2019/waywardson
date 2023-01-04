import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import songCover from "../assets/img/logos/Logo.png";
import song from "../assets/music/Король и Шут - Лесник.mp3";
import axios from "axios";
// "http://localhost:3000/DB.json?playlist";
export default function Music() {
    // const [playlist, setPlaylist] = useState([]);

    // let getApiData = async () => {
    //     await axios
    //         .get("http://localhost:3000/DB.json?playlist")
    //         .then((response) => setPlaylist(response.data.playlist));
    // };
    // useEffect(() => {
    //     getApiData();
    //     console.log(playlist);
    // }, [playlist]);

    const playlists = [
        {
            name: "Korol",
            singer: "Korol i shut",
            cover: songCover,
            musicSrc:
                "https://waywardsonmusic.com/track/3278412/the-best-of-me.mp3",
        },
    ];
    return (
        <div>
            <ReactJkMusicPlayer
                audioLists={playlists}
                autoPlay={false}
                className="customPlayer"
                defaultPosition={{ right: 0, bottom: 0 }}
            />
        </div>
    );
}
