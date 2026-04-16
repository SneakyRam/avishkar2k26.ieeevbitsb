import { useState } from "react";
import { Link } from "react-router-dom";

import Layout from "@/components/Layout";
import CountdownTimer from "@/components/CountdownTimer";
import Testimonials from "@/components/Testimonials";
import Timeline from "@/components/Timeline";
import heroBg from "@/assets/hero-bg-exact.jpg";
import avkLogo from "@/assets/avk_logo.png";

/* -------------------- Page -------------------- */
const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Layout>
      {/* Vercel-Tier High-Performance Hero */}
      <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden border-b border-white/5">

        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={heroBg}
            alt="Hero Background"
            className="w-full h-full object-cover object-center scale-150 sm:scale-125"
            style={{ filter: 'brightness(0.75)' }}
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030d1e]/40 via-[#030d1e]/20 to-[#030d1e]/85 pointer-events-none" />
          {/* Vignette edges */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,#030d1e_100%)] pointer-events-none opacity-60" />
        </div>

        {/* Hero Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-[100vh] px-4 sm:px-6 py-20 pointer-events-none">

          <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto pointer-events-auto" style={{ gap: '0' }}>

            {/* Heading */}
            <h1 
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tight drop-shadow-2xl animate-fadeUp leading-tight" 
              style={{ fontFamily: "'Times New Roman', Times, serif", animationDelay: '100ms', animationFillMode: 'both', marginBottom: '0.5rem' }}
            >
              AVISHKAR <span className="sm:ml-2">2K26</span>
            </h1>

            {/* Engineering Inventions Subtitle */}
            <p 
              className="font-body text-lg sm:text-xl md:text-2xl text-blue-100/70 font-light tracking-[0.25em] drop-shadow-lg animate-fadeUp"
              style={{ animationDelay: '150ms', animationFillMode: 'both', marginTop: '0.75rem', marginBottom: '1rem' }}
            >
              Engineering Inventions
            </p>

            {/* Subheading */}
            <p 
              className="font-body text-sm sm:text-base md:text-xl text-white/90 max-w-2xl font-semibold tracking-wide drop-shadow-lg px-4 animate-fadeUp leading-relaxed"
              style={{ animationDelay: '200ms', animationFillMode: 'both', marginBottom: '2rem' }}
            >
              The Flagship Technical Paper Presentation<br className="sm:hidden" /> Competition
            </p>

            {/* Register CTA */}
            <div
              className="flex items-center justify-center w-full animate-fadeUp"
              style={{ animationDelay: '300ms', animationFillMode: 'both', marginTop: '0.5rem' }}
            >
              <a
                href="https://bit.ly/Avishkar2K26"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body px-10 sm:px-14 py-3 sm:py-3.5 rounded-full text-[#1a1a2e] font-bold tracking-[0.2em] text-xs sm:text-sm transition-all duration-300 hover:scale-105 text-center border border-white/30"
                style={{
                  background: 'linear-gradient(180deg, #e8e8e8 0%, #c0c0c0 50%, #d4d4d4 100%)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5)',
                }}
              >
                REGISTER
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Countdown */}
      <CountdownTimer />

      {/* About */}
      <section className="page-container px-4 sm:px-6 w-full">
        <h2 className="section-title text-center text-[28px] sm:text-4xl md:text-5xl leading-tight relative z-10">About Avishkar</h2>

        {/* Background Watermark for Text Block */}
        <div className="relative w-full mt-2 sm:mt-6 py-4">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8 sm:mt-12 opacity-10 pointer-events-none z-0 flex justify-center items-center">
            <img
              src={avkLogo}
              alt="Avishkar Watermark"
              className="w-[280px] sm:w-[400px] md:w-[450px] max-w-none object-contain select-none"
            />
          </div>
          
          <p className="font-body relative z-10 text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-justify px-2">
            Avishkar, the flagship event of IEEE - VBIT SB, is a Technical Paper Presentation competition held exclusively for the freshmen of VBIT. In the year 2011, Avishkar was awarded the esteemed 'Darrel Chong Gold Student Activity Award'. This year marks the 15th edition of the most vibrant event with a new approach to pave an ideal path for students to enhance their technical cognizance and continue mastery in advanced technologies.
          </p>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="page-container">
        <h2 className="section-title">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {[
            { url: "/avishkar2k26.ieeevbitsb/gallery/image1.jpg", alt: "Avishkar event presentation" },
            { url: "/avishkar2k26.ieeevbitsb/gallery/image2.jpg", alt: "Students presenting during event" },
            { url: "/avishkar2k26.ieeevbitsb/gallery/image3.jpg", alt: "Judges and participants interaction" },
            { url: "/avishkar2k26.ieeevbitsb/gallery/image4.jpg", alt: "Technical presentation on stage" },
            { url: "/avishkar2k26.ieeevbitsb/gallery/image5.jpg", alt: "Seminar session in progress" },
            { url: "/avishkar2k26.ieeevbitsb/gallery/image7.jpg", alt: "Presentation evaluation session" }
          ].map((image, i) => (
            <div key={i} className="aspect-[4/3] bg-muted rounded-lg overflow-hidden group cursor-pointer" onClick={() => setSelectedImage(image.url)}>
              <img
                src={image.url}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Lightbox Overlay */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-black/70 border border-white/20 text-white text-xl sm:text-2xl font-bold leading-none hover:bg-white/20 transition-colors z-[101]"
                onClick={() => setSelectedImage(null)}
                aria-label="Close lightbox"
              >
                &times;
              </button>
              <img
                src={selectedImage}
                alt="Enlarged gallery view"
                className="max-w-[98vw] max-h-[96vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        )}
      </section>

      {/* Timeline */}
      <Timeline />

      <Testimonials />
    </Layout>
  );
};

export default Index;
