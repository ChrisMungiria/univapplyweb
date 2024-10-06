"use client";

import Image from "next/image";
import favicon from "../assets/favicon.png";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const goToHome = () => {
    router.push("/home");
  };
  return (
    <section className="w-11/12 max-w-xs mx-auto h-full flex flex-col items-center space-y-4">
      <Image alt="favicon" src={favicon} width={300} height={300} />
      <hr className="w-full h-px" />
      <h2 className="text-xl text-center font-semibold">
        Find the perfect university to achieve your dreams
      </h2>
      <button
        onClick={goToHome}
        className="bg-blue-500 p-3 w-1/2 items-center justify-center rounded-md text-xl font-bold text-white"
      >
        Login
      </button>
      <button
        onClick={goToHome}
        className="bg-green-500 p-3 w-1/2 items-center justify-center rounded-md text-xl font-bold text-white"
      >
        Register
      </button>
    </section>
  );
}
