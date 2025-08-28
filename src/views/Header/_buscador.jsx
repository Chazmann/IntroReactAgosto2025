import React from 'react'

const Buscador = () => {
  return (
    <div className='buscador'>
        <i className="icono fa fa-location-dot"></i>
        <input type="search" placeholder='Buscar...' />
        <button className="icono fa fa-magnifying-glass"></button>
    </div>
  )
}

export default Buscador