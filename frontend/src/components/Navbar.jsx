"use client";
import React, { useEffect } from "react";
import useAuthStore from "@/store/authStore";
import Link from 'next/link';
import DropdownMenu from './DropdownMenu';
import Cart from './Cart';
import UserAvatar from './UserAvatar';
import { ADLaM_Display } from "next/font/google";
import AuthModal from './AuthModal';
import Cookies from 'js-cookie';
import Logo from './UI/Logo';

const adlamDisplay = ADLaM_Display({
    weight: "400",
    subsets: ["latin"],
  });

export default function Navbar() {
    const { user, token } = useAuthStore(); // Obtenemos el usuario y el token


    const fetchUserProfile = async () => {
        const token = Cookies.get("token");
        if (!token) return;
    
        try {
          const response = await fetch("/api/profile", {
            headers: { Authorization: `Bearer ${token}` },
          });
    
          if (response.ok) {
            const userData = await response.json();
            useAuthStore.getState().setUser(userData);
          }
        } catch (error) {
          console.error("Error al obtener perfil:", error);
        }
      };
    
      useEffect(() => {
        if (token && !user) {
          fetchUserProfile();
        }
      }, [token]);



    const menuItems = [
        { label: 'ORDENA ONLINE', href: '/' },
        { label: 'MENÚ', href: '/' },
        { label: 'PROMOS', href: '/' },
        { label: 'UBICACIÓN', href: '/' },
        { label: 'UBICA TU ORDEN', href: '/' },
        // { 
        //     label: 'Menu', 
        //     href: '/menu', 
        //     submenu: [
        //         { label: 'Helados', href: '/parent/submenu2' },
        //         { label: 'Postres', href: '/parent/submenu2' },
        //         { label: 'Tortas', href: '/parent/submenu2' },
        //     ],
        // },
        // { label: 'Arma tu helado', href: '/item3' },
    ];

    return (
        <div className="navbar bg-base-100 shadow-md p-0 m-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <DropdownMenu items={menuItems} />
                </div>
                {/* <Link href="/" className={`${adlamDisplay.className} mx-5 text-2xl lg:text-4xl`}>
                <span className="text-black">FRES</span>
                <span className="text-pink-600">KO</span>
                </Link> */}
                <Logo className="mx-5 text-xl lg:text-3xl" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 z-[50] text-black font-bold">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            {item.submenu ? (
                                <details>
                                    <summary>
                                        <Link href={item.href}>{item.label}</Link>
                                    </summary>
                                    <ul className="p-2">
                                        {item.submenu.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <Link href={subItem.href}>{subItem.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            ) : (
                                <Link href={item.href}>{item.label}</Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex lg:gap-4">
                    {/* <ThemeMenu /> */}
                    {/* <LoginModal /> */}
                   
                    {user ? <UserAvatar user={user} /> : <AuthModal />}
         
                    <Cart />
                    {/* <UserAvatar /> */}
                </div>
            </div>
        </div>
    );
}