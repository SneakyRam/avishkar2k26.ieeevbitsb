import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const defaultAvatar = "https://ui-avatars.com/api/?background=random&color=fff&name=";

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
    text: "Participating in Avishkar 2K25 was an enriching experience that contributed to both my personal and academic growth. It encouraged me to develop new skills, think analytically and work effectively as part of a team. I gained confidence in expressing and presenting my ideas with clarity, which significantly improved my communication skills. The event inspired me by highlighting the talent of my peers and motivating me to explore my own potential. Through the various activities and challenges, I learned the value of responsibility, discipline and perseverance. Above all, this experience reinforced my commitment to continuous learning and striving for excellence, leaving a lasting impact on my mindset and future aspirations."
  },
  {
    name: "Deepthi",
    role: "Marketing",
    image: defaultAvatar + "Deepthi",
    text: "Being part of Avishkar 2K25 was a memorable and enriching experience, particularly as my first college event. The event offered a valuable platform to share ideas, acquire new knowledge and enhance both my communication and technical skills. Securing second prize was a rewarding moment that acknowledged the effort I had invested. The experience significantly boosted my confidence and motivated me to pursue similar opportunities in the future."
  },
  {
    name: "Bhavana Keerthi",
    role: "Social Media Promotions",
    image: defaultAvatar + "Bhavana+Keerthi",
    text: "Avishkar 2K25 was an experience that played a key role in shaping my personal growth. The event provided a platform to present ideas, enhance communication skills, and build confidence in public speaking. It also emphasized the significance of communicating with clarity, organization, and impact. This experience has positively influenced my learning journey and motivated me to continue developing my skills and abilities."
  },
  {
    name: "Gokul",
    role: "Marketing",
    image: gokulMarketing,
    text: "Being part of Avishkar 2K25 was a valuable experience that enriched both my skill set and academic outlook. The event provided an opportunity to enhance my presentation skills, develop critical thinking and communicate ideas with clarity. Working with my team strengthened my ability to work effectively together, while the competitive environment motivated me to perform at my best. Constructive feedback from the judges offered meaningful suggestions for improvement and elevated my confidence."
  },
  {
    name: "Akshaay Saharsh",
    role: "Treasury",
    image: akshayTreasury,
    text: "Participating in Avishkar 2K25 has been a great experience, the event stands out for its focus on quick thinking, analytical reasoning and the ability to develop structured solutions to real-world problem statements under pressure. Securing a position among the Top 10 not only strengthened my confidence but also enhanced my critical thinking, teamwork and communication skills. Avishkar is more than just a paper presentation event, it is a space that transforms ideas into meaningful solutions and participants into confident, capable problem - solvers."
  },
  {
    name: "Rahul",
    role: "Treasury",
    image: rahulTreasury,
    text: "Avishkar 2K25 marked a significant milestone in my academic journey, as it was my first event at the college level. Teaming up with a friend, I was able to present ideas, think critically and offer practical solutions in an effective manner. Beyond the competition itself, the event broadened my perspective by exposing me to new concepts and allowing me to engage with fellow participants. Reaching the second round was a rewarding outcome that reflected the hard work and dedication we put into the experience."
  },
  {
    name: "Sai Krishna",
    role: "Marketing",
    image: defaultAvatar + "Sai+Krishna",
    text: "I take immense pride in stating that my participation in Avishkar 2K25 has been a profoundly transformative experience, extending far beyond a mere platform to present ideas. It challenged me to think critically, understand real-world problems and develop practical solutions in a structured and effective manner. Throughout this journey, I strengthened my confidence, communication and teamwork skills, while learning to present ideas with greater clarity and purpose. Avishkar 2K25 nurtured both creativity and analytical thinking, shaping me into a more confident and effective problem - solver."
  },
  {
    name: "Ramgopal",
    role: "Web Designing",
    image: ramgopalWD,
    text: "Participation in Avishkar 2K25 marked a significant milestone in my academic and professional development. It served as a structured platform for experiential learning, self-assessment and skill enhancement. I demonstrated improved analytical thinking, precise communication and a broadened problem-solving perspective. The event enabled me to validate my core strengths while identifying areas for further development. I conclude that engaging with such challenging opportunities is pivotal in aligning individual potential with future academic and professional objectives."
  },
  {
    name: "Karthikeya",
    role: "Social Media Promotions",
    image: karthikeyaSMP,
    text: "Participating in Avishkar 2K25 was a highly constructive experience that contributed significantly to my academic and professional development. The event provided a structured platform to present innovative ideas, receive expert feedback and engage with peers from diverse technical backgrounds. It enhanced my ability to communicate complex concepts effectively and strengthened my confidence in public presentations."
  },
  {
    name: "Manasvini Darbha",
    role: "Hospitality",
    image: manaswiniHos,
    text: "I consider it a privilege to share my experience at Avishkar 2K25, an event that proved to be a defining and unforgettable milestone in my academic journey. Choosing to participate independently rendered the experience all the more meaningful, as every step forward was contingent upon my own effort, preparation and self-belief. Advancing to the Top 10 finalists represented a significant achievement and a moment of considerable academic pride. The most notable aspect of the experience was the level of confidence I demonstrated while presenting on stage. Delivering my ideas, engaging with the jury, responding to their queries and receiving positive feedback from the audience collectively contributed to a meaningful and rewarding presentation experience. Securing 3rd prize was a notable milestone; however, the most substantial outcome was the self-confidence I developed throughout this process."
  },
  {
    name: "G. Prashanth",
    role: "Poster Designing",
    image: prashanthPD,
    text: "Participating in the Technical Paper Presentation at Avishkar 2K25 has been a truly enriching journey that helped me grow in ways I had never anticipated. It provided me with a valuable platform to express my ideas, take initiative and contribute meaningfully. Progressing through the different stages of the event motivated me to develop patience, adaptability and a deeper appreciation for teamwork. I had the opportunity to interact with inspiring individuals whose ideas and encouragement motivated me to improve myself. The journey was filled with learning, challenges and unforgettable moments that I will always cherish."
  },
  {
    name: "V. Hasini Sai Sree",
    role: "Marketing",
    image: hasiniMarketing,
    text: "The experience of Avishkar 2K25 was both intellectually stimulating and personally fulfilling. It challenged me to think critically, analyze problems from multiple dimensions and present my ideas with confidence. The exposure I gained through this platform has significantly contributed to my growth and has motivated me to pursue future endeavours with greater enthusiasm."
  },
  {
    name: "Sahithi",
    role: "Documentation",
    image: sathiDoc,
    text: "Being part of Avishkar 2K25 proved to be a meaningful milestone in my journey of learning and selfimprovement. It gave me the opportunity to share my ideas on a larger platform while strengthening essential skills such as communication, public speaking and self-confidence. The experience taught me the value of presenting with clarity, maintaining a logical structure and delivering ideas in an engaging and effective manner. Beyond the event itself, Avishkar 2K25 had a lasting influence on my academic and personal growth. It encouraged me to become more expressive, confident and focused in the way I present my thoughts."
  },
  {
    name: "B. Manoj Kumar",
    role: "Documentation",
    image: defaultAvatar + "Manoj+Kumar",
    text: "Participation in Avishkar 2K25 was a transformative academic experience that extended well beyond conventional classroom presentations. The event challenged me to clearly defend my research approach and thought process before a panel of experienced industry experts, making it both demanding and professionally rewarding. It strengthened my analytical competencies, enhanced my confidence in presenting technical concepts, and motivated me to approach research with greater clarity and structured purpose. I strongly recommend this platform to every aspiring researcher seeking to align academic knowledge with real world technical application."
  },
  {
    name: "Kripa Patel",
    role: "Hospitality",
    image: kripaHos,
    text: "Avishkar 2K25 served as an exceptional platform that extended my learning beyond conventional classroom boundaries. It provided me with the opportunity to apply theoretical concepts in a practical and meaningful context. Engaging with diverse perspectives and innovative ideas broadened my intellectual outlook and encouraged me to approach problem solving with enhanced creativity, precision and analytical thinking."
  },
  {
    name: "Sai Veer",
    role: "Social Media Promotions",
    image: saiveerSMP,
    text: "I am delighted to share my experience of participating in Avishkar 2K25, which significantly enhanced my presentation skills, confidence and ability to communicate research ideas effectively. Working alongside peers and building teamwork added immense value to the experience. Transitioning from participant to organizing committee member provided practical insights into event management. In all, Avishkar 2K25 was an inspiring platform for academic and professional growth."
  },
  {
    name: "Jyothsna Kakarla",
    role: "Web Designing",
    image: jyothsnaWD,
    text: "Being a part of Avishkar 2K25 was a truly valuable experience, especially as a first-year student. It provided me a platform to present my ideas and explore innovative solutions to real - world problems. The constructive feedback I received helped me refine my approach and become more confident in presenting my thoughts. This experience also played an important role in helping me overcome stage fear and express my ideas with greater ease and clarity. The event not only strengthened my technical understanding but also encouraged me to think more critically and confidently."
  }
];

