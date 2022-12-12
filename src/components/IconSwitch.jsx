import React from 'react'

export const IconSwitch = ({icon, onSwitch}) => {
  return (
    <div className="switch-button">
      <span onClick={() => onSwitch()} className="material-icons">
        {icon ? 'view_module' : 'view_list'}
      </span>
    </div>
  )
}
