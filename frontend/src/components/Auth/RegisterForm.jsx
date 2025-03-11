"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Input from "../UI/Input";
import { IoMdCloseCircleOutline } from "react-icons/io";


export function RegisterForm({ setCurrentForm }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Manejamos el envío del formulario
  const onSubmit = async (data) => {
    console.log("Datos enviados:", data);

    try {
      const response = await fetch(
        "https://intimate-chinchilla-equipo-s21-13-n-webapp-f92794e5.koyeb.app/api/v1/register",
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
        console.log("Registro exitoso:", result);

        // Luego podemos redirigir al usuario a la página de inicio de sesión

      } else {
        console.error("Error en el registro");
      }
    } catch (error) {
      console.error("Error en la conexión:", error);
    }
  };

  return (
    <div>
      <h3 className="text-lg font-bold text-center text-pink-700 lg:text-3xl">CREAR CUENTA</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="py-4">
        <Input
          id="username"
          label="Nombre de usuario"
          type="text"
          register={register}
          required="El nombre de usuario es obligatorio"
          minLength={{ value: 3, message: "Debe tener al menos 3 caracteres" }}
          errorMessage={errors.username && errors.username.message}
          placeholder="Tu nombre de usuario"
        />
        <Input
          id="email"
          label="Correo electrónico"
          type="email"
          register={register}
          required="El correo es obligatorio"
          pattern={{
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Correo electrónico no válido",
          }}
          errorMessage={errors.email && errors.email.message}
          placeholder="correo@dominio.com"
        />
        <Input
          id="password"
          label="Contraseña"
          type="password"
          register={register}
          required="La contraseña es obligatoria"
          minLength={{ value: 6, message: "Debe tener al menos 6 caracteres" }}
          errorMessage={errors.password && errors.password.message}
          placeholder="•••••••"
        />
        <button type="submit" className="btn w-full bg-pink-600 text-white hover:bg-pink-700">
          REGISTRAME
        </button>
      </form>

      <div className="text-center justify-around flex items-center">
        <span className="text-black text-sm">¿Ya tienes una cuenta? </span>
        <button onClick={() => setCurrentForm("login")} className="font-semibold text-black hover:text-pink-700 underline">
          Iniciar sesión
        </button>
      </div>
    </div>
  );
}
