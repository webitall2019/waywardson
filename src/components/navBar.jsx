import { useState, useRef } from "react";
import logo from "../assets/img/logo.svg";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import bgPattern from "../assets/img/background/nav-pattern.png";
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    let [state, setState] = useState(false);
    const btnRef = useRef(null);
    let closeMenu = () => {
        let menuItems = document.querySelectorAll("header nav .mobile-menu a");
    };
    closeMenu();
    return (
        <Disclosure as="nav" className="">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img
                                        className="block h-16 w-auto lg:hidden"
                                        src={logo}
                                        alt="waywardson"
                                    />
                                    <img
                                        className="hidden h-16 w-auto lg:block"
                                        src={logo}
                                        alt="waywardson"
                                    />
                                </div>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <NavLink
                                        to="/"
                                        className="rounded-md  px-3 py-2 text-sm font-medium text-white hover:bg-red-600 hover:text-white"
                                    >
                                        Home
                                    </NavLink>
                                    <a
                                        href="#"
                                        className="rounded-md px-3 py-2 text-sm font-medium text-nav-item-light hover:bg-red-600 hover:text-white"
                                    >
                                        Music & More
                                    </a>
                                    <a
                                        href="#contact"
                                        className="rounded-md px-3 py-2 text-sm font-medium text-nav-item-light hover:bg-red-600 hover:text-white"
                                    >
                                        Contact
                                    </a>
                                    <a
                                        href="#shows"
                                        className="rounded-md px-3 py-2 text-sm font-medium text-nav-item-light hover:bg-red-600 hover:text-white"
                                    >
                                        Shows
                                    </a>
                                    <NavLink
                                        to="/epk"
                                        className="rounded-md px-3 py-2 text-sm font-medium text-nav-item-light hover:bg-red-600 hover:text-white"
                                    >
                                        EPK
                                    </NavLink>
                                </div>
                            </div>
                            <div className="hidden sm:block">
                                <NavLink
                                    to="/merch"
                                    className="bg-cta-blue sm:px-4 sm:py-4 hover:bg-indigo-700 hover:text-white rounded-sm"
                                >
                                    Buy Merch
                                </NavLink>

                                <img
                                    src={bgPattern}
                                    alt="background"
                                    className="absolute top-0 right-0 -z-10 2xl:w-[500px] "
                                />
                            </div>
                            <div className="flex sm:hidden ">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            ref={btnRef}
                                            onClick={() =>
                                                setState(() => (state = !state))
                                            }
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden mobile-menu bg-gray-900">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            <NavLink
                                to="/"
                                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
                            >
                                Home
                            </NavLink>

                            <Disclosure.Button
                                as="a"
                                href="#music&more"
                                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            >
                                Music & More
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#contact"
                                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            >
                                Contact
                            </Disclosure.Button>
                            <NavLink
                                to="/epk#shows"
                                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
                            >
                                Shows
                            </NavLink>
                            <NavLink
                                to="/epk"
                                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
                            >
                                EPK
                            </NavLink>
                            <NavLink
                                to="/merch"
                                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white hover:bg-cta-blue hover:text-white"
                            >
                                Buy Merch
                            </NavLink>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
