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
/**
 *
 *
 * @return {*} 
/**
 *
 *
 * @return {*} 
/**
 *
 *
 * @return {*} 
/**
 *
 *
 * @return {*} 
/**
 *
 *
 * @return {*} 
 */
function Defaulter() {
    // const [apiData, setApiData] = useState([]);
    // // const [loading, setLoading] = useState(true);
    // const chartRef1 = useRef(null);
    // const [chartData, setChartData] = useState([]);
    // // const chartRef = useRef(null);
/**
 *
 *
 * @param {*} url
 * @return {*} 
 */
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
        return (
            <div>
                <Skeleton1 />
            </div>
        );
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
                                        className="text-red-800 transition-transform duration-500 ease-in-out transform stroke-current "
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
                                    <div>
                                        {" "}
                                        <p className="text-2xl">{Accepted_Not_Clockin}</p>
                                    </div>

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
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.86 21.43L9 22l-3-2l-3 2V3h18v7.2c-.9-.38-2-.2-2.76.55l-8.38 8.38zm2-1.47L18 13.83l2.03 2.04L13.9 22h-2.04zm8.53-7.81a.24.24 0 0 0-.08-.06a.497.497 0 0 0-.62.04l-.02.02l-.98.98l2.04 2.04l.98-.98c.2-.19.2-.52 0-.72z"/></svg>
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
                                    <p className="text-2xl">
                                        {Long_Term}
                                        gfhdfghfgh
                                    </p>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m1.91 9.5l-1.3 2.55a1 1 0 0 0 0 1a1 1 0 0 0 .87.47h11a1 1 0 0 0 .87-.47a1 1 0 0 0 0-1L12.09 9.5ZM5 4.5l2 2l2-2m-2 2v-6" /><path d="M2.5 4.63a1 1 0 0 0-.5.87v4h10v-4a1 1 0 0 0-.5-.87" /></g></svg>
                            </div>

                            <div className="text-right">
                                <div>
                                    {" "}
                                    <p className="text-2xl">{Accepted_Not_Clockin}</p>
                                </div>

                                <p>Accepted_Not_Clockin</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between p-3 font-medium text-black bg-white border-b-4 border-[#176291] shadow-lg rounded-2xl ">
                            <div className="flex items-center justify-center transition-all duration-300 transform bg-white rounded-full w-14 h-14 group-hover:rotate-12">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><path fill="currentColor" fillRule="evenodd" d="M16 5h13l9 9v23a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m19 9l-6-6v5a1 1 0 0 0 1 1zm-2.293 7.293a1 1 0 0 1 0 1.414L24 31.414l-4.707-4.707a1 1 0 0 1 1.414-1.414L24 28.586l7.293-7.293a1 1 0 0 1 1.414 0" clipRule="evenodd" /><path fill="currentColor" d="M12 11h-2v27a5 5 0 0 0 5 5h19v-2H15a3 3 0 0 1-3-3z" /></svg>
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

                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16q0-.425-.288-.712T12 15q-.425 0-.712.288T11 16q0 .425.288.713T12 17m-1-4h2V7h-2zm-6 8q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4.2q.325-.9 1.088-1.45T12 1q.95 0 1.713.55T14.8 3H19q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm7-16.75q.325 0 .538-.213t.212-.537q0-.325-.213-.537T12 2.75q-.325 0-.537.213t-.213.537q0 .325.213.538T12 4.25" /></svg>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-1.85 0-3.488-.712T5.65 18.35q-1.225-1.225-1.937-2.863T3 12q0-1.95.75-3.65t2.1-2.925q.325-.275.725-.263t.675.288l5.45 5.45q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L6.6 7.6q-.75.9-1.175 2.013T5 12q0 2.9 2.05 4.95T12 19q2.9 0 4.95-2.05T19 12q0-2.675-1.713-4.612T13 5.1V6q0 .425-.288.713T12 7q-.425 0-.712-.288T11 6V4q0-.425.288-.712T12 3q1.85 0 3.488.713T18.35 5.65q1.225 1.225 1.938 2.863T21 12q0 1.85-.712 3.488T18.35 18.35q-1.225 1.225-2.863 1.938T12 21m-5-8q-.425 0-.712-.288T6 12q0-.425.288-.712T7 11q.425 0 .713.288T8 12q0 .425-.288.713T7 13m5 5q-.425 0-.712-.288T11 17q0-.425.288-.712T12 16q.425 0 .713.288T13 17q0 .425-.288.713T12 18m5-5q-.425 0-.712-.288T16 12q0-.425.288-.712T17 11q.425 0 .713.288T18 12q0 .425-.288.713T17 13" /></svg>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M17 17q.625 0 1.063-.437T18.5 15.5q0-.625-.437-1.062T17 14q-.625 0-1.062.438T15.5 15.5q0 .625.438 1.063T17 17m0 3q.775 0 1.425-.363t1.05-.962q-.55-.325-1.175-.5T17 18q-.675 0-1.3.175t-1.175.5q.4.6 1.05.963T17 20m0 2q-2.075 0-3.537-1.463T12 17q0-2.075 1.463-3.537T17 12q2.075 0 3.538 1.463T22 17q0 2.075-1.463 3.538T17 22m-5 0q-3.475-.875-5.738-3.988T4 11.1V6.375q0-.625.363-1.125t.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725T20 6.375v4.3q-.65-.325-1.463-.5T17 10q-2.9 0-4.95 2.05T10 17q0 1.55.588 2.8t1.487 2.175q-.025 0-.037.013T12 22" /></svg>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect width="11" height="13" x="1.5" y=".5" rx="1" /><path d="M1.5 10.5h11M4.5 3h5m-5 2.5h5M4.5 8h3" /></g></svg>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><g fill="currentColor"><path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" /><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" /><path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z" /></g></svg>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.86 21.43L9 22l-3-2l-3 2V3h18v7.2c-.9-.38-2-.2-2.76.55l-8.38 8.38zm2-1.47L18 13.83l2.03 2.04L13.9 22h-2.04zm8.53-7.81a.24.24 0 0 0-.08-.06a.497.497 0 0 0-.62.04l-.02.02l-.98.98l2.04 2.04l.98-.98c.2-.19.2-.52 0-.72z"/></svg>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M13 16H7a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m-4-6h2a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2m12 2h-3V3a1 1 0 0 0-.5-.87a1 1 0 0 0-1 0l-3 1.72l-3-1.72a1 1 0 0 0-1 0l-3 1.72l-3-1.72a1 1 0 0 0-1 0A1 1 0 0 0 2 3v16a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1M5 20a1 1 0 0 1-1-1V4.73l2 1.14a1.08 1.08 0 0 0 1 0l3-1.72l3 1.72a1.08 1.08 0 0 0 1 0l2-1.14V19a3 3 0 0 0 .18 1Zm15-1a1 1 0 0 1-2 0v-5h2Zm-7-7H7a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2"/></svg>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M5.44 7.47h5.26v1.25H5.44zm0 2.36h5.26v1.25H5.44zm0-4.76h5.26v1.25H5.44z"/><path fill="currentColor" d="M11.34 1L9.64.28L8.08 1L6.41.28L4.84 1L2.46 0v16l2.38-1l1.57.69L8.08 15l1.56.69l1.7-.69l2.2 1V0zm.94 13.11l-.92-.41l-1.69.69l-1.57-.72l-1.68.69l-1.55-.69l-1.15.47V1.86l1.15.47l1.55-.69l1.68.69l1.57-.69l1.69.69l.92-.41z"/></svg>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M17 2H2v15h2V4h13zm4 20l-2.5-1.68L16 22l-2.5-1.68L11 22l-2.5-1.68L6 22V6h15zM10 10v2h7v-2zm5 4h-5v2h5z"/></svg>
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
    );
}

export default Defaulter;
