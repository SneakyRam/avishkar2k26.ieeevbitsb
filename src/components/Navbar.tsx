import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
<<<<<<< HEAD
import { Menu, X, ChevronDown } from "lucide-react";

import vbit_logo from "../assets/vbit-logo.png";
import avkLogo from "../assets/avk_logo.png";
import ieeeLogo from "../assets/ieee_logo.png";
=======
import { Menu, X } from "lucide-react";
>>>>>>> 16ee21494ed574f7578bcdfe68a028facfbcf5e4

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/team", label: "Our Team" },
<<<<<<< HEAD
  {
    to: "/resources", label: "More", children: [
      { to: "/resources", label: "Resources" },
      { to: "/sample", label: "Sample" },
      { to: "/faqs", label: "FAQs" },
    ]
  },
=======
  { to: "/resources", label: "More", children: [
    { to: "/resources", label: "Resources" },
    { to: "/sample", label: "Sample" },
    { to: "/faqs", label: "FAQs" },
  ]},
>>>>>>> 16ee21494ed574f7578bcdfe68a028facfbcf5e4
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();

  return (
<<<<<<< HEAD
    <nav className="bg-[#0A1628] sticky top-0 z-50 shadow-sm">
      <div className="w-full mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between h-16 sm:h-20">
        <div className="flex items-center justify-center lg:justify-start gap-5 sm:gap-8">
          <img src={vbit_logo} alt="VBIT Logo" className="h-10 sm:h-12 w-auto object-contain" />
          <img src={avkLogo} alt="Avishkar Logo" className="h-16 sm:h-20 w-auto object-contain translate-y-1.5" />
          <img src={ieeeLogo} alt="IEEE Logo" className="h-12 sm:h-14 w-auto object-contain" />
=======
    <nav className="bg-nav sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
        <div className="flex items-center gap-2">
          <span className="font-display text-lg sm:text-xl font-bold text-nav-foreground tracking-tight">AVISHKAR 2K26</span>
          <span className="text-xs text-muted-foreground hidden sm:inline">| IEEE - VBIT SB</span>
>>>>>>> 16ee21494ed574f7578bcdfe68a028facfbcf5e4
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
<<<<<<< HEAD
                <button className={`px-3 py-2 text-sm font-medium rounded-md transition-colors text-white/80 hover:text-white hover:bg-white/10 flex items-center gap-1`}>
                  {link.label}
                  <ChevronDown size={14} />
                </button>
                <div className="absolute top-full right-0 mt-1 bg-[#152336] rounded-md shadow-lg border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[140px] z-50">
=======
                <button className={`px-3 py-2 text-sm font-medium rounded-md transition-colors text-nav-foreground hover:bg-primary/10`}>
                  {link.label}
                </button>
                <div className="absolute top-full right-0 mt-1 bg-card rounded-md shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[140px] z-50">
>>>>>>> 16ee21494ed574f7578bcdfe68a028facfbcf5e4
                  {link.children.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
<<<<<<< HEAD
                      className={`block px-4 py-2 text-sm hover:bg-white/10 transition-colors ${location.pathname === child.to ? "text-white font-semibold" : "text-white/80"}`}
=======
                      className={`block px-4 py-2 text-sm hover:bg-muted transition-colors ${location.pathname === child.to ? "text-primary font-semibold" : "text-foreground"}`}
>>>>>>> 16ee21494ed574f7578bcdfe68a028facfbcf5e4
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
<<<<<<< HEAD
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname === link.to ? "text-white bg-white/20" : "text-white/80 hover:text-white hover:bg-white/10"}`}
=======
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname === link.to ? "text-primary bg-primary/10" : "text-nav-foreground hover:bg-primary/10"}`}
>>>>>>> 16ee21494ed574f7578bcdfe68a028facfbcf5e4
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
<<<<<<< HEAD
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-white/90 hover:text-white">
=======
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-nav-foreground">
>>>>>>> 16ee21494ed574f7578bcdfe68a028facfbcf5e4
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
<<<<<<< HEAD
        <div className="md:hidden bg-[#0A1628] border-t border-white/10 px-4 pb-4 animate-fade-in shadow-xl relative z-50">
=======
        <div className="md:hidden bg-card border-t border-border px-4 pb-4 animate-fade-in">
>>>>>>> 16ee21494ed574f7578bcdfe68a028facfbcf5e4
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => setMoreOpen(!moreOpen)}
<<<<<<< HEAD
                  className="w-full flex flex-row items-center justify-between py-3 text-sm font-medium text-white/90 border-b border-white/10"
                >
                  {link.label} {moreOpen ? <ChevronDown size={14} className="rotate-180 transition-transform" /> : <ChevronDown size={14} className="transition-transform" />}
=======
                  className="w-full text-left py-3 text-sm font-medium text-foreground border-b border-border"
                >
                  {link.label} {moreOpen ? "▲" : "▼"}
>>>>>>> 16ee21494ed574f7578bcdfe68a028facfbcf5e4
                </button>
                {moreOpen && link.children.map((child) => (
                  <Link
                    key={child.to}
                    to={child.to}
                    onClick={() => setOpen(false)}
<<<<<<< HEAD
                    className="block pl-4 py-3 text-sm text-white/70 hover:text-white border-b border-white/5"
=======
                    className="block pl-4 py-2 text-sm text-muted-foreground hover:text-primary"
>>>>>>> 16ee21494ed574f7578bcdfe68a028facfbcf5e4
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
<<<<<<< HEAD
                className={`block py-3 text-sm font-medium border-b border-white/10 ${location.pathname === link.to ? "text-white" : "text-white/80 hover:text-white"}`}
=======
                className={`block py-3 text-sm font-medium border-b border-border ${location.pathname === link.to ? "text-primary" : "text-foreground"}`}
>>>>>>> 16ee21494ed574f7578bcdfe68a028facfbcf5e4
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
