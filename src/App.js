//Ejercicio 1 Completar la Galeria

import {useState} from 'react';
import {sculptureList} from './data.js';

export default function Gallery(){
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    
let anterior = index > 0;
let siguiente = index < sculptureList.length - 1; //Declaro dos variables con condicion de corte

function handleNextClick(){
    if(siguiente){                 
    setIndex(index + 1)};
}                                                  //las paso como parámetros de las funciones 
                                        
function handleAnteriorClick(){
    if(anterior) {
        setIndex(index - 1)};
}

function handleMoreClick(){
    setShowMore(!showMore)
}
let sculpture = sculptureList[index];
return (
    <>
    <button onClick={handleAnteriorClick}>
    Anterior</button>
    <button onClick ={handleNextClick}>
    Siguiente
    </button>
    <h2>
        <i>{sculpture.name}</i>
        por {sculpture.artist}
    </h2>
    <h3>({index + 1} de {sculptureList.length})
    </h3>
    <button onClick = {handleMoreClick}>
        {showMore ? 'Ocultar' : 'Mostrar'} detalles 
    </button>
    {showMore && <p>{sculpture.description}</p>}
    <img
    src = {sculpture.url}
    alt = {sculpture.alt}
    />
    </>
);
}