// frontend/src/app/api/chat/route.js
import { NextResponse } from 'next/server';
import { addToCart } from "@/store/cartStore";  // Importar función de estado global para agregar productos al carrito

export async function POST(req) {
  const { message } = await req.json();

  try {
    // Llamada a la API de IA (como OpenAI) para obtener una respuesta natural
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,  // Asegúrate de agregar tu API key
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: message,
        max_tokens: 100,
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    const aiResponse = data.choices[0].text.trim();

    // Detectar si el mensaje contiene productos
    const cartResponse = await processCartMessage(message);

    return NextResponse.json({
      reply: aiResponse,
      cartUpdate: cartResponse,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Hubo un problema al procesar tu mensaje' }, { status: 500 });
  }
}

// Función para detectar y agregar productos al carrito
async function processCartMessage(message) {
  const productsList = message.toLowerCase().split(',');  // Divide el mensaje en productos
  const products = await fetchProducts();  // Trae productos desde la base de datos/API
  const foundProducts = [];

  // Buscar los productos mencionados en el mensaje
  for (const productName of productsList) {
    const product = products.find(p =>
      p.name.toLowerCase().includes(productName.trim())
    );

    if (product) {
      foundProducts.push(product);
      // Aquí es donde interactuamos con Zustand para actualizar el carrito en el frontend
      addToCart(product);  // Estado global de carrito
    }
  }

  if (foundProducts.length > 0) {
    return `¡He agregado ${foundProducts.length} producto(s) a tu carrito!`;
  } else {
    return "No pude encontrar esos productos. ¿Podrías especificar de nuevo?";
  }
}

async function fetchProducts() {
  // Obtener productos desde la base de datos o API
  const response = await fetch(`${process.env.API_URL}/products`);
  const data = await response.json();
  return data;
}
