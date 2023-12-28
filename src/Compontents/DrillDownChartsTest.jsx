import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import drilldown from "highcharts-drilldown";
import axios from "axios";
import { API_URL } from "../utilities/API_URL";

drilldown(Highcharts);

function DrillDownChartsTest() {
    const [chartOptions, setChartOptions] = useState(null);

    useEffect(() => {
        // Function to fetch data from the API
        const fetchData = async () => {
            try {
                const response = await axios.post(`${API_URL}/servicetypetotal`);
                const responseData = response.data;

                console.log(responseData);

                // Update the chart options with the API response data
                setChartOptions({
                    chart: {
                        type: "column",
                    },
                    title: {
                        text: "Drill Down",
                    },
                    series: [
                        {
                            name: "Services",
                            colorByPoint: true,
                            data: responseData.data.map((item) => ({
                                name: item.service_type,
                                y: item.patient_count,
                                drilldown: item.service_type.toLowerCase().replace(" ", "_"),
                            })),
                        },
                    ],
                    drilldown: {
                        series: responseData.data.map((item) => ({
                            id: item.service_type.toLowerCase().replace(" ", "_"),
                            data: [
                                [item.service_type, item.patient_count],
                                ["Total Services", item.total_services],
                                ["Long Term Services", item.long_term_services],
                                ["Short Term Services", item.short_term_services],
                            ],
                        })),
                    },
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        // Call the fetch function
        fetchData();
    }, []); // Empty dependency array ensures that the effect runs once when the component mounts

    return (
        <div className="App">
            {chartOptions && (
                <HighchartsReact highcharts={Highcharts} options={chartOptions} />
            )}
        </div>
    );
}

export default DrillDownChartsTest;
