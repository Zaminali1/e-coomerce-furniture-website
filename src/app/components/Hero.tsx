"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const Hero: React.FC = () => {
  const router = useRouter();

  const handleRedirect = (): void => {
    router.push('/Shop');
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 p-8 md:p-16">
      <div className="text-center md:text-left mb-4 md:mb-0 md:mr-8">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Rocket Single Seater</h1>
        <p className="text-gray-600 md:text-lg mb-6">Experience ultimate comfort and modern design with the Rocket Single Seater By Xami's Furnitue Brand.</p>
        <button
          onClick={handleRedirect}
          className="px-6 py-2 bg-blue-600 text-white text-lg rounded-md shadow-md hover:bg-blue-700 transition"
        >
          Shop Now
        </button>
      </div>
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        <img
          src="/headersofa.png"
          alt="White Armchair"
          className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
        />
      </div>
    </div>
  );
};

export default Hero;
