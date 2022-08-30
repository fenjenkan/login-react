import React from 'react'
import Title from '../Container/Title'
import Button from '../Button/Button'

const Artist = () => {
  return (
        <>
        <div className='w-50 align-self-center '>
          <div className='d-flex justify-content-center p-4'>
              <img src="img/pincel.png" alt="Pincel" />
          </div>
          <Title first="Soy" title="Artista"/>
          <p className='text-center text-secondary fs-6'>Crea una cuenta para mostrar tus trabajos y darte a conocer como artista </p>
          <div className='text-center '>
            <Button title="Aplicar Ahora"/>
          </div>
          
        </div>
          
        </>
  )
}

export default Artist