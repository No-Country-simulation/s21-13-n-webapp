import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function ButtonModal({ id, name, price, description, imageUrl }) {
  const modalId = `product_modal_${id}`;
  const [imgSrc, setImgSrc] = useState(imageUrl);

  const handleImageError = () => {
    setImgSrc("/images/image-not-found.png"); // Imagen por defecto
  };

  return (
    <div className="flex justify-center min-w-full">
      <label htmlFor={modalId} className="rounded-full btn text-white bg-pink-600 hover:bg-pink-700 lg:btn-wide">
        <span>Ver detalle</span>
      </label>

      <input type="checkbox" id={modalId} className="modal-toggle" />
      <div className="modal max-w-full fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="modal-box w-1/2  max-w-[80%] lg:max-w-1/3 p-6 bg-white rounded-lg shadow-lg">
          <div className="flex justify-end">
            <label htmlFor={modalId} className="text-pink-600 hover:text-pink-700">
              <IoMdCloseCircleOutline size={26} />
            </label>
          </div>

          {/* <div className="text-center text-black">
            <img
              src={imgSrc}
              alt={name}
              className="w-full h-48 object-cover rounded-lg mb-4"
              onError={handleImageError} // Manejo de error
            />
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <p className="text-gray-700 mb-4">{description}</p>
            <p className="text-lg font-semibold">${price.toFixed(2)}</p>
          </div> */}


          <div className="card lg:card-side bg-white shadow-sm">
            <figure className="border-4 border-pink-600">
              <img
                src={imgSrc}
                alt={name}
                onError={handleImageError} // Manejo de error
                className="lg:h-[300px] lg:max-h-[300px] object-cover"
              />
            </figure>
            <div className="card-body lg:pt-0">
              <h2 className="card-title text-pink-600 font-extrabold lg:text-3xl">{name.toUpperCase()}</h2>
              <p className="text-gray-700 lg:text-lg">{description}</p>
              <p className="text-lg font-semibold text-pink-600">${price.toFixed(2)}</p>
              <div className="flex flex-col gap-4 items-center justify-center">

                <button className="btn btn-wide bg-transparent rounded-full text-pink-600 border-pink-600 hover:bg-pink-700 hover:text-white"></button>


                <label htmlFor="">Tamaño</label>
                
                <form className="filter">
                  <input className="btn btn-square" type="reset" value="×" />
                  <input className="btn" type="radio" name="frameworks" aria-label="Svelte" />
                  <input className="btn" type="radio" name="frameworks" aria-label="Vue" />
                </form>

                <button className="btn btn-wide bg-transparent rounded-full text-pink-600 border-pink-600 hover:bg-pink-700 hover:text-white">Agregar al Carrito</button>
                <button className="btn btn-wide bg-pink-600 rounded-full text-white border-pink-600 hover:bg-pink-700 hover:text-white">Comprar ahora</button>
                <a className="link text-black hover:text-pink-500">Ver todos los detalles</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}