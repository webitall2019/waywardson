import React from "react";
import scene from "../assets/img/background/404.jpeg";
export default function NotFound() {
    return (
        <div className="h-full">
            <div className="container">
                <div className="relative mx-auto">
                    <img src={scene} alt="empty scene" className="mx-auto" />
                    <div className="bg-white w-1/2 lg:w-1/3 p-6 pt-8 absolute top-1/3 -translate-y-1/3 left-1/2 -translate-x-1/2 text-text-red text-center">
                        <h1 className="text-2xl lg:text-6xl font-extrabold mb-4">
                            404
                        </h1>
                        <h2 className="text-xl lg:text-4xl font-bold mb-8">
                            Sorry nothing here
                        </h2>
                        <a
                            href="/"
                            className="text-black font-medium text-lg hover:text-text-red"
                        >
                            Go Home
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
