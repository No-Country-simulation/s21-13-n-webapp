import Link from "next/link";
import { ADLaM_Display } from "next/font/google";

const adlamDisplay = ADLaM_Display({
  weight: "400",
  subsets: ["latin"],
});

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "text-2xl lg:text-4xl" }: LogoProps) {
  return (
    <Link href="/" className={`${adlamDisplay.className} ${className} transition-transform duration-300 hover:scale-110`}>
      <span className="text-black">FRES</span>
      <span className="text-pink-600">KO</span>
    </Link>
  );
}
