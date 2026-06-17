import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import contactHeroBg from "../assets/images/contact-hero.png";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
    
      /* INFO CARD */

      gsap.from(".contact-info-card", {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      /* FORM CARD */

      gsap.from(".contact-form-card", {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      /* CONTACT ITEMS */

      gsap.from(".contact-item", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      /* FORM FIELDS */

      gsap.from(".form-field", {
        y: 30,
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#faf8f4]">

      {/* HERO */}

      <section
        className="
          relative
          pt-[70px]
          lg:pt-[90px]
          min-h-[75vh]
          overflow-hidden
        "
      >
        {/* Background */}

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${contactHeroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Content */}

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">

          <div className="min-h-[75vh] flex items-center">

           <motion.div
  initial={{
    opacity: 0,
    x: -50,
  }}
  animate={{
    opacity: 1,
    x: 0,
  }}
  transition={{
    duration: 0.8,
  }}
  className="max-w-3xl"
>

              <span
                className="
                  inline-block
                  px-4
                  py-2
                  rounded-full
                  border
                  border-gray-300
                  bg-white/70
                  text-xs
                  tracking-[3px]
                  uppercase
                  font-semibold
                "
              >
                Contact Somee International
              </span>

              <h1
                className="
                  heading-font
                  mt-8
                  text-5xl
                  md:text-6xl
                  lg:text-7xl
                  font-extrabold
                  leading-tight
                  text-[#0f172a]
                "
              >
                Let's Start
                <br />
                A Conversation
              </h1>

              <p
                className="
                  mt-6
                  text-lg
                  text-gray-600
                  max-w-xl
                  leading-relaxed
                "
              >
                Reach out for product enquiries,
                bulk orders, export opportunities,
                private labeling, or any questions
                regarding our premium freeze-dried
                ingredients.
              </p>

            </motion.div>

          </div>

        </div>

      </section>

            {/* CONTACT SECTION */}

      <section
        ref={sectionRef}
        className="
          py-32
          bg-[#f8f7f2]
          pb-[480px]
          lg:pb-[280px]
        "
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10">

            {/* CONTACT INFO */}

            <div
              className="
                contact-info-card
                bg-white
                rounded-[32px]
                p-8
                lg:p-10
                border
                border-gray-100
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
                Get In Touch
              </span>

              <h2
                className="
                  mt-5
                  text-4xl
                  md:text-5xl
                  font-bold
                  leading-tight
                "
              >
                Let's Connect
              </h2>

              <p
                className="
                  mt-6
                  text-lg
                  text-gray-600
                  leading-relaxed
                "
              >
                Our team is ready to assist you with
                product information, quotations,
                bulk requirements, export enquiries,
                and partnership opportunities.
              </p>

              <div className="mt-10 space-y-8">

                <div className="contact-item">
                  <p
                    className="
                      text-sm
                      uppercase
                      tracking-[3px]
                      font-semibold
                      text-[var(--accent)]
                    "
                  >
                    Address
                  </p>

                  <p
                    className="
                      mt-2
                      text-lg
                      text-gray-700
                    "
                  >
                    Nagpur, Maharashtra, India
                  </p>
                </div>

                <div className="contact-item">
                  <p
                    className="
                      text-sm
                      uppercase
                      tracking-[3px]
                      font-semibold
                      text-[var(--accent)]
                    "
                  >
                    Phone
                  </p>

                  <p
                    className="
                      mt-2
                      text-lg
                      text-gray-700
                    "
                  >
                    +91 98765 43210
                  </p>
                </div>

                <div className="contact-item">
                  <p
                    className="
                      text-sm
                      uppercase
                      tracking-[3px]
                      font-semibold
                      text-[var(--accent)]
                    "
                  >
                    Email
                  </p>

                  <p
                    className="
                      mt-2
                      text-lg
                      text-gray-700
                    "
                  >
                    info@someeinternational.com
                  </p>
                </div>

              </div>

            </div>

            {/* CONTACT FORM */}

            <div
              className="
                contact-form-card
                bg-white
                rounded-[32px]
                p-8
                lg:p-10
                border
                border-gray-100
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
                Send Inquiry
              </span>

              <h2
                className="
                  mt-5
                  text-4xl
                  md:text-5xl
                  font-bold
                  leading-tight
                "
              >
                Tell Us About
                <br />
                Your Requirement
              </h2>

              <form className="mt-10">

                <div className="grid md:grid-cols-2 gap-5">

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="
                      form-field
                      h-14
                      px-5
                      rounded-xl
                      border
                      border-gray-200
                      outline-none
                      focus:border-[var(--accent)]
                    "
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="
                      form-field
                      h-14
                      px-5
                      rounded-xl
                      border
                      border-gray-200
                      outline-none
                      focus:border-[var(--accent)]
                    "
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="
                      form-field
                      h-14
                      px-5
                      rounded-xl
                      border
                      border-gray-200
                      outline-none
                      focus:border-[var(--accent)]
                    "
                  />

                  <input
                    type="text"
                    placeholder="Subject"
                    className="
                      form-field
                      h-14
                      px-5
                      rounded-xl
                      border
                      border-gray-200
                      outline-none
                      focus:border-[var(--accent)]
                    "
                  />

                </div>

                <textarea
                  rows="6"
                  placeholder="Write your message here..."
                  className="
                    form-field
                    mt-5
                    w-full
                    p-5
                    rounded-xl
                    border
                    border-gray-200
                    outline-none
                    resize-none
                    focus:border-[var(--accent)]
                  "
                />

                <button
                  type="submit"
                  className="
                    mt-8
                    px-8
                    py-4
                    rounded-full
                    bg-[var(--accent)]
                    text-white
                    font-semibold
                    transition-all
                    duration-300
                    hover:scale-105
                    cursor-pointer
                  "
                >
                  Send Inquiry
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}