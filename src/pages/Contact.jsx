import React from "react";

export default function Contact() {
  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="overlay">
          <h1>Contact Us</h1>
          <p>
            We would love to hear from you. Reach out for product inquiries,
            bulk orders, partnerships, or any questions about our premium
            dehydrated ingredients.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-container">

        {/* Left Side */}
        <div className="contact-info">
          <h2>Get In Touch</h2>

          <p>
            Our team is ready to assist you with product details,
            quotations, and business requirements.
          </p>

          <div className="info-box">
            <h4>📍 Address</h4>
            <p>Nagpur, Maharashtra, India</p>
          </div>

          <div className="info-box">
            <h4>📞 Phone</h4>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-box">
            <h4>📧 Email</h4>
            <p>info@yourcompany.com</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-form">
          <h2>Send Inquiry</h2>

          <form>
            <div className="input-row">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
            </div>

            <div className="input-row">
              <input type="tel" placeholder="Phone Number" />
              <input type="text" placeholder="Subject" />
            </div>

            <textarea
              rows="6"
              placeholder="Write your message here..."
            ></textarea>

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>

      </section>

      <style>{`
        .contact-page{
          font-family:'Poppins',sans-serif;
          background:#faf8f4;
        }

        .contact-hero{
          height:350px;
          background:url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1600') center center/cover;
          position:relative;
        }

        .overlay{
          position:absolute;
          inset:0;
          background:rgba(0,0,0,0.55);
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          text-align:center;
          padding:20px;
          color:white;
        }

        .overlay h1{
          font-size:48px;
          margin-bottom:15px;
          font-weight:700;
        }

        .overlay p{
          max-width:700px;
          line-height:1.8;
          font-size:16px;
        }

        .contact-container{
          max-width:1200px;
          margin:auto;
          padding:80px 20px;
          display:grid;
          grid-template-columns:1fr 1.3fr;
          gap:40px;
          align-items:start;
        }

        .contact-info{
          background:white;
          padding:40px;
          border-radius:20px;
          box-shadow:0 10px 30px rgba(0,0,0,0.08);
        }

        .contact-info h2{
          color:#1b1b1b;
          margin-bottom:15px;
          font-size:30px;
        }

        .contact-info p{
          color:#666;
          line-height:1.8;
        }

        .info-box{
          margin-top:25px;
          padding-bottom:18px;
          border-bottom:1px solid #eee;
        }

        .info-box:last-child{
          border-bottom:none;
        }

        .info-box h4{
          color:#c6903c;
          margin-bottom:8px;
          font-size:18px;
        }

        .contact-form{
          background:white;
          padding:40px;
          border-radius:20px;
          box-shadow:0 10px 30px rgba(0,0,0,0.08);
        }

        .contact-form h2{
          margin-bottom:25px;
          color:#1b1b1b;
          font-size:30px;
        }

        .input-row{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:15px;
          margin-bottom:15px;
        }

        .contact-form input,
        .contact-form textarea{
          width:100%;
          padding:15px;
          border:1px solid #ddd;
          border-radius:10px;
          font-size:15px;
          outline:none;
          transition:0.3s;
          box-sizing:border-box;
        }

        .contact-form input:focus,
        .contact-form textarea:focus{
          border-color:#c6903c;
        }

        .contact-form textarea{
          resize:none;
        }

        .contact-form button{
          margin-top:15px;
          background:#c6903c;
          color:white;
          border:none;
          padding:14px 35px;
          border-radius:50px;
          font-size:16px;
          font-weight:600;
          cursor:pointer;
          transition:0.3s;
        }

        .contact-form button:hover{
          transform:translateY(-2px);
          background:#a9782d;
        }

        @media(max-width:768px){

          .contact-container{
            grid-template-columns:1fr;
            padding:60px 15px;
          }

          .input-row{
            grid-template-columns:1fr;
          }

          .overlay h1{
            font-size:34px;
          }

          .overlay p{
            font-size:14px;
          }

          .contact-info,
          .contact-form{
            padding:25px;
          }
        }
      `}</style>

    </div>
  );
}