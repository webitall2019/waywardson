import React from "react";

export default function ContactSection() {
    return (
        <div className="pb-12" id="contact">
            <div className="relative">
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="relative overflow-hidden bg-[#7E0E0F] px-6 py-10 shadow-xl sm:px-12 sm:py-20">
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
                        >
                            <svg
                                className="absolute inset-0 h-full w-full"
                                preserveAspectRatio="xMidYMid slice"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 1463 360"
                            >
                                <path
                                    className="text-[#8e1f1f] text-opacity-40"
                                    fill="currentColor"
                                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                                />
                                <path
                                    className="text-[#9d0000] text-opacity-40"
                                    fill="currentColor"
                                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                                />
                            </svg>
                        </div>
                        <div className="relative">
                            <div className="sm:text-center">
                                <h2 className="text-3xl font-bold  text-white sm:text-3xl">
                                    CONTACT US
                                </h2>
                            </div>
                            <form
                                action="#"
                                className="mt-12 sm:mx-auto sm:flex sm:max-w-xl"
                            >
                                <div className="min-w-0 flex-1">
                                    <label
                                        htmlFor="cta-email"
                                        className="sr-only"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        id="cta-email"
                                        type="email"
                                        className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                                        placeholder="Enter your email to join our mailing list"
                                    />
                                </div>
                                <div className="mt-4 sm:mt-0 sm:ml-3">
                                    <button
                                        type="submit"
                                        className="block w-full rounded-md border border-transparent bg-cta-blue px-5 py-3 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10"
                                    >
                                        Sign up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
