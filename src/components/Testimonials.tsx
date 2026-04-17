import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* -------------------- Imports -------------------- */
import gokulMarketing from "@/assets/team/marketing/GOKUL - MARKETING.jpeg";
import hasiniMarketing from "@/assets/team/marketing/HASINI - MARKETING.jpeg";
import sanjanaMarketing from "@/assets/team/marketing/SANJANA - MARKETING.jpeg";
import sathiDoc from "@/assets/team/documentation/SAHTHI - DOC.jpeg";
import prashanthPD from "@/assets/team/poster-designing/PRASHANTH - PD.jpeg";
import sreenithiPD from "@/assets/team/poster-designing/SREENIDHI - PD.jpeg";
import likkithaPD from "@/assets/team/poster-designing/LIKKITHA - PD.jpeg";
import kripaHos from "@/assets/team/hospitality/KRIPA - HOS.jpeg";
import manaswiniHos from "@/assets/team/hospitality/MANASWINI - HOS.jpeg";
import akshayTreasury from "@/assets/team/treasury/AKSHAY - TREASURY.jpeg";
import rahulTreasury from "@/assets/team/treasury/RAHUL - TREASURY.jpeg";
import jyothsnaWD from "@/assets/team/web-designing/JYOTHSNA - WD.jpeg";
import ramgopalWD from "@/assets/team/web-designing/RAM GOPAL - WD.jpeg";
import karthikeyaSMP from "@/assets/team/social-media-promotions/KARTHIKEYA - SMP.jpeg";
import saiveerSMP from "@/assets/team/social-media-promotions/SAI VEER - SMP.jpeg";
import deepthiMarketing from "@/assets/team/marketing/DEEPTHI - MARKETING.jpeg";
import bhavanaSMP from "@/assets/team/social-media-promotions/BHAVANA - SMP.jpeg";
import krishnaMarketing from "@/assets/team/marketing/KRISHNA - TREASURY.jpeg";
import manojDoc from "@/assets/team/documentation/MANOJ - DOC.jpeg";

