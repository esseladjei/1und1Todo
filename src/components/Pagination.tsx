import React, { useState } from 'react';
import classes from '../css/Pagination.module.css';
import { PaginationProps } from '../Types/todoTypes';


const Pagination: React.FC<PaginationProps> = ({ total, limit, skip, onPageChange }) => {
  const totalPages = Math.ceil(total / limit);
  const [currentPage, setCurrentPage] = useState(Math.floor(skip / limit) + 1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  return (
    <div className={classes.paginationContainer}>
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (

          <button
            key={page}
            onClick={() => handlePageChange(page)}
            style={{
              backgroundColor: currentPage === page ? '#007bff' : '#fff',
              color: currentPage === page ? '#fff' : '#000',
            }}
            className={classes.paginationButton}
           >
            {page}
          </button>
        );
      })}

      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
