import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

import vbit_logo from "../assets/vbit-logo.png";
import avkLogo from "../assets/avk_logo.png";
import ieeeLogo from "../assets/ieee_logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/team", label: "Our Team" },
  {
    to: "/resources", label: "More", children: [
      { to: "/resources", label: "Resources" },

      { to: "/faqs", label: "FAQs" },
    ]
  },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();
  const moreRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
  }, [location.pathname]);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="bg-[#0A1628] sticky top-0 z-50 shadow-sm">
      {/* ── Main bar ── */}
      <div className="w-full mx-auto px-3 sm:px-4 md:px-8 lg:px-12 flex items-center justify-between h-16 sm:h-18 md:h-20">

        {/* Logos */}
        <Link to="/" className="flex items-center gap-2 sm:gap-4 md:gap-6 shrink-0" aria-label="Go to home">
          <img
            src={vbit_logo}
            alt="VBIT Logo"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain shrink-0"
          />
          <img
            src={avkLogo}
            alt="Avishkar Logo"
            className="h-14 sm:h-18 md:h-24 w-auto object-contain shrink-0 translate-y-2 md:translate-y-3"
          />
          <img
            src={ieeeLogo}
            alt="IEEE Logo"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain shrink-0"
          />
        </Link>

        {/* ── Desktop nav ── */}
        <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative" ref={moreRef}>
                <button
                  onClick={() => setMoreOpen((p) => !p)}
                  aria-expanded={moreOpen}
                  aria-haspopup="true"
                  className={`px-3 lg:px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1
                    ${location.pathname === link.to ? "text-white bg-white/20" : "text-white/80 hover:text-white hover:bg-white/10"}`}
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute top-full right-0 mt-1 bg-[#152336] rounded-lg shadow-xl border border-white/10
                    min-w-[140px] z-50 overflow-hidden transition-all duration-200 origin-top
                    ${moreOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"}`}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
                      onClick={() => setMoreOpen(false)}
                      className={`block px-4 py-2.5 text-sm transition-colors
                        ${location.pathname === child.to ? "text-white font-semibold bg-white/10" : "text-white/80 hover:text-white hover:bg-white/10"}`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 lg:px-4 py-2 text-sm font-medium rounded-md transition-colors
                  ${location.pathname === link.to ? "text-white bg-white/20" : "text-white/80 hover:text-white hover:bg-white/10"}`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setOpen((p) => !p)}
          className="md:hidden p-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-[#0d1f35] border-t border-white/10 px-4 pt-2 pb-4 flex flex-col gap-0.5">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => setMoreOpen((p) => !p)}
                  className="w-full flex items-center justify-between py-3 text-sm font-medium text-white/90
                             border-b border-white/10 hover:text-white transition-colors"
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-200
                    ${moreOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
                      className={`block pl-5 py-2.5 text-sm border-b border-white/5 transition-colors
                        ${location.pathname === child.to ? "text-white font-semibold" : "text-white/70 hover:text-white"}`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`block py-3 text-sm font-medium border-b border-white/10 transition-colors
                  ${location.pathname === link.to ? "text-white font-semibold" : "text-white/80 hover:text-white"}`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
