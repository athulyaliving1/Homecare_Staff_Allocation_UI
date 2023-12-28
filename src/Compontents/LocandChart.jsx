import React, { useState, useEffect, useRef } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import axios from "axios";
import { ErrorBoundary } from "react-error-boundary";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
import { API_URL } from "../utilities/API_URL";

function LocandChart() {
    const [chartData, setChartData] = useState([]);

    const chartRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(
                    `${API_URL}/statuswisecharts`,
                    {
                        // Add any required request parameters here
                    }
                );

                if (!response.data.success) {
                    throw new Error(`API error!`);
                }

                setChartData(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error.message);
            }
        };

        fetchData();
    }, []);

    const dataPoints = chartData.map((value) => ({
        x: new Date(value.schedule_date),
        y: value.Total_Cases,  // Use Total_Cases instead of total_Cases
        acceptedNotClockin: value.Accepted_Not_Clockin,
        acceptedAndClockin: value.Accepted_And_Clockin,
        clockinAndNotClockout: value.Clockin_And_NotClockout,
        unallocated: value.Unallocated,
        activeServices: value.Active_Services,
    }));


    const toogleDataSeries = (e) => {

        const dataSeries = e.dataSeries;
        if (typeof dataSeries.visible === 'undefined' || dataSeries.visible) {
            dataSeries.visible = false;
        } else {
            dataSeries.visible = true;
        }
        chartRef.current.render();

    }




    const options = {
        animationEnabled: true,
        theme: 'light2',
        title: {
            text: 'Last 7 Days Status Trends',
        },
        axisX: {
            title: 'Schedule Date',
        },
        axisY: {
            title: 'Status Count',
        },
        toolTip: {
            shared: true,
        },
        legend: {
            cursor: 'pointer',
            itemclick: toogleDataSeries,
            reversed: true,
        },
        data: [
            {
                type: "stackedBar",
                name: "Accepted Not Clockin",
                showInLegend: true,
                color: '#0c84a5',
                dataPoints: dataPoints.map(point => ({ x: point.x, y: point.acceptedNotClockin })),
            },
            {
                type: "stackedBar",
                name: "Accepted And Clockin",
                showInLegend: true,
                color: '#f6c85f',
                dataPoints: dataPoints.map(point => ({ x: point.x, y: point.acceptedAndClockin })),
            },
            {
                type: "stackedBar",
                name: "Total_Cases",
                color: '#6f4e7c',
                showInLegend: true,
                dataPoints: dataPoints.map(point => ({ x: point.x, y: point.y })),
            },
            {
                type: "stackedBar",
                name: "Clockin_And_NotClockout",
                color: '#FED9ED',
                dataPoints: dataPoints.map(point => ({ x: point.x, y: point.clockinAndNotClockout })),
            },
            {
                type: "stackedBar",
                name: "Unallocated",
                color: '#9dd867',
                dataPoints: dataPoints.map(point => ({ x: point.x, y: point.unallocated })),
            },
            {
                type: "stackedBar",
                name: "activeServices",
                color: '#025464',
                dataPoints: dataPoints.map(point => ({ x: point.x, y: point.activeServices })),
            }
        ],
    };

    console.log(options);




    return (
        <div>
            <ErrorBoundary fallback={<div>Something went wrong</div>}>
                <div className="">
                    {chartData.length > 0 ? (
                        <CanvasJSChart
                            options={options}
                            onRef={(ref) => (chartRef.current = ref)}
                        />
                    ) : (
                        <div>

                            <div className="col-span-4">
                                <div>

                                    <div role="status" className="animate-pulse">
                                        <div className="h-2.5 bg-gray-300 rounded-full  max-w-full mb-2.5 mx-auto"></div>
                                        <div className="h-2.5 mx-auto bg-gray-300 rounded-full  max-w-[540px] mb-2.5"></div>

                                        <div className="h-2.5 bg-gray-300 rounded-full  max-w-full mb-2.5 mx-auto"></div>
                                        <div className="h-2.5 mx-auto bg-gray-300 rounded-full  max-w-[540px] mb-2.5"></div>

                                        <div className="h-2.5 bg-gray-300 rounded-full  max-w-full mb-2.5 mx-auto"></div>
                                        <div className="h-2.5 mx-auto bg-gray-300 rounded-full  max-w-[540px] mb-2.5"></div>

                                        <div className="h-2.5 bg-gray-300 rounded-full  max-w-full mb-2.5 mx-auto"></div>
                                        <div className="h-2.5 mx-auto bg-gray-300 rounded-full  max-w-[540px] mb-2.5"></div>
                                        <div className="h-2.5 bg-gray-300 rounded-full  max-w-full mb-2.5 mx-auto"></div>
                                        <div className="h-2.5 mx-auto bg-gray-300 rounded-full  max-w-[540px] mb-2.5"></div>
                                        <div className="h-2.5 bg-gray-300 rounded-full  max-w-full mb-2.5 mx-auto"></div>
                                        <div className="h-2.5 mx-auto bg-gray-300 rounded-full  max-w-[540px] mb-2.5"></div>
                                        <div className="h-2.5 bg-gray-300 rounded-full  max-w-full mb-2.5 mx-auto"></div>
                                        <div className="h-2.5 mx-auto bg-gray-300 rounded-full  max-w-[540px] mb-2.5"></div>
                                        <div className="h-2.5 bg-gray-300 rounded-full  max-w-full mb-2.5 mx-auto"></div>
                                        <div className="h-2.5 mx-auto bg-gray-300 rounded-full  max-w-[540px] mb-2.5"></div>
                                        <div className="h-2.5 bg-gray-300 rounded-full  max-w-full mb-2.5 mx-auto"></div>
                                        <div className="h-2.5 mx-auto bg-gray-300 rounded-full  max-w-[540px] mb-2.5"></div>
                                        <div className="h-2.5 bg-gray-300 rounded-full  max-w-full mb-2.5 mx-auto"></div>
                                        <div className="h-2.5 mx-auto bg-gray-300 rounded-full  max-w-[540px] mb-2.5"></div>
                                        <div className="h-2.5 bg-gray-300 rounded-full  max-w-full mb-2.5 mx-auto"></div>


                                        <span className="sr-only">Loading...</span>
                                    </div>

                                </div>


                            </div>


                        </div>

                    )}
                </div>
            </ErrorBoundary>
        </div>
    );
}

export default LocandChart;
