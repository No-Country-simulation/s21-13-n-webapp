import { FcGoogle } from "react-icons/fc";

export default function LoginButton() {
  return (
    <button className="btn w-full flex items-center gap-2 bg-gray-200 hover:bg-gray-300">
      <FcGoogle size={20} className="text-red-500" />
      Inicia sesión con Google
    </button>
  );
}