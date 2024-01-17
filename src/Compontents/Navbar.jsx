import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [activeTab, setActiveTab] = useState("");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <nav className="fixed top-0 left-0 right-0 z-10 flex justify-around w-full py-4 shadow-md bg-white/10 backdrop-blur-md">
                <div className="grid justify-items-start">
                    <a className="cursor-pointer">
                        <h3 className="text-2xl font-medium text-blue-500">
                            <img
                                className="object-fill h-14"
                                src="https://www.athulyahomecare.com/lp/ophthalmology/Assest/logo.png"
                                alt="Store Logo"
                            />
                        </h3>
                    </a>
                </div>

                <div className="items-center hidden space-x-8 lg:flex">
                    <Link to="/home">
                        <a
                            className={`flex font-semibold text-blue-600 transition-colors duration-300 cursor-pointer ${activeTab === "home"
                                ? 'inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-sky-600 border border-sky-800 rounded-md shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}"'
                                : "inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                }`}
                            onClick={() => handleTabClick("home")}
                        >
                            Home
                        </a>
                    </Link>

                    <Link to="/defaulter">
                        <a
                            className={`flex font-semibold text-blue-600 transition-colors duration-300 cursor-pointer ${activeTab === "defaulter"
                                ? 'inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-sky-600 border border-sky-800 rounded-md shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}"'
                                : "inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                }`}
                            onClick={() => handleTabClick("defaulter")}
                        >
                            Defaulter
                        </a>
                    </Link>

                    <Link to="/">
                        <a
                            className={`flex font-semibold text-blue-600 transition-colors duration-300 cursor-pointer ${activeTab === "back" ? "text-pink-500" : ""
                                }`}
                            onClick={() => handleTabClick("back")}
                        >
                            Back
                        </a>
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
