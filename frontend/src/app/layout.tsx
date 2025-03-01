import type { Metadata } from "next";
import { Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


import { ToastContainer } from 'react-toastify';
import Footer from "../components/UI/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FRESKO",
  description: "Heladeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-theme="heladeria">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <ToastContainer />
        <Footer/>

        

      </body>
    </html>
  );
}
