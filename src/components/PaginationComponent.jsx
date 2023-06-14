import React from "react";
import Pagination from "react-bootstrap/Pagination";

function PaginationComponent(props) {
  const { totalPosts, postPerPage, currentPage, setCurrentPage } = props;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      {pageNumbers.map((number) => (
        <Pagination.Item
          onClick={() => setCurrentPage(number)}
          active={currentPage === number}
        >
          {number}
        </Pagination.Item>
      ))}
    </Pagination>
  );
}

export default PaginationComponent;
