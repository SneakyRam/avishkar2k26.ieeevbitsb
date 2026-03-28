import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const targetDate = new Date("2026-04-12T09:00:00");

const useCountdown = () => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, targetDate.getTime() - Date.now());
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
};

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
<<<<<<< HEAD
  <div className="flex flex-col items-center mx-2">
    <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full border-[6px] lg:border-[8px] border-black flex items-center justify-center bg-transparent">
      <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">{String(value).padStart(2, "0")}</span>
    </div>
    <span className="text-sm sm:text-base mt-4 text-black uppercase tracking-[0.2em] font-bold">{label}</span>
=======
  <div className="flex flex-col items-center">
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[3px] border-hero-foreground/80 flex items-center justify-center bg-hero/80 backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.1)]">
        <span className="text-3xl sm:text-4xl font-bold font-display text-hero-foreground">{String(value).padStart(2, "0")}</span>
      </div>
      <span className="text-xs sm:text-sm mt-3 text-hero-foreground/70 uppercase tracking-widest font-medium">{label}</span>
>>>>>>> 16ee21494ed574f7578bcdfe68a028facfbcf5e4
    </div>
    );

    const testimonials = [
    {
      text: "Being a part of Avishkar 2K25 at VBIT was a defining experience in my journey. The event stood as a strong representation of innovation, creativity, and collaboration, bringing together individuals driven to build, explore, and push boundaries.\n\nWhat truly set Avishkar apart was not just its scale, but the energy behind it—the seamless coordination, diversity of ideas, and the passion shared by every participant. It created an environment where learning happened naturally through competition, teamwork, and meaningful interactions.\n\nThe experience pushed me to think beyond conventional limits, adapt quickly, and contribute effectively in a fast-paced environment. It strengthened my technical understanding while also improving my communication, problem-solving, and ability to work under pressure.\n\nMore importantly, it gave me real-world exposure to how ideas are executed at scale, from planning to implementation. Being part of Avishkar 2K25 was not just about contributing to an event; it was about being part of a vision that celebrates innovation, collaboration, and continuous growth.",
    name: "G Ramgopal",
    role: "Web Designing",
<<<<<<< HEAD
  image: "https://randomuser.me/api/portraits/men/32.jpg"
=======
>>>>>>> 16ee21494ed574f7578bcdfe68a028facfbcf5e4
  },
{
  text: "Avishkar was the turning point of my first year at VBIT. The competition challenged me to think critically and present my ideas with confidence. The mentorship and support from seniors made it an unforgettable experience. I learned more in those two days than in an entire semester of lectures.",
    name: "Priya Sharma",
      role: "Content Writing",
<<<<<<< HEAD
        image: "https://randomuser.me/api/portraits/women/44.jpg"
=======
>>>>>>> 16ee21494ed574f7578bcdfe68a028facfbcf5e4
},
{
  text: "Participating in Avishkar helped me discover my passion for research and technical writing. The structured format of abstract and PPT submission taught me discipline and professionalism. I highly recommend every fresher to take part in this incredible event.",
    name: "Arjun Reddy",
      role: "Technical Team",
<<<<<<< HEAD
        image: "https://randomuser.me/api/portraits/men/46.jpg"
},
{
  text: "The exposure I got from Avishkar was unmatched. It provided a platform where theory met practice. The feedback from the judges was immensely helpful in refining my future projects.",
    name: "Neha Singh",
      role: "Event Management",
        image: "https://randomuser.me/api/portraits/women/65.jpg"
},
{
  text: "A truly incredible platform to showcase talent. The collaborative environment and competitive spirit pushed me to deliver my absolute best. It was an experience I'll always cherish.",
    name: "Rahul Verma",
      role: "Design Team",
        image: "https://randomuser.me/api/portraits/men/55.jpg"
}
=======
  },
>>>>>>> 16ee21494ed574f7578bcdfe68a028facfbcf5e4
];

