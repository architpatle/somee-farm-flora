import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Quality", path: "/quality" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="h-20 flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="shrink-0">
              <div className="flex flex-col">
                <span className="heading-font text-2xl font-extrabold tracking-tight leading-none">
                  SOMEE
                </span>

                <span className="text-[10px] uppercase tracking-[4px] text-gray-500 mt-1 leading-none">
                  INTERNATIONAL
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-[var(--accent)]"
                        : "text-gray-700 hover:text-[var(--accent)]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <button
                className="
                  px-5
                  py-3
                  rounded-full
                  bg-[var(--accent)]
                  text-white
                  font-semibold
                  transition-all
                  duration-300
                  hover:opacity-90
                "
              >
                Enquiry Now
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={28} />
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-[999]
          bg-white
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Top */}
        <div className="flex items-center justify-between px-5 h-20 border-b border-gray-200">

          <div className="flex flex-col">
            <span className="heading-font text-2xl font-extrabold leading-none">
              SOMEE
            </span>

            <span className="text-[10px] uppercase tracking-[4px] text-gray-500 mt-1 leading-none">
              INTERNATIONAL
            </span>
          </div>

          <button onClick={() => setIsOpen(false)}>
            <X size={30} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center justify-center gap-8 h-[calc(100vh-80px)]">

          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-semibold"
            >
              {link.label}
            </NavLink>
          ))}

          <button
            className="
              mt-4
              px-6
              py-3
              rounded-full
              bg-[var(--accent)]
              text-white
              font-semibold
            "
          >
            Enquiry Now
          </button>

        </div>
      </div>
    </>
  );
};

export default Navbar;