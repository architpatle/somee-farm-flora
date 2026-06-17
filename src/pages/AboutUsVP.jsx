import { useState } from "react";
import heroImg from "../assets/images/products-hero.png"

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700;800&display=swap');

  .somee-about * { box-sizing: border-box; margin: 0; padding: 0; }
  .somee-about { font-family: 'Inter', sans-serif; background: #f7f4ee; color: #1a1a1a; overflow-x: hidden; padding-top: 40px; }

  /* NAV */
  .s-nav {
    background: #fff; display: flex; align-items: center;
    justify-content: space-between; padding: 0 48px; height: 68px;
    box-shadow: 0 1px 8px rgba(0,0,0,.07); position: sticky; top: 0; z-index: 99;
  }
  .s-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; cursor: pointer; }
  .s-logo-name { font-size: 1.1rem; font-weight: 800; color: #1e4d35; display: block; }
  .s-logo-sub { font-size: .6rem; letter-spacing: 3px; text-transform: uppercase; color: #666; }
  .s-nav-links { display: flex; gap: 32px; list-style: none; }
  .s-nav-links a { text-decoration: none; font-size: .88rem; font-weight: 500; color: #444; transition: color .2s; }
  .s-nav-links a:hover { color: #c8922a; }
  .s-nav-links a.active { color: #c8922a; }
  .s-nav-btn { background: #c8922a; color: #fff; padding: 9px 22px; border-radius: 50px; font-size: .86rem; font-weight: 600; text-decoration: none; cursor: pointer; border: none; }

  /* HERO */
  .s-hero {
    // background-color: #d4e8db;
    // background-image: url('/assets/hero-bg.jpg');
    background-size: cover;
    background-position: center;
    background-blend-mode: multiply;
    padding: 80px 48px;
    display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center;
    position: relative; overflow: hidden;
  }
  .s-hero::before {
    content: ''; position: absolute; inset: 0;
    // background: radial-gradient(ellipse 55% 70% at 85% 50%, rgba(200,146,42,.10), transparent);
    pointer-events: none;
  }
  .s-hero-bg-img {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    object-fit: cover;
    // opacity: 0.10;
    // mix-blend-mode: luminosity;
    pointer-events: none;
    z-index: 0;
  }
  .s-hero > *:not(.s-hero-bg-img) { position: relative; z-index: 1; }
  .s-eyebrow { font-size: .72rem; letter-spacing: 3px; text-transform: uppercase; color: #4a6741; font-weight: 600; margin-bottom: 16px; }
  .s-hero h1 { font-family: 'Playfair Display', serif; font-size: 3rem; line-height: 1.13; color: #1a2e1f; margin-bottom: 20px; }
  .s-hero h1 em { font-style: normal; color: #7a4a0a; }
  .s-hero-sub { font-size: .98rem; line-height: 1.75; color: #3a4f3d; margin-bottom: 36px; }
  .s-hero-stats { display: flex; gap: 32px; flex-wrap: wrap; }
  .s-stat strong { font-size: 1.9rem; font-weight: 800; color: #7a4a0a; display: block; }
  .s-stat span { font-size: .75rem; color: #4a5e4d; }
  .s-hero-card {
    background: rgba(255,255,255,.75); border: 1px solid rgba(30,77,53,.18);
    border-radius: 18px; padding: 32px 28px; backdrop-filter: blur(6px);
  }
  .s-card-label { font-size: .7rem; letter-spacing: 2.5px; text-transform: uppercase; color: #7a4a0a; margin-bottom: 20px; }
  .s-check-list { list-style: none; display: flex; flex-direction: column; gap: 12px; }
  .s-check-list li { display: flex; align-items: center; gap: 12px; font-size: .88rem; color: #1e3a28; }
  .s-tick {
    width: 24px; height: 24px; border-radius: 50%; background: #c8922a;
    color: #fff; display: flex; align-items: center; justify-content: center;
    font-size: .7rem; font-weight: 700; flex-shrink: 0;
  }

  /* SHARED SECTION */
  .s-section { padding: 72px 48px; }
  .s-sec-eyebrow { font-size: .72rem; letter-spacing: 3px; text-transform: uppercase; color: #c8922a; font-weight: 600; margin-bottom: 10px; }
  .s-sec-title { font-family: 'Playfair Display', serif; font-size: 2.1rem; line-height: 1.2; color: #1e4d35; margin-bottom: 14px; }
  .s-divider { width: 52px; height: 3px; background: #c8922a; border-radius: 2px; margin-bottom: 24px; }
  .s-body { font-size: .95rem; line-height: 1.78; color: #444; }

  /* WELCOME */
  .s-welcome { background: #fff; }
  .s-welcome-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
  .s-img-box {
    border-radius: 18px; overflow: hidden; position: relative;
    background: linear-gradient(135deg, #e8f0eb 0%, #c8ddd0 100%);
    min-height: 340px; display: flex; align-items: center; justify-content: center;
  }
  .s-img-emoji { font-size: 6rem; }
  .s-img-badge {
    position: absolute; bottom: 20px; left: 20px;
    background: #1e4d35; color: #c8ddd0; border-radius: 12px; padding: 12px 18px;
    font-size: .8rem; line-height: 1.5;
  }
  .s-img-badge strong { display: block; font-size: 1rem; color: #a8d4b8; margin-bottom: 2px; }

  /* MISSION VISION */
  .s-mv { background: #f7f4ee; }
  .s-mv-header { text-align: center; max-width: 560px; margin: 0 auto 44px; }
  .s-mv-header .s-divider { margin: 0 auto; }
  .s-mv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .s-mv-card {
    background: #fff; border-radius: 14px; padding: 36px 32px;
    border-top: 4px solid #c8922a; box-shadow: 0 4px 20px rgba(0,0,0,.05);
  }
  .s-mv-icon { font-size: 2rem; margin-bottom: 14px; }
  .s-mv-card h3 { font-family: 'Playfair Display', serif; font-size: 1.4rem; color: #1e4d35; margin-bottom: 12px; }
  .s-mv-card p { font-size: .9rem; line-height: 1.72; color: #555; }

  /* TECHNOLOGY */
  .s-tech { background: #1e4d35; padding: 72px 48px; position: relative; overflow: hidden; }
  .s-tech::after {
    content: ''; position: absolute; top: -60px; right: -60px;
    width: 280px; height: 280px; border-radius: 50%;
    background: rgba(200,146,42,.1); pointer-events: none;
  }
  .s-tech .s-sec-eyebrow { color: #a8d4b8; }
  .s-tech .s-sec-title { color: #e8f5ee; }
  .s-tech .s-divider { background: #a8d4b8; }
  .s-tech .s-body { color: #c8ddd0; margin-bottom: 40px; }
  .s-tech-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
  .s-tech-card {
    background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.18);
    border-radius: 14px; padding: 28px 24px;
  }
  .s-tech-icon { font-size: 1.8rem; margin-bottom: 14px; }
  .s-tech-card h4 { font-size: .95rem; font-weight: 700; color: #d4edd8; margin-bottom: 8px; }
  .s-tech-card p { font-size: .84rem; line-height: 1.65; color: #b8d4be; }

  /* INDUSTRIES */
  .s-industries { background: #fff; }
  .s-ind-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; margin-top: 40px; }
  .s-ind-card {
    background: #f7f4ee; border-radius: 12px; padding: 24px 20px;
    text-align: center; border: 1px solid transparent;
    transition: transform .2s, box-shadow .2s, border-color .2s; cursor: default;
  }
  .s-ind-card:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(0,0,0,.08); border-color: #c8922a; }
  .s-ind-icon { font-size: 1.8rem; margin-bottom: 10px; }
  .s-ind-card p { font-size: .83rem; color: #444; font-weight: 500; }

  /* WHY CHOOSE */
  .s-why { background: #f7f4ee; }
  .s-why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
  .s-why-feats { display: flex; flex-direction: column; gap: 16px; margin-top: 32px; }
  .s-why-feat {
    display: flex; gap: 14px; align-items: flex-start;
    background: #fff; border-radius: 12px; padding: 18px 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,.04);
  }
  .s-feat-icon {
    width: 38px; height: 38px; border-radius: 9px; background: #c8922a;
    color: #fff; display: flex; align-items: center; justify-content: center;
    font-size: 1rem; flex-shrink: 0;
  }
  .s-feat-body h5 { font-size: .9rem; font-weight: 700; color: #1e4d35; margin-bottom: 3px; }
  .s-feat-body p { font-size: .82rem; color: #555; line-height: 1.6; }
  .s-why-visual {
    border-radius: 18px; background: linear-gradient(160deg, #1e4d35, #2a6347);
    min-height: 420px; display: flex; flex-direction: column;
    align-items: center; justify-content: center; gap: 16px;
    padding: 44px 32px; text-align: center;
  }
  .s-big-num { font-family: 'Playfair Display', serif; font-size: 4.5rem; color: #a8d4b8; line-height: 1; }
  .s-why-visual p { color: #c8ddd0; font-size: .95rem; line-height: 1.65; }
  .s-cta-btn {
    margin-top: 8px; background: #c8922a; color: #fff;
    padding: 13px 30px; border-radius: 50px; font-weight: 600; font-size: .9rem;
    border: none; cursor: pointer;
  }

  /* FOOTER */
  .s-footer { background: #1e4d35; padding: 56px 48px 32px; }
  .s-footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1.4fr; gap: 44px; }
  .s-f-brand-name { font-size: 1.3rem; font-weight: 800; color: #e8f5ee; }
  .s-f-brand-sub { font-size: .6rem; letter-spacing: 3px; text-transform: uppercase; color: #a8d4b8; display: block; margin-bottom: 14px; }
  .s-f-brand-desc { font-size: .85rem; line-height: 1.7; color: #b8d4be; }
  .s-f-col h4 { font-size: .74rem; text-transform: uppercase; letter-spacing: 2.5px; color: #a8d4b8; margin-bottom: 16px; font-weight: 600; }
  .s-f-col ul { list-style: none; display: flex; flex-direction: column; gap: 9px; }
  .s-f-col ul a { font-size: .85rem; color: #b8d4be; text-decoration: none; transition: color .2s; }
  .s-f-col ul a:hover { color: #e8f5ee; }
  .s-f-contact { display: flex; align-items: center; gap: 9px; font-size: .85rem; color: #b8d4be; margin-bottom: 10px; }
  .s-footer-bottom {
    margin-top: 44px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,.1);
    font-size: .78rem; color: #7aaa8a; display: flex; justify-content: space-between;
    flex-wrap: wrap; gap: 8px;
  }

  /* ── TABLET  ≤ 1024px ── */
  @media (max-width: 1024px) {
    .s-nav { padding: 0 28px; }
    .s-hero { padding: 64px 28px; gap: 36px; }
    .s-hero h1 { font-size: 2.4rem; }
    .s-section { padding: 56px 28px; }
    .s-tech { padding: 56px 28px; }
    .s-footer { padding: 48px 28px 28px; }
    .s-footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
    .s-ind-grid { grid-template-columns: repeat(3, 1fr); }
  }

  /* ── MOBILE  ≤ 768px ── */
  @media (max-width: 768px) {
    /* Nav */
    .s-nav { padding: 0 20px; height: 60px; }
    .s-nav-links { display: none; }

    /* Hero — stack */
    .s-hero { grid-template-columns: 1fr; padding: 48px 20px 40px; gap: 32px; }
    .s-hero h1 { font-size: 2rem; }
    .s-hero-sub { font-size: .92rem; }
    .s-hero-stats { gap: 20px; }

    /* Sections */
    .s-section { padding: 48px 20px; }
    .s-tech { padding: 48px 20px; }
    .s-sec-title { font-size: 1.7rem; }

    /* Welcome */
    .s-welcome-grid { grid-template-columns: 1fr; gap: 32px; }
    .s-img-box { min-height: 240px; }

    /* Mission & Vision */
    .s-mv-grid { grid-template-columns: 1fr; gap: 20px; }
    .s-mv-card { padding: 28px 24px; }

    /* Technology */
    .s-tech-grid { grid-template-columns: 1fr; gap: 16px; }

    /* Industries */
    .s-ind-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }

    /* Why Choose */
    .s-why-grid { grid-template-columns: 1fr; gap: 36px; }
    .s-why-visual { min-height: 280px; padding: 36px 24px; }
    .s-big-num { font-size: 3.5rem; }

    /* Footer */
    .s-footer { padding: 40px 20px 24px; }
    .s-footer-grid { grid-template-columns: 1fr 1fr; gap: 28px; }
    .s-footer-bottom { flex-direction: column; gap: 6px; text-align: center; }
  }

  /* ── SMALL MOBILE  ≤ 480px ── */
  @media (max-width: 480px) {
    /* Hero */
    .s-hero { padding: 36px 16px 32px; gap: 28px; }
    .s-hero h1 { font-size: 1.75rem; }
    .s-hero-sub { font-size: .88rem; }
    .s-hero-stats { gap: 16px; }
    .s-stat strong { font-size: 1.6rem; }
    .s-hero-card { padding: 20px 16px; }
    .s-check-list li { font-size: .82rem; }

    /* Sections */
    .s-section { padding: 36px 16px; }
    .s-tech { padding: 36px 16px; }
    .s-sec-title { font-size: 1.45rem; }

    /* Mission & Vision */
    .s-mv-card { padding: 24px 18px; }

    /* Industries */
    .s-ind-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
    .s-ind-card { padding: 18px 12px; }

    /* Why Choose */
    .s-why-feat { padding: 14px 16px; }
    .s-why-visual { min-height: 240px; padding: 28px 20px; }
    .s-big-num { font-size: 3rem; }

    /* Footer */
    .s-footer { padding: 32px 16px 20px; }
    .s-footer-grid { grid-template-columns: 1fr; gap: 24px; }
    .s-footer-bottom { flex-direction: column; gap: 6px; text-align: center; }
  }
`;

const NavLogo = () => (
  <div className="s-logo">
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
      <circle cx="19" cy="19" r="19" fill="#e8f0eb" />
      <path d="M19 7 C13 13 9 19 13 25 C15 29 23 29 25 25 C29 19 25 13 19 7Z" fill="#2a6347" />
      <path d="M19 13 C16 17 15 21 17 24 C18 26 20 26 21 24 C23 21 22 17 19 13Z" fill="#c8922a" />
    </svg>
    <div>
      <span className="s-logo-name">Somee</span>
      <span className="s-logo-sub">International</span>
    </div>
  </div>
);

const promises = [
  "Vacuum Freeze Dried Technology",
  "Premium Farm-Fresh Sourcing",
  "No Artificial Additives",
  "Bulk & Private Label Supply",
  "Consistent Quality Every Batch",
  "Reliable Export & Domestic Supply",
];

const techCards = [
  { icon: "❄️", title: "Colour & Aroma Retained", desc: "Low-temperature processing keeps vivid natural colours and aromatic compounds intact in every powder batch." },
  { icon: "🔬", title: "Maximum Nutrition", desc: "Vitamins, minerals, and antioxidants are preserved far more effectively than heat-based drying alternatives." },
  { icon: "📦", title: "Extended Shelf Life", desc: "Ultra-low moisture prevents microbial growth, giving products a longer, stable shelf life without preservatives." },
];

const industries = [
  { icon: "🏭", label: "Food Processing Industry" },
  { icon: "🌶️", label: "Spice Manufacturers" },
  { icon: "🧂", label: "Seasoning Manufacturers" },
  { icon: "🍱", label: "Ready-to-Eat Foods" },
  { icon: "🍽️", label: "Restaurants & Hotels" },
  { icon: "💊", label: "Nutraceutical Companies" },
  { icon: "🌱", label: "Health & Wellness Brands" },
  { icon: "🌐", label: "Export & Trade Partners" },
];

const whyFeats = [
  { icon: "🧊", title: "Vacuum Freeze Dried Technology", desc: "Industry-leading process that preserves full nutritional value and natural taste." },
  { icon: "🌾", title: "Premium Quality Raw Materials", desc: "Farm-fresh vegetables sourced from vetted, trusted growers across India." },
  { icon: "🚫", title: "No Artificial Additives", desc: "Clean-label products with zero preservatives, fillers, or artificial colours." },
  { icon: "🏷️", title: "Bulk & Private Label Supply", desc: "Flexible supply options for domestic manufacturers and international buyers." },
];

export default function AboutUs() {
  return (
    <div className="somee-about">
      <style>{styles}</style>

      {/* NAV — commented out; use your app's shared Navbar instead */}
      {/* <nav className="s-nav">
        <NavLogo />
        <ul className="s-nav-links">
          {["Home", "About Us", "Products", "Quality", "Contact Us"].map((item) => (
            <li key={item}>
              <a href="#" className={item === "About Us" ? "active" : ""}>{item}</a>
            </li>
          ))}
        </ul>
        <button className="s-nav-btn">Enquiry Now</button>
      </nav> */}

      {/* HERO */}
      <div className="s-hero">
        <img
          src={heroImg}
          alt=""
          className="s-hero-bg-img"
        />

        <div>
          <p className="s-eyebrow">About Somee International</p>
          <h1>Nature Preserved, <em>Quality Delivered</em></h1>
          <p className="s-hero-sub">
            Trusted manufacturer of premium dehydrated vegetable powders — combining advanced freeze-drying
            technology with farm-fresh ingredients to serve food industries worldwide.
          </p>
          <div className="s-hero-stats">
            {[["100%", "Natural Ingredients"], ["15+", "Product Variants"], ["Global", "Export Reach"]].map(([val, label]) => (
              <div className="s-stat" key={label}>
                <strong>{val}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="s-hero-card">
            <p className="s-card-label">Our Promise</p>
            <ul className="s-check-list">
              {promises.map((p) => (
                <li key={p}><span className="s-tick">✓</span>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* WELCOME */}
      <section className="s-section s-welcome">
        <div className="s-welcome-grid">
          <div>
            <p className="s-sec-eyebrow">Who We Are</p>
            <h2 className="s-sec-title">Welcome to Somee International</h2>
            <div className="s-divider" />
            <p className="s-body">
              Somee International is a trusted manufacturer and supplier of premium-quality dehydrated vegetable
              powders. Under our flagship brand <strong>Somee Farm Flora</strong>, we deliver natural, nutritious,
              and high-quality food ingredients to customers across India and international markets.
            </p>
            <p className="s-body" style={{ marginTop: 14 }}>
              Our products are manufactured using advanced Vacuum Freeze Drying Technology, preserving the natural
              colour, aroma, flavour, and nutritional value of fresh vegetables — ensuring superior quality and
              longer shelf life without compromising freshness.
            </p>
            <p className="s-body" style={{ marginTop: 14 }}>
              We source carefully selected farm-fresh vegetables from trusted growers and process them under strict
              quality control standards. Every batch reflects our commitment to purity, consistency, and food safety.
            </p>
          </div>
          <div className="s-img-box">
            <div className="s-img-emoji">🌿</div>
            <div className="s-img-badge">
              <strong>Somee Farm Flora</strong>
              Our flagship brand for premium dehydrated ingredients
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="s-section s-mv">
        <div className="s-mv-header">
          <p className="s-sec-eyebrow">What Drives Us</p>
          <h2 className="s-sec-title">Our Mission & Vision</h2>
          <div className="s-divider" />
        </div>
        <div className="s-mv-grid">
          <div className="s-mv-card">
            <div className="s-mv-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>To provide premium-quality dehydrated vegetable powders that help food manufacturers and consumers enjoy natural ingredients with maximum nutrition and convenience — delivered reliably and affordably.</p>
          </div>
          <div className="s-mv-card">
            <div className="s-mv-icon">🌍</div>
            <h3>Our Vision</h3>
            <p>To become a globally recognised brand for innovative and sustainable dehydrated food products, while supporting healthy food solutions worldwide and empowering local farming communities.</p>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="s-tech">
        <p className="s-sec-eyebrow">Our Process</p>
        <h2 className="s-sec-title">Advanced Freeze-Drying Technology</h2>
        <div className="s-divider" />
        <p className="s-body">
          We use Vacuum Freeze Drying — the gold standard in food dehydration — which removes moisture at low
          temperatures to lock in nutrients, colour, and flavour that conventional drying destroys.
        </p>
        <div className="s-tech-grid">
          {techCards.map((c) => (
            <div className="s-tech-card" key={c.title}>
              <div className="s-tech-icon">{c.icon}</div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="s-section s-industries">
        <p className="s-sec-eyebrow">Who We Serve</p>
        <h2 className="s-sec-title">Industries We Supply</h2>
        <div className="s-divider" />
        <div className="s-ind-grid">
          {industries.map((ind) => (
            <div className="s-ind-card" key={ind.label}>
              <div className="s-ind-icon">{ind.icon}</div>
              <p>{ind.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="s-section s-why">
        <div className="s-why-grid">
          <div>
            <p className="s-sec-eyebrow">Why Choose Us</p>
            <h2 className="s-sec-title">Why Choose Somee Farm Flora?</h2>
            <div className="s-divider" />
            <div className="s-why-feats">
              {whyFeats.map((f) => (
                <div className="s-why-feat" key={f.title}>
                  <div className="s-feat-icon">{f.icon}</div>
                  <div className="s-feat-body">
                    <h5>{f.title}</h5>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="s-why-visual">
            <div className="s-big-num">100%</div>
            <p>Pure, natural vegetable powder — farm to shelf — with zero compromise on quality or integrity.</p>
            <button className="s-cta-btn">Get in Touch →</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="s-footer">
        <div className="s-footer-grid">
          <div>
            <p className="s-f-brand-name">SOMEE</p>
            <span className="s-f-brand-sub">International</span>
            <p className="s-f-brand-desc">
              Delivering premium freeze-dried vegetables, fruits and botanical ingredients to food manufacturers worldwide.
            </p>
          </div>
          <div className="s-f-col">
            <h4>Company</h4>
            <ul>
              {["About Us", "Our Products", "Quality Assurance", "Contact Us"].map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="s-f-col">
            <h4>Products</h4>
            <ul>
              {["Onion Powder", "Beetroot Powder", "Moringa Powder", "Fruit Powders"].map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="s-f-col">
            <h4>Contact</h4>
            <div className="s-f-contact">✉ info@someeinternational.com</div>
            <div className="s-f-contact">📞 +91 98765 43210</div>
            <div className="s-f-contact">📍 Maharashtra, India</div>
          </div>
        </div>
        <div className="s-footer-bottom">
          <span>© 2026 Somee International. All rights reserved.</span>
          <span>Crafted with quality & care</span>
        </div>
      </footer>
    </div>
  );
}