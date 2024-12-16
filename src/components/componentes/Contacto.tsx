import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'

export function Contacto() {
  return (
    <div >
      {/* BOTONES DE CONTACTO */}
    <div className="absolute  top-4 left-20 flex flex-col gap-3 sm:gap-4 z-50">
      {/* Botón de WhatsApp */}
      <Link
        href="https://wa.me/1145630304" // Reemplaza con tu número de WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp size={24} />
      </Link>
    </div >
    <div className='absolute  top-4 left-4 flex flex-col gap-3 sm:gap-4 z-50'>
      {/* Botón de Instagram */}
      <Link
        href="https://www.instagram.com/dt_fragancias/" // Reemplaza con tu enlace de Instagram
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-full shadow-lg hover:opacity-90 transition"
      >
        <FaInstagram size={24} />
      </Link>
    </div>  
    </div>
  )
}





