// TODO migrar del proyecto de react la pagina de Beers
"use client"
import React, { useState, useEffect } from "react";
import BeerList from "./BeerList";
import "./App.css";

function App() {
  const urlBeers = "https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/refs/heads/main/src/data/Beers.json"
  const [beers, setBeers] = useState([]);
  
  useEffect( () => {
      fetch(urlBeers)
      .then((response) => response.json())
      .then((data) => {
          setBeers(data)
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <main style={{ padding: "24px" }}>
        <BeerList beers={beers} />
      </main>
    </div>
  );
}

export default App;