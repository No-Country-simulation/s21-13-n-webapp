"use client";
import React from 'react';
import { Poppins } from "next/font/google";
import { useForm } from "react-hook-form";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export default function Subscribe() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  // Enviar los datos al backend
  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email }),
      });

      if (!response.ok) {
        throw new Error('Error al suscribirse');
      }

      const result = await response.json();
      console.log('Suscripción exitosa:', result);

      // Limpiar input
      reset();


    } catch (error) {
      console.error('Error al suscribirse:', error);

    }
  };

  return (
    <div className={`${poppins.className} flex flex-row bg-pink-700 text-base-content p-10 justify-center items-center gap-5 max-w-full`}>



      <div className="flex w-full flex-col lg:flex-row items-center justify-center">
        <label className="label">
          <span className="lg:text-2xl text-white">¡Recibe las mejores ofertas!</span>
        </label>



        <div className="lg:divider-horizontal"></div>


        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="form-control w-80">
    
            <div className="join">

              <input
                {...register("email", {
                  required: "El correo es obligatorio",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Correo electrónico inválido"
                  }
                })}
                type="email"
                placeholder="correo@dominio.com"
                className="input input-sm input-bordered join-item"
              />

              <button className="btn btn-sm bg-black join-item border-none text-white hover:bg-slate-900">
                Subscribe
              </button>

            </div>
            

          </fieldset>
        </form>
        <div className="label">    
               {errors.email && <span className="label-text-alt text-pink-300">{errors.email.message}</span>}
           </div>
      </div>
      



      {/* {errors.email && <span className="text-red-300 text-xs">{errors.email.message}</span>} */}
    </div>
  );
}
