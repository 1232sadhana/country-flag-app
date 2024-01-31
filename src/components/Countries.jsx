import React, { useEffect, useState } from "react";
import "./country.css";

// import "bootstrap/dist/css/bootstrap.min.css";
function Country() {
  const [countries, setCountries] = useState([]);
  
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

      
    </>
  );
}
export default Country;
