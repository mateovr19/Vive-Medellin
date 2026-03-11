'use client'
import React, { useState }from 'react'
import { useAuth } from '../../../hooks/auth'
import NavTitle from '../../atoms/NavTitle/index'
import CartEvent from '../../molecules/CartEvent/index'
import Body from '../Body/index'
import Button from '../../atoms/Button/index'

export default function Navbar() {
  const [activeView, setActiveView] = useState<'home' | 'events' | 'communities' | 'valorations'>('home');
  const { rol } = useAuth();

  const cardsInfo = [
    { title: 'Tendencias', img: '/tendencias.png' },
    { title: 'En curso', img: '/encurso.png' },
    { title: 'Próximos', img: '/proximos.png' },
    { title: 'Programados', img: '/programados.png' },
  ]

  return (
    <>
      <nav className='flex flex-col lg:flex-row items-center justify-around bg-secondary h-[150px] lg:h-[46px] w-full shadow-md mb-2'>
          <div>
            <NavTitle 
            title='Eventos y Actividades'
            titleClasses={`text-black ${activeView === 'events' ? 'font-bold' : ''} text-black hover:text-gray-500 leading-none inline-block`}
            classes="hover:cursor-pointer hover:border-b"
            onClick={() => setActiveView(activeView === 'events' ? 'home' : 'events')}
            />
          </div>
          <div>
            <NavTitle 
            title='Comunidades'
            titleClasses="text-black hover:text-gray-500 leading-none inline-block"
            classes="hover:cursor-pointer hover:border-b"
            onClick={() => setActiveView('communities')}
            />
          </div>
          <div>
            <NavTitle 
            title='Valoraciones'
            titleClasses="text-black hover:text-gray-500 leading-none inline-block"
            classes="hover:cursor-pointer hover:border-b"
            onClick={() => setActiveView('valorations')}
            />
          </div>
      </nav>
      {activeView === 'events' && rol === 'admin' && (
        <div className="flex-1 w-full pt-2">
          <Button
            classes="w-full bg-primary items-center h-[46px] shadow-md hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer shadow"
            classIcon="text-white"
          >
            Herramienta para administradores
          </Button>
        </div>
      )}
      <div className="w-full pt-2">
          {activeView === 'home' && <Body />}

          {activeView === 'events' && (
            <div className="flex flex-col lg:flex-row items-center justify-center gap-1">
              {cardsInfo.map((event, idx) => (
                <CartEvent 
                key={idx} 
                title={event.title}
                img={event.img} 
                classes="w-full h-50" />
              ))}
            </div>
          )}

          {activeView === 'communities' && (
            <div className="text-center text-lg">Aquí irán las comunidades...</div>
          )}

          {activeView === 'valorations' && (
            <div className="text-center text-lg">Aquí irán las valoraciones...</div>
          )}
      </div>
    </>
  );
}