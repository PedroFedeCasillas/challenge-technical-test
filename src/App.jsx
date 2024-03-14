import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleClick = (countryName) => {
    alert(`Nombre oficial del país: ${countryName}`);
  };
  return (
    <div className="App">
      <h1>Lista de países</h1>
      <div className="country-list">
        {countries.map((country) => (
          <div
            key={country.name.common}
            className="country-card"
            onClick={() => handleClick(country.name.official)}
          >
            <img
              src={country.flags.png}
              alt={`Bandera de ${country.name.common}`}
              className="country-flag"
            />
            <p>{country.name.common}</p>
            {/* <div>{country.population}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
