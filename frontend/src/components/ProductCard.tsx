"use client";
import { IoMdCart } from "react-icons/io";
import { useState } from "react";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
};

const ProductCard = ({ id, name, price, image, description }: ProductCardProps) => {
  const [imgSrc, setImgSrc] = useState(image);

  const addToCart = () => {
    console.log(`Producto ${id} agregado al carrito. ${name} - ${price}`);
    //  Zustand para manejar el carrito (luego pensar como hacerlo  )
  };

  const handleImageError = () => {
    setImgSrc("/images/image-not-found.png"); // Imagen por defecto
  };

  return (
    <div className="keen-slider__slide p-3 sm:p-5">
      <div className="card w-full sm:w-56 bg-white shadow-xl border-2 sm:border-4 border-pink-600 min-h-[250px] sm:min-h-[300px] max-h-[250px] sm:max-h-[300px] rounded-xl overflow-hidden">
        <figure className="relative mx-2 mt-2 rounded-xl overflow-hidden h-32 sm:h-40">
          <img
            src={imgSrc}
            alt={name}
            className="object-cover w-full h-full"
            onError={handleImageError} 
          />
          <h2 className="absolute bottom-[5px] text-xs sm:text-sm text-white p-1 sm:p-2 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-70">
            {name}
          </h2>
        </figure>
        <div className="card-body p-3 sm:p-4 pt-[2px]">
          <p className="text-[8px] sm:text-[10px] text-center">{description}</p>
          <div className="flex-row flex justify-between items-center">
            <p className="text-xs sm:text-sm font-semibold text-pink-600 p-1 sm:p-2">${price.toFixed(2)}</p>
            <button onClick={addToCart} className="text-pink-600 p-1 sm:p-2 rounded-full hover:bg-pink-100">
              <IoMdCart size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
