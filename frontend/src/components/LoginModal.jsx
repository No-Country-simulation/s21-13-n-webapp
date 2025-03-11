"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaUserLarge } from "react-icons/fa6";
import Input from './UI/Input';
import { IoMdCloseCircleOutline } from "react-icons/io";
import LINK from 'next/link';

export default function LoginModal() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Manejamos Formulario
    const onSubmit = async (data) => {
        console.log(data);

        try {
            const response = await fetch('https://intimate-chinchilla-equipo-s21-13-n-webapp-f92794e5.koyeb.app/api/v1/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Login exitoso:', result);
                // Redirigir al usuario...
            } else {
                console.error('Error al iniciar sesión');
            }
        } catch (error) {
            console.error('Error en la conexión:', error);
        }
    };

    return (
        <div>
            {/* Botón para abrir el modal */}
            <label htmlFor="my_modal_6" className="btn text-white bg-pink-600 hover:bg-pink-700">
                <FaUserLarge />
                Iniciar sesión
            </label>

            {/* Modal */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="modal-box w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                    {/* Botón para cerrar el modal */}
                    <div className="flex justify-end">
                        <label htmlFor="my_modal_6" className="hover:text-red-500 text-black"><IoMdCloseCircleOutline size={26} /></label>
                    </div>

                    <h3 className="text-lg font-bold text-center">INICIAR SESIÓN</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="py-4">
                        <Input
                            id="username"
                            label="Nombre de usuario"
                            type="text"
                            register={register}
                            required="Este campo es obligatorio"
                            errorMessage={errors.username && errors.username.message}
                            placeholder={"Tu nombre de usuario"}
                        />
                        <Input
                            id="password"
                            label="Contraseña"
                            type="password"
                            register={register}
                            required="Este campo es obligatorio"
                            minLength={{ value: 6, message: "La contraseña debe tener al menos 6 caracteres" }}
                            errorMessage={errors.password && errors.password.message}
                            placeholder={"•••••••"}
                        />
                        <button
                            type="submit"
                            className="btn w-full bg-pink-600 text-white hover:bg-pink-700"
                        >
                            INICIAR SESIÓN
                        </button>
                        <span className='font-semibold text-xs text-black'>
                            <LINK href="/" className='hover:text-pink-700 underline'>
                                ¿Olvidaste tu contraseña?
                            </LINK>
                        </span>
                    </form>
                    <div className="divider">
                        <span className='text-pink-500 font-semibold text-xl'>O</span>
                    </div>
                    <div className=''>
                        <span className='text-black text-sm'>¿No tienes una cuenta? </span>
                        <LINK href="/" className='font-semibold text-black hover:text-pink-700 underline'>
                            Crear cuenta
                        </LINK>
                    </div>
                </div>
            </div>
        </div>
    );
}
