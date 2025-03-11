import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    { id: 1, name: "Helado de frutilla", price: 200, image: "/images/frutilla.png", description: "Helado de frutilla en copa con sustancias sabor a fresa." },
    { id: 2, name: "Helado de limón", price: 200, image: "/images/limon.jpg", description: "Delicioso helado de limón en copa, con un intenso sabor citrico gracias a su esencia natural de limón." },
    { id: 3, name: "Helado Tramontana", price: 200, image: "/images/tramontana.png", description: "Exquisito helado tramontana en copa, con la dulzura perfecta del caramelo y el toque crujiente de trocitos de chocolate." },
    { id: 4, name: "Helado de Mascarpone", price: 200, image: "/images/mascarpone.png", description: "Cremoso helado de Marcarpone en copa, con su inconfundible sabor suave y delicado, ideal para los amantes de los postres sofisticados." },
    { id: 5, name: "OTRO HELADO", price: 150, image: "/images/mascarpone.png", description: "Cremoso helado de Marcarpone en copa, con su inconfundible sabor suave y delicado, ideal para los amantes de los postres sofisticados." },

  ];
  return NextResponse.json(products);
}
