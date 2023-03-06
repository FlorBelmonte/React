import React from "react";
import { useState, useEffect } from "react";
import imagen from '../../React/src/assets/5376102.jpg'

function UsandoPokeApi () {
    const [speciesData, setSpeciesData] = useState(0)
    let urlSpecies = 'https://pokeapi.co/api/v2/pokemon-species/aegislash';
  
    const getSpecies = (url) => {
        fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
    }

   useEffect(() => {
    getSpecies(urlSpecies);
   }, [speciesData]) 

   return (
    <div>
      <h2>Click en la imagen</h2>
      <img onClick={() => setSpeciesData(speciesData + 1)} src={imagen} alt="pokemon" />
      
    </div>
   )
}
export default UsandoPokeApi
