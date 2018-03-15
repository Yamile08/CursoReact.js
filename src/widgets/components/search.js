import React from 'react';
import './search.css';
// function Search(props) {
//   return (
//     <form action=""></form>
//   )
// }

const Search = () => ( //tambien se puede crear el componente como un arrow function y no es necesario pasarle el return porque el ya lo hace por si solo
  <form className="Search">
    <input
      type="text"
      placeholder="Busca tu video favorito"
      className="Search-input"
    />
  </form>
)

export default Search