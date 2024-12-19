import React from 'react';

const InstagramSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800">Our Instagram</h2>
        <p className="text-gray-500 mt-2">Follow our store on Instagram</p>

        {/* Instagram Button */}
        <a
          href="https://www.instagram.com/zamin.ali11/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-8 py-3 bg-gray-800 text-white text-sm font-semibold rounded-md shadow-md hover:bg-gray-700 transition"
        >
          Follow Us
        </a>
      </div>
    </section>
  );
};

export default InstagramSection;
