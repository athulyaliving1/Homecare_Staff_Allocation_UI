import React, { useState } from 'react'
import CryptoJS from 'crypto-js';
import PropTypes from 'prop-types';
const Records = ({ data }) => {
    const [isLoading, setIsLoading] = useState(false);


    const handleClick = (lead_id) => {

        lead_id = lead_id.toString();
        console.log(lead_id);
        var Sha256 = CryptoJS.SHA256;
        var Hex = CryptoJS.enc.Hex;
        var Utf8 = CryptoJS.enc.Utf8;
        var Base64 = CryptoJS.enc.Base64;
        var AES = CryptoJS.AES;

        var secret_key = 'apnacare';
        var secret_iv = 'hhms';

        var key = Sha256(secret_key).toString(Hex).substr(0, 32); // Use the first 32 bytes (see 2.)
        var iv = Sha256(secret_iv).toString(Hex).substr(0, 16);

        // // Encryption
        var output = AES.encrypt(lead_id, Utf8.parse(key), {
            iv: Utf8.parse(iv),
        }).toString(); // First Base64 encoding, by default (see 1.)

        var output2ndB64 = Utf8.parse(output).toString(Base64); // Second Base64 encoding (see 1.)
        console.log(output2ndB64); // MWNjdVlVL1hBWGN2UFlpMG9yMGZBUT09
        var links = "https://theathulya.net/leads/view/" + output2ndB64;

        console.log(links);

        setIsLoading(true);

        // Simulate an asynchronous operation (e.g., an API call) for a few seconds.
        setTimeout(() => {
            setIsLoading(false);
        }, 20000);

        // var decrypted = AES.decrypt(output, Utf8.parse(key), {
        //     iv: Utf8.parse(iv),
        //     }).toString(Utf8); 
        // console.log(decrypted); // test
        // var ciphertext = CryptoJS.AES.encrypt(lead_id, 'apnacare').toString();
        // console.log(ciphertext);
        window.location = links;
    };



    return (

        <div>
            {isLoading && <div className="test">
                <div className="dash uno text-[#ec3a78]">L</div>
                <div className="dash dos text-[#ec3a78]">O</div>
                <div className="dash tres text-[#ec3a78]">A</div>
                <div className="dash cuatro text-[#ec3a78]">D</div>
                <div className="dash dos text-[#2a769b]">I</div>
                <div className="dash tres text-[#2a769b]">N</div>
                <div className="dash cuatro text-[#2a769b]">G</div>

            </div>

            }
            <br /><br />
            <table className="min-w-full leading-normal ">
                <thead className=''>
                    <tr className=''>
                        <th
                            className="px-5 py-3 text-xs font-semibold tracking-wider text-center text-white uppercase border-b-2 border-gray-200 bg-primary">
                            Sno
                        </th>
                        <th
                            className="px-5 py-3 text-xs font-semibold tracking-wider text-center text-white uppercase border-b-2 border-gray-200 bg-primary">
                            Branch Name
                        </th>
                        <th
                            className="px-5 py-3 text-xs font-semibold tracking-wider text-center text-white uppercase border-b-2 border-gray-200 bg-primary">
                            Patient Name
                        </th>
                        <th
                            className="px-5 py-3 text-xs font-semibold tracking-wider text-center text-white uppercase border-b-2 border-gray-200 bg-primary">
                            Service Name
                        </th>
                        <th
                            className="px-5 py-3 text-xs font-semibold tracking-wider text-center text-white uppercase border-b-2 border-gray-200 bg-primary">
                            Date
                        </th>
                        <th
                            className="px-5 py-3 text-xs font-semibold tracking-wider text-center text-white uppercase border-b-2 border-gray-200 bg-primary">
                            CareGiver
                        </th>
                        <th
                            className="px-5 py-3 text-xs font-semibold tracking-wider text-center text-white uppercase border-b-2 border-gray-200 bg-primary">
                            Status
                        </th>
                        <th
                            className="px-5 py-3 text-xs font-semibold tracking-wider text-center text-white uppercase border-b-2 border-gray-200 bg-primary">
                            View
                        </th>
                    </tr>
                </thead>
                <tbody className='even:bg-gray-50 odd:bg-white'>
                    {data.map(item => (
                        <tr key={item.sno} >
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap">{item.sno}</p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap">{item.branch_name}</p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap">{item.full_name}</p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    {item.service_name}
                                </p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    {item.schedule_date}
                                </p>
                            </td>

                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap ">
                                    {item.caregiver_name}
                                </p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                {(item.case_status === 'Unknown') &&
                                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-blue-900">
                                        <span aria-hidden className="absolute inset-0 bg-blue-200 rounded-full opacity-50"></span>
                                        <span className="relative">{item.case_status}</span>
                                    </span>
                                }
                                {(item.case_status === 'Accepted') &&
                                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                        <span aria-hidden className="absolute inset-0 bg-green-200 rounded-full opacity-50"></span>
                                        <span className="relative">{item.case_status}</span>
                                    </span>
                                }
                                {(item.case_status === 'Rejected') &&
                                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-red-900">
                                        <span aria-hidden className="absolute inset-0 bg-red-200 rounded-full opacity-50"></span>
                                        <span className="relative">{item.case_status}</span>
                                    </span>
                                }
                                {(item.case_status === 'Clocked_In') &&
                                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-pink-900">
                                        <span aria-hidden className="absolute inset-0 bg-pink-200 rounded-full opacity-50"></span>
                                        <span className="relative">{item.case_status}</span>
                                    </span>
                                }
                                {(item.case_status === 'Clocked_Out') &&
                                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-lime-900">
                                        <span aria-hidden className="absolute inset-0 rounded-full opacity-50 bg-lime-200"></span>
                                        <span className="relative">{item.case_status}</span>
                                    </span>
                                }
                            </td>

                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap ">

                                    <button name="filter" id="filterBtn" className="w-full px-2 py-2 mr-3 rounded-md text-white bg-[#419197]" onClick={() => handleClick(item.lead_id)} value={item.lead_id}> View </button>
                                </p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}





Records.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            sno: PropTypes.number.isRequired,
            branch_name: PropTypes.string.isRequired,
            full_name: PropTypes.string.isRequired,
            service_name: PropTypes.string.isRequired,
            schedule_date: PropTypes.string.isRequired,
            caregiver_name: PropTypes.string.isRequired,
            case_status: PropTypes.string.isRequired,
            lead_id: PropTypes.number.isRequired,
        })
    ).isRequired,
};







export default Records  