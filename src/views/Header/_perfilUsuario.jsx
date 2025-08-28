import React from 'react'

const PerfilUsuario = ({usuario}) => {
  return (
    <div>
        <button>
            <span className="fa fa-user-circle"></span>
            <span>{usuario}</span>
        </button>
        <button>
            <span className="fa fa-caret-down"></span>
        </button>
    </div>
  )
}

export default PerfilUsuario