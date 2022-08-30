import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './components/Header/Navbar'
import Container from './components/Container/Container'
import Login from './components/Login/Login'
import Singin from './components/Body/Singin'
import Artist from './components/Body/Artist'
import Nav from './components/Nav/Nav'


function App() {
 useEffect(() => {
  
  return () => {
    console.log(window.innerWidth)
  };
 },);
  return (
    <>
    <main>
      <Navbar/>
      <Nav/>
      <section className='pt-5 pb-5 w-75 mx-auto d-flex justify-content-center'>
        <Login/>
      </section>
      <hr className='w-75 mx-auto'></hr>
      <h2 className='text-center text-secondary pt-5'>Crear <span className='text-secondary fw-bold fs-3'>Cuenta</span></h2>
      <section className='w-75 mx-auto'>
          <div className='row'>
              <div className='col-sm d-flex justify-content-center'>
                <Singin/>
              </div>
              <hr className={window.innerWidth > 600 ? "hrV": ""}></hr>
              <div className='col-sm d-flex justify-content-center'>
                <Artist/>
              </div>
            </div>
        </section>
    </main>
      
      
      
      
    </>
  )
}

export default App
