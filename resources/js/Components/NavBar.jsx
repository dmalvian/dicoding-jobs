import React, { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/inertia-react";
import {
    FiBell,
    FiMenu,
    FiX,
    FiChevronDown,
    FiBriefcase,
} from "react-icons/fi";

export default function NavBar({ auth }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <nav className="bg-white border-b border-gray-100 fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="shrink-0 flex items-center">
                            <Link href="/">
                                <ApplicationLogo className="block h-9 w-auto text-gray-500" />
                            </Link>
                        </div>
                        <div className="hidden h-2.5 border-l-2 m-auto sm:ml-5 sm:flex"></div>
                        <div className="hidden space-x-8 sm:-my-px sm:ml-5 sm:flex">
                            <NavLink href="/">Looking for job</NavLink>
                            <NavLink href="/">Hiring</NavLink>
                        </div>
                    </div>

                    {auth.user ? (
                        <div className="flex space-x-2">
                            <div className="hidden sm:flex sm:items-center">
                                <div className="flex items-center relative left-7">
                                    <FiBriefcase className="text-xl text-blue-500" />
                                </div>
                                <select className="text-sm pl-9">
                                    <option>Siap untuk di-interview</option>
                                    <option>Belum siap di-interview</option>
                                </select>
                            </div>

                            <div className="flex items-center ml-6">
                                <div className="ml-3 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    <div className="rounded-full border-blue-400 border-solid border-2">
                                                        <img
                                                            src="/images/profiles/default.png"
                                                            alt={
                                                                auth.user?.name
                                                            }
                                                        />
                                                    </div>

                                                    <FiChevronDown className="ml-1" />
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <div className="px-4">
                                                <div className="font-medium text-base text-gray-800">
                                                    {auth.user?.name}
                                                </div>
                                                <div className="font-medium text-sm text-gray-500">
                                                    {auth.user?.email}
                                                </div>
                                            </div>
                                            <div className="mt-3 space-y-1">
                                                <Dropdown.Link
                                                    href={route("logout")}
                                                    method="post"
                                                    as="button"
                                                >
                                                    Log Out
                                                </Dropdown.Link>
                                            </div>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>

                                <FiBell className="text-xl ml-2" />
                            </div>
                        </div>
                    ) : (
                        <div className="hidden sm:flex sm:items-center sm:space-x-2">
                            <Link
                                className="inline-flex items-center h-8 px-4 m-2 text-sm text-navy transition-colors duration-150 bg-white text-navy rounded focus:shadow-outline hover:text-white hover:bg-navy"
                                href={route("login")}
                            >
                                Login
                            </Link>
                            <Link
                                className="inline-flex items-center h-8 px-4 m-2 text-sm text-white transition-colors duration-150 bg-navy rounded focus:shadow-outline"
                                href={route("register")}
                            >
                                Register
                            </Link>
                        </div>
                    )}
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown(
                                    (previousState) => !previousState
                                )
                            }
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            <FiMenu
                                className={
                                    !showingNavigationDropdown
                                        ? "inline-flex text-xl"
                                        : "hidden text-xl"
                                }
                            />
                            <FiX
                                className={
                                    showingNavigationDropdown
                                        ? "inline-flex text-xl"
                                        : "hidden text-xl"
                                }
                            />
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={
                    (showingNavigationDropdown ? "block" : "hidden") +
                    " sm:hidden"
                }
            >
                <div className="pt-2 pb-3 space-y-1">
                    {auth.user ? (
                        <div className="flex items-center">
                            <div className="flex items-center relative left-7">
                                <FiBriefcase className="text-xl text-blue-500" />
                            </div>
                            <select className="text-sm pl-9">
                                <option>Siap untuk di-interview</option>
                                <option>Belum siap di-interview</option>
                            </select>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-2">
                            <Link
                                className="inline-flex items-center h-8 px-4 m-2 text-sm text-navy transition-colors duration-150 bg-white rounded focus:shadow-outline hover:text-white hover:bg-navy"
                                href={route("login")}
                            >
                                Login
                            </Link>
                            <Link
                                className="inline-flex items-center h-8 px-4 m-2 text-sm text-white transition-colors duration-150 bg-navy rounded focus:shadow-outline"
                                href={route("register")}
                            >
                                Register
                            </Link>
                        </div>
                    )}
                    <ResponsiveNavLink href="/">
                        Looking for job
                    </ResponsiveNavLink>
                    <ResponsiveNavLink href="/">Hiring</ResponsiveNavLink>
                </div>
            </div>
        </nav>
    );
}
