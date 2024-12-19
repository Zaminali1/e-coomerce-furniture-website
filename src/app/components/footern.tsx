export default function Footer() {
    return (
      <footer className="bg-white py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Address Section */}
            <div className="space-y-2">
              <p className="text-gray-500 text-sm">
                St 30 Xami's Tech Main Qasimabad Road Hydearbad Sindh, <br />
                 +923040832492 Pak
              </p>
            </div>
  
            {/* Links Section */}
            <div>
              <h4 className="text-gray-800 font-semibold">Links</h4>
              <ul className="mt-2 space-y-2">
                <li><a href="/" className="text-gray-500 hover:text-gray-700">Home</a></li>
                <li><a href="Shop" className="text-gray-500 hover:text-gray-700">Shop</a></li>
                <li><a href="About" className="text-gray-500 hover:text-gray-700">About</a></li>
                <li><a href="Contact" className="text-gray-500 hover:text-gray-700">Contact</a></li>
              </ul>
            </div>
  
            {/* Help Section */}
            <div>
              <h4 className="text-gray-800 font-semibold">Help</h4>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Payment Options</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Returns</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Privacy Policies</a></li>
              </ul>
            </div>
  
            {/* Newsletter Section */}
            <div>
              <h4 className="text-gray-800 font-semibold">Newsletter</h4>
              <form className="mt-2 flex">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full px-4 py-2 border rounded-l-md text-gray-700 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
  
          <div className="mt-8 border-t pt-4">
            <p className="text-center text-gray-500 text-sm">
              © 2024 Xami's Tech. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  