import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import drilldown from "highcharts-drilldown";
import axios from "axios";
import { API_URL } from "../utilities/API_URL";

drilldown(Highcharts);

function DrillDownChartsTest() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data using a POST request
        const fetchData = async () => {
            try {
                const response = await axios.post(`${API_URL}/servicesdrilldown`, {
                    // Your POST data
                });

                setData(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const longTermCount = data.filter(
        (item) => item.service_category_type === "Long-Term"
    ).length;
    const shortTermCount = data.filter(
        (item) => item.service_category_type === "Short-Term"
    ).length;

    const chartConfig = {
        chart: {
            type: "column",
        },
        title: {
            text: "Service Categories",
            style: {
                fontSize: "30px", // Adjust the font size as needed
            },
        },
        xAxis: {
            type: "category",
        },
        yAxis: {
            title: {
                text: "Service Count",
            },
        },
        legend: {
            enabled: false,
        },
        series: [
            {
                name: "Total Services",
                colorByPoint: true,
                data: [
                    {
                        name: "Long-Term",
                        y: longTermCount,
                        drilldown: "Long-Term",
                    },
                    {
                        name: "Short-Term",
                        y: shortTermCount,
                        drilldown: "Short-Term",
                    },
                ],
            },
        ],
        drilldown: {
            series: [
                {
                    id: "Long-Term",
                    data: data
                        .filter((item) => item.service_category_type === "Long-Term")
                        .map((item) => [item.display_name, item.service_required]),
                },
                {
                    id: "Short-Term",
                    data: data
                        .filter((item) => item.service_category_type === "Short-Term")
                        .map((item) => [item.display_name, item.service_required]),
                },
            ],
        },
    };

    return (
        <>
            <div>
                {data.length > 0 ? (
                    <HighchartsReact highcharts={Highcharts} options={chartConfig} />
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
        </>
    );
}

export default DrillDownChartsTest;