/* -------------------- Data -------------------- */
const testimonials = [
  {
    name: "Sreenidhi",
    role: "Poster Designing",
    image: sreenithiPD,
    text: "Participating in Avishkar 2K25 proved to be a valuable experience, significantly enhancing my presentation skills and building confidence in articulating ideas effectively. Proficiency was developed in the systematic preparation and structured delivery of a technical abstract, while strong teamwork was demonstrated through active contributions to both abstract development and PowerPoint presentation design. As an inaugural event during the first year of study, it held particular significance. Furthermore, involvement with the organizing team provided practical insight into the principles of event management."
  },
  {
    name: "Sanjana",
    role: "Marketing",
    image: sanjanaMarketing,
    text: "Being part of Avishkar 2K25 provided me with a platform to showcase technical ideas and strengthen my core skills. The event helped me develop proficiency in abstract writing and structured presentation delivery, improving my confidence and analytical thinking. I further strengthened my communication skills through the emphasis on clarity and precision in expressing my ideas. Ultimately, the experience contributed greatly to my personal growth and academic development."
  },
  {
    name: "E. Likkitha",
    role: "Poster Designing",
    image: likkithaPD,
    text: "Participating in Avishkar 2K25 was an enriching experience that contributed to both my personal and academic growth. It encouraged me to develop new skills, think analytically and work effectively as part of a team. I gained confidence in expressing and presenting my ideas with clarity, which significantly improved my communication skills. The event inspired me by highlighting the talent of my peers and motivating me to explore my own potential."
  },
  {
    name: "Deepthi",
    role: "Marketing",
    image: deepthiMarketing,
    text: "Being part of Avishkar 2K25 was a memorable and enriching experience, particularly as my first college event. The event offered a valuable platform to share ideas, acquire new knowledge and enhance both my communication and technical skills. Securing second prize was a rewarding moment that acknowledged the effort I had invested. The experience significantly boosted my confidence and motivated me to pursue similar opportunities in the future."
  },
  {
    name: "Bhavana Keerthi",
    role: "Social Media Promotions",
    image: bhavanaSMP,
    text: "Avishkar 2K25 was an experience that played a key role in shaping my personal growth. The event provided a platform to present ideas, enhance communication skills, and build confidence in public speaking. It also emphasized the significance of communicating with clarity, organization, and impact. This experience has positively influenced my learning journey and motivated me to continue developing my skills and abilities."
  },
  {
    name: "Gokul",
    role: "Marketing",
    image: gokulMarketing,
    text: "Being part of Avishkar 2K25 was a valuable experience that enriched both my skill set and academic outlook. The event provided an opportunity to enhance my presentation skills, develop critical thinking and communicate ideas with clarity. Working with my team strengthened my ability to work effectively together, while the competitive environment motivated me to perform at my best."
  },
  {
    name: "Akshay Saharsh",
    role: "Treasury",
    image: akshayTreasury,
    text: "Participating in Avishkar 2K25 has been a great experience, the event stands out for its focus on quick thinking, analytical reasoning and the ability to develop structured solutions to real-world problem statements under pressure. Securing a position among the Top 10 not only strengthened my confidence but also enhanced my critical thinking, teamwork and communication skills."
  },
  {
    name: "Rahul",
    role: "Treasury",
    image: rahulTreasury,
    text: "Avishkar 2K25 marked a significant milestone in my academic journey, as it was my first event at the college level. Teaming up with a friend, I was able to present ideas, think critically and offer practical solutions in an effective manner. Beyond the competition itself, the event broadened my perspective by exposing me to new concepts and allowing me to engage with fellow participants."
  },
  {
    name: "Sai Krishna",
    role: "Marketing",
    image: krishnaMarketing,
    text: "I take immense pride in stating that my participation in Avishkar 2K25 has been a profoundly transformative experience, extending far beyond a mere platform to present ideas. It challenged me to think critically, understand real-world problems and develop practical solutions in a structured and effective manner."
  },
  {
    name: "Ramgopal",
    role: "Web Designing",
    image: ramgopalWD,
    text: "Participation in Avishkar 2K25 marked a significant milestone in my academic and professional development. It served as a structured platform for experiential learning, self-assessment and skill enhancement. I demonstrated improved analytical thinking, precise communication and a broadened problem-solving perspective."
  },
  {
    name: "Karthikeya",
    role: "Social Media Promotions",
    image: karthikeyaSMP,
    text: "Participating in Avishkar 2K25 was a highly constructive experience that contributed significantly to my academic and professional development. The event provided a structured platform to present innovative ideas, receive expert feedback and engage with peers from diverse technical backgrounds."
  },
  {
    name: "Manasvini Darbha",
    role: "Hospitality",
    image: manaswiniHos,
    text: "I consider it a privilege to share my experience at Avishkar 2K25, an event that proved to be a defining and unforgettable milestone in my academic journey. Advancing to the Top 10 finalists represented a significant achievement. The most notable aspect was the confidence I demonstrated while presenting on stage."
  },
  {
    name: "G. Prashanth",
    role: "Poster Designing",
    image: prashanthPD,
    text: "Participating in the Technical Paper Presentation at Avishkar 2K25 has been a truly enriching journey that helped me grow in ways I had never anticipated. It provided me with a valuable platform to express my ideas, take initiative and contribute meaningfully."
  },
  {
    name: "V. Hasini Sai Sree",
    role: "Marketing",
    image: hasiniMarketing,
    text: "The experience of Avishkar 2K25 was both intellectually stimulating and personally fulfilling. It challenged me to think critically, analyze problems from multiple dimensions and present my ideas with confidence. The exposure gained through this platform has significantly contributed to my growth."
  },
  {
    name: "Sahithi",
    role: "Documentation",
    image: sathiDoc,
    text: "Being part of Avishkar 2K25 proved to be a meaningful milestone in my journey of learning and self-improvement. It gave me the opportunity to share my ideas on a larger platform while strengthening essential skills such as communication, public speaking and self-confidence."
  },
  {
    name: "B. Manoj Kumar",
    role: "Documentation",
    image: manojDoc,
    text: "Participation in Avishkar 2K25 was a transformative academic experience that extended well beyond conventional classroom presentations. The event challenged me to clearly defend my research approach before a panel of experienced industry experts, making it both demanding and professionally rewarding."
  },
  {
    name: "Kripa Patel",
    role: "Hospitality",
    image: kripaHos,
    text: "Avishkar 2K25 served as an exceptional platform that extended my learning beyond conventional classroom boundaries. It provided me with the opportunity to apply theoretical concepts in a practical and meaningful context. Engaging with diverse perspectives broadened my intellectual outlook."
  },
  {
    name: "Sai Veer",
    role: "Social Media Promotions",
    image: saiveerSMP,
    text: "I am delighted to share my experience of participating in Avishkar 2K25, which significantly enhanced my presentation skills, confidence and ability to communicate research ideas effectively. Transitioning from participant to organizing committee member provided practical insights into event management."
  },
  {
    name: "Jyothsna Kakarla",
    role: "Web Designing",
    image: jyothsnaWD,
    text: "Being a part of Avishkar 2K25 was a truly valuable experience, especially as a first-year student. It provided me a platform to present my ideas and explore innovative solutions to real-world problems. The constructive feedback I received helped me refine my approach and become more confident."
  }
];

