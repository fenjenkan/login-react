import React from 'react'
import Button from '../Button/Button'
import './Login.css'
import Title from '../Container/Title'

const Login = () => {
  return (
    <>  
          <form>
            <div>
              <Title first="Inicio" title="Sesión"/>
            </div>
          
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label fw-semibold ps-2">Nombre</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label fw-semibold ps-2">Contraseña</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
            <a href="#" class="link-info">Olvide mi contraseña</a>
          </div>
          <div className='text-center '>
            <Button title="Enviar"/>
          </div>
        </form>
        
    </>
  )
}

export default Login