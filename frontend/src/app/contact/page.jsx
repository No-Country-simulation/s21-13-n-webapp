"use client"
import { Facebook, Instagram } from "lucide-react";
import { ADLaM_Display } from "next/font/google";
import { Poppins } from "next/font/google";


const adlamDisplay = ADLaM_Display({
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export default function Footer() {
  return (
    <footer
      className="relative flex justify-between bg-cover bg-center bg-no-repeat h-[300px] text-black"
      style={{ backgroundImage: "url('/FOOTER.jpg')" }}
    >

      <div className=" w-[45%] rounded-r-[25px] bg-[#d9f99def]  drop-shadow-[10px_0px_5px_rgba(0,0,0,0.3)] ">
        <div className="py-6">
          <h1 className={`${adlamDisplay.className} text-center text-8xl font- font-bold`}>
            <span className="text-gray-800">FRES</span>
             <span className="text-pink-500">KO</span>
          </h1>
        </div>
        <div className={`${poppins.className}  grid grid-cols-3 md:grid-cols-3 gap-2 text-base md:text-lg font-medium justify-center  px-[10%] `}>
          <div className=" ">
            <h3 className="text-xl font-bold  text-pink-500">Información</h3>
            <ul className="text-[18px]">
              <li className=" transition-colors cursor-pointer text-black ">
                Sucursales
              </li>
              <li className=" transition-colors cursor-pointer text-black ">
                Cómo Comprar
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="text-xl font-bold  text-pink-500">Mis Cuentas</h3>
            <ul className="text-[18px]">
              <li className="transition-colors cursor-pointer text-black ">
                Mis Órdenes
              </li>
              <li className="transition-colors cursor-pointer text-black ">
                Carrito de Compras
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="text-xl font-bold  text-pink-500">Empresa</h3>
            <ul className="text-[18px]">
              <li className="transition-colors cursor-pointer text-black ">
                Sobre Nosotros
              </li>
              <li className="transition-colors cursor-pointer text-black ">
                Contáctanos
              </li>
              <li className="transition-colors cursor-pointer text-black ">
                Productos
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" my-auto h-[35%] pl-8 items-center rounded-l-[25px] w-[20%] bg-[#d9f99def] drop-shadow-[-10px_0px_5px_rgba(0,0,0,0.3)]">
        <div className="mt-6 md:mt-0">
          <h3 className={`${poppins.className} text-3xl text-black font-bold`}>Síguenos en:</h3>
          <div className="flex items-center  gap-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={45} className="text-pink-500 transition-colors" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram
                size={45}
                className="text-pink-500 transition-colors"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
