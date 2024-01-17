import React, { useState, useEffect } from "react";
import axios from "axios";
import CanvasJSReact from "@canvasjs/react-charts";
import { ErrorBoundary } from "react-error-boundary";
import { API_URL } from "../utilities/API_URL";


const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function LocationBasedSchedule() {
    const [chartData, setChartData] = useState([]);
    // const chartRef1 = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(
                    `${API_URL}/locationsummary`,
                    {
                        // Add any necessary POST data here
                    }
                );

                setChartData(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const distinctLocations = () => {
        const locationsMap = new Map();
        chartData.forEach((entry) => {
            const locationName = entry.branch_name;
            if (!locationsMap.has(locationName)) {
                locationsMap.set(locationName, []);
            }
            locationsMap.get(locationName).push(entry);
        });

        return Array.from(locationsMap.entries()).map(([branchName, data]) => ({
            branchName,
            data,
        }));
    };
    // ...

    const toggleDataSeries = (e) => {
        if (e.dataSeries) {
            e.dataSeries.visible = !e.dataSeries.visible;
            e.chart.render();
        }
    };

    const getChartData = () => {
        const distinctChartData = distinctLocations();

        const formattedData = distinctChartData.map(({ branchName, data }) => ({
            type: "splineArea",
            showInLegend: true,
            name: branchName,
            legendText: branchName,
            visible: true,  // Ensure the series is initially visible
            dataPoints: data.map((entry) => ({
                x: new Date(entry.formatted_date),
                y: entry.schedule_count,
            })),
        }));

        return {
            animationEnabled: true,
            theme: "light2",
            title: {
                text: "Last 30 Days Schedule Treads",
            },
            axisX: {
                valueFormatString: "DD-MM-YYYY",
                labelAngle: -50,
            },
            axisY: {
                title: "Schedule Count",
            },
            legend: {
                cursor: "pointer",
                itemclick: toggleDataSeries,
                reversed: true,
            },
            data: formattedData,
        };
    };

    // ...


    console.log(chartData);

    return (
        <div>
            <ErrorBoundary fallback={<div>Something went wrong</div>}>
                <div>
                    {chartData.length > 0 ? (
                        <CanvasJSChart options={getChartData()} />
                    ) : (
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

                    )}

                </div>
            </ErrorBoundary>
        </div>
    );
}

export default LocationBasedSchedule;
