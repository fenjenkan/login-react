import React from 'react'
import './Button.css'

const Button = ({title}) => {
  return (
    <button type="submit" class="btn btn-pink ">{title}</button>
  )
}

export default Button