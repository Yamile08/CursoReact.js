import React, { Component } from 'react';  //importamos React desde React
import './media.css';  //estilos importados

class Media extends Component { //Estendimos la clase componente que viene desde React 
  render() {
    const styles = { //estilos creados como si fueran un objeto, en donde lo vallamos a utilizar simplemente lo llamamos 
        container: { //Estilos en linea
          color: '#44546b',
          cursor: 'pointer',
          width: 260,
          border: '1px solid red'
        }
    }
    return ( //creamos nuestro Componente
     <div className="Media">
        <div>
          <img
            src={this.props.image}
            alt=""
            width={260}
            height={160}
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

export default Media; //se exporta media y en index.js se importa