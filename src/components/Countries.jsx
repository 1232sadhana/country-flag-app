import React, { useEffect, useState } from "react";
import "./country.css";
import Pagination from "./Pagination";
// import "bootstrap/dist/css/bootstrap.min.css";
function Country() {
  const [countries, setCountries] = useState([]);
  const [paginationRecords, setPaginationRecords] = useState([]);
  //fetching data
  async function fetchData() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    console.log(data);
    setCountries(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  //pagination
  const [currentpage, setCurrentpage] = useState(1);
  const recordsPerPage = 18;
  const lastIndex = currentpage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = countries.slice(firstIndex, lastIndex);
  const TotalPage = Math.ceil(countries.length / recordsPerPage);
  const numbers = [...Array(TotalPage + 1).keys()].slice(1);
  //functionality part for pagination
  function updatePaginationRecords(records) {
    console.log(records);
    setPaginationRecords(records);
  }

  return (
    <>
      <h1>Country Flag</h1>

      <div className="country-container">
        {records.map((country, idx) => (
          <div key={idx} className="country">
            <img
              src={country.flags.png}
              alt={country.cca3}
              className="country-image"
            />
            <h4>{country.name.common}</h4>
          </div>
        ))}
      </div>

      <Pagination
        countries={countries}
        numbers={numbers}
        TotalPage={TotalPage}
        currentpage={currentpage}
        setCurrentpage={setCurrentpage}
      />
    </>
  );
}
export default Country;
