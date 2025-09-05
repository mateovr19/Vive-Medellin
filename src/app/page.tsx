import React from 'react'
import Header from '../components/organisms/Header/index'
import Navbar from '../components/organisms/Navbar/index'
import Footer from '../components/atoms/Footer/index';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col gap-5 bg-background'>
      {/* Contenido fijo arriba */}
      <div className="flex flex-col items-center bg-background w-full px-10 lg:px-55 pt-10 gap-4">
        <Header />
      </div>

      <div className="flex-1 flex flex-col w-full px-10 lg:px-55 bg-background">
        <Navbar />
      </div>

      {/* Footer abajo siempre */}
      <div className="flex flex-col items-center bg-background w-full mt-4">
        <Footer />
      </div>
    </div>
  )
}