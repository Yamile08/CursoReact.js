// Importamos dependencias de React
import React from'react'; //React es la dependencia para crear nuestros componentes, las piezas de la aplicación
import { render } from'react-dom';  //react-dom nos sirve para renderizar esos componentes en el navegador
import Playlist from './src/playlist/components/playlist'; //llamar y/o importar a media
import data from './src/api.json';

const app = document.getElementById('app'); // Referenciamos un elemento con ID app

// const holaMundo = <h1>Hola yamile</h1>; // Insertamos en una constante lo que queremos renderizar

//ReactDOM.render(que voy a renderizar, donde lo hare);
render( <Playlist data={data} /> , app)  //la propiedad data va a recibir los datos que vienen desde el api.json

