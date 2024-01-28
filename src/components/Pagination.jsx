import React, { useState } from "react";
import "./country.css";
function Pagination({
  countries,
  TotalPage,
  currentpage,
  setCurrentpage,
  numbers
}) {
  //functionality
  function prevPage() {
    if (currentpage !== 1) {
      setCurrentpage(currentpage - 1);
    }
  }
  function changeCurrPage(n) {
    setCurrentpage(n);
  }
  function nextPage() {
    if (currentpage !== TotalPage) {
      setCurrentpage(currentpage + 1);
    }
  }

  return (
    <>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prevPage}>
              prev
            </a>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-item ${currentpage === n} ? 'active' : ''`}
              key={i}
            >
              <a
                className="page-link"
                href="#"
                onClick={() => changeCurrPage(n)}
              >
                {n}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>
              next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Pagination;
