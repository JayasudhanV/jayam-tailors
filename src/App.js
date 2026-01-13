import React, { useEffect, useState, useRef} from "react";

import "./App.css";


/* ================= LOADING SCREEN ================= */
function LoadingScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 5000); // 5 seconds splash

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="loader">
      <video
        src="/Logo_Stitching_Animation_Request.mp4"
        autoPlay
        muted
        playsInline
        className="loader-video"
      />
    </div>
  );
}

/* ================= MAIN APP ================= */
export default function App() {
  
 const servicesRef = useRef(null);
  const [loading, setLoading] = useState(true);
  
  const [index, setIndex] = useState(0);
    const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  
  useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, 5000); // 👈 change slide every 5 seconds

  return () => clearInterval(interval);
}, []);
useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
      // scrolling DOWN → hide navbar
      setShowNavbar(false);
    } else {
      // scrolling UP → show navbar
      setShowNavbar(true);
    }

    lastScrollY.current = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const isDown = useRef(false);
const startX = useRef(0);
const scrollLeft = useRef(0);

const onMouseDown = (e) => {
  isDown.current = true;
  startX.current = e.pageX - servicesRef.current.offsetLeft;
  scrollLeft.current = servicesRef.current.scrollLeft;
};

const onMouseLeave = () => {
  isDown.current = false;
};

const onMouseUp = () => {
  isDown.current = false;
};

