
import React from "react";
import { ErrorBoundary } from "react-error-boundary";

import useSWR from "swr";
// import axios from "axios";
import { API_URL } from "./utilities/API_URL.jsx";
// import Skeleton from "./Compontents/Skeleton.jsx";
import LocandChart from "./Compontents/LocandChart.jsx";
import LocAndStatusCharts from "./Compontents/Locandstatuscharts.jsx";
// import DrilldownChart from "./Compontents/Drilldowncharts.js";
// import DrillDownChartsTest from "./Compontents/DrillDownChartsTest.jsx";
import LocationBasedSchedule from "./Compontents/LocationBasedSchedule.jsx";
import { Skeleton1 } from "./Compontents/Skeleton.jsx";
import DrillDownChartsTest from "./Compontents/DrillDownChartsTest.jsx";



function Defaulter() {



    // const [apiData, setApiData] = useState([]);
    // // const [loading, setLoading] = useState(true);
    // const chartRef1 = useRef(null);
    // const [chartData, setChartData] = useState([]);
    // // const chartRef = useRef(null);





    const fetcher = async (url) => {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // Add any other headers if needed
                },
                body: JSON.stringify({
                    // Add any payload or data you want to send in the body
                    from_date: "2023-12-11",
                    to_date: "2023-12-11",
                    branch_id: "", // Add your branch_id value
                }),
            });

            return await response.json();

        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const { data: acceptedNotClockin, error } = useSWR(
        `${API_URL}/currentdatesummary?from_date=2023-12-11&to_date=2023-12-11&branch_id=`,
        fetcher,
        {
            refreshInterval: 30000, // Revalidate every 5 seconds
        }
    );




    // Rest of your code remains unchanged

    console.log(acceptedNotClockin);

    if (error) {
        return <div>Error fetching data</div>;
    }

    if (!acceptedNotClockin) {
        return <div><Skeleton1 /></div>;
    }

    const {
        data: { Accepted_Not_Clockin },
    } = acceptedNotClockin;
    const {
        data: { Accepted_And_Clockin },
    } = acceptedNotClockin;
    const {
        data: { Late_Count },
    } = acceptedNotClockin;
    const {
        data: { ClockIn_NotClockOut },
    } = acceptedNotClockin;
    const {
        data: { Unallocated },
    } = acceptedNotClockin;
    const {
        data: { Active_Services },
    } = acceptedNotClockin;
    const {
        data: { Short_Term },
    } = acceptedNotClockin;
    const {
        data: { Long_Term },
    } = acceptedNotClockin;
    const {
        data: { Active_Client },
    } = acceptedNotClockin;


    // const { Accepted_Not_Clockin } = acceptedNotClockin.data;Name

    // Now you can use Accepted_Not_Clockin in your component


    // const LoadingSpinner = () => (
    //     <div className="loading-spinner">
    //         <ul className="mt-5 space-y-3">
    //             <li className="w-full h-4 bg-gray-200 rounded-full "></li>
    //         </ul>
    //     </div>
    // );


    // Adjust the case as needed
    // const modifiedBranchName = branchNameToRemoveFrom.replace('Athulya Homecare', '');
    // console.log(chartData);







    return (
        <>

            <div className="p-5 bg-[#F5F7FE]">

                {acceptedNotClockin.length > 0 ? (
                    <div className="grid grid-cols-1 gap-5 mt-24 mb-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 3xl:grid-cols-6">
                        <div>
                            <div className="flex items-center justify-between p-3 font-medium text-black bg-white border-b-4 border-[#176291] shadow-lg rounded-2xl ">

                                <div className="flex items-center justify-center transition-all duration-300 transform bg-white rounded-full w-14 h-14 group-hover:rotate-12">
                                    <svg
                                        width="30"
                                        height="30"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="text-blue-800 transition-transform duration-500 ease-in-out transform stroke-current "
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        ></path>
                                    </svg>
                                </div>

                                <div className="text-right">




                                    <div>  <p className="text-2xl">{Accepted_Not_Clockin}</p></div>

                                    <p>Accepted_Not_Clockin</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between p-3 font-medium text-black bg-white border-b-4 border-[#176291] shadow-lg rounded-2xl ">
                                <div className="flex items-center justify-center transition-all duration-300 transform bg-white rounded-full w-14 h-14 group-hover:rotate-12">
                                    <svg
                                        width="30"
                                        height="30"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="text-blue-800 transition-transform duration-500 ease-in-out transform stroke-current"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="text-right">

                                    <p className="text-2xl">{Accepted_And_Clockin}</p>

                                    <p>Accepted Clock In</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between p-3 font-medium text-black bg-white border-b-4 border-[#176291] shadow-lg rounded-2xl ">
                                <div className="flex items-center justify-center transition-all duration-300 transform bg-white rounded-full w-14 h-14 group-hover:rotate-12">
                                    <svg
                                        width="30"
                                        height="30"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="text-blue-800 transition-transform duration-500 ease-in-out transform stroke-current "
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl">{Late_Count}</p>
                                    <p>Late Clock In</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between p-3 font-medium text-black bg-white border-b-4 border-[#176291] shadow-lg rounded-2xl ">
                                <div className="flex items-center justify-center transition-all duration-300 transform bg-white rounded-full w-14 h-14 group-hover:rotate-12">
                                    <svg
                                        width="30"
                                        height="30"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="text-blue-800 transition-transform duration-500 ease-in-out transform stroke-current "
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl">{ClockIn_NotClockOut}</p>
                                    <p>ClockIn_NotClockOut</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between p-3 font-medium text-black bg-white border-b-4 border-[#176291] shadow-lg rounded-2xl ">
                                <div className="flex items-center justify-center transition-all duration-300 transform bg-white rounded-full w-14 h-14 group-hover:rotate-12">
                                    <svg
                                        width="30"
                                        height="30"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="text-blue-800 transition-transform duration-500 ease-in-out transform stroke-current "
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl">{Unallocated}</p>
                                    <p>Unallocated</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between p-3 font-medium text-black bg-white border-b-4 border-[#176291] shadow-lg rounded-2xl ">
                                <div className="flex items-center justify-center transition-all duration-300 transform bg-white rounded-full w-14 h-14 group-hover:rotate-12">
                                    <svg
                                        width="30"
                                        height="30"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="text-blue-800 transition-transform duration-500 ease-in-out transform stroke-current "
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl">{Active_Services}</p>
                                    <p>Active Service </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between p-3 font-medium text-black bg-white border-b-4 border-[#176291] shadow-lg rounded-2xl ">
                                <div className="flex items-center justify-center transition-all duration-300 transform bg-white rounded-full w-14 h-14 group-hover:rotate-12">
                                    <svg
                                        width="30"
                                        height="30"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="text-blue-800 transition-transform duration-500 ease-in-out transform stroke-current "
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl"></p>
                                    <p>Leave</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between p-3 font-medium text-black bg-white border-b-4 border-[#176291] shadow-lg rounded-2xl ">
                                <div className="flex items-center justify-center transition-all duration-300 transform bg-white rounded-full w-14 h-14 group-hover:rotate-12">
                                    <svg
                                        width="30"
                                        height="30"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="text-blue-800 transition-transform duration-500 ease-in-out transform stroke-current "
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl"></p>
                                    <p>Reschedule Clockin </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between p-3 font-medium text-black bg-white border-b-4 border-[#176291] shadow-lg rounded-2xl ">
                                <div className="flex items-center justify-center transition-all duration-300 transform bg-white rounded-full w-14 h-14 group-hover:rotate-12">
                                    <svg
                                        width="30"
                                        height="30"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="text-blue-800 transition-transform duration-500 ease-in-out transform stroke-current "
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl"></p>
                                    <p>Active Clients </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between p-3 font-medium text-black bg-white border-b-4 border-[#176291] shadow-lg rounded-2xl ">
                                <div className="flex items-center justify-center transition-all duration-300 transform bg-white rounded-full w-14 h-14 group-hover:rotate-12">
                                    <svg
                                        width="30"
                                        height="30"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="text-blue-800 transition-transform duration-500 ease-in-out transform stroke-current "
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl"></p>
                                    <p>{Short_Term}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between p-3 font-medium text-black bg-white border-b-4 border-[#176291] shadow-lg rounded-2xl ">
                                <div className="flex items-center justify-center transition-all duration-300 transform bg-white rounded-full w-14 h-14 group-hover:rotate-12">
                                    <svg
                                        width="30"
                                        height="30"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="text-blue-800 transition-transform duration-500 ease-in-out transform stroke-current "
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl">{Long_Term}
                                        gfhdfghfgh</p>
                                    <p>{Long_Term}</p>
                                </div>
                            </div>
                        </div>
                    </div>


                ) : (

                    <Skeleton1 />


                )}


                <div className="grid grid-cols-1 gap-5 mt-24 mb-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 3xl:grid-cols-6">
                    <div>
                        <div className="flex items-center justify-between p-3 font-medium text-black bg-white border-b-4 border-[#176291] shadow-lg rounded-2xl ">

                            <div className="flex items-center justify-center transition-all duration-300 transform bg-white rounded-full w-14 h-14 group-hover:rotate-12">
                                <svg
                                    width="30"
                                    height="30"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="text-blue-800 transition-transform duration-500 ease-in-out transform stroke-current "
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    ></path>
                                </svg>
                            </div>

                            <div className="text-right">




                                <div>  <p className="text-2xl">{Accepted_Not_Clockin}</p></div>

                                <p>Accepted_Not_Clockin</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between p-3 font-medium text-black bg-white border-b-4 border-[#176291] shadow-lg rounded-2xl ">
                            <div className="flex items-center justify-center transition-all duration-300 transform bg-white rounded-full w-14 h-14 group-hover:rotate-12">
                                <svg
                                    width="30"
                                    height="30"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="text-blue-800 transition-transform duration-500 ease-in-out transform stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="text-right">

                                <p className="text-2xl">{Accepted_And_Clockin}</p>

                                <p>Accepted Clock In</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between p-3 font-medium text-black bg-white border-b-4 border-[#176291] shadow-lg rounded-2xl ">
                            <div className="flex items-center justify-center transition-all duration-300 transform bg-white rounded-full w-14 h-14 group-hover:rotate-12">
                                <svg
                                    width="30"
                                    height="30"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="text-blue-800 transition-transform duration-500 ease-in-out transform stroke-current "
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl">{Late_Count}</p>
                                <p>Late Clock In</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between p-3 font-medium text-black bg-white border-b-4 border-[#176291] shadow-lg rounded-2xl ">
                            <div className="flex items-center justify-center transition-all duration-300 transform bg-white rounded-full w-14 h-14 group-hover:rotate-12">
                                <svg
                                    width="30"
                                    height="30"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="text-blue-800 transition-transform duration-500 ease-in-out transform stroke-current "
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl">{ClockIn_NotClockOut}</p>
                                <p>ClockIn_NotClockOut</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between p-3 font-medium text-black bg-white border-b-4 border-[#176291] shadow-lg rounded-2xl ">
                            <div className="flex items-center justify-center transition-all duration-300 transform bg-white rounded-full w-14 h-14 group-hover:rotate-12">
                                <svg
                                    width="30"
                                    height="30"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="text-blue-800 transition-transform duration-500 ease-in-out transform stroke-current "
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl">{Unallocated}</p>
                                <p>Unallocated</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between p-3 font-medium text-black bg-white border-b-4 border-[#176291] shadow-lg rounded-2xl ">
                            <div className="flex items-center justify-center transition-all duration-300 transform bg-white rounded-full w-14 h-14 group-hover:rotate-12">
                                <svg
                                    width="30"
                                    height="30"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="text-blue-800 transition-transform duration-500 ease-in-out transform stroke-current "
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl">{Active_Services}</p>
                                <p>Active Service </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between p-3 font-medium text-black bg-white border-b-4 border-[#176291] shadow-lg rounded-2xl ">
                            <div className="flex items-center justify-center transition-all duration-300 transform bg-white rounded-full w-14 h-14 group-hover:rotate-12">
                                <svg
                                    width="30"
                                    height="30"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="text-blue-800 transition-transform duration-500 ease-in-out transform stroke-current "
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl"></p>
                                <p>Leave</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between p-3 font-medium text-black bg-white border-b-4 border-[#176291] shadow-lg rounded-2xl ">
                            <div className="flex items-center justify-center transition-all duration-300 transform bg-white rounded-full w-14 h-14 group-hover:rotate-12">
                                <svg
                                    width="30"
                                    height="30"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="text-blue-800 transition-transform duration-500 ease-in-out transform stroke-current "
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl"></p>
                                <p>Reschedule Clockin </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between p-3 font-medium text-black bg-white border-b-4 border-[#176291] shadow-lg rounded-2xl ">
                            <div className="flex items-center justify-center transition-all duration-300 transform bg-white rounded-full w-14 h-14 group-hover:rotate-12">
                                <svg
                                    width="30"
                                    height="30"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="text-blue-800 transition-transform duration-500 ease-in-out transform stroke-current "
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl">{Active_Client}</p>
                                <p>Active Clients </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between p-3 font-medium text-black bg-white border-b-4 border-[#176291] shadow-lg rounded-2xl ">
                            <div className="flex items-center justify-center transition-all duration-300 transform bg-white rounded-full w-14 h-14 group-hover:rotate-12">
                                <svg
                                    width="30"
                                    height="30"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="text-blue-800 transition-transform duration-500 ease-in-out transform stroke-current "
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl">{Short_Term}</p>
                                <p>Short Term Services</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between p-3 font-medium text-black bg-white border-b-4 border-[#176291] shadow-lg rounded-2xl ">
                            <div className="flex items-center justify-center transition-all duration-300 transform bg-white rounded-full w-14 h-14 group-hover:rotate-12">
                                <svg
                                    width="30"
                                    height="30"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="text-blue-800 transition-transform duration-500 ease-in-out transform stroke-current "
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl">{Long_Term}</p>
                                <p>Long Term Services</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-5">
                    <div className="rounded-3xl">
                        {/*  Last 7 Days Status Treads */}
                        <LocandChart />
                    </div>

                    <div className="">
                        {/*  Today Location Wise Treads */}
                        <LocAndStatusCharts />
                    </div>

                </div>

                <div className="grid gap-5 mt-5 xl:grid-cols-6">
                    <ErrorBoundary fallback={<div>Something went wrong</div>}>
                        <div className="col-span-4">

                            {/*  Last 30 Days Schedule  */}
                            <LocationBasedSchedule />

                        </div>
                        <div className="col-span-2 gap-5 ">

                            {/*  Dill Down Services  */}
                            <DrillDownChartsTest />
                        </div>
                    </ErrorBoundary>
                </div>
            </div>

        </>
    )

}

export default Defaulter;





