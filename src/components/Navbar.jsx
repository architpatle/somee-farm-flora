import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      <header
        className={`
          fixed
          top-0
          left-0
          w-full
          z-50
          transition-all
          duration-500

          ${
            scrolled
              ? "bg-white/80 backdrop-blur-xl  border-gray-200 shadow-sm"
              : "bg-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="h-20 flex items-center justify-between">

            {/* Logo */}

            <Link to="/">
              <div className="flex flex-col">

                <span
                  className={`
                    heading-font
                    text-2xl
                    font-extrabold
                    transition-colors

                    ${
                      scrolled
                        ? "text-gray-900"
                        : "text-white"
                    }
                  `}
                >
                  SOMEE
                </span>

                <span
                  className={`
                    text-[10px]
                    tracking-[4px]
                    uppercase
                    transition-colors

                    ${
                      scrolled
                        ? "text-gray-500"
                        : "text-white/70"
                    }
                  `}
                >
                  INTERNATIONAL
                </span>

              </div>
            </Link>

            {/* Desktop Nav */}

            <nav className="hidden lg:flex items-center gap-10">

              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `
                    font-medium
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "text-[var(--accent)]"
                        : scrolled
                        ? "text-gray-700 hover:text-[var(--accent)]"
                        : "text-gray-700 hover:text-[var(--accent)]"
                    }
                  `
                  }
                >
                  {link.label}
                </NavLink>
              ))}

            </nav>

            {/* CTA */}

            <div className="hidden lg:block">

              <button
                className="
                  px-5
                  py-3
                  rounded-full
                  bg-[var(--accent)]
                  text-white
                  font-semibold
                  hover:opacity-90
                  transition-all
                "
              >
                Enquiry Now
              </button>

            </div>

            {/* Mobile Toggle */}

            <button
              className={`
                lg:hidden

                ${
                  scrolled
                    ? "text-black"
                    : "text-white"
                }
              `}
              onClick={() =>
                setIsOpen(true)
              }
            >
              <Menu size={28} />
            </button>

          </div>

        </div>
      </header>

      {/* Mobile Menu */}

      <div
        className={`
          fixed
          inset-0
          z-[999]
          bg-white
          transition-transform
          duration-300

          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        <div className="flex items-center justify-between px-5 h-20 border-b">

          <h2 className="text-2xl font-bold">
            SOMEE
          </h2>

          <button
            onClick={() =>
              setIsOpen(false)
            }
          >
            <X size={30} />
          </button>

        </div>

        <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] gap-8">

          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() =>
                setIsOpen(false)
              }
              className="text-2xl font-semibold"
            >
              {link.label}
            </NavLink>
          ))}

          <button
            className="
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