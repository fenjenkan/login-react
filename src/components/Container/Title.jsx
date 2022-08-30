import React from 'react'

const Title = ({first,title}) => {
  return (
    <p className='text-center text-secondary fs-4'>{first} <span className='text-secondary fw-bold fs-3'>{title}</span></p>
  )
}

export default Title