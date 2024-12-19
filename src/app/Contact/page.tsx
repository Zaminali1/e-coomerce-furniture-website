import Image from 'next/image';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 lg:px-24">
      <div className="w-full max-w-4xl">
        <div className="relative h-48 w-full mb-8">
          <Image
            src="/shopheader.png"
            alt="Header Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl font-bold">Contact</h1>
            <p className="text-sm">Home &gt; Contact</p>
          </div>
        </div>

        <h1 className="text-center text-3xl font-bold mb-4">Get In Touch With Us</h1>
        <p className="text-center text-gray-600 mb-8">
          For more information about our products & services, please feel free to
          contact us. Our staff is always here to help you out. Do not hesitate!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt size={24} color="rgb(234 179 8)" />
              <div>
                <h3 className="font-bold">Address</h3>
                <p>St 30 Xami's Tech Main Qasimabad Road, Hyderabad, Sindh</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaPhoneAlt size={24} color="rgb(234 179 8)" />
              <div>
                <h3 className="font-bold">Phone</h3>
                <p>+923040832492</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaEnvelope size={24} color="rgb(234 179 8)" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p>bussines.xamis@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4 bg-white shadow-md rounded-lg p-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                placeholder="Optional"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-yellow-500 text-white font-bold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
