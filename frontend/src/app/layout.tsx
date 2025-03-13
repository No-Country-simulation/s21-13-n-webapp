import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AnimatedWrapper from "./AnimatedWrapper";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Footer from "@/components/UI/Footer";
import Chatbot from "@/components/Chatbot";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

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
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
        // className={`${poppins.variable} antialiased`}
      >
        <Navbar />
        {/* {children} */}
        <AnimatedWrapper>{children}</AnimatedWrapper>
        <Footer/>
        <ToastContainer />
        <Chatbot />

      </body>
    </html>
  );}
