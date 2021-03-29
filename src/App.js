
import React, { useState } from 'react';
import Tarjeta from './tarjeta.js';
import './App.css';

function App() {
  let titulo = <h1>Pepo titulo</h1>
  let tituloTarjeta = titulo
  const[mostrarTituloApp, setMostrarTitulo] = useState(true)

  const handelClick = () => {
    console.log("tocaste ocultar titulo")
    setMostrarTitulo(false)
  }

  return (
    <>

      <div>
        {mostrarTituloApp === true &&
          <Tarjeta
            tituloTarjeta={tituloTarjeta}

          />
        }
      </div>
      <button onClick={handelClick}>Ocultar titulo</button>
    </>

  );
}

export default App;
