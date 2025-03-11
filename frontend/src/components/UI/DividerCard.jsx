import React from "react";
import Button from "@/components/UI/Button";

export default function DividerCard() {
  return (
    <div className="flex flex-col justify-center mx-3 mb-10 rounded-xl">
      <span className="text-black mt-5 text-center font-bold lg:text-4xl lg:mt-0 pb-3">
        Empieza tu pedido
      </span>

      <div className="flex w-full flex-col lg:flex-row items-center justify-center">
        <Button className="btn-sm lg:btn-lg lg:text-2xl">ENTREGA EN TIENDA</Button>
        <div className="divider lg:divider-horizontal font-bold lg:text-2xl text-black">O</div>
        <Button className="btn-sm lg:btn-lg lg:text-2xl">ENTREGA A DOMICILIO</Button>
      </div>
    </div>
  );
}
