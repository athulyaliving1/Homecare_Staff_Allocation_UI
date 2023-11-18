import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Records from "./Records";
import Pagination from "./Pagination";
import { API_URL } from "./utilities/API_URL";
import Select from "react-select";

import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function App() {
  const chartRef = useRef(null);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [post, setPost] = useState([]);
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedService, setSelectedServices] = useState("");
  const [stackcharts, setStackcharts] = useState([]);
  // const [pyramidcharts, setPyramidcharts] = useState([]);
  const [hourscharts, setHourscharts] = useState([]);
  // const [selectedCaregiver, setSelectedCaregiver] = useState("");
  // const [selectedPatient, setSelectedPatient] = useState("");

  const [services, setServices] = useState([]);
  const [status, setStatus] = useState([]);
  // const [caregiver, setcaregiver] = useState([]);
  const [selectedStaffCaregiver, setSelectedStaffCaregiver] = useState(null);
  const [caregiveroption, setSelectedCaregiveroption] = useState(null);
  // const [patient, setpatient] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);



  console.log(stackcharts);




  useEffect(() => {
    handlefilter();
  }, [])


  useEffect(() => {
    axios.post(`${API_URL}/reports`).then((response) => {
      setPost(response.data.data);
      console.log(response.data.data);
    });

    axios.get(`${API_URL}/branches`).then((response) => {
      setBranches(response.data.data);
      console.log(response.data.data);
    });

    axios.get(`${API_URL}/services`).then((response) => {
      console.log(response.data.data);
      setServices(response.data.data);
    });


    axios.get(`${API_URL}/caregivers`).then((response) => {
      console.log(response.data.data);
      // setcaregiver(response.data.data);



      const caregiverdata = response.data.data;


      console.log(caregiverdata);

      const caregiveroptions = caregiverdata.map((coption) => ({
        value: coption.full_name,
        label: coption.full_name,
      }));

      setSelectedCaregiveroption(caregiveroptions);
    });


    // axios.get(`${API_URL}/patients`).then((response) => {
    //   console.log(response.data.data);
    //   setpatient(response.data.data);

    // });
  }, []);

  const handlebranch = (e) => {
    // console.log(e.target.value);
    // setSelectedBranch(e.target.value);
    // console.log(branches);
    setSelectedBranch(e.target.value);
    console.log(selectedBranch);
  };
  const handleService = (e) => {
    setSelectedServices(e.target.value);
    console.log(e.target.value);
  };

  const handleCaregiver = (caregiveroption) => {
    setSelectedStaffCaregiver(caregiveroption);
    console.log(caregiveroption);
  };

  // const handlePatient = (e) => {

  //   setSelectedPatient(e.target.value);
  //   console.log(e.target.value);
  // }

  const handleStatus = (e) => {
    setStatus(e.target.value);
    console.log(e.target.value);
  };

  const handleFromDate = (e) => {
    setFromDate(e.target.value);
  };

  const handleToDate = (e) => {
    setToDate(e.target.value);
  };

  const handlefilter = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;
    var from_Date = !fromDate ? today : fromDate;
    var to_Date = !toDate ? today : toDate;

    var dates = new Date(from_Date);
    var year = dates.getFullYear();
    var month = String(dates.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed, so add 1 and pad with zeros
    var day = String(dates.getDate()).padStart(2, "0");

    var finalfromDate = `${year}-${month}-${day}`;

    var todates = new Date(to_Date);
    year = todates.getFullYear();
    month = String(todates.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed, so add 1 and pad with zeros
    day = String(todates.getDate()).padStart(2, "0");

    var finaltoDate = `${year}-${month}-${day}`;

    console.log(
      "Selected React Values:-" +
      selectedBranch +
      " " +
      selectedService +
      " " +
      status +
      " " +
      fromDate +
      " " +

      toDate
    );


    axios
      .post(
        `${API_URL}/filterreports?from_date=${finalfromDate}&to_date=${finaltoDate}&branch_id=${selectedBranch}&case_status=${status}&service_id=${selectedService}&caregiver_id=${selectedStaffCaregiver}`
      )
      .then((response) => {
        //console.log(response);
        setPost(response.data.data);
      });

    console.log(finalfromDate, finaltoDate);
    axios.post(`${API_URL}/statuscolumncharts?from_date=${finalfromDate}&to_date=${finaltoDate}&branch_id=${selectedBranch}`).then((response) => {
      console.log(response.data.data);

      setStackcharts(response.data.data);
    }
    ).catch((error) => {
      console.error("Error fetching data:", error);
    });
    // axios.post(`${API_URL}/pyramidcharts?from_date=${finalfromDate}&to_date=${finaltoDate}&branch_id=${selectedBranch}`).then((response) => {
    //   console.log(response.data.data);

    //   setPyramidcharts(response.data.data);
    // }
    // ).catch((error) => {
    //   console.error("Error fetching data:", error);
    // });
    axios.post(`${API_URL}/hourscharts?from_date=${finalfromDate}&to_date=${finaltoDate}&branch_id=${selectedBranch}`).then((response) => {
      console.log(response.data.data);

      setHourscharts(response.data.data);
    }
    ).catch((error) => {
      console.error("Error fetching data:", error);
    });



  };




  // No of Records to be displayed on each page
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = post.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(post.length / recordsPerPage);

  const toggleDataSeries = (e) => {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    chartRef.current.render();
  };

  const branchNameToRemoveFrom = "athulya Homecare"; // Adjust the case as needed
  // const modifiedBranchName = branchNameToRemoveFrom.replace('Athulya Homecare', '');

  const groupedData = stackcharts.reduce((acc, item) => {
    const currentBranchName = item.branch_name.replace('Athulya Homecare', '');

    if (!acc[currentBranchName]) {
      acc[currentBranchName] = [];
    }

    acc[currentBranchName].push({
      label: item.case_status,
      y: item.status_count,
    });

    return acc;
  }, {});

  // Using pop() to remove the last item in the array associated with the modified branch name
  if (groupedData[branchNameToRemoveFrom]) {
    groupedData[branchNameToRemoveFrom].pop();
  }

  // Now groupedData will have the last item removed from the array associated with the modified branch name


  // Now, if you want to change the label of all "unknown" entries to "Unallocated" globally
  // Transform the grouped data into CanvasJS data format
  const dataPoints = Object.entries(groupedData).map(([branchName, data]) => {
    // Rename label "unknown" to "Unallocated" in each data point
    const updatedData = data.map((dataPoints) => {
      if (dataPoints.label === 'Unknown') {
        dataPoints.label = 'Unallocated';
      }
      return dataPoints;
    });

    return {
      type: 'stackedColumn',
      name: branchName,
      showInLegend: true,
      dataPoints: updatedData,
    };
  });


  console.log(dataPoints);
  // Construct the options for the CanvasJS chart
  const options = {
    animationEnabled: true,
    theme: 'light2',
    title: {
      text: 'View the Today Status',
    },
    axisX: {
      title: 'Status',
    },
    axisY: {
      title: 'Count',
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: 'pointer',
    },
    data: dataPoints,
  };

  console.log(options);



  // Map the data to separate by duration_range
  const stackedData = hourscharts.reduce((acc, item) => {
    if (!acc[item.duration_range]) {
      acc[item.duration_range] = [];
    }

    acc[item.duration_range].push({
      branch_name: item.branch_name,
      count: item.count
    });

    return acc;
  }, {});

  // Create dataPoints for the stackedColumn chart
  const dataPoints1 = Object.entries(stackedData).map(([durationRange, branchCounts]) => {
    return {
      type: 'stackedColumn',
      name: durationRange,
      showInLegend: true,
      dataPoints: branchCounts.map(({ branch_name, count }) => ({
        label: branch_name,
        y: count
      }))
    };
  });

  // Log the dataPoints
  console.log(dataPoints1);

  // Log the dataPoints1
  console.log(dataPoints1);



  // Update the Column chart options
  const columnChartOptions = {
    animationEnabled: true,
    theme: 'light2',
    title: {
      text: 'View the Today Status',
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: 'pointer',
      itemclick: toggleDataSeries,
    },
    data: [
      // Use the dataPoints1 array directly
      ...dataPoints1,
      // Add other data series as needed
    ],
  };

  // Log the updated Column chart options
  console.log(columnChartOptions);






  // Log the updated Column chart options
  console.log(columnChartOptions);




  const containerProps = {
    width: "100%",
  };

  return (
    <div className="">
      <div className="flex items-center justify-between pb-6 ">
        <div>
          <h2 className="font-semibold text-gray-600">
            Homecare Staff Allocation Reports
          </h2>
        </div>

        <div className="flex items-center justify-between">
          <div className="ml-10 space-x-8 lg:ml-40">
            {/* <button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Back</button> */}
            <button className="px-4 py-2 font-semibold tracking-wide text-white rounded-md cursor-pointer bg-primary">
              Back
            </button>
          </div>
        </div>
      </div>
      <div className="px-4 py-4 -mx-4 sm:-mx-8 sm:px-8">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <CanvasJSChart
              containerProps={containerProps}
              options={options}
              onRef={(ref) => (chartRef.current = ref)}
            />
          </div>
          <div>
            <CanvasJSChart
              containerProps={containerProps}
              options={columnChartOptions}
              onRef={(ref) => (chartRef.current = ref)}
            />
          </div>
        </div>
      </div>

      <div className="w-full p-8 bg-white rounded-md">
        <div>
          <div className="px-4 py-4 -mx-4 sm:-mx-8 sm:px-8">
            <div className="">
              <div className="grid flex-col items-center px-2 py-2 bg-white border-t xs:flex-row xs:justify-between 2xl:grid-cols-7 xl:grid-cols-4 lg:grid-cols-4">
                <div className="flex p-2">
                  <select
                    name="branch_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5"
                    id="branch_name"
                    onChange={handlebranch}
                  >
                    <option value="-1">Branch Name</option>
                    {branches.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.branch_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex p-2">
                  <select
                    onChange={handleService}
                    name="service_name"
                    id="service_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5"
                  >
                    <option value="-1"> Service Name</option>
                    {services.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.service_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex p-2">
                  <select
                    name="status"
                    id="status"
                    onChange={handleStatus}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5"
                  >
                    <option value=""> Status</option>
                    <option value="Unknown"> Unallocated</option>
                    <option value="Accepted"> Accepted</option>
                    <option value="Rejected"> Rejected</option>
                    <option value="Clocked_In"> Clocked_In</option>
                    <option value="Clocked_Out"> Clocked_Out</option>
                  </select>
                </div>
                <div className="flex p-2">
                  <input
                    type="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5"
                    placeholder="From Date"
                    name="from_date"
                    onChange={handleFromDate}
                  />
                </div>

                <div className="flex p-2">
                  <input
                    type="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5"
                    placeholder="To Date"
                    name="to_date"
                    onChange={handleToDate}
                  />
                </div>

                <div className="flex p-2">
                  <Select
                    onChange={handleCaregiver}
                    options={caregiveroption}
                    value={selectedStaffCaregiver}
                    name="caregiver_name"
                    id="caregiver_name"
                    className="bg-gray-50  text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 "
                    placeholder="Caregiver Name"
                  />
                </div>

                {/* <div class="flex  p-2">
                        
                      <select onChange={handlePatient} name="patient_name" id="patient_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5">
                            
                            <option value="-1"> Patient Name</option>
                            {patient.map(item=>(

                             <option value={item.id} >{item.service_name}</option>
                            
                            ))
                            }

                        </select>
                    </div> */}
                <div className="flex p-2">
                  <button
                    type="submit"
                    name="filter"
                    id="filterBtn"
                    className="w-full px-6 py-2 mr-3 text-white rounded-md bg-gradient-to-r from-[#419197] to-[#12486B] hover:bg-gradient-to-r hover:from-[#12486B] hover:to-[#419197]"
                    onClick={handlefilter}
                  >
                    Filter
                  </button>
                  {/* <button type="submit" name="filter" id="filterBtn" class="px-6 py-2  text-white bg-red-500 rounded-md hover:bg-pink-600 w-full ">Create Lead</button> */}
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              {/* <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Sno
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Branch Name
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Patient Name
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Service Name
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Date
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      CareGiver
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                       Status
                    </th>
                  </tr>
                </thead>
                <tbody>

                {post.map((item, index) => (
                  <React.Fragment key={index}>
                  <tr>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">{item.sno}</p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">{item.branch_name}</p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">{item.full_name}</p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">
                    {item.service_name}
                    </p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">
                    {item.schedule_date}
                    </p>
                  </td>
                  
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap ">
                    {item.caregiver_name}
                    </p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                       <span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                       <span class="relative">{item.case_status}</span>
                    </span>
                  </td>
                  </tr>
                  </React.Fragment>
                  
                
              ))}
                 
                </tbody>
              </table> */}

              <Records data={currentRecords} />
              <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />

              <div className="flex flex-col items-center px-5 py-5 bg-white border-t xs:flex-row xs:justify-between">
                {/* <div class="inline-flex mt-2 xs:mt-0">
                  <button
                    class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                    Prev
                  </button>
                  &nbsp; &nbsp;
                  <button
                    class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                    Next
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
