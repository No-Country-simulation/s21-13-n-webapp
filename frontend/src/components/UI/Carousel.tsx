"use client";
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Poppins } from "next/font/google";
import { SkeletonCard, ProductCard } from "../../components/ProductCard";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
};

export default function Carousel() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isSliderReady, setIsSliderReady] = useState(false);
  const [loading, setLoading] = useState(true); // Estado de carga
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: products.length >= 1, // Siempre habilita el loop si hay al menos un producto
    slides: {
      perView: "auto",
      spacing: 5,
    },
    breakpoints: {
      "(min-width: 360px)": {
        slides: { perView: 1.2, spacing: 5 },
      },
      "(min-width: 375px)": {
        slides: { perView: 1.2, spacing: 5 },
      },
      "(min-width: 640px)": {
        slides: { perView: 2.3, spacing: 5 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 5 },
      },
    },
    slideChanged() {
      console.log("El slide ha cambiado");
    },
  });

  useEffect(() => {
    fetch(`${API_BASE_URL}/products?sort=id`) //  API real
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.content);
        setLoading(false); 
        if (instanceRef.current) {
          setIsSliderReady(true); //los productos se han cargado
        }
      });
  }, []);

  const goToPrevious = () => {
    if (instanceRef.current && isSliderReady) {
      instanceRef.current.prev();
    }
  };

  const goToNext = () => {
    if (instanceRef.current && isSliderReady) {
      instanceRef.current.next();
    }
  };

  return (
    <div
      className={`${poppins.className} relative w-full max-w-full flex justify-center items-center`}
    >
      {/* Botón Izquierdo */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 z-10 p-2 bg-pink-700 text-white rounded-full shadow-md hover:bg-pink-600"
      >
        <FaChevronLeft size={24} />
      </button>

      {/* Carrusel */}
      <div
        ref={sliderRef}
        className="keen-slider w-full flex justify-between items-center mx-12"
      >
        {loading ? (
          // muestra un espacio con skeletons
          Array(4)
            .fill(0)
            .map((_, index) => <SkeletonCard key={index} />)
        ) : (
          //  muestra los productos reales
          products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.imageUrl}
              description={product.description}
            />
          ))
        )}
      </div>

      {/* Botón Derecho */}
      <button
        onClick={goToNext}
        className="absolute right-0 z-10 p-2 bg-pink-700 text-white rounded-full shadow-md hover:bg-pink-600"
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
}
