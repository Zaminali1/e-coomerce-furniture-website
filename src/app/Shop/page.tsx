// pages/shop.tsx
import Image from 'next/image';
import Link from 'next/link';

type Product = {
  name: string;
  price: string;
  image: string;
};

const products: Product[] = [
  {
    name: "Trenton modular sofa_3",
    price: "Rs. 25,000.00",
    image: "/mainsofa.png",
  },
  {
    name: "Granite dining table with dining chair",
    price: "Rs. 25,000.00",
    image: "/mainchairs.png",
  },
  {
    name: "Outdoor bar table and stool",
    price: "Rs. 25,000.00",
    image: "/maindyning.png",
  },
  {
    name: "Plain console with teak mirror",
    price: "Rs. 25,000.00",
    image: "/maintable.png",
  },
  {
    name: "Grain coffee table",
    price: "Rs. 15,000.00",
    image: "/maindex.png",
  },
  {
    name: "Kent coffee table",
    price: "Rs. 225,000.00",
    image: "/maindexflower.png",
  },
  {
    name: "Round coffee table_color 2",
    price: "Rs. 251,000.00",
    image: "/maindexchai.png",
  },
  {
    name: "Reclaimed teak coffee table",
    price: "Rs. 25,200.00",
    image: "/maindexwork.png",
  },
  {
    name: "Plain console",
    price: "Rs. 258,200.00",
    image: "/maindexsit.png",
  },
  {
    name: "Reclaimed teak Sideboard",
    price: "Rs. 20,000.00",
    image: "/maindexalmari.png",
  },
  {
    name: "SJP_0825",
    price: "Rs. 200,000.00",
    image: "/maindexchairs.png",
  },
  {
    name: "Bella chair and table",
    price: "Rs. 100,000.00",
    image: "/maindexchair.png",
  },
  {
    name: "Granite square side table",
    price: "Rs. 258,800.00",
    image: "/maindexstool.png",
  },
  {
    name: "Asgaard sofa",
    price: "Rs. 250,000.00",
    image: "/mainsofy.png",
  },
  {
    name: "Maya sofa three seater",
    price: "Rs. 115,000.00",
    image: "/mainarea.png",
  },
  {
    name: "Outdoor sofa set",
    price: "Rs. 244,000.00",
    image: "/mainguestroom.png",
  },
];

const Shop = () => {
  return (
    <div className="px-4 py-8 lg:px-24">
      {/* Header Image with Overlay Text */}
      <div className="relative w-full h-64 mb-8">
        <Image
          src="/shopheader.png"
          alt="Shop Header"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold mb-2 drop-shadow-lg">Shop</h1>
          <p className="text-lg drop-shadow-md">
            <Link href="/" className="text-yellow-300 hover:underline">Home</Link>{' '}
            &gt; Shop
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg shadow-md overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">{product.name}</h3>
              <p className="text-yellow-600 font-semibold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
