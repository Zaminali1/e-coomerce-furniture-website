"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const MainSofa: React.FC = () => {
  const router = useRouter();

  const handleRedirect = (): void => {
    router.push('/Shop');
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white p-8 md:p-16">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center text-gray-800 mb-10">Discover Your Comfort</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2 text-center transform hover:scale-105 transition duration-300">
          <img src="/mainsofa.png" alt="Trenton Modular Sofa_3" className="w-full h-64 object-cover rounded-md" />
          <h2 className="text-xl md:text-2xl font-bold mt-4 text-gray-700">Trenton Modular Sofa_3</h2>
          <p className="text-gray-600 mt-2">Rs. 25,000.00</p>
          <button
            onClick={handleRedirect}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
          >
            View More
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2 text-center transform hover:scale-105 transition duration-300">
          <img src="/headersofas.png" alt="Plain Console with Teak Mirror" className="w-full h-64 object-cover rounded-md" />
          <h2 className="text-xl md:text-2xl font-bold mt-4 text-gray-700"> Maya Sofa Single Seater</h2>
          <p className="text-gray-600 mt-2">Rs. 25,000.00</p>
          <button
            onClick={handleRedirect}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainSofa;
