// Importamos dependencias de React
import React from'react'; //React es la dependencia para crear nuestros componentes, las piezas de la aplicación
import { render } from'react-dom';  //react-dom nos sirve para renderizar esos componentes en el navegador
import Media from './src/playlist/components/media'; //llamar y/o importar a media

const app = document.getElementById('app'); // Referenciamos un elemento con ID app

// const holaMundo = <h1>Hola yamile</h1>; // Insertamos en una constante lo que queremos renderizar

//ReactDOM.render(que voy a renderizar, donde lo hare);
render(<Media/>, app) //renderizamos media

