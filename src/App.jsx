import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Defaulter from "./Defaulter";
import Navbar from "./Compontents/Navbar";
import { ErrorBoundary } from "react-error-boundary";
import Skeleton from "./Compontents/Skeleton";
import Drilldowncharts from "./Compontents/Drilldowncharts";
import LocandChart from "./Compontents/LocandChart";
import Locandstatuscharts from "./Compontents/Locandstatuscharts";
import DrillDownChartsTest from "./Compontents/DrillDownChartsTest";
import LocationBasedSchedule from "./Compontents/LocationBasedSchedule";



function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary
        fallback={
          <div className="flex items-center justify-center w-full h-screen px-16 bg-gray-200 md:px-0">
            <div className="flex flex-col items-center justify-center px-4 py-8 bg-white border border-gray-200 rounded-lg shadow-2xl md:px-8 lg:px-24">
              <p className="text-6xl font-bold tracking-wider text-gray-300 md:text-7xl lg:text-9xl">
                500
              </p>
              <p className="mt-4 text-2xl font-bold tracking-wider text-gray-500 md:text-3xl lg:text-5xl">
                Server Error
              </p>
              <p className="py-2 mt-8 text-center text-gray-500 border-y-2">
                Whoops, something went wrong on our servers.
              </p>
            </div>
          </div>
        }
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/home" element={<Main />}></Route>
          <Route path="/defaulter" element={<Defaulter />}></Route>
          <Route path="/skelectonloader" element={<Skeleton />}></Route>
          <Route path="/drildowncharts" element={<Drilldowncharts />}></Route>
          <Route path="/locandcharts" element={<LocandChart />}></Route>
          <Route path="/locandstatuscharts" element={<Locandstatuscharts />}></Route>
          <Route path="/drilldownchartstest" element={<DrillDownChartsTest />}></Route>
          <Route path="/locationbasedschedule" element={<LocationBasedSchedule />}></Route>

        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