const useTestimonialCarousel = (count: number, interval = 5000) => {
  const [active, setActive] = useState(0);
  const next = useCallback(() => setActive((p) => (p + 1) % count), [count]);
  useEffect(() => {
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [next, interval]);
  return { active, setActive };
};

const timelineEvents = [
  { date: "March 6", title: "Registration Opens", side: "left" },
  { date: "March 17", title: "Abstract Submission Deadline", side: "right" },
  { date: "March 10", title: "PPT Submission Deadline", side: "left" },
  { date: "March 11", title: "Preliminary Round", side: "right" },
  { date: "March 10", title: "Results Announcement", side: "left" },
  { date: "March 8", title: "Final Round", side: "right" },
];

<<<<<<< HEAD
const TimelineNode = ({ evt, i, totalItems, progress }: { evt: any, i: number, totalItems: number, progress: any }) => {
  const isLast = i === totalItems - 1;
  const threshold = i / (totalItems - 1 || 1);
  const start = threshold - 0.15;

  const scale = useTransform(progress, [start, threshold], [1, 1.05]);
  const nodeGlow = useTransform(
    progress,
    [start, threshold],
    [
      "0px 0px 0px rgba(34,211,238,0)",
      isLast ? "0px 0px 20px 4px rgba(34,211,238,0.8)" : "0px 0px 12px 2px rgba(34,211,238,0.6)"
    ]
  );

  const dotColor = useTransform(
    progress,
    [start, threshold],
    ["hsl(var(--muted-foreground))", "#22d3ee"]
  );

  return (
    <div className={`relative flex items-center mb-8 ${evt.side === "left" ? "justify-start" : "justify-end"}`}>
      <motion.div
        className="absolute left-1/2 w-3 h-3 rounded-full border-2 border-card z-10"
        style={{
          backgroundColor: dotColor,
          boxShadow: nodeGlow,
          scale,
          x: "-50%"
        }}
      />
      <motion.div
        className={`w-5/12 bg-muted rounded-lg px-4 py-3 ${evt.side === "right" ? "ml-auto" : ""}`}
        style={{ scale }}
      >
        <p className="text-xs text-muted-foreground">{evt.date}</p>
        <p className="text-sm font-semibold text-foreground">{evt.title}</p>
      </motion.div>
    </div>
  );
};

=======
>>>>>>> 16ee21494ed574f7578bcdfe68a028facfbcf5e4
const Index = () => {
  const countdown = useCountdown();
  const carousel = useTestimonialCarousel(testimonials.length);

<<<<<<< HEAD
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] sm:min-h-[85vh] flex items-center overflow-hidden bg-[#151515]">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 py-16 sm:py-24 flex items-center">
          <div className="max-w-xl lg:max-w-2xl">
            <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-bold text-white tracking-tight leading-[1.1]">
              Welcome to<br />AVISHKAR 2k26
            </h1>
            <p className="mt-6 text-[#A3A3A3] max-w-lg text-sm sm:text-base lg:text-lg leading-relaxed font-medium">
              The premier technical paper presentation competition.<br className="hidden sm:block" />
              Shape the future of innovation and articulate your vision to the world.
            </p>
            <Link
              to="/contact"
              className="inline-block mt-10 px-10 py-3.5 bg-[#094F74] hover:bg-[#073D5A] text-white rounded-md font-semibold text-lg transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      </section>

      {/* Countdown - white section */}
      <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight shrink-0">
              Event Commences in :
            </h2>
          </div>
          <div className="flex justify-center gap-4 sm:gap-14 flex-wrap">
=======
  return (
    <Layout>
              {/* Hero */}
              <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center overflow-hidden">
                <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
                <div className="absolute inset-0 bg-hero/60" />
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-hero-foreground font-display leading-tight">
                    Welcome to<br />AVISHKAR 2k26
                  </h1>
                  <p className="mt-4 text-hero-foreground/80 max-w-lg text-sm sm:text-base">
                    The premier technical paper presentation competition. Shape the future of innovation and articulate your vision to the world.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    Register
                  </Link>
                </div>
              </section>

              {/* Countdown - dark section */}
              <section className="relative py-16 sm:py-20 overflow-hidden">
                <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-hero/75" />
                <div className="relative z-10 text-center">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display mb-8 sm:mb-12 text-hero-foreground">Event Commences in :</h2>
                  <div className="flex justify-center gap-6 sm:gap-10">
>>>>>>> 16ee21494ed574f7578bcdfe68a028facfbcf5e4
                    <CountdownUnit value={countdown.days} label="Days" />
                    <CountdownUnit value={countdown.hours} label="Hours" />
                    <CountdownUnit value={countdown.minutes} label="Minutes" />
                    <CountdownUnit value={countdown.seconds} label="Seconds" />
                  </div>
                </div>
              </section>

              {/* About */}
              <section className="page-container">
                <h2 className="section-title">About Avishkar</h2>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-3xl mx-auto text-center">
                  Avishkar, the flagship event of IEEE - VBIT SB, is a Technical Paper Presentation competition held exclusively for the freshmen of VBIT. In the year 2011, Avishkar was awarded the esteemed 'Darrel Chong Gold Student Activity Award'. This year marks the 15th edition of the most vibrant event with a new approach to pave an ideal path for students to enhance their technical cognizance and continue mastery in advanced technologies.
                </p>
              </section>

              {/* Gallery Preview */}
              <section className="page-container">
                <h2 className="section-title">Gallery</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="aspect-[4/3] bg-muted rounded-lg" />
                  ))}
                </div>
              </section>

              {/* Timeline */}
