import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { message } = await req.json();

        // Verifica si el mensaje fue recibido correctamente
        console.log("Mensaje recibido:", message);

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "gpt-4",
                messages: [{ role: "user", content: message }],
                temperature: 0.7,
            }),
        });

        const data = await response.json();

        // Verifica la respuesta de OpenAI
        console.log("Respuesta de OpenAI:", data);

        if (data.choices && data.choices[0]) {
            return NextResponse.json({ reply: data.choices[0].message.content });
        } else {
            throw new Error("No se recibió respuesta válida de OpenAI");
        }
    } catch (error) {
        console.error("Error en el chatbot:", error);
        return NextResponse.json({ error: "Error en el chatbot" }, { status: 500 });
    }
}