const onMouseMove = (e) => {
  if (!isDown.current) return;
  e.preventDefault();
  const x = e.pageX - servicesRef.current.offsetLeft;
  const walk = (x - startX.current) * 1.2;
  servicesRef.current.scrollLeft = scrollLeft.current - walk;
};


  const slides = [
    {
      image: "/hero/slide1.jpg",
      small: "Welcome to Jayam Tailors",
      title: "CREATE YOUR OWN PERSONAL STYLE",
    },
    {
      image: "/hero/slide2.avif",
      small: "Welcome to Jayam Tailor",
      title: "OUR PERSONAL QUALITY TAILOR",
    },
  ];

  const next = () => setIndex((index + 1) % slides.length);
  const prev = () => setIndex((index - 1 + slides.length) % slides.length);

  /* SHOW LOADER FIRST */
  if (loading) {
    return <LoadingScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <div className="hero-wrapper">
      {/* TOP BAR */}
      <div className="top-bar">
        <span>📍 North Car Street, Sirkali</span>
        <span>✉ jayamjayam922@gmail.com</span>
        <span>⏰ Mon - Sat 9:00 am - 9:00 pm</span>
         
         <span className="owner-name">Perfect Fit & Premium Stitching
</span>

      </div>

      {/* NAVBAR */}
      <div className="navbar">
       <div className="logo">
  <img src="/logo1.png" alt="Jayam Tailors Logo" className="logo-img" />
</div>

        <ul className="menu">
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#services">Services</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>

        <div className="phone-box">
  <span className="phone">📞 9786410301</span>

  <a
    href="https://wa.me/919786410301"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp"
    aria-label="WhatsApp"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 32 32"
      fill="#25D366"
    >
      <path d="M16.003 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.258.592 4.384 1.626 6.23L3.2 28.8l6.75-1.574A12.74 12.74 0 0 0 16.003 28.8c7.07 0 12.797-5.73 12.797-12.8 0-7.07-5.727-12.8-12.797-12.8zm0 23.04c-2.1 0-4.058-.61-5.704-1.666l-.41-.256-4.01.934.96-3.91-.266-.402A10.19 10.19 0 0 1 5.82 16c0-5.65 4.533-10.24 10.183-10.24 5.65 0 10.18 4.59 10.18 10.24 0 5.65-4.53 10.24-10.18 10.24zm5.61-7.69c-.307-.154-1.818-.896-2.1-.998-.28-.102-.486-.154-.69.154-.205.307-.794.998-.973 1.203-.18.205-.358.23-.665.077-.307-.154-1.297-.478-2.47-1.524-.913-.815-1.53-1.82-1.71-2.127-.18-.307-.02-.473.134-.626.14-.14.307-.358.46-.538.154-.18.205-.307.307-.512.102-.205.05-.384-.026-.538-.077-.154-.69-1.664-.947-2.28-.25-.6-.505-.518-.69-.528-.18-.01-.384-.013-.59-.013s-.538.077-.82.384c-.28.307-1.075 1.05-1.075 2.56 0 1.51 1.1 2.97 1.254 3.175.154.205 2.165 3.31 5.247 4.64.733.317 1.304.506 1.75.648.735.233 1.404.2 1.933.12.59-.09 1.818-.743 2.075-1.46.256-.717.256-1.33.18-1.46-.077-.128-.28-.205-.59-.358z"/>
    </svg>
  </a>
</div>

      </div>

      {/* HERO SLIDER */}
      {/* HERO SLIDER */}
<div className="hero">
  {/* BACKGROUND IMAGE */}
  <div
    key={index}
    className="hero-bg"
    style={{ backgroundImage: `url(${slides[index].image})` }}
  ></div>

  <div className="overlay"></div>

  {/* TEXT CONTENT */}
  <div key={index} className="hero-content animate">
    <p className="small">{slides[index].small}</p>
    <h1>{slides[index].title}</h1>
   <a href="#about" className="discover">
  DISCOVER MORE
</a>

  </div>

  <button className="arrow left" onClick={prev}>‹</button>
  <button className="arrow right" onClick={next}>›</button>
</div>
<section id="about" className="about-section">

        <div className="about-container">

          <div className="about-images">
            <div className="experience-badge">
              <span className="exp-number">20+ </span>
              <span className="exp-text">
                Years of<br /> Services
              </span>
            </div>

            <img
              src="/hero/slide3.jpg"
              alt="Tailoring Work"
              className="about-img img-one"
            />

            <img
              src="/hero/slide4.jpg"
              alt="Suit Fitting"
              className="about-img img-two"
            />
          </div>

          <div className="about-content">
            <span className="about-sub">CHECKOUT OUR SERVICES</span>
            <h2>Introducing the Jayam Tailors in Town</h2>

            <p>
              Jayam Tailors has been delivering perfect fit and premium stitching
              since 2005. We specialize in men and women tailoring with a focus
              on quality, comfort, and elegance.
            </p>

            <ul className="about-list">
              <li>Men & Women Custom Tailoring</li>
              <li>Wedding & Festive Wear</li>
              <li>Aari Works</li>
              <li>Premium Quality Stitching </li>
              <li>Trusted by Generations </li>

            </ul>

           <div className="about-sign">
  <span className="sign-name">Vijayakumar K</span>
  <span className="sign-line"></span>
  <span className="sign-role">Founder & Master Tailor</span>
  <span className="sign-quote">Crafting Trust Since 2005</span>
</div>

          </div>

        </div>
      </section>
      {/* ================= SERVICES WE OFFER ================= */}
<section id="services" className="services-offer">

  <h2 className="services-heading">Services We Offer</h2>
  <div
  className="services-slider"
  onMouseDown={onMouseDown}
  onMouseLeave={onMouseLeave}
  onMouseUp={onMouseUp}
  onMouseMove={onMouseMove}
  ref={servicesRef}
>
  <div className="services-track">
    {/* service-box items */}
  </div>
</div>


  <div className="services-cards">
    <div className="service-box">
      <div className="service-img-wrap">
        <img src="/services/service1.png" alt="Suits & Shirts" />
      </div>
      <h3> shirts & pants</h3>
      <p>Perfectly tailored formal and casual wear with premium finish.</p>
    </div>

    <div className="service-box">
      <div className="service-img-wrap">
        <img src="/services/service2.jpg" alt="Wedding Dresses" />
      </div>
      <h3>Wedding Dresses & Aari works</h3>
      <p>Exclusive wedding outfits crafted for special occasions.</p>
    </div>
     <div className="service-box">
      <div className="service-img-wrap">
        <img src="/services/service5.jpeg" alt="Wedding Dresses" />
      </div>
      <h3>School uniforms</h3>
      <p>Comfortable Fits for Confident Students.</p>
    </div>

    <div className="service-box ">
      <div className="service-img-wrap">
        <img src="/services/service3.png" alt="Stylish Clothing" />
      </div>
      <h3> Chudi</h3>
      <p>Modern designs blended with traditional tailoring excellence.</p>
    </div>
    <div className="service-box ">
      <div className="service-img-wrap">
        <img src="/services/service6.jpg" alt="Stylish Clothing" />
      </div>
      <h3> blouses</h3>
      <p>Expertly Crafted Blouses with Fine Detailing.</p>
    </div>
    <div className="service-box ">
      <div className="service-img-wrap">
        <img src="/services/service7.webp" alt="Stylish Clothing" />
      </div>
      <h3>Kids Wear</h3>
      <p>Comfortable Fits for Happy Little Ones.</p>
    </div>
    <div className="service-box ">
      <div className="service-img-wrap">
        <img src="/services/service8.jpg" alt="Stylish Clothing" />
      </div>
      <h3>General Tailoring Services</h3>
      <p>From garments to home textiles like pillow covers, bedsheets, kerchiefs, and flags.</p>
    </div>
    

    <div className="service-box">
      <div className="service-img-wrap">
        <img src="/services/service4.jpg" alt="Alterations" />
      </div>
      <h3>Alterations</h3>
      <p>Precise fitting adjustments for maximum comfort.</p>
    </div>
  </div>
</section>
<section id="contact" className="contact-creative">

  <div className="contact-container">

    {/* LEFT – CONTACT INFO */}
    <div className="contact-info">
      <span className="contact-sub">CONTACT US</span>
      <h2>Get in Touch with Jayam Tailors</h2>

      <p>
        We’re always happy to help you with stitching, alterations, uniforms,
        and custom tailoring. Reach out to us or visit our shop.
      </p>

      <div className="contact-details">
        <div className="contact-item">
          <span className="icon">📍</span>
          <span>North Car Street, Sirkali, Mayiladuthurai – 609110</span>
        </div>

        <div className="contact-item">
          <span className="icon">📞</span>
          <span>+91 97864 10301</span>
        </div>

        <div className="contact-item">
          <span className="icon">✉</span>
          <span>jayamjayam922@gmail.com</span>
        </div>

        <div className="contact-item">
          <span className="icon">⏰</span>
          <span>Mon – Sat : 9:00 AM – 9:00 PM</span>
        </div>
      </div>

      <a
        href="https://wa.me/919786410301"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-whatsapp"
      >
        Book via WhatsApp
      </a>
    </div>

    {/* RIGHT – MAP */}
    <div className="contact-map">
     <iframe
  title="Jayam Tailors Location"
  src="https://www.google.com/maps?q=Semmangudy%20Tamil%20Nadu%20609104&output=embed"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
    </div>

  </div>
</section>
<footer className="footer-new">
  <div className="footer-wrap">

    {/* BRAND */}
    <div className="footer-col brand">
      <img src="/logo2.png" alt="Jayam Tailors Logo" className="footer-logo" />
      <p>
        Jayam Tailors has been crafting perfect fits with premium stitching
        since 2005. Trusted by generations for quality, comfort, and care.
      </p>

      <span className="since">Serving with pride since 2005</span>
    </div>

    {/* SERVICES */}
    <div className="footer-col">
      <h4>Our Services</h4>
      <ul>
        <li>Men & Women Tailoring</li>
        <li>Wedding & Festive Wear</li>
        <li>School & Office Uniforms</li>
        <li>Aari & Blouse Works</li>
        <li>Alterations & Custom Stitching</li>
      </ul>
    </div>

    {/* WHY US */}
    <div className="footer-col">
      <h4>Why Jayam Tailors</h4>
      <ul>
        <li>Perfect Fit Guarantee</li>
        <li>Premium Fabric Handling</li>
        <li>Experienced Master Tailor</li>
        <li>On-Time Delivery</li>
        <li>Customer Satisfaction First</li>
      </ul>
    </div>

    {/* ACTION */}
    <div className="footer-col action">
      <h4>Need Tailoring?</h4>
      <p>Quick bookings and enquiries via WhatsApp.</p>

      <a
        href="https://wa.me/919786410301"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-cta"
      >
        Chat on WhatsApp
      </a>
    </div>

  </div>

  <div className="footer-bottom">
    © {new Date().getFullYear()} Jayam Tailors. All Rights Reserved.
  </div>
</footer>


    </div>
    
  );
  
}

