import { NextResponse } from "next/server";
import compromise from "compromise";
import useProductStore from "@/store/productStore";
import useCartStore from "@/store/cartStore";

export async function POST(req) {
  const { message } = await req.json();

  // Procesamos el mensaje con compromise
  const doc = compromise(message);
  const productName = doc.nouns().out("text"); // Extraemos los sustantivos (producto mencionado)
  
  if (!productName) {
    return NextResponse.json({ reply: "Lo siento, no pude identificar el producto. ¿Podrías intentar de nuevo?" });
  }

  // Intentamos encontrar el producto en nuestra tienda
  const products = useProductStore.getState().products;
  const product = products.find((prod) => prod.name.toLowerCase().includes(productName.toLowerCase()));

  if (!product) {
    return NextResponse.json({ reply: "Lo siento, no tengo ese producto en stock. ¿Te gustaría probar con otro?" });
  }

  // Si encontramos el producto, lo agregamos al carrito
  await useCartStore.getState().addItem(product, 1); // Añadimos el producto con cantidad 1

  return NextResponse.json({
    reply: `¡He agregado ${product.name} al carrito! ¿Te gustaría agregar algo más?`
  });
}
