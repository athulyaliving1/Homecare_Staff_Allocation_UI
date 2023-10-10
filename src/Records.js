import React,{useState} from 'react'
var CryptoJS = require("crypto-js");
const Records = ({data}) => {
const [isLoading, setIsLoading] = useState(false);

    
const handleClick = (lead_id) => {
    
    lead_id=lead_id.toString();
    console.log(lead_id);
     var Sha256 = CryptoJS.SHA256;
    var Hex = CryptoJS.enc.Hex;
    var Utf8 = CryptoJS.enc.Utf8;
    var Base64 = CryptoJS.enc.Base64;
    var AES = CryptoJS.AES;

    var secret_key = 'apnacare';
    var secret_iv  = 'hhms';

    var key = Sha256(secret_key).toString(Hex).substr(0,32); // Use the first 32 bytes (see 2.)
    var iv = Sha256(secret_iv).toString(Hex).substr(0,16);

    // // Encryption
    var output = AES.encrypt(lead_id, Utf8.parse(key), {
                iv: Utf8.parse(iv),
    }).toString(); // First Base64 encoding, by default (see 1.)
   
    var output2ndB64 = Utf8.parse(output).toString(Base64); // Second Base64 encoding (see 1.)
    console.log(output2ndB64); // MWNjdVlVL1hBWGN2UFlpMG9yMGZBUT09
    var links="https://theathulya.net/leads/view/"+output2ndB64;
    
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
        {isLoading && <div class="test">
            <div class="dash uno text-[#ec3a78]">L</div>
            <div class="dash dos text-[#ec3a78]">O</div>
            <div class="dash tres text-[#ec3a78]">A</div>
            <div class="dash cuatro text-[#ec3a78]">D</div>
            <div class="dash dos text-[#2a769b]">I</div>
            <div class="dash tres text-[#2a769b]">N</div>
            <div class="dash cuatro text-[#2a769b]">G</div>
            
            </div>
           
            }
         <br/><br/>   
        <table className="min-w-full leading-normal">
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
            <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                View
            </th>
            </tr>
        </thead>
        <tbody>
            {data.map(item => (
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
                    {(item.case_status==='Unknown') &&
                    <span class="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
                        <span aria-hidden class="absolute inset-0 bg-blue-200 opacity-50 rounded-full"></span>
                        <span class="relative">{item.case_status}</span>
                    </span>
                    }
                    {(item.case_status==='Accepted') &&
                    <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                        <span class="relative">{item.case_status}</span>
                    </span>
                    }
                    {(item.case_status==='Rejected') &&
                    <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                        <span aria-hidden class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                        <span class="relative">{item.case_status}</span>
                    </span>
                    }
                    {(item.case_status==='Clocked_In') &&
                    <span class="relative inline-block px-3 py-1 font-semibold text-pink-900 leading-tight">
                        <span aria-hidden class="absolute inset-0 bg-pink-200 opacity-50 rounded-full"></span>
                        <span class="relative">{item.case_status}</span>
                    </span>
                    }
                    {(item.case_status==='Clocked_Out') &&
                    <span class="relative inline-block px-3 py-1 font-semibold text-lime-900 leading-tight">
                        <span aria-hidden class="absolute inset-0 bg-lime-200 opacity-50 rounded-full"></span>
                        <span class="relative">{item.case_status}</span>
                    </span>
                    }
                </td>

                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap ">
                   
                <button name="filter" id="filterBtn" class="px-2 py-2  text-white bg-indigo-500 rounded-md hover:bg-pink-600 w-full mr-3" onClick={() => handleClick(item.lead_id)} value={item.lead_id}> View </button>
                </p>
                </td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
   
  ) 
}

export default Records  