/* -------------------- Dot Grid Decoration -------------------- */
const DotGrid = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {Array.from({ length: 5 }).map((_, row) =>
      Array.from({ length: 5 }).map((_, col) => (
        <circle
          key={`${row}-${col}`}
          cx={8 + col * 16}
          cy={8 + row * 16}
          r="2.5"
          fill="rgba(255,255,255,0.25)"
        />
      ))
    )}
  </svg>
);

/* -------------------- Chevron Stack Decoration -------------------- */
const ChevronStack = ({
  className,
  flipped = false,
}: {
  className?: string;
  flipped?: boolean;
}) => (
  <svg
    className={className}
    width="48"
    height="80"
    viewBox="0 0 48 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={flipped ? { transform: "scaleX(-1)" } : undefined}
  >
    {[0, 22, 44].map((offsetY) => (
      <polyline
        key={offsetY}
        points={`4,${4 + offsetY} 24,${20 + offsetY} 44,${4 + offsetY}`}
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ))}
  </svg>
);

/* -------------------- Carousel Hook -------------------- */
const useTestimonialCarousel = (count: number, interval = 5000) => {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);

  const go = useCallback(
    (dir: 1 | -1) => {
      setDirection(dir);
      setActive((p) => (p + dir + count) % count);
    },
    [count]
  );

  const next = useCallback(() => go(1), [go]);
  const prev = useCallback(() => go(-1), [go]);

  useEffect(() => {
    if (isHovered) return;
    const id = setTimeout(next, interval);
    return () => clearTimeout(id);
  }, [next, interval, active, isHovered]);

  return { active, setActive, setIsHovered, direction, next, prev };
};

