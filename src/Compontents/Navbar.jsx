import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div>
            <nav className="fixed top-0 left-0 right-0 z-10 flex justify-around w-full py-4 shadow-md bg-white/10 backdrop-blur-md">


                <div className="grid justify-items-start">
                    <a className="cursor-pointer">
                        <h3 className="text-2xl font-medium text-blue-500">
                            <img className="object-fill h-14"
                                src="https://www.athulyahomecare.com/lp/ophthalmology/Assest/logo.png" alt="Store Logo" />
                        </h3>
                    </a>
                </div>


                <div className="items-center hidden space-x-8 lg:flex">
                    <Link to="/">   <a className="flex text-gray-600 transition-colors duration-300 cursor-pointer hover:text-blue-500">
                        Home
                    </a> </Link>

                    <Link to="/defaulter"><a className="flex font-semibold text-blue-600 transition-colors duration-300 cursor-pointer">
                        Defaulter
                    </a>
                    </Link>
                    <Link to="/"><a className="flex font-semibold text-blue-600 transition-colors duration-300 cursor-pointer">
                        Back
                    </a>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
