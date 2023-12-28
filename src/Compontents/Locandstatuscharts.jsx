import React, { useEffect, useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

import { API_URL } from "../utilities/API_URL";
import { ErrorBoundary } from "react-error-boundary";

// Utility function to get distinct statuses
// const getDistinctStatuses = (data) => {
//     const statuses = new Set();
//     data.forEach((item) => {
//         Object.keys(item).forEach((key) => {
//             if (key !== 'branch_name' ) {
//                 statuses.add(key);
//             }
//         });
//     });
//     return Array.from(statuses);
// };

const LocAndStatusCharts = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        // Fetch data from the API using the POST method
        fetch(`${API_URL}/statuswiselocationwisecharts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setChartData(data.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const getStatuses = () => {
        const statuses = new Set();
        chartData.forEach((item) => {
            Object.keys(item).forEach((key) => {
                if (key !== "branch_name") {
                    statuses.add(key);
                }
            });
        });
        return Array.from(statuses);
    };

    const getDistinctBranches = () => {
        const branches = new Set();
        chartData.forEach((item) => {
            branches.add(item.branch_name);
        });
        return Array.from(branches);
    };

    // Custom colors for each status
    const statusColors = {
        // Add your custom colors here for each status
        status1: "#5F8670",
        status2: "#FF9800",
        status3: "#E91E63",
        status4: "#2196F3",
        status5: "#9C27B0",
        status6: "#4CAF50",
        status7: "#190482",
    };

    const toggleDataSeries = (e) => {
        console.log("Toggle Data Series:", e);
        if (e.chart) {
            e.chart.data.forEach((dataSeries) => {
                if (dataSeries !== e.dataSeries) {
                    dataSeries.visible = !dataSeries.visible;
                }
            });
            e.chart.render();
        }
    };

    const options = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Today Location Wise Treads",
        },
        axisY: {
            title: "Count",
        },
        axisX: {
            title: "Branch Name",
        },
        toolTip: {
            shared: true,
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries,
            reversed: true,
        },
        data: getStatuses().map((status, index) => ({
            type: "stackedBar",
            showInLegend: true,
            name: status,
            color: statusColors[`status${index + 1}`],
            visible: true,
            dataPoints: getDistinctBranches().map((branch) => {
                const item = chartData.find(
                    (dataItem) => dataItem.branch_name === branch
                );
                return {
                    y: item ? item[status] : 0,
                    label: branch,
                };
            }),
        })),
    };

    console.log(options);

    return (
        <div>
            <ErrorBoundary fallback={<div>Something went wrong</div>}>
                <div>
                    {chartData.length > 0 ? (
                        <CanvasJSChart options={options} />
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
};

export default LocAndStatusCharts;
