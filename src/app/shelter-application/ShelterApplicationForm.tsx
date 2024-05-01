'use client'
export default function ShelterApplicationForm() {
    
    return (
        <form>
            <div className='md:flex items-center mt-12'>
                <div className='w-full md:w-1/2 flex flex-col'>
                    <label 
                        htmlFor="shelterName" 
                        className="font-normal text-xl"
                    >
                        Nombre Refugio
                    </label>
                    <input 
                        id="shelterName" 
                        type="text" 
                        className="w-full p-4  border-gray-300 border mt-3"
                        placeholder='Nombre del Refugio' 
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                    <label 
                        htmlFor="nitShelter" 
                        className="font-normal text-xl"
                    >
                        NIT
                    </label>
                    <input 
                        id="nitShelter" 
                        type="number" 
                        className="w-full p-4  border-gray-300 border mt-3"
                        placeholder='Ingrese el número NIT'
                    />
                </div>
            </div>
            <div className='md:flex items-center mt-12'>
                <div className='w-full md:w-1/2 flex flex-col'>
                    <label 
                        htmlFor="address" 
                        className="font-normal text-xl"
                    >
                        Direccion
                    </label>
                    <input 
                        id="address" 
                        type="text" 
                        className="w-full p-4 border-gray-300 border mt-3"
                        placeholder='Direccion del Refugio' 
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                    <label 
                        htmlFor="phoneNumber" 
                        className="font-normal text-xl"
                    >
                        Telefono
                    </label>
                    <input 
                        id="phoneNumber" 
                        type="number" 
                        className="w-full p-4  border-gray-300 border mt-3"
                        placeholder='Telefono de Contacto' 
                    />
                </div>
            </div>

            <div className='md:flex items-center mt-12'>
                <div className='w-full flex flex-col'>
                    <label htmlFor="email" className="font-normal text-xl">
                        Email
                    </label>
                    <input id="email" type="text" className="w-full p-4  border-gray-300 border mt-3"
                        placeholder='Email del refugio' />
                </div>
            </div>

            <div className='md:flex items-center mt-12'>
                <div className='w-full flex flex-col'>
                    <label htmlFor="animalType" className="font-normal text-xl">
                        Descripción del Tipo de Animales
                    </label>
                    <textarea id="animalType" className="w-full p-4 border-gray-300 border mt-3"
                        placeholder="Escriba aquí una descripción de los tipos de animales que alberga el refugio" rows={4} />
                </div>
            </div>

            <div className='md:flex items-center mt-12'>
                <div className='w-full flex flex-col'>
                    <label htmlFor="capacity" className="font-normal text-xl">
                        Capacidad del Refugio
                    </label>
                    <input id="capacity" type="number" className="w-full p-4  border-gray-300 border mt-3"
                        placeholder='Ingrese la capacidad máxima del refugio (por ejemplo, 50)' />
                </div>
            </div>

            <div className='md:flex items-center mt-12'>
                <div className='w-full flex flex-col'>
                    <label htmlFor="description" className="font-normal text-xl">
                        Descripción
                    </label>
                    <textarea id="description" className="w-full p-4 border-gray-300 border mt-3"
                        placeholder="Ingrese una descripción del refugio (por ejemplo: misión, actividades, servicios)"
                        rows={4} />
                </div>
            </div>
            <div className="flex items-center justify-center w-full">
                <button
                    className='mt-9 w-full font-semibold leading-none text-white py-4 px-10 bg-orange-600 rounded hover:bg-orange-700 focus:ring-2 focus:ring-offset-2 focus:ring-orange-700 focus:outline-none uppercase'>
                    Enviar Solicitud
                </button>
            </div>
        </form>
    )
}
