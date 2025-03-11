"use client";
import React, { useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import {LoginForm} from "./Auth/LoginForm";
import {RegisterForm} from "./Auth/RegisterForm";
import {ForgotPasswordForm} from "./Auth/ForgotPasswordForm";

export default function AuthModal() {
  const [currentForm, setCurrentForm] = useState("login");

  return (
    <div>
      <label htmlFor="auth_modal" className="rounded-none btn text-white bg-pink-600 hover:bg-pink-700 btn-xs mt-2.5 lg:mt-0 lg:btn-lg">
        <FaUserLarge /> <span className="hidden lg:block"> Iniciar sesión </span>
      </label>



      <input type="checkbox" id="auth_modal" className="modal-toggle" />
      <div className="modal max-w-full fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="modal-box w-full max-w-[80%] lg:max-w-md p-6 bg-white rounded-lg shadow-lg">
          <div className="flex justify-end">
            <label htmlFor="auth_modal" className="text-pink-600 hover:text-pink-700">
              <IoMdCloseCircleOutline size={26} />
            </label>
          </div>
          
          {currentForm === "login" && <LoginForm setCurrentForm={setCurrentForm} />}
          {currentForm === "register" && <RegisterForm setCurrentForm={setCurrentForm} />}
          {currentForm === "forgot" && <ForgotPasswordForm setCurrentForm={setCurrentForm} />}
        </div>
      </div>
    </div>
  );
}
