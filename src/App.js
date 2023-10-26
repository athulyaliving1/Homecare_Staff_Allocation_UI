import './App.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Records from './Records';
import Pagination from './Pagination';
import { API_URL } from './utilities/API_URL';
import Select from 'react-select';

function App() {

  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const [post, setPost] = useState([]);
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedService, setSelectedServices] = useState("");
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

      const caregiveroptions = caregiverdata.map((coption) => ({
        value: coption.id,
        label: coption.full_name
      }))

      setSelectedCaregiveroption(caregiveroptions);
    });




    // axios.get(`${API_URL}/patients`).then((response) => {
    //   console.log(response.data.data);
    //   setpatient(response.data.data);

    // });

  },

    []);

  const handlebranch = (e) => {

    // console.log(e.target.value);
    // setSelectedBranch(e.target.value);
    // console.log(branches);
    setSelectedBranch(e.target.value);
    console.log(selectedBranch);

  }
  const handleService = (e) => {

    setSelectedServices(e.target.value);
    console.log(e.target.value);
  }

  const handleCaregiver = (caregiveroption) => {

    setSelectedStaffCaregiver(caregiveroption);
    console.log(caregiveroption);
  }

  // const handlePatient = (e) => {

  //   setSelectedPatient(e.target.value);
  //   console.log(e.target.value);
  // }

  const handleStatus = (e) => {

    setStatus(e.target.value);
    console.log(e.target.value);
  }

  const handleFromDate = (e) => {

    setFromDate(e.target.value);
  }

  const handleToDate = (e) => {

    setToDate(e.target.value);
  }

  const handlefilter = () => {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    var from_Date = !(fromDate) ? today : fromDate;
    var to_Date = !(toDate) ? today : toDate;

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



    console.log("Selected React Values:-" + selectedBranch + " " + selectedService + " " + status + " " + fromDate + " " + toDate);
    axios.post(`${API_URL}/filterreports?from_date=${finalfromDate}&to_date=${finaltoDate}&branch_id=${selectedBranch}&case_status=${status}&service_id=${selectedService}&caregiver_id=${selectedStaffCaregiver}`).then((response) => {
      //console.log(response);
      setPost(response.data.data);
    });
  }


  // No of Records to be displayed on each page   
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = post.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(post.length / recordsPerPage)


  return (
    <div className="App">

      <div className='w-full p-8 bg-white rounded-md'>
        <div className="flex items-center justify-between pb-6 ">
          <div>
            <h2 className="font-semibold text-gray-600">Homecare Staff Allocation Reports</h2>

          </div>
          <div className="flex items-center justify-between">

            <div className="ml-10 space-x-8 lg:ml-40">
              {/* <button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Back</button> */}
              <button className="px-4 py-2 font-semibold tracking-wide text-white rounded-md cursor-pointer bg-primary">Back</button>
            </div>
          </div>
        </div>

        <div>
          <div className="px-4 py-4 -mx-4 sm:-mx-8 sm:px-8">
            <div className="">

              <div
                className="grid flex-col items-center px-2 py-2 bg-white border-t xs:flex-row xs:justify-between 2xl:grid-cols-7 xl:grid-cols-4 lg:grid-cols-4">
                <div className="flex p-2">
                  <select name="branch_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5"
                    id="branch_name" onChange={handlebranch} >
                    <option value="-1" >Branch Name</option>
                    {branches.map(item => (
                      <option key={item.id} value={item.id} >{item.branch_name}</option>
                    ))}
                  </select>
                </div>
                <div className="flex p-2">


                  <select onChange={handleService} name="service_name" id="service_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5">

                    <option value="-1"> Service Name</option>
                    {services.map(item => (

                      <option key={item.id} value={item.id} >{item.service_name}</option>

                    ))
                    }

                  </select>

                </div>
                <div className="flex p-2">

                  <select name="status" id="status" onChange={handleStatus}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5">
                    <option value=""> Status</option>
                    <option value="Unknown"> Unallocated</option>
                    <option value="Accepted"> Accepted</option>
                    <option value="Rejected"> Rejected</option>
                    <option value="Clocked_In"> Clocked_In</option>
                    <option value="Clocked_Out"> Clocked_Out</option>
                  </select>

                </div>
                <div className="flex p-2">
                  <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5" placeholder="From Date" name="from_date" onChange={handleFromDate} />




                </div>

                <div className="flex p-2">
                  <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5" placeholder="To Date" name="to_date" onChange={handleToDate} />



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

                  <button type="submit" name="filter" id="filterBtn" className="w-full px-6 py-2 mr-3 text-white rounded-md bg-gradient-to-r from-[#419197] to-[#12486B] hover:bg-gradient-to-r hover:from-[#12486B] hover:to-[#419197]" onClick={handlefilter}>Filter</button>
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

              <div
                className="flex flex-col items-center px-5 py-5 bg-white border-t xs:flex-row xs:justify-between">

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
