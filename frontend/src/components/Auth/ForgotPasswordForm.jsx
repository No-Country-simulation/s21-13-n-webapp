"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Input from "../UI/Input";

export function ForgotPasswordForm({ setCurrentForm }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  // Manejamos el envío del formulario
  const onSubmit = async (data) => {
    console.log("Recuperar contraseña para:", data);

    try {
      const response = await fetch(
        "https://intimate-chinchilla-equipo-s21-13-n-webapp-f92794e5.koyeb.app/api/v1/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        console.log("Correo de recuperación enviado");
        alert("Revisa tu correo para restablecer la contraseña");
      } else {
        console.error("Error al enviar la solicitud");
        alert("Hubo un problema, intenta nuevamente");
      }
    } catch (error) {
      console.error("Error en la conexión:", error);
      alert("No se pudo conectar con el servidor");
    }
  };

  return (
    <div>
      <h3 className="text-lg font-bold text-center text-pink-700 lg:text-2xl">¿Olvidaste tu Contraseña?</h3>
      
      <p className="my-2 text-black">No te preocupes, te ayudamos a recuperarla</p>

      <form onSubmit={handleSubmit(onSubmit)} className="pb-4 pt-2">
        <Input
          id="email"
          label="Ingresa tu correo electrónico"
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
        <button
          type="submit"
          className="btn w-full bg-pink-600 text-white hover:bg-pink-700"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando enlace de recuperación..." : "Enviar enlace de recuperación"}
        </button>
      </form>

      <div className="text-center justify-around flex items-center">
        <span className="text-black text-sm">¿Ya recordaste tu contraseña? </span>
        <button
          onClick={() => setCurrentForm("login")}
          className="font-semibold text-black hover:text-pink-700 underline"
        >
          Iniciar sesión
        </button>
      </div>
    </div>
  );
}
