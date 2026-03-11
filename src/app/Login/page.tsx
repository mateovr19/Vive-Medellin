'use client'
import React, { useState } from 'react'
import Footer from '../../components/atoms/Footer/index'
import Icon from '../../components/atoms/Icon/index'
import NavTitle from '../../components/atoms/NavTitle/index'
import Text from '../../components/atoms/Text/index'
import TextBox from '../../components/atoms/TextBox/index'
import Button from '../../components/atoms/Button/index'
import { useAuth } from '@/hooks/auth'

export default function Login () {
  const [form, setForm] = useState({ email: '', password: '' })
  const { login, loading, error } = useAuth()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await login(form);
  }

  return (
    <div className='flex flex-col min-h-screen justify-between bg-background'>
        <div className='px-10 lg:px-55 pt-10 bg-background'>
            <div className="flex flex-row items-center justify-between bg-background">
                <Icon icon='mingcute:menu-fill' classes='self-start mt-4 hover:text-gray-500 hover:cursor-pointer'></Icon>
                <NavTitle
                iconName='line-md:arrow-left'
                titleClasses='text-black hover:text-gray-500 leading-none inline-block'
                title='Regresar'
                link= '/'
                classes='flex flex-row gap-x-1 hover:cursor-pointer hover:border-b'
                />
            </div>
        </div>
        <div className="flex justify-center bg-background lg:px-70 lg:w-full">
            <div className="flex flex-col items-center justify-between bg-white rounded-xl shadow-md p-10 lg:p-13 gap-2 max-w-[360px] sm:max-w-md lg:max-w-lg w-full mx-auto py-16 lg:py-7">
                <img
                src="/Logo-Login.png"
                alt="Logo Vive Medellín"
                className="w-[80px] h-[70px] mb-4"
                style={{ imageRendering: "auto" }}
                />
                <div>
                    <Text classes='font-bold'>Iniciar sesión</Text>
                </div>
                <div className='flex flex-row gap-x-1 justify-start'>
                    <Text classes='text-gray-500'>¿No tienes una cuenta?</Text>
                    <NavTitle
                    title='Registrarse'
                    link='/Register'
                    classes='text-sky-600'
                    />
                </div>
                <form className='flex flex-col items-center gap-4' onSubmit={handleSubmit}>
                    <TextBox
                    name='email'
                    type='email'
                    placeholder='Email'
                    value={form.email}
                    onChange={handleChange}
                    className='h-8 w-[300px] lg:w-[300px] border border-gray-400 rounded p-2'
                    />
                    <TextBox
                    name='password'
                    type='password'
                    placeholder='Contraseña'
                    value={form.password}
                    onChange={handleChange}
                    className='h-8 w-[300px] lg:w-[300px] border border-gray-400 rounded p-2'
                    />
                    {error && <Text classes='text-red-500'>{error}</Text>}
                    <Button 
                    iconName='material-symbols:login-sharp' 
                    classIcon='mt-1' 
                    classes='flex items-center justify-center w-[300px] pb-1 bg-primary font-inter font-semibold rounded text-white text-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer shadow'
                    disabled={loading}>{loading ? 'Cargando...' : 'Iniciar sesión'}
                    </Button>
                </form>
                <div className='flex flex-col items-center gap-2'>
                    <Text classes='text-sky-600 hover:cursor-pointer my-2'>Olvidé mi contraseña</Text>
                </div>
            </div>
        </div>
        <footer className="w-full">
            <Footer />
        </footer>
    </div>
  )
}