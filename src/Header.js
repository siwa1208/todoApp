import React from 'react';

/**
 * 
 * MÀJ du nb de TODO dans le tableau items du composants App 
 *  
 */

const Header = (props) => {
    return(
      <div className='card-header'>
        <h1 className='card-header-title header is-centered'>
          Il y a {props.numTodos} Todos
        </h1>
      </div>
    )
  }

  export default Header;