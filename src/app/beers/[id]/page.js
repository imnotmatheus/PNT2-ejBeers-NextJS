"use client";
import { useState, useEffect, use } from "react";
import "../beerCard.css"

export default function PageDetails({params}){
    const {id} = use(params);
    const [beer, setBeer] = useState([]);
    const urlBeers = "https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/refs/heads/main/src/data/Beers.json"

    useEffect(() => {
        fetch(urlBeers)
        .then((response) => response.json())
        .then((data) => {
            setBeer(data.find(b => b.name.replace(/ /g,'') == id));
        })
        .catch(error => console.log(error));
    }, []);

    
    return(
        <div className="beer-card">
        
      <div className="beer-card-image-container">
        <img
          src={"https://images.ctfassets.net/wyfly6ekgxs8/1fZ9xQ9eAOXV9CslAep8XB/66452aa07b4cfdc8368fbfda3d0bbf1f/what_is_light_beer-banner.jpg"}
          alt={`Etiqueta de ${beer.name}`}
          className="beer-card-image"
        />
        {/* // <button
        //   className={`heart-button ${liked ? "liked" : ""}`}
        //   onClick={toggleLike}
        //   aria-label={liked ? "Quitar Me gusta" : "Dar Me gusta"}
        // >
        </button> */}
      </div>
      
      <div className="beer-card-content">
        
        <h3 className="beer-card-title">{beer.name}</h3>
        <p className="beer-card-type">{beer.type}</p>
        <p className="beer-card-abv">ABV: {beer.abv}%</p>
        
      </div>
    </div>
    );
}