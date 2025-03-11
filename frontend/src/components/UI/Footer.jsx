"use client"
// import { Facebook, Instagram } from "lucide-react";
import { ADLaM_Display, Poppins } from "next/font/google";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const adlamDisplay = ADLaM_Display({
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export default function Footer() {
  return (
    <footer
      className="relative flex flex-col md:flex-row items-center justify-between bg-cover bg-center bg-no-repeat h-auto  text-black md:max-w-full p-4 md:p-0"
      style={{ backgroundImage: "url('/FOOTER.jpg')" }}
    >
      {/* Sección de información */}
      <div className="w-full md:w-[45%] rounded-[25px] md:rounded-none md:rounded-r-[25px] bg-[#d9f99def] drop-shadow-[10px_0px_5px_rgba(0,0,0,0.3)] p-4 md:p-6 m-0">
        <h1 className={`${adlamDisplay.className} text-center text-5xl md:text-8xl font-bold`}>
          <span className="text-gray-800">FRES</span>
          <span className="text-pink-500">KO</span>
        </h1>
        <div className={`${poppins.className} grid grid-cols-1 md:grid-cols-3 gap-4 text-sm md:text-lg font-medium px-4 mt-4`}>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-pink-500">Información</h3>
            <ul>
              <li className="transition-colors cursor-pointer text-black">Sucursales</li>
              <li className="transition-colors cursor-pointer text-black">Cómo Comprar</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-pink-500">Mis Cuentas</h3>
            <ul>
              <li className="transition-colors cursor-pointer text-black">Mis Órdenes</li>
              <li className="transition-colors cursor-pointer text-black">Carrito de Compras</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-pink-500">Empresa</h3>
            <ul>
              <li className="transition-colors cursor-pointer text-black">Sobre Nosotros</li>
              <li className="transition-colors cursor-pointer text-black">Contáctanos</li>
              <li className="transition-colors cursor-pointer text-black">Productos</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sección de redes sociales */}
      <div className="w-full md:w-[20%] bg-[#d9f99def] drop-shadow-[-10px_0px_5px_rgba(0,0,0,0.3)] p-4 md:p-6 rounded-[25px] md:rounded-none md:rounded-l-[25px] flex flex-col items-center mt-4 md:mt-0">
        <h3 className={`${poppins.className} text-xl md:text-3xl text-black font-bold`}>Síguenos en:</h3>
        <div className="flex gap-4 mt-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            {/* <Facebook size={35} className="text-black transition-colors pd-2 bg-pink-500 rounded-full" /> */}
            <FaFacebook size={45} className="text-pink-500 transition-colors"/>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            {/* <Instagram size={35} className="text-pink-500 transition-colors" /> */}
            <IoLogoInstagram size={45} className="text-pink-500 transition-colors"/>
          </a>
        </div>
      </div>
    </footer>
  );
}
