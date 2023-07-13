import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


function Pagination({ totalCount, pageSize, currentPage, onPageChange, onPreviuosPageChange, onNextPageChange }) {
      
    const countPagination = Math.ceil(totalCount / pageSize)
   
    if (countPagination === 1) {
        return null
    }
  let pages = []
 for (let i = 1; i < countPagination + 1; i++) {
   pages.push(i);
   
  }
 
    return (
      <div className="flex flex-row gap-2">
        <button
          className={`enabled:cursor-pointer bg-zinc-100 disabled:bg-zinc-200 disabled:hover:bg-none enabled:hover:bg-zinc-200 w-10 h-10 flex justify-center items-center rounded-full `}
          onClick={() => onPreviuosPageChange(currentPage)}
          disabled={currentPage === 1 ? true : false}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        {pages.map((page) => (
          <div
            key={page}
            onClick={() => onPageChange(page)}
            className={`cursor-pointer w-10 h-10 flex justify-center items-center rounded-full ${
              currentPage === page
                ? "bg-sky-500 hover:bg-sky-700"
                : "bg-zinc-100 hover:bg-zinc-200"
            }`}
          >
            {page}
          </div>
        ))}

        <button
          className={`enabled:cursor-pointer bg-zinc-100 disabled:bg-zinc-200 disabled:hover:bg-none enabled:hover:bg-zinc-200 w-10 h-10 flex justify-center items-center rounded-full`}
          onClick={() => onNextPageChange(currentPage)}
          disabled={currentPage === countPagination ? true :false}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    );
}

export default Pagination;