import React, { Component } from 'react';  //importamos React desde React

class Media extends Component { //Estendimos la clase componente que viene desde React 
  render() {
    return ( //creamos nuestro Componente
     <div>
        <div>
          <img
            src=""
            alt=""
            width={260}
            height={160}
          />
          <h3>¿Por qué aprender React?...</h3>
          <p>Yamile Tabares</p>
        </div>
      </div>
    )
  }
}

export default Media; //se exporta media y en index.js se importa