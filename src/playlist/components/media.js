import React, { PureComponent } from 'react';  //importamos React desde React
import PropTypes from 'prop-types';
import './media.css';  //estilos importados

class Media extends PureComponent { //Estendimos la clase componente que viene desde React 
  state = {
    author: 'Yamile Tabares'
  }
  // constructor(props) { con ecmascript 6
  //   super(props)
  //   this.state = {
  //     author: props.author
  //   }
  // //   this.handleClick = this.handleClick.bind(this);
  // }
  handleClick = (event) => {
      // console.log(this.props.image)
      this.setState({
        author: 'Miguel Posada',
      })
  }
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
     <div className="Media" onClick={this.handleClick}> 
        <div>
          <img
            src={this.props.cover}
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

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired, //si queremos que sea un valor requerido
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio']),
}

export default Media; //se exporta media y en index.js se importa