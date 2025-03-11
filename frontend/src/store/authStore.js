"use client";

import { create } from "zustand";
import Cookies from "js-cookie";

const useAuthStore = create((set) => ({
  user: null,
  token: Cookies.get("token") || null,

  login: (token) => {
    Cookies.set("token", token, { expires: 7 }); // Guarda el token por 7 días
    set({ token });
  },

  setUser: (userData) => {
    set({ user: userData });
  },

  logout: () => {
    Cookies.remove("token");
    set({ user: null, token: null });
  },
}));

export const fetchUserProfile = async () => {
    const token = Cookies.get("token");
    if (!token) return;
  
    try {
      const response = await fetch("/api/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      if (response.ok) {
        const userData = await response.json();
        useAuthStore.getState().setUser(userData); // Guardamos los datos del usuario
      }
    } catch (error) {
      console.error("Error al obtener perfil:", error);
    }
  };

export default useAuthStore;
