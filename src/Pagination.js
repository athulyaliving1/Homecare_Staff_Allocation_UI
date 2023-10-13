import React from 'react'
import PropTypes from 'prop-types';

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    const maxDisplayedPages = 10;
    const halfDisplayedPages = Math.floor(maxDisplayedPages / 2);
    let startPage = currentPage - halfDisplayedPages;
    let endPage = currentPage + halfDisplayedPages;
  
    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(maxDisplayedPages, nPages);
    }
  
    if (endPage > nPages) {
      endPage = nPages;
      startPage = Math.max(1, nPages - maxDisplayedPages + 1);
    }
  
    const pageNumbers = [...Array(endPage - startPage + 1)].map((_, index) => startPage + index);
  
    const nextPage = () => {
      if (currentPage !== nPages) setCurrentPage(currentPage + 1);
    };
  
    const prevPage = () => {
      if (currentPage !== 1) setCurrentPage(currentPage - 1);
    };
  
    const nextSet = () => {
        const newStartPage = endPage + 1;
        if (newStartPage <= nPages) {
          startPage = newStartPage;
          endPage = Math.min(newStartPage + maxDisplayedPages - 1, nPages);
          setCurrentPage(startPage);
        }
      };
    
      const prevSet = () => {
        const newEndPage = startPage - 1;
        if (newEndPage >= 1) {
          endPage = newEndPage;
          startPage = Math.max(newEndPage - maxDisplayedPages + 1, 1);
          setCurrentPage(endPage);
        }
      };

      
    return (
       
        <div className="inline-flex p-3 mt-2 xs:mt-0">
             <button
        className="px-4 py-2 text-sm font-semibold transition duration-150 bg-[#12486B] rounded-l text-indigo-50 hover:bg-[#419197]"
        onClick={prevSet}
      >
        Prev Set
      </button>
      &nbsp; &nbsp;
        <button
        className="px-4 py-2 text-sm font-semibold transition duration-150 bg-[#12486B] rounded-l text-indigo-50 hover:bg-[#419197]" onClick={prevPage} >
        Prev
        </button>
        &nbsp; &nbsp;
        {pageNumbers.map(pgNumber => (
          
            <span key={pgNumber} className= {`page-item ${currentPage === pgNumber ? 'active' : ''} pl-2`} >
                <button
                className="px-4 py-2 text-sm font-semibold transition duration-150 bg-[#12486B] rounded page-link text-indigo-50 hover:bg-[#419197]" onClick={() => setCurrentPage(pgNumber)}>
                {pgNumber}
                </button>
            </span>
            
        ))}
        &nbsp; &nbsp;
        <button
        className="px-4 py-2 text-sm font-semibold transition duration-150 bg-[#12486B] rounded-r text-indigo-50 hover:bg-[#419197]" onClick={nextPage}>
        Next
        </button>
        &nbsp; &nbsp;
      <button
        className="px-4 py-2 text-sm font-semibold transition duration-150 bg-[#12486B] rounded-r text-indigo-50 hover:bg-[#419197]"
        onClick={nextSet}
      >
        Next Set
      </button>
        </div>
    )
}


Pagination.propTypes = {
  nPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};



export default Pagination