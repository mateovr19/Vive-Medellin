import React from 'react'

type CartEventProps = {
    title: string
    classes?: string
    img: string
    imgClasses?:string
    titleClasses?: string
}

export default function CartEvent(props: CartEventProps) {
  return (
    <div className={`relative overflow-hidden shadow-md flex flex-col justify-center items-center text-center ${props.classes}`}>
        <img 
            src={props.img} 
            alt={props.title} 
            className={`absolute inset-0 w-full h-hull object-cover ${props.imgClasses}`}
        />
        <div className='relative z-10 text-white p-4'>
            <h1 className={`text-2xl lg:text-3xl italic ${props.titleClasses}`}>{props.title}</h1>
        </div>
    </div>
  );
}