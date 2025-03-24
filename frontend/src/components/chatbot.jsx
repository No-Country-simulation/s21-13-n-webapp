"use client";
import { useState, useEffect } from "react";
import { IoMdSend, IoMdChatbubbles } from "react-icons/io";
import useCartStore from "@/store/cartStore";
import useProductStore from "@/store/productStore";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  // Obtener productos desde el store
  const { products, fetchProducts, findProduct } = useProductStore();

  // Obtener las funciones de cartStore
  const addItem = useCartStore((state) => state.addItem);

  // Cargar productos al inicializar el componente
  useEffect(() => {
    if (products.length === 0) fetchProducts(); // Cargar productos si no están cargados
  }, [fetchProducts, products.length]);

  // Función para manejar la respuesta del bot
  const getBotResponse = (message) => {
    const foundProduct = findProduct(message); // Buscar el producto usando el mensaje

    if (foundProduct.length > 0) {
      const product = foundProduct[0]; // Tomar el primer producto encontrado
      addItem(product, 1); // Agregar el producto al carrito
      return `¡El ${product.name} ha sido agregado al carrito!`;
    }

    return "Lo siento, no entendí eso. ¿Puedo ayudarte con algo más?";
  };

  // Función para enviar el mensaje
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);

    // Respuesta del bot
    const botMessage = { role: "assistant", content: getBotResponse(input) };
    setMessages([...messages, userMessage, botMessage]);

    // Limpiar input y cerrar el chat después de 2 segundos
    setTimeout(() => {
      setIsExpanded(false);
    }, 2000);

    setInput("");
  };

  // Alternar la visibilidad del chatbot
  const toggleChat = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`fixed bottom-5 right-5 ${isExpanded ? "w-64" : "w-20"} bg-white border shadow-lg rounded-lg z-[9999] transition-all duration-300`}>
      <div className="p-2 border-b bg-pink-200 flex items-center cursor-pointer" onClick={toggleChat}>
        <IoMdChatbubbles className="text-pink-600 mr-2" size={20} />
        {isExpanded && <span className="text-sm font-bold">Chat Fresko</span>}
      </div>
      <div className={`p-2 h-64 overflow-y-auto ${isExpanded ? "block" : "hidden"}`}>
        {messages.map((msg, index) => (
          <div key={index} className={`text-sm p-1 ${msg.role === "user" ? "text-right text-blue-500" : "text-left text-gray-700"}`}>
            {msg.content}
          </div>
        ))}
      </div>
      {isExpanded && (
        <div className="p-2 flex border-t">
          <input
            className="flex-1 border p-1 rounded-lg text-sm"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu mensaje..."
          />
          <button onClick={sendMessage} className="ml-2 text-pink-600">
            <IoMdSend size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
