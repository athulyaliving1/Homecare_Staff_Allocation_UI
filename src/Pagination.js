import React from 'react'

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
       
        <div class="inline-flex mt-2 xs:mt-0 p-3">
             <button
        className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l"
        onClick={prevSet}
      >
        Prev Set
      </button>
      &nbsp; &nbsp;
        <button
        class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l" onClick={prevPage} >
        Prev
        </button>
        &nbsp; &nbsp;
        {pageNumbers.map(pgNumber => (
          
            <span key={pgNumber} className= {`page-item ${currentPage === pgNumber ? 'active' : ''} pl-2`} >
                <button
                class="page-link text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded" onClick={() => setCurrentPage(pgNumber)}>
                {pgNumber}
                </button>
            </span>
            
        ))}
        &nbsp; &nbsp;
        <button
        class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r" onClick={nextPage}>
        Next
        </button>
        &nbsp; &nbsp;
      <button
        className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r"
        onClick={nextSet}
      >
        Next Set
      </button>
        </div>
    )
}

export default Pagination