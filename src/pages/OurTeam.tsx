import Layout from "@/components/Layout";
import { Instagram, Linkedin } from "lucide-react";

// ── Marketing ──
import gokulMarketing from "@/assets/team/marketing/GOKUL - MARKETING.jpeg";
import hasiniMarketing from "@/assets/team/marketing/HASINI - MARKETING.jpeg";
import sanjanaMarketing from "@/assets/team/marketing/SANJANA - MARKETING.jpeg";
import deepthiMarketing from "@/assets/team/marketing/DEEPTHI - MARKETING.jpeg";
import krishnaMarketing from "@/assets/team/marketing/KRISHNA - TREASURY.jpeg";

// ── Documentation ──
import nethraDoc from "@/assets/team/documentation/NETHRA - DOC.jpeg";
import sathiDoc from "@/assets/team/documentation/SAHTHI - DOC.jpeg";
import snehithaDoc from "@/assets/team/documentation/SNEHITHA - DOC.jpeg";
import manojDoc from "@/assets/team/documentation/MANOJ - DOC.jpeg";
import naveenDoc from "@/assets/team/documentation/NAVEEN - DOC.jpg";

// ── Poster Designing ──
import prashanthPD from "@/assets/team/poster-designing/PRASHANTH - PD.jpeg";
import sreenithiPD from "@/assets/team/poster-designing/SREENIDHI - PD.jpeg";
import likkithaPD from "@/assets/team/poster-designing/LIKKITHA - PD.jpeg";
import dharmaPD from "@/assets/team/poster-designing/DHARMA VARDHAN - PD.jpeg";

// ── Hospitality ──
import kripaHos from "@/assets/team/hospitality/KRIPA - HOS.jpeg";
import madhurHos from "@/assets/team/hospitality/MADHUR - HOS.jpeg";
import manaswiniHos from "@/assets/team/hospitality/MANASWINI - HOS.jpeg";
import ruthvikaHos from "@/assets/team/hospitality/RUTHVIKA - HOS.jpeg";
import govindHos from "@/assets/team/hospitality/GOVIND GANESH - HOS.jpeg";

// ── Treasury ──
import akshayTreasury from "@/assets/team/treasury/AKSHAY - TREASURY.jpeg";
import faizTreasury from "@/assets/team/treasury/FAIZ ALI - TREASURY.jpeg";
import rahulTreasury from "@/assets/team/treasury/RAHUL - TREASURY.jpeg";

// ── Web Designing ──
import jyothsnaWD from "@/assets/team/web-designing/JYOTHSNA - WD.jpeg";
import ramgopalWD from "@/assets/team/web-designing/RAM GOPAL - WD.jpeg";
import sidduWD from "@/assets/team/web-designing/SIDDU SRINIVAS - WEB.jpeg";

// ── Social Media Promotions ──
import karthikeyaSMP from "@/assets/team/social-media-promotions/KARTHIKEYA - SMP.jpeg";
import saiveerSMP from "@/assets/team/social-media-promotions/SAI VEER - SMP.jpeg";
import viswajitSMP from "@/assets/team/social-media-promotions/VISWAJIT - SMP.jpeg";
import bhavanaSMP from "@/assets/team/social-media-promotions/BHAVANA - SMP.jpeg";

interface Member {
  name: string;
  role: string;
  image?: string;
  insta?: string;
  linkedin?: string;
}

const members: Member[] = [
  // ── Marketing ──
  { name: "Gokul",   role: "Marketing", image: gokulMarketing, insta: "https://www.instagram.com/gokulageera/" },
  { name: "Hasini",  role: "Marketing", image: hasiniMarketing, insta: "https://www.instagram.com/_hasinivanumu_/" },
  { name: "Sanjana", role: "Marketing", image: sanjanaMarketing, insta: "https://www.instagram.com/sanjana._0905/" },
  { name: "Deepthi", role: "Marketing", image: deepthiMarketing },
  { name: "Sai Krishna", role: "Marketing", image: krishnaMarketing },

  // ── Documentation ──
  { name: "Nethra",   role: "Documentation", image: nethraDoc, insta: "https://www.instagram.com/nethramaheshwaram/" },
  { name: "Sahithi",  role: "Documentation", image: sathiDoc, insta: "https://www.instagram.com/sahithi_dundigalla/" },
  { name: "Snehitha", role: "Documentation", image: snehithaDoc },
  { name: "Naveen", role: "Documentation", image: naveenDoc },
  { name: "Manoj", role: "Documentation", image: manojDoc },

  // ── Poster Designing ──
  { name: "Prashanth", role: "Poster Designing", image: prashanthPD, insta: "https://www.instagram.com/prasshhhzanth/" },
  { name: "Sreenidhi", role: "Poster Designing", image: sreenithiPD, insta: "https://www.instagram.com/sreenidhi_01/" },
  { name: "Likkitha",  role: "Poster Designing", image: likkithaPD, insta: "https://www.instagram.com/_likkithaa/" },
  { name: "Dharmavardhan",  role: "Poster Designing", image: dharmaPD },

  // ── Hospitality ──
  { name: "Kripa",     role: "Hospitality", image: kripaHos, insta: "https://www.instagram.com/kripa_.13/" },
  { name: "Madhur",    role: "Hospitality", image: madhurHos, insta: "https://www.instagram.com/not__madhur/" },
  { name: "Manaswini", role: "Hospitality", image: manaswiniHos, insta: "https://www.instagram.com/mmanx_/" },
  { name: "Ruthvika",  role: "Hospitality", image: ruthvikaHos, insta: "https://www.instagram.com/rutvikaaa.30/" },
  { name: "Govind",  role: "Hospitality", image: govindHos },

  // ── Treasury ──
  { name: "Akshay",   role: "Treasury", image: akshayTreasury, insta: "https://www.instagram.com/akshaysaharshgajula/" },
  { name: "Faiz Ali", role: "Treasury", image: faizTreasury, insta: "https://www.instagram.com/fxiz_ali3/" },
  { name: "Rahul",    role: "Treasury", image: rahulTreasury, insta: "https://www.instagram.com/rahul__chary_07/" },
  { name: "Karthik",  role: "Treasury" },

  // ── Web Designing ──
  { name: "Jyothsna",  role: "Web Designing", image: jyothsnaWD, insta: "https://www.instagram.com/jyothsna._30/" },
  { name: "Ram Gopal", role: "Web Designing", image: ramgopalWD, insta: "https://www.instagram.com/raai.gen/" },
  { name: "Siddhu Srinivas",  role: "Web Designing", image: sidduWD },

  // ── Social Media Promotions ──
  { name: "Karthikeya", role: "Social Media Promotions", image: karthikeyaSMP, insta: "https://www.instagram.com/karthikeyaganchiri/" },
  { name: "Sai Veer",   role: "Social Media Promotions", image: saiveerSMP, insta: "https://www.instagram.com/_.shutterbug_89/" },
  { name: "Viswajit",   role: "Social Media Promotions", image: viswajitSMP, insta: "https://www.instagram.com/s.__.u.__.r.__.y.__.a/" },
  { name: "Keerthi",   role: "Social Media Promotions", image: bhavanaSMP },
];

const OurTeam = () => (
  <Layout>
    <div className="page-container">
      <h1 className="page-title">Our Team</h1>
      <div className="grid grid-cols-3 gap-2 sm:gap-6">
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
