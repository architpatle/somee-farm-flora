import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Company */}

          <div>
            <h3 className="text-2xl font-bold">
              SOMEE
            </h3>

            <p className="mt-4 text-gray-400">
              Premium Vacuum Freeze-Dried
              Vegetable & Fruit Powder
              Manufacturer.
            </p>
          </div>

          {/* Links */}

          <div>
            <h4 className="font-semibold mb-4">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3">

              <Link to="/">Home</Link>

              <Link to="/about">
                About
              </Link>

              <Link to="/products">
                Products
              </Link>

              <Link to="/quality">
                Quality
              </Link>

              <Link to="/contact">
                Contact
              </Link>

            </div>
          </div>

          {/* Contact */}

          <div>
            <h4 className="font-semibold mb-4">
              Contact Us
            </h4>

            <p className="text-gray-400">
              Somee International
            </p>

            <p className="text-gray-400">
              Maharashtra, India
            </p>

            <p className="text-gray-400">
              info@someeinternational.com
            </p>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-gray-500">
          © 2026 Somee International.
          All Rights Reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;