<<<<<<< HEAD
  <section className="page-container" ref={containerRef}>
    <h2 className="section-title">Timeline</h2>
    <div className="relative max-w-2xl mx-auto">
      {/* Static gray line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

      {/* Animated glowing vertical line */}
      <motion.div
        className="absolute left-1/2 top-0 w-0.5 bg-cyan-400 -translate-x-1/2 origin-top shadow-[0_0_10px_2px_rgba(34,211,238,0.5)] z-0"
        style={{ height: pathHeight }}
      />

      {/* Traveling glowing orb */}
      <motion.div
        className="absolute left-1/2 w-4 h-4 rounded-full bg-cyan-200 shadow-[0_0_15px_4px_rgba(34,211,238,0.8)] z-20"
        style={{ top: pathHeight, translateY: "-50%", x: "-50%" }}
      />

      {/* Timeline Events map */}
      {timelineEvents.map((evt, i) => (
        <TimelineNode
          key={i}
          evt={evt}
          i={i}
          totalItems={timelineEvents.length}
          progress={scrollYProgress}
        />
=======
      <section className="page-container">
        <h2 className="section-title">Timeline</h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
          {timelineEvents.map((evt, i) => (
            <div key={i} className={`relative flex items-center mb-8 ${evt.side === "left" ? "justify-start" : "justify-end"}`}>
              <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-timeline-dot border-2 border-card z-10" />
              <div className={`w-5/12 bg-muted rounded-lg px-4 py-3 ${evt.side === "right" ? "ml-auto" : ""}`}>
                <p className="text-xs text-muted-foreground">{evt.date}</p>
                <p className="text-sm font-semibold text-foreground">{evt.title}</p>
              </div>
            </div>
>>>>>>> 16ee21494ed574f7578bcdfe68a028facfbcf5e4
      ))}
    </div>
  </section>

  {/* Testimonials - speech bubble carousel */ }
<<<<<<< HEAD
  <section className="page-container mb-24">
    <h2 className="section-title">Testimonials</h2>

    <div className="max-w-4xl mx-auto relative">
      {/* Speech bubble */}
      <div className="relative rounded-xl p-8 sm:p-12 mb-10 shadow-sm" style={{ backgroundColor: "#D8E2FF" }}>
        {/* Triangle */}
        <div
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0"
          style={{
            borderLeft: "24px solid transparent",
            borderRight: "24px solid transparent",
            borderTop: "24px solid #D8E2FF",
          }}
        />
        <div className="relative min-h-[220px] sm:min-h-[160px] flex items-center justify-center">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`transition-all duration-500 ease-in-out ${i === carousel.active
                ? "opacity-100 relative"
                : "opacity-0 absolute inset-0 pointer-events-none"
                }`}
            >
              <p className="text-black/80 font-medium text-sm sm:text-base leading-[1.8] text-center max-w-3xl mx-auto">
=======
      <section className="page-container">
                  <h2 className="section-title">Testimonials</h2>
                  <div className="max-w-3xl mx-auto relative">
                    {/* Speech bubble */}
                    <div className="relative rounded-2xl p-6 sm:p-10 mb-8 overflow-hidden" style={{ backgroundColor: "hsl(10 60% 95%)" }}>
                      {/* Triangle */}
                      <div
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0"
                        style={{
                          borderLeft: "16px solid transparent",
                          borderRight: "16px solid transparent",
                          borderTop: "16px solid hsl(10 60% 95%)",
                        }}
                      />
                      <div className="relative min-h-[160px] sm:min-h-[120px]">
                        {testimonials.map((t, i) => (
                          <div
                            key={i}
                            className={`transition-all duration-500 ease-in-out ${i === carousel.active
                                ? "opacity-100 relative"
                                : "opacity-0 absolute inset-0 pointer-events-none"
                              }`}
                          >
                            <p className="text-foreground/80 text-sm sm:text-base leading-relaxed text-center">
>>>>>>> 16ee21494ed574f7578bcdfe68a028facfbcf5e4
                              {t.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Avatar dots + name */}
<<<<<<< HEAD
  <div className="flex flex-col items-center gap-6 mt-12">
    <div className="flex items-center justify-center gap-3 sm:gap-5">
      {[-2, -1, 0, 1, 2].map((offset) => {
        const index = (carousel.active + offset + testimonials.length) % testimonials.length;
        const t = testimonials[index];
        const isActive = offset === 0;

        return (
          <motion.button
            layout
            key={t.name}
            onClick={() => carousel.setActive(index)}
            className={`rounded-full overflow-hidden flex items-center justify-center transition-all duration-300 ${isActive
              ? "w-16 h-16 sm:w-20 sm:h-20 z-10 shadow-[0_0_0_0px_white,0_0_0_4px_#1B365D]"
              : "w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 z-0 opacity-70 hover:opacity-100 shadow-[0_0_0_0px_white,0_0_0_2px_#D8E2FF]"
              }`}
          >
            <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
          </motion.button>
        );
      })}
    </div>
    <div className="text-center transition-all duration-300">
      <p className="font-bold text-lg text-black">{testimonials[carousel.active].name}</p>
      <p className="text-sm font-semibold text-black/70">{testimonials[carousel.active].role}</p>
=======
          <div className="flex flex-col items-center gap-3 mt-8">
        <div className="flex items-center justify-center -space-x-1">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => carousel.setActive(i)}
              className={`rounded-full bg-muted border-2 flex items-center justify-center text-xs font-bold text-muted-foreground transition-all duration-300 ${i === carousel.active
                  ? "w-14 h-14 border-primary scale-110 z-10 ring-2 ring-primary/30"
                  : "w-10 h-10 border-card hover:scale-105 z-0"
                }`}
            >
              {t.name.split(" ").map((n) => n[0]).join("")}
            </button>
          ))}
        </div>
        <div className="text-center transition-all duration-300">
          <p className="font-semibold text-foreground">{testimonials[carousel.active].name}</p>
          <p className="text-sm text-muted-foreground">{testimonials[carousel.active].role}</p>
>>>>>>> 16ee21494ed574f7578bcdfe68a028facfbcf5e4
        </div>
      </div>
    </div>
  </section>
    </Layout >
  );
};

export default Index;
