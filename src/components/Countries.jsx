import React, { useEffect, useState } from "react";
import "./country.css";

function Country() {
  const [countries, setCountries] = useState([]);

  // Fetching data
  async function fetchData() {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
    } catch (error) {
     
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Country Flag</h1>

      <div className="country-container">
        {countries.map((country, idx) => (
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

