export default function ChurchFooter() {
    return (
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* CTA Section */}
          <h2 className="text-3xl font-semibold mb-4">
            Give Your Life to Christ
          </h2>
          <p className="text-gray-300 max-w-md mx-auto">
            Experience true peace and transformation. Take the step to surrender
            to Christ today.
          </p>
          <a
            href="/salvation"
            className="mt-6 inline-block bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg transition-all shadow-md"
          >
            Take the Step
          </a>
  
          {/* Divider */}
          <div className="w-full h-px bg-gray-700 my-10"></div>
  
          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-400">
            <div>
              <h3 className="text-lg font-semibold text-white">About Us</h3>
              <p className="mt-2 text-sm">
                A place of hope, love, and transformation through Jesus Christ.
              </p>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/sermons" className="hover:text-yellow-400">
                    Sermons
                  </a>
                </li>
                <li>
                  <a href="/events" className="hover:text-yellow-400">
                    Events
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-yellow-400">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold text-white">Follow Us</h3>
              <div className="flex justify-center md:justify-start mt-2 space-x-4">
                <a href="#" className="hover:text-yellow-400">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="hover:text-yellow-400">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="hover:text-yellow-400">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
              </div>
            </div>
          </div>
  
          {/* Copyright */}
          <p className="text-gray-500 text-sm mt-10">
            &copy; {new Date().getFullYear()} Grace Area. All Rights Reserved.
          </p>
        </div>
      </footer>
    );
  }
  