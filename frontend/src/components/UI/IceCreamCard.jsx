"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export default function IceCreamCard() {
    return (
        <div className={`${poppins.className} flex justify-center mt-10 px-4 max-w-full`}>
            <div className="relative md:w-[80%] w-full max-w-[1055px] bg-white shadow-2xl rounded-xl py-6 px-6 overflow-visible">
                {/* Imagen sobresaliendo */}
                <div className="absolute top-[-18px] right-[-50px] md:top-[-30px] md:right-[-80px] xl:top-[-45px] xl:right-[-115px] 2xl:top-[-45px] 2xl:right-[-115px] z-10">
                    <img
                        src="/copa-helado.png"
                        alt="Helado artesanal"
                        className="drop-shadow-xl rounded-xl w-[200px] h-[200px] md:w-[310px] md:h-[310px] lg:w-[360px] lg:h-[360px] xl:w-[470px] xl:h-[470px]"
                    />
                </div>

                {/* Contenido de la Card */}
                <div className="mt-0 md:mt-0 lg:mt-0">
                    <h2 className="text-xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold text-black">
                        Dulzura en Cada{" "}
                        <p className="text-pink-600">
                            <span className="text-black">Bocado, </span>
                            Frescura en
                        </p>{" "}
                    </h2>
                    <h2 className="text-xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold">
                        <span className="text-pink-600">Cada Instante.</span>
                    </h2>

                    <div className="md:w-[430px] lg:w-[430px] xl:w-[650px] md:text-center lg:text-center text-[0.55rem] w-[200px] md:text-xs xl:text-lg lg:text-xs">
                        <p className="mt-4 text-gray-700">
                            Helados artesanales con ingredientes de calidad y sabores irresistibles.
                        </p>
                        <p className="text-gray-700">
                            Disfruta la cremosidad y frescura en cada bocado.
                        </p>
                    </div>

                    <p className="mt-4 font-bold text-gray-900 text-center text-xs md:text-lg lg:text-2xl md:w-[500px] xl:text-4xl w-full xl:w-[700px]">
                        ¡Pide el tuyo y endulza tu día!
                    </p>
                </div>
            </div>
        </div>
    );
}
