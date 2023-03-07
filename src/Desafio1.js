import React from "react";

export default function LightSwitch (){
    function handleClick(){
        let bodyStyle = document.body.style;
        if(bodyStyle.backgroundColor === 'black'){
            bodyStyle.backgroundColor = 'white';
        } else {
            bodyStyle.backgroundColor = 'black'
        }
    }

    return (
        <button onClick={handleClick}>Alterna las luces</button> //eliminé el llamado del Handle ()
    );
}