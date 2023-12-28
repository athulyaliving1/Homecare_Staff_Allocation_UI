import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const DrilldownChart = () => {

    const visitorsChartDrilldownHandler = (e) => {
        // Implement your drilldown logic here
        console.log("Drilldown clicked:", e);
    };

    const totalVisitors = 883000;

    const visitorsData = {
        "New vs Returning Visitors": [
            {
                click: visitorsChartDrilldownHandler,
                cursor: "pointer",
                explodeOnClick: false,
                innerRadius: "75%",
                legendMarkerType: "square",
                name: "New vs Returning Visitors",
                radius: "100%",
                showInLegend: true,
                startAngle: 90,
                type: "doughnut",
                dataPoints: [
                    {
                        y: 519960,
                        name: "Short Term Services",
                        color: "#E7823A",
                        drilldown: "New Visitors",
                    },
                    {
                        y: 363040,
                        name: "Returning Visitors",
                        color: "#546BD1",
                        drilldown: "Returning Visitors",
                    },
                ],
            },
        ],
        "New Visitors": [
            {
                color: "#E7823A",
                name: "Short Term Services",
                type: "column",
                dataPoints: [
                    { x: new Date("1 Jan 2017"), y: 19000 },
                    { x: new Date("1 Feb 2017"), y: 21040 },
                    { x: new Date("1 Mar 2017"), y: 21840 },
                    { x: new Date("1 Apr 2017"), y: 22760 },
                    { x: new Date("1 May 2017"), y: 24800 },
                    { x: new Date("1 Jun 2017"), y: 24400 },
                    { x: new Date("1 Jul 2017"), y: 25440 },
                    { x: new Date("1 Aug 2017"), y: 27720 },
                    { x: new Date("1 Sep 2017"), y: 27200 },
                    { x: new Date("1 Oct 2017"), y: 29280 },
                    { x: new Date("1 Nov 2017"), y: 31160 },
                    { x: new Date("1 Dec 2017"), y: 32400 }
                ],
            },
        ],
        "Returning Visitors": [
            {
                color: "#546BC1",
                name: "Long Term Services",
                type: "column",
                dataPoints: [
                    { x: new Date("1 Jan 2017"), y: 37000 },
                    { x: new Date("1 Feb 2017"), y: 39960 },
                    { x: new Date("1 Mar 2017"), y: 41160 },
                    { x: new Date("1 Apr 2017"), y: 42240 },
                    { x: new Date("1 May 2017"), y: 42200 },
                    { x: new Date("1 Jun 2017"), y: 43600 },
                    { x: new Date("1 Jul 2017"), y: 45560 },
                    { x: new Date("1 Aug 2017"), y: 47280 },
                    { x: new Date("1 Sep 2017"), y: 48800 },
                    { x: new Date("1 Oct 2017"), y: 52720 },
                    { x: new Date("1 Nov 2017"), y: 56840 },
                    { x: new Date("1 Dec 2017"), y: 58400 }
                ],
            },
        ],
    };

    const newVSReturningVisitorsOptions = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "New VS Returning Visitors",
        },
        subtitles: [
            {
                text: "Click on Any Segment to Drilldown",
                backgroundColor: "#2eacd1",
                fontSize: 16,
                fontColor: "white",
                padding: 5,
            },
        ],
        legend: {
            fontFamily: "calibri",
            fontSize: 14,
            itemTextFormatter: function (e) {
                return (
                    e.dataPoint.name +
                    ": " +
                    Math.round((e.dataPoint.y / totalVisitors) * 100) +
                    "%"
                );
            },
        },
        data: visitorsData["New vs Returning Visitors"],
    };

    return (
        <div>
            <CanvasJSChart
                options={newVSReturningVisitorsOptions}
                onDrilldown={visitorsChartDrilldownHandler}
            />
        </div>
    );
};

export default DrilldownChart;