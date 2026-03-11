import React from 'react'
import Section from '../../molecules/BodyInfo/index';

export default function Body() {
  return (
    <nav className='flex flex-col lg:flex-row justify-around gap-4'>
        <div className='w-fit'>
            <Section 
            title='Deploy para Taller 1 Cloud Computing'
            info='ViveMedellín es tu guía actualizada para conocer los eventos, actividades y tendencias que mueven la ciudad.
            Desde conciertos y ferias hasta exposiciones culturales y encuentros locales, aquí encontrarás lo mejor de la vida urbana en un solo lugar. 
            Explora, agenda y vive Medellín con nosotros.'
            classes='flex flex-col items-start justify-center text-black bg-primary shadow-md  w-full h-full p-6'
            />
        </div>
        <div className='w-full'>
            <img src='/Carousel1.png' alt='Imagen carousel 1' className='h-full w-full object-cover shadow-md'/>
        </div>
    </nav>
  );
}