import { useState, useEffect } from "react";

import React from 'react';

function SecondsCounter() {
  const [contador, setContador] = useState(80);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setContador(prevSegundos => prevSegundos + 1);
    }, 1000);

    return () => clearInterval(intervalo);

  }, []);

  return (
    
    <div className="contador-timer unidad">
     <div className="unidad">
        <i class="fa-solid fa-clock"></i>
      </div>
      <div className="unidad">
        {
          Math.floor(contador / 1000) % 10
        }
      </div>
       <div className="unidad">
        {
          Math.floor(contador / 1000) % 10
        }
      </div>
      <div className="unidad">
        {
          Math.floor(contador / 1000) % 10
        }
      </div>
      <div className="unidad">
        {

          Math.floor(contador / 100) % 10}
      </div>
      <div className="unidad">
        {

          Math.floor(contador / 10) % 10
        }
      </div>
      <div className="unidad">
        {

          contador % 10
        }
      </div>
    </div>
  )
}


export default SecondsCounter;

