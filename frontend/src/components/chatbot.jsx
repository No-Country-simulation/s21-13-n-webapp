"use client";
import { useState } from "react";
import { IoMdSend, IoMdChatbubbles } from "react-icons/io";
import useCartStore from "@/store/cartStore"; // Usar el estado global de carrito

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const addItem = useCartStore((state) => state.addItem); // Obtener la función para agregar al carrito

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      // Procesar la respuesta del chatbot
      const botMessage = { role: "assistant", content: data.reply };

      // Actualizar mensajes
      setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);

      // Si se actualizó el carrito, mostrar el mensaje
      if (data.cartUpdate) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "assistant", content: data.cartUpdate },
        ]);
      }

      // Cerrar el chat después de 2 segundos
      setTimeout(() => {
        setIsExpanded(false);
      }, 2000);

    } catch (error) {
      console.error("Error en el chatbot:", error);
    }

    setInput("");
  };

  const toggleChat = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`fixed bottom-5 right-5 ${isExpanded ? "w-64" : "w-20"} bg-white border shadow-lg rounded-lg z-[9999] transition-all duration-300`}
    >
      <div
        className="p-2 border-b bg-pink-200 flex items-center cursor-pointer"
        onClick={toggleChat}
      >
        <IoMdChatbubbles className="text-pink-600 mr-2" size={20} />
        {isExpanded && <span className="text-sm font-bold">Chat Fresko</span>}
      </div>
      <div className={`p-2 h-64 overflow-y-auto ${isExpanded ? "block" : "hidden"}`}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`text-sm p-1 ${msg.role === "user" ? "text-right text-blue-500" : "text-left text-gray-700"}`}
          >
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
