import { useEffect, useState } from "react";
import avkLogo from "@/assets/avk_logo.png";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Enforce a minimum display time so the preloader doesn't flash too fast
      setTimeout(() => {
        setLoading(false);
        // Wait for the fade-out transition to complete before unmounting
        setTimeout(() => setVisible(false), 500); 
      }, 1500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Fallback in case load event never fires or was missed
      const fallbackTimer = setTimeout(handleLoad, 3000);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#030d1e] flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative flex items-center justify-center animate-pulse">
        <img
          src={avkLogo}
          alt="Avishkar 2K26"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
          style={{ filter: "drop-shadow(0 0 15px rgba(255,255,255,0.15))" }}
        />
      </div>
      <div className="mt-8 flex gap-2.5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white/80 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Preloader;
