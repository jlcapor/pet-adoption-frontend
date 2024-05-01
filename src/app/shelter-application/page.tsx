import React from 'react'
import ShelterApplicationForm from './ShelterApplicationForm'

export default function ShelterApplicationPage() {
  return (
    <div className='flex items-center justify-center pt-10'>
       <div className='bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full'>
          <h1 className="text-3xl font-bold  text-center mb-8">Solicitud de Registro de Refugio</h1>
          <p>
            Por favor, completa el siguiente formulario para solicitar la afiliación de tu refugio a nuestra plataforma de adopción de mascotas.
          </p>
          <ShelterApplicationForm/>
       </div>
    </div>
  )
}
