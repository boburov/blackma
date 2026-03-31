"use client";

import Lottie from "lottie-react";
import notf from "./lib/lottie/404_v1.json";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">
        Sahifa topilmadi
      </h1>

      <div className="w-[300px] md:w-[400px]">
        <Lottie animationData={notf} loop={true} autoplay={true} />
      </div>

      <Link
        href="/"
        className="mt-6 inline-block bg-black text-white px-6 py-2 rounded-xl"
      >
        Bosh sahifaga qaytish
      </Link>
    </section>
  );
};

export default NotFound;