/* -------------------- Component -------------------- */
const Testimonials = () => {
  const carousel = useTestimonialCarousel(testimonials.length, 4500);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
      filter: "blur(4px)",
    }),
    center: { x: 0, opacity: 1, filter: "blur(0px)" },
    exit: (dir: number) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
      filter: "blur(4px)",
    }),
  };

  return (
    <section
      className="relative w-full overflow-hidden py-20 px-4"
      style={{ backgroundColor: "#0d1b2e" }}
      onMouseEnter={() => carousel.setIsHovered(true)}
      onMouseLeave={() => carousel.setIsHovered(false)}
    >
      {/* ── Heading ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4">
        <h2 className="section-title text-white">Testimonials</h2>
      </div>

      {/* ── Dot grids ── */}
      <DotGrid className="absolute top-6 right-6 opacity-70 pointer-events-none" />
      <DotGrid className="absolute bottom-6 left-6 opacity-70 pointer-events-none" />
      <DotGrid className="absolute top-6 left-24 opacity-40 pointer-events-none" />
      <DotGrid className="absolute bottom-6 right-24 opacity-40 pointer-events-none" />

      {/* ── Chevrons ── */}
      <ChevronStack className="absolute top-8 left-4 pointer-events-none" />
      <ChevronStack className="absolute bottom-20 left-4 pointer-events-none" />
      <ChevronStack flipped className="absolute top-8 right-4 pointer-events-none" />
      <ChevronStack flipped className="absolute bottom-20 right-4 pointer-events-none" />

      {/* ── Inner layout ── */}
      <div className="relative max-w-3xl mx-auto flex flex-col items-center gap-8">

        {/* White card + side arrows */}
        <div className="relative w-full flex items-center gap-3 sm:gap-6">
          {/* Prev arrow */}
          <button
            onClick={carousel.prev}
            aria-label="Previous testimonial"
            className="flex-shrink-0 text-white/70 hover:text-white transition-all duration-200 hover:scale-125 focus:outline-none"
          >
            <ChevronLeft size={32} strokeWidth={2.5} />
          </button>

          {/* Card */}
          <div
            className="flex-1 rounded-2xl bg-white shadow-2xl relative"
            style={{ minHeight: "260px" }}
          >
            {/* ── Speech-bubble pointer ── */}
            <div
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-0 h-0 pointer-events-none"
              style={{
                borderLeft: "20px solid transparent",
                borderRight: "20px solid transparent",
                borderTop: "20px solid white",
              }}
            />
            {/* Role title bar */}
            <div className="pt-8 px-8 pb-3 text-center border-b border-gray-100 min-h-[70px]">
              <div className="grid [grid-template-areas:'stack'] place-items-center w-full">
                <AnimatePresence custom={carousel.direction}>
                  <motion.h3
                    key={`role-${carousel.active}`}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.3 }}
                    className="col-[stack] row-[stack] text-base sm:text-lg font-bold text-gray-900"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {testimonials[carousel.active].role}
                  </motion.h3>
                </AnimatePresence>
              </div>
            </div>

            {/* Testimonial text */}
            <div className="px-6 sm:px-10 py-6" style={{ minHeight: "240px" }}>
              <div className="grid [grid-template-areas:'stack'] place-items-center w-full h-full">
                <AnimatePresence custom={carousel.direction}>
                  <motion.p
                    key={`text-${carousel.active}`}
                    custom={carousel.direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="col-[stack] row-[stack] text-gray-700 text-sm sm:text-base leading-relaxed text-justify w-full"
                  >
                    {testimonials[carousel.active].text}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={carousel.next}
            aria-label="Next testimonial"
            className="flex-shrink-0 text-white/70 hover:text-white transition-all duration-200 hover:scale-125 focus:outline-none"
          >
            <ChevronRight size={32} strokeWidth={2.5} />
          </button>
        </div>

        {/* Avatar strip */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 h-20">
          {[-2, -1, 0, 1, 2].map((offset) => {
            const index = (carousel.active + offset + testimonials.length) % testimonials.length;
            const t = testimonials[index];
            const isActive = offset === 0;

            return (
              <motion.button
                layout
                key={`avatar-${index}`}
                onClick={() => {
                  carousel.setActive(index);
                }}
                aria-label={`View testimonial by ${t.name}`}
                className={`rounded-full overflow-hidden flex-shrink-0 focus:outline-none transition-all duration-300 ${isActive
                    ? "ring-4 ring-white ring-offset-2 ring-offset-[#0d1b2e] shadow-xl"
                    : "opacity-60 hover:opacity-90"
                  }`}
                style={{
                  width: isActive ? "64px" : "40px",
                  height: isActive ? "64px" : "40px",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
                whileHover={{ scale: isActive ? 1.05 : 1.12 }}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover pointer-events-none"
                />
              </motion.button>
            );
          })}
        </div>

        {/* Name label */}
        <div className="h-10 flex items-center justify-center mt-2 group relative">
          <div className="grid [grid-template-areas:'stack'] place-items-center w-full">
            <AnimatePresence custom={carousel.direction}>
              <motion.p
                key={`name-${carousel.active}`}
                initial={{ opacity: 0, y: 5, filter: "blur(2px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -5, filter: "blur(2px)" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="col-[stack] row-[stack] text-white font-semibold text-base sm:text-lg tracking-wide w-full max-w-[250px] text-center truncate"
              >
                {testimonials[carousel.active].name}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
