import { Perfume } from "@/types/product";
import React from "react";
import { FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'


// Definimos la interfaz para los productos
interface CotizarProps {
  perfumes: Perfume[]
  name: string;
  price: number;
}   

export function CotizarButton ({perfumes, name, price}: CotizarProps){
  // Lista de productos favoritos (puedes pasar esto como props o manejarlo desde el estado)
  const productosFavoritos: Perfume[] = [];

  // Función para generar el mensaje y abrir WhatsApp
  const handleCotizar = (): void => {
    let mensaje = "¡Hola! Me gustaría cotizar el siguiente pedido:\n\n";

     productosFavoritos.forEach((perfumes, index) => {
      mensaje += `${index + 1}. ${perfumes.name} - $${perfumes.price}\n`;
    });
    mensaje += "\nQuedo atento a la información. ¡Gracias!"; 

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);

    // Número de WhatsApp en formato internacional sin "+"
    const numeroWhatsApp: string = "1545630304"; 

    // URL de WhatsApp con el mensaje
    const urlWhatsApp: string = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

    // Abrir la URL en una nueva pestaña
    window.open(urlWhatsApp, "_blank");
  };



  return (
    <>
    <div className=" mt-4 flex flex-col  ">
      {/* Botón de WhatsApp */}
      <Link
        onClick={handleCotizar}
        href="https://wa.me/1545630304" // Reemplaza con tu número de WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp size={24} />
      </Link>
    </div >
    </>
  );
};

