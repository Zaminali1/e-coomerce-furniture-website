import Image from 'next/image';

const AboutUs = () => {
  return (
    <main className="px-4 py-10 bg-gray-50">
      <section className="relative mb-8">
        <Image
          src="/shopheader.png"
          alt="Shop Header"
          width={1920}
          height={500}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
          <h1 className="text-4xl font-bold text-white mb-2">Blog</h1>
          <p className="text-gray-200">
            <a href="/" className="hover:underline">Home</a> &nbsp;&nbsp; Blog
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <Image
                src="/bloglaptop.png"
                alt="Blog Laptop"
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6 md:w-1/2">
              <div className="text-sm text-gray-400 mb-2">
                <span>Admin</span> &nbsp; &#x2022; &nbsp; <span>14 Oct 2022</span> &nbsp; &#x2022; &nbsp; <span>Wood</span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Going all-in with millennial design
              </h2>
              <p className="text-gray-600 mb-4">
                Millennial design embraces simplicity, functionality, and natural materials. It
                focuses on clean lines, neutral tones, and multi-purpose furniture to cater to
                modern lifestyles. This approach combines aesthetics and practicality, offering
                spaces that feel both stylish and livable.
              </p>
              <a href="https://www.dezeen.com/2022/12/06/wood-designs-furniture-seating-lighting-tables-dezeen-showroom/" className="text-blue-600 font-medium hover:underline">
                Read more
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <Image
                src="/blogbook.png"
                alt="Blog Book"
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6 md:w-1/2">
              <div className="text-sm text-gray-400 mb-2">
                <span>Admin</span> &nbsp; &#x2022; &nbsp; <span>14 Oct 2022</span> &nbsp; &#x2022; &nbsp; <span>Handmade</span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Exploring new ways of decorating
              </h2>
              <p className="text-gray-600 mb-4">
                Interior decorating trends are evolving with a focus on personalization and
                sustainability. Bold colors, unique textures, and eco-friendly materials are taking
                center stage. This movement encourages homeowners to experiment with patterns and
                design choices that reflect their personality.
              </p>
              <a href="https://www.elledecor.com/design-decorate/trends/a45997631/interior-design-trends-2024/" className="text-blue-600 font-medium hover:underline">
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
