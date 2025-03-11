import { NextResponse } from "next/server";


export async function GET() {
    const user = 
        { 
        id: 1, 
        username: "cliente prueba", 
        email: "cliente@gmail.com",
        avatar: "/images/frutilla.png", 
        }

      return NextResponse.json(user);
    }