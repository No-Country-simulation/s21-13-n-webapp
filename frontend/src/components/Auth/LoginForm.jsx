"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { FaUserLarge } from "react-icons/fa6";
import Input from "../UI/Input";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Link from "next/link";
import useAuthStore from "@/store/authStore"; // Importamos el store
import { useRouter } from "next/navigation"; // Importamos useRouter
import LoginBtnGoogle from "../UI/LoginBtnGoogle";


export function LoginForm({ setCurrentForm }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const login = useAuthStore((state) => state.login); // Obtenemos la función login
  const router = useRouter(); // Usamos el hook useRouter

  // Manejamos el envío del formulario
  const onSubmit = async (data) => {
    console.log("Datos enviados:", data);

    try {
      const response = await fetch(
        "https://intimate-chinchilla-equipo-s21-13-n-webapp-f92794e5.koyeb.app/api/v1/authenticate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Login exitoso:", result.jwtToken);
        // --------------
        login(result.jwtToken); // Guardamos el token en Zustand y Cookies

        // Redirigimos al usuario 
        router.push("/profile"); //  redirigir a profile
      } else {
        console.error("Error al iniciar sesión");
      }
    } catch (error) {
      console.error("Error en la conexión:", error);
    }
  };

  return (
    <div>
      <h3 className="text-lg font-bold text-center text-pink-700 lg:text-3xl">Iniciar Sesión</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="py-4">
        <Input
          id="username"
          label="Nombre de usuario"
          type="text"
          register={register}
          required="Este campo es obligatorio"
          errorMessage={errors.username && errors.username.message}
          placeholder="Tu nombre de usuario"
        />
        <Input
          id="password"
          label="Contraseña"
          type="password"
          register={register}
          required="Este campo es obligatorio"
          minLength={{ value: 6, message: "La contraseña debe tener al menos 6 caracteres" }}
          errorMessage={errors.password && errors.password.message}
          placeholder="•••••••"
        />
        <div className="mb-3">
          <button onClick={() => setCurrentForm("forgot")} className="text-xs text-black hover:text-pink-700 underline">
            ¿Olvidaste tu contraseña?
          </button>
        </div>
        <button type="submit" className="btn w-full bg-pink-600 text-white hover:bg-pink-700">
          INICIAR SESIÓN
        </button>
      </form>





      <div className="divider">
        <span className="text-pink-500 font-semibold text-xl">O</span>
      </div>
      <div className="flex flex-col items-center mb-5">
        <LoginBtnGoogle />

      </div>


      <div className="text-center justify-around flex items-center">
        <span className="text-black text-sm">¿No tienes una cuenta?</span>
        <button onClick={() => setCurrentForm("register")} className="font-semibold text-black hover:text-pink-700 underline">
          Crear cuenta
        </button>
      </div>
    </div>
  );
}
