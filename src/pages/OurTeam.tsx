import Layout from "@/components/Layout";
import { Instagram, Linkedin } from "lucide-react";

// ── Marketing ──
import gokulMarketing from "@/assets/team/marketing/GOKUL - MARKETING.jpeg";
import hasiniMarketing from "@/assets/team/marketing/HASINI - MARKETING.jpeg";
import sanjanaMarketing from "@/assets/team/marketing/SANJANA - MARKETING.jpeg";

// ── Documentation ──
import nethraDoc from "@/assets/team/documentation/NETHRA - DOC.jpeg";
import sathiDoc from "@/assets/team/documentation/SAHTHI - DOC.jpeg";
import snehithaDoc from "@/assets/team/documentation/SNEHITHA - DOC.jpeg";

// ── Poster Designing ──
import prashanthPD from "@/assets/team/poster-designing/PRASHANTH - PD.jpeg";
import sreenithiPD from "@/assets/team/poster-designing/SREENIDHI - PD.jpeg";
import likkithaPD from "@/assets/team/poster-designing/LIKKITHA - PD.jpeg";

// ── Hospitality ──
import kripaHos from "@/assets/team/hospitality/KRIPA - HOS.jpeg";
import madhurHos from "@/assets/team/hospitality/MADHUR - HOS.jpeg";
import manaswiniHos from "@/assets/team/hospitality/MANASWINI - HOS.jpeg";
import ruthvikaHos from "@/assets/team/hospitality/RUTHVIKA - HOS.jpeg";

// ── Treasury ──
import akshayTreasury from "@/assets/team/treasury/AKSHAY - TREASURY.jpeg";
import faizTreasury from "@/assets/team/treasury/FAIZ ALI - TREASURY.jpeg";
import krishnaTreasury from "@/assets/team/treasury/KRISHNA - TREASURY.jpeg";
import rahulTreasury from "@/assets/team/treasury/RAHUL - TREASURY.jpeg";

// ── Web Designing ──
import jyothsnaWD from "@/assets/team/web-designing/JYOTHSNA - WD.jpeg";
import ramgopalWD from "@/assets/team/web-designing/RAM GOPAL - WD.jpeg";

// ── Social Media Promotions ──
import karthikeyaSMP from "@/assets/team/social-media-promotions/KARTHIKEYA - SMP.jpeg";
import saiveerSMP from "@/assets/team/social-media-promotions/SAI VEER - SMP.jpeg";
import viswajitSMP from "@/assets/team/social-media-promotions/VISWAJIT - SMP.jpeg";

interface Member {
  name: string;
  role: string;
  image?: string;
  insta?: string;
  linkedin?: string;
}

const members: Member[] = [
  // ── Marketing (3 photos uploaded) ──
  { name: "Gokul",   role: "Marketing", image: gokulMarketing },
  { name: "Hasini",  role: "Marketing", image: hasiniMarketing },
  { name: "Sanjana", role: "Marketing", image: sanjanaMarketing },
  { name: "Member 4", role: "Marketing" },
  { name: "Member 5", role: "Marketing" },

  // ── Documentation (3 photos uploaded) ──
  { name: "Nethra",   role: "Documentation", image: nethraDoc },
  { name: "Sathi",    role: "Documentation", image: sathiDoc },
  { name: "Snehitha", role: "Documentation", image: snehithaDoc },
  { name: "Member 4", role: "Documentation" },
  { name: "Member 5", role: "Documentation" },

  // ── Poster Designing (3 photos uploaded) ──
  { name: "Prashanth", role: "Poster Designing", image: prashanthPD },
  { name: "Sreenidhi", role: "Poster Designing", image: sreenithiPD },
  { name: "Likkitha",  role: "Poster Designing", image: likkithaPD },
  { name: "Member 4",  role: "Poster Designing" },

  // ── Hospitality (4 photos uploaded) ──
  { name: "Kripa",     role: "Hospitality", image: kripaHos },
  { name: "Madhur",    role: "Hospitality", image: madhurHos },
  { name: "Manaswini", role: "Hospitality", image: manaswiniHos },
  { name: "Ruthvika",  role: "Hospitality", image: ruthvikaHos },
  { name: "Member 5",  role: "Hospitality" },

  // ── Treasury (4 photos uploaded) ──
  { name: "Akshay",   role: "Treasury", image: akshayTreasury },
  { name: "Faiz Ali", role: "Treasury", image: faizTreasury },
  { name: "Krishna",  role: "Treasury", image: krishnaTreasury },
  { name: "Rahul",    role: "Treasury", image: rahulTreasury },

  // ── Web Designing (2 photos uploaded) ──
  { name: "Jyothsna",  role: "Web Designing", image: jyothsnaWD },
  { name: "Ram Gopal", role: "Web Designing", image: ramgopalWD },
  { name: "Member 3",  role: "Web Designing" },

  // ── Social Media Promotions (3 photos uploaded) ──
  { name: "Karthikeya", role: "Social Media Promotions", image: karthikeyaSMP },
  { name: "Sai Veer",   role: "Social Media Promotions", image: saiveerSMP },
  { name: "Viswajit",   role: "Social Media Promotions", image: viswajitSMP },
  { name: "Member 4",   role: "Social Media Promotions" },
];

const OurTeam = () => (
  <Layout>
    <div className="page-container">
      <h1 className="page-title">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((m, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-muted">
              {m.image ? (
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full" />
              )}
              
              {/* Overlay with Social Tags */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                <a
                  href={m.insta || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/40 backdrop-blur-md p-2 rounded-full text-white hover:text-pink-400 hover:bg-black/60 transition-colors shadow-sm"
                  title="Instagram"
                  onClick={(e) => !m.insta && e.preventDefault()}
                >
                  <Instagram size={18} strokeWidth={1.5} />
                </a>
                <a
                  href={m.linkedin || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/40 backdrop-blur-md p-2 rounded-full text-white hover:text-blue-400 hover:bg-black/60 transition-colors shadow-sm"
                  title="LinkedIn"
                  onClick={(e) => !m.linkedin && e.preventDefault()}
                >
                  <Linkedin size={18} strokeWidth={1.5} />
                </a>
              </div>
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-foreground">{m.name}</h3>
              <p className="text-sm text-muted-foreground">{m.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default OurTeam;
