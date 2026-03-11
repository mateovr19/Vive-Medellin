'use client'
import React from 'react'
import { useState } from "react"
import Footer from '../../components/atoms/Footer/index'
import Icon from '../../components/atoms/Icon/index'
import NavTitle from '../../components/atoms/NavTitle/index'
import Text from '../../components/atoms/Text/index'
import TextBox from '../../components/atoms/TextBox/index'
import Button from '../../components/atoms/Button/index'

export default function Register () {
   const [form, setForm] = useState({ name: "", lastname: "", email: "", password: "" })

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
   };

  return (
    <div className='flex flex-col min-h-dvh bg-background'>
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
        <div className="flex-grow flex justify-center items-center bg-background py-15 lg:py-10 lg:px-50 lg:w-full">
            <div className="flex flex-col bg-white rounded-xl shadow-md gap-y-2 p-10 lg:p-10 max-w-[360px] sm:max-w-md lg:max-w-lg w-full mx-auto py-16">
                <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-x-2 w-full'>
                    <div className='order-2 lg:order-1 '>
                        <Text classes='font-bold text-md'>Registrarse</Text>
                        <div className='flex flex-row gap-x-1'>
                            <Text classes='text-gray-500 text-sm'>¿Ya tienes una cuenta?</Text>
                            <NavTitle
                            title='Iniciar sesión'
                            link='/Login'
                            classes='text-sky-600 text-sm'
                            />
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end w-full lg:w-auto">
                        <img
                            src="/Logo-Login.png"
                            alt="Logo Vive Medellín"
                            className="w-[80px] h-[70px]"
                            style={{ imageRendering: "auto" }}
                        />
                    </div>
                </div>
                <div>
                    <Text classes='font-bold text-md'>Datos personales</Text>
                </div>
                <form className='flex flex-col gap-y-2'>
                    <Text>Nombre</Text>
                    <TextBox
                    name='name'
                    type='name'
                    placeholder='Ingrese su nombre'
                    value={form.name}
                    onChange={handleChange}
                    className='w-full border border-gray-400 rounded p-2'
                    />
                    <Text>Apellido</Text>
                    <TextBox
                    name='lastname'
                    type='lastname'
                    placeholder='Ingrese su apellido'
                    value={form.lastname}
                    onChange={handleChange}
                    className='w-full border border-gray-400 rounded p-2'
                    />
                </form>
                <div>
                    <Text classes='font-bold text-md'>Datos de ingreso</Text>
                </div>
                <form className='flex flex-col gap-y-2'>
                    <Text>Correo electrónico</Text>
                    <TextBox
                    name='email'
                    type='email'
                    placeholder='Ingrese su dirección de correo electrónico'
                    value={form.email}
                    onChange={handleChange}
                    className='w-full border border-gray-400 rounded p-2'
                    />
                    <Text>Contraseña</Text>
                    <TextBox
                    name='password'
                    type='password'
                    placeholder='Establezca su contraseña'
                    value={form.password}
                    onChange={handleChange}
                    className='w-full border border-gray-400 rounded p-2'
                    />
                    <Text>Confirmar contraseña</Text>
                    <TextBox
                    name='password'
                    type='password'
                    placeholder='Confirme su contraseña'
                    value={form.password}
                    onChange={handleChange}
                    className='w-full border border-gray-400 rounded p-2'
                    />
                </form>
                <div className='flex flex-col items-center gap-2'>
                    <Text classes='text-sky-600 hover:cursor-pointer my-2'>Terminos y condiciones</Text>
                    <Button 
                    classes='flex items-center justify-center w-[300px] pb-1 bg-primary font-inter font-semibold rounded text-white text-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer shadow'
                    iconName='line-md:account-add'>Crear cuenta</Button>
                </div>
            </div>
        </div>
        <footer className="w-full">
            <Footer />
        </footer>
    </div>
  )
}