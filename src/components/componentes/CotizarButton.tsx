import { Perfume } from "@/types/product";
import React from "react";

// Definimos la interfaz para los productos
interface Props {
    name: string;
    price: number;
}

const CotizarPedido: React.FC = () => {
  // Lista de productos favoritos (puedes pasar esto como props o manejarlo desde el estado)
  const productosFavoritos: Perfume[] = [];

  // Función para generar el mensaje y abrir WhatsApp
  const handleCotizar = ({name , price }: Props ) => {
    let mensaje = "¡Hola! Me gustaría cotizar el siguiente pedido:\n\n";
    productosFavoritos.forEach((producto, index) => {
      mensaje += `${index + 1}. ${producto.name} - $${producto.price}\n`;
    });
    mensaje += "\nQuedo atento a la información. ¡Gracias!";

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);

    // Número de WhatsApp en formato internacional sin "+"
    const numeroWhatsApp: string = "1234567890"; // Ejemplo: 5491123456789

    // URL de WhatsApp con el mensaje
    const urlWhatsApp: string = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

    // Abrir la URL en una nueva pestaña
    window.open(urlWhatsApp, "_blank");
  };

  return (
    <button
      onClick={handleCotizar}
      style={{
        padding: "10px",
        backgroundColor: "#25D366",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginTop: "10px",
        fontSize: "16px",
      }}
    >
      Cotizar Pedido
    </button>
  );
};

export default CotizarPedido;