const useTestimonialCarousel = (count: number, interval = 5000) => {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const next = useCallback(() => setActive((p) => (p + 1) % count), [count]);

  useEffect(() => {
    if (isHovered) return;
    // We use setTimeout instead of setInterval because useEffect re-runs
    // every time `active` changes, naturally chaining the timeouts.
    const id = setTimeout(next, interval);
    return () => clearTimeout(id);
  }, [next, interval, active, isHovered]);

  return { active, setActive, setIsHovered };
};

const Testimonials = () => {
  const carousel = useTestimonialCarousel(testimonials.length, 4000);

  return (
    <section className="page-container mb-24">
      <h2 className="section-title">Testimonials</h2>

      <div
        className="max-w-4xl mx-auto relative"
        onMouseEnter={() => carousel.setIsHovered(true)}
        onMouseLeave={() => carousel.setIsHovered(false)}
      >
        {/* Speech bubble */}
        <div className="relative rounded-xl p-8 sm:p-12 mb-10 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0A1628]/40" style={{ backgroundColor: "#D8E2FF" }}>
          {/* Triangle */}
          <div
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0"
            style={{
              borderLeft: "24px solid transparent",
              borderRight: "24px solid transparent",
              borderTop: "24px solid #D8E2FF",
            }}
          />
          <div className="relative min-h-[380px] sm:min-h-[280px] md:min-h-[240px] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={carousel.active}
                initial={{ opacity: 0, x: 30, filter: "blur(8px)", scale: 0.98 }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, x: -30, filter: "blur(8px)", scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-full flex items-center justify-center p-4 sm:p-8"
              >
                <p className="text-black/80 font-medium text-sm sm:text-base leading-[1.8] text-center max-w-3xl mx-auto whitespace-pre-wrap">
                  {testimonials[carousel.active].text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Avatar dots + name */}
        <div className="flex flex-col items-center gap-6 mt-12">
          <div className="flex items-center justify-center gap-3 sm:gap-5 h-24">
            {[-2, -1, 0, 1, 2].map((offset) => {
              const index = (carousel.active + offset + testimonials.length) % testimonials.length;
              const t = testimonials[index];
              const isActive = offset === 0;

              return (
                <motion.button
                  layout
                  key={t.name}
                  onClick={() => carousel.setActive(index)}
                  className={`rounded-full overflow-hidden flex flex-shrink-0 items-center justify-center relative ${isActive
                    ? "w-16 h-16 sm:w-20 sm:h-20 z-10 shadow-[0_0_0_0px_white,0_0_0_4px_#1B365D]"
                    : "w-10 h-10 sm:w-12 sm:h-12 z-0 opacity-70 hover:opacity-100 shadow-[0_0_0_0px_white,0_0_0_2px_#D8E2FF]"
                    }`}
                  transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8 }}
                  whileHover={{ scale: isActive ? 1 : 1.15 }}
                >
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover pointer-events-none" />
                </motion.button>
              );
            })}
          </div>
          <div className="text-center h-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={carousel.active}
                initial={{ opacity: 0, x: 15, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -15, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <p className="font-bold text-lg text-black">{testimonials[carousel.active].name}</p>
                <p className="text-sm font-semibold text-black/70">{testimonials[carousel.active].role}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
