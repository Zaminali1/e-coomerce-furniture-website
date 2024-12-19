"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const Sofas: React.FC = () => {
  const router = useRouter();

  const handleRedirect = (): void => {
    router.push('/Shop');
  };

  return (
    <div className="bg-white p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Top Picks For You</h1>
      <p className="text-center text-gray-600 mb-10">
        Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          {
            img: '/mainsofa.png',
            title: 'Trenton Modular Sofa_3',
            price: 'Rs. 25,000.00',
          },
          {
            img: '/mainchairs.png',
            title: 'Granite Dining Table with Dining Chair',
            price: 'Rs. 25,000.00',
          },
          {
            img: '/maindyning.png',
            title: 'Outdoor Bar Table and Stool',
            price: 'Rs. 25,000.00',
          },
          {
            img: '/maintable.png',
            title: 'Plain Console with Teak Mirror',
            price: 'Rs. 25,000.00',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center"
          >
            <img src={item.img} alt={item.title} className="h-48 object-cover rounded-md" />
            <h2 className="text-lg font-semibold mt-4">{item.title}</h2>
            <p className="text-gray-500">{item.price}</p>
            <button
              onClick={handleRedirect}
              className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition"
            >
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sofas;
