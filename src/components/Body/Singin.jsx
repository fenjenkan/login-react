import React from 'react'
import Button from '../Button/Button'
import './Singin.css'
import Title from '../Container/Title'

const Singin = () => {
  return (
    <>
        <form className={window.innerWidth > 600 ?'w-50 mx-auto pb-5':"mx-auto pb-5"}>
            <div className='d-flex justify-content-center p-4'>
                <img  src='img/lupa.png'></img>
            </div>
            <div>
              <Title first="soy" title="Coleccionista"/>
              <p className='text-center text-secondary fs-6'>Crea una cuenta para comprar y conocer las obras de diferenstes artistas </p>
            </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label fw-semibold ps-2">Nombre Completo</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label fw-semibold ps-2">Tu correo</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label fw-semibold ps-2">Contraseña</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label fw-semibold ps-2">Repetir Contraseña</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label text-TYC" for="flexCheckDefault">
            <p className='text-center text-secondary '>Al registrarme, acepto las <span> Politicad de privacidad</span> y los  <span> Terminos y condiciones</span> </p>
            </label>
            </div>
          <div className='text-center '>
            <Button title="Crear Cuenta"/>
          </div>
          
          
        </form>
    </>
  )
}

export default Singin