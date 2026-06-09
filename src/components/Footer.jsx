import { useEffect, useRef } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import newsletterImage from "../assets/images/footer-newsletter.png";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const newsletterRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".newsletter-card", {
        y: 80,
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: newsletterRef.current,
          start: "top 85%",
        },
      });

    });

    return () => ctx.revert();
  }, []);

  const socialLinks = [
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
  ];
  return (
    <footer
      className="
    relative
    pt-[360px]
    lg:pt-[220px]
    bg-[#184f3c]
    text-white
  "
    >

      {/* NEWSLETTER CARD */}

      <div
        ref={newsletterRef}
        className="
    absolute
    left-1/2
    -translate-x-1/2
    top-0
    -translate-y-1/2

    w-full
    max-w-7xl

    px-5
    lg:px-8
  "
      >
        <div
          className="
    newsletter-card

    bg-[#f5f5ef]

    rounded-[30px]

    border
    border-[#dfe7da]

    overflow-hidden

    shadow-2xl

    grid
lg:grid-cols-2
items-center
gap-6
lg:gap-0
  "
        >
          {/* IMAGE */}

          <div
            className="
              relative

             h-[220px]
md:h-[280px]
lg:h-[350px]

              flex
              items-center
              justify-center
            "
          >
            <div
              className="
                absolute

                h-[180px]
w-[180px]

md:h-[220px]
md:w-[220px]

lg:h-[260px]
lg:w-[260px]

                rounded-full

                bg-[var(--accent)]
              "
            />

            <img
              src={newsletterImage}
              alt=""
              className="
                relative
                z-10

                h-[200px]
md:h-[250px]
lg:h-[330px]
                object-contain
              "
            />
          </div>

          {/* CONTENT */}
          <div
            className="
    px-5
    sm:px-8
    lg:px-12

    py-8
    sm:py-10
    lg:py-12
  "
          >

            <span
              className="
                text-sm
                uppercase
                tracking-[4px]
                font-semibold

                text-[var(--accent)]
              "
            >
              Stay Connected
            </span>

            <h2
              className="
                mt-4

               text-3xl
sm:text-4xl
md:text-5xl
leading-tight

                font-bold

                text-[var(--primary)]
              "
            >
              Subscribe For
              Product Updates
            </h2>

            <p
              className="
                mt-5

                text-gray-600
                text-base
md:text-lg
              "
            >
              Get updates about new
              freeze-dried ingredients,
              export opportunities and
              product launches.
            </p>

            <div
  className="
    mt-8

    flex
    flex-col

    sm:flex-row

    bg-white

    rounded-[24px]
    sm:rounded-full

    overflow-hidden

    border
    border-gray-200
  "
>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="
                  flex-1

                  px-5
                  py-4

                  bg-transparent

                  outline-none

                  text-gray-700
                "
              />

              <button
                className="
                  w-full
sm:w-14

h-14

m-0
sm:m-1
                  rounded-full

                  bg-[var(--accent)]

                  text-white

                  flex
                  items-center
                  justify-center

                
                "
              >
                <Send size={18} />
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* FOOTER */}

      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-12 pb-12">

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-4

            gap-12
          "
        >
          {/* BRAND */}

          <div>

            <h3
              className="
                text-3xl
                font-bold
              "
            >
              SOMEE
            </h3>

            <p
              className="
                text-sm
                tracking-[4px]
                uppercase

                text-white/60
              "
            >
              International
            </p>

            <p
              className="
                mt-6

                text-white/70
                leading-relaxed
              "
            >
              Delivering premium
              freeze-dried vegetables,
              fruits and botanical
              ingredients to food
              manufacturers worldwide.
            </p>

            <div
              className="
                flex
                gap-3

                mt-8
              "
            >
              {socialLinks.map(
                (Icon, index) => (
                  <button
                    key={index}
                    className="
                      h-11
                      w-11

                      rounded-full

                      border
                      border-white/20

                      flex
                      items-center
                      justify-center

                      hover:bg-white
                      hover:text-[#184f3c]

                      transition-all
                    "
                  >
                    <Icon size={18} />
                  </button>
                )
              )}
            </div>

          </div>

          {/* COMPANY */}

          <div>

            <h4
              className="
                text-2xl
                font-semibold
              "
            >
              Company
            </h4>

            <ul className="mt-6 space-y-4 text-white/70">

              <li>About Us</li>

              <li>Our Products</li>

              <li>Quality Assurance</li>

              <li>Contact Us</li>

            </ul>

          </div>

          {/* PRODUCTS */}

          <div>

            <h4
              className="
                text-2xl
                font-semibold
              "
            >
              Products
            </h4>

            <ul className="mt-6 space-y-4 text-white/70">

              <li>Onion Powder</li>

              <li>Beetroot Powder</li>

              <li>Moringa Powder</li>

              <li>Fruit Powders</li>

            </ul>

          </div>

          {/* CONTACT */}

          <div>

            <h4
              className="
                text-2xl
                font-semibold
              "
            >
              Contact
            </h4>

            <div className="mt-6 space-y-5">

              <div className="flex gap-4">

                <Mail
                  size={18}
                  className="text-[var(--accent)] mt-1"
                />

                <span className="text-white/70">
                  info@someeinternational.com
                </span>

              </div>

              <div className="flex gap-4">

                <Phone
                  size={18}
                  className="text-[var(--accent)] mt-1"
                />

                <span className="text-white/70">
                  +91 98765 43210
                </span>

              </div>

              <div className="flex gap-4">

                <MapPin
                  size={18}
                  className="text-[var(--accent)] mt-1"
                />

                <span className="text-white/70">
                  Maharashtra, India
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}

        <div
          className="
            mt-16
            pt-8

            border-t
            border-white/10

            flex
            flex-col
            md:flex-row

            gap-4

            justify-between
            items-center
          "
        >
          <p className="text-white/60">
            © 2026 Somee International.
            All Rights Reserved.
          </p>

          <div
            className="
              flex
              gap-8

              text-white/60
            "
          >
            <span>Terms & Conditions</span>

            <span>Privacy Policy</span>

            <span>Sitemap</span>
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;