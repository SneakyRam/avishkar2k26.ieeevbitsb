import Layout from "@/components/Layout";
import { Instagram, Linkedin } from "lucide-react";

// ── Marketing ──
import gokulMarketing from "@/assets/team/marketing/GOKUL - MARKETING.jpeg";
import hasiniMarketing from "@/assets/team/marketing/HASINI - MARKETING.jpeg";
import sanjanaMarketing from "@/assets/team/marketing/SANJANA - MARKETING.jpeg";
import deepthiMarketing from "@/assets/team/marketing/DEEPTHI - MARKETING.png";
import krishnaMarketing from "@/assets/team/marketing/KRISHNA - TREASURY.jpeg";

// ── Documentation ──
import nethraDoc from "@/assets/team/documentation/NETHRA - DOC.jpeg";
import sathiDoc from "@/assets/team/documentation/SAHTHI - DOC.jpeg";
import snehithaDoc from "@/assets/team/documentation/snehitha2.jpeg";
import manojDoc from "@/assets/team/documentation/MANOJ - DOC.jpeg";
import naveenDoc from "@/assets/team/documentation/NAVEEN - DOC.jpg";

// ── Poster Designing ──
import prashanthPD from "@/assets/team/poster-designing/PRASHANTH - PD.jpeg";
import sreenithiPD from "@/assets/team/poster-designing/SREENIDHI - PD.jpeg";
import likkithaPD from "@/assets/team/poster-designing/likkitha2.jpeg";
import dharmaPD from "@/assets/team/poster-designing/DHARMA VARDHAN - PD.jpeg";

// ── Hospitality ──
import kripaHos from "@/assets/team/hospitality/KRIPA - HOS.jpeg";
import madhurHos from "@/assets/team/hospitality/MADHUR - HOS.jpeg";
import manaswiniHos from "@/assets/team/hospitality/MANASWINI - HOS.jpeg";
import ruthvikaHos from "@/assets/team/hospitality/RUTHVIKA - HOS.jpeg";
import govindHos from "@/assets/team/hospitality/Y GOVIND GANESH.jpg";

// ── Treasury ──
import akshayTreasury from "@/assets/team/treasury/AKSHAY - TREASURY.jpeg";
import karthikTreasury from "@/assets/team/treasury/KARTHIK - TREASURY.jpg";
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
import bhavanaSMP from "@/assets/team/social-media-promotions/BHAVANA - SMP.jpg";

interface Member {
  name: string;
  role: string;
  image?: string;
  insta?: string;
  linkedin?: string;
  imageClass?: string;
}

const members: Member[] = [
  // ── Marketing ──
  { name: "Gokul Ageera",       role: "Marketing", image: gokulMarketing, insta: "https://www.instagram.com/gokulageera/", linkedin: "https://www.linkedin.com/in/gokul-ageera-0261a6383/" },
  { name: "Hasini",      role: "Marketing", image: hasiniMarketing, insta: "https://www.instagram.com/_hasinivanumu_/", linkedin: "https://www.linkedin.com/in/hasini-vanumu-34187b402/" },
  { name: "Sanjana Konka",     role: "Marketing", image: sanjanaMarketing, insta: "https://www.instagram.com/sanjana._0905/", linkedin: "https://www.linkedin.com/in/sanjana-konka-306655402/" },
  { name: "Deepthi Amudala",     role: "Marketing", image: deepthiMarketing, insta: "https://www.instagram.com/deepthi_shetty06/" },
  { name: "C Sai Krishna", role: "Marketing", image: krishnaMarketing, insta: "https://www.instagram.com/sai_krishna_1127/", linkedin: "https://in.linkedin.com/in/saikrishna-chinthamadaka-34178a3a1" },

  // ── Documentation ──
  { name: "Maheshwaram Nethra",   role: "Documentation", image: nethraDoc, insta: "https://www.instagram.com/nethramaheshwaram/", linkedin: "https://www.linkedin.com/in/nethra-maheshwaram-5a0496402/" },
  { name: "Dundigal Sahithi",  role: "Documentation", image: sathiDoc, insta: "https://www.instagram.com/sahithi_dundigalla/", linkedin: "https://www.linkedin.com/in/sahithi-goud-748898360/" },
  { name: "Snehita", role: "Documentation", image: snehithaDoc, insta: "https://www.instagram.com/siri_123_b/", linkedin: "https://www.linkedin.com/in/snehitha-reddy-bashakarla-297645402/", imageClass: "object-[center_20%]" },
  { name: "Naveen Raj",   role: "Documentation", image: naveenDoc, insta: "https://www.instagram.com/d.naveen_raj/", linkedin: "https://www.linkedin.com/in/naveen-raj-1aaa7b402/" },
  { name: "B Manoj Kumar",    role: "Documentation", image: manojDoc, insta: "https://www.instagram.com/b.manoj_1701/", linkedin: "https://www.linkedin.com/in/bachumanojkumar/" },

  // ── Poster Designing ──
  { name: "G Prashanth",    role: "Poster Designing", image: prashanthPD, insta: "https://www.instagram.com/prasshhhzanth/", linkedin: "https://www.linkedin.com/in/prashanthgarigaboina/" },
  { name: "Sreenidhi",    role: "Poster Designing", image: sreenithiPD, insta: "https://www.instagram.com/sreenidhi_01/", linkedin: "https://www.linkedin.com/in/sreenidhi-ananthula-b3b173403/" },
  { name: "Likkitha E",     role: "Poster Designing", image: likkithaPD, insta: "https://www.instagram.com/_likkithaa/", linkedin: "https://www.linkedin.com/in/likkitha-e-94a822369/", imageClass: "object-[center_20%]" },
  { name: "Dharmavardhan", role: "Poster Designing", image: dharmaPD, insta: "https://www.instagram.com/dharma_vardhan____/", linkedin: "https://www.linkedin.com/in/dharma-vardhan-904171403/" },

  // ── Hospitality ──
  { name: "Kripa Patel",     role: "Hospitality", image: kripaHos, insta: "https://www.instagram.com/kripa_.13/", linkedin: "https://www.linkedin.com/in/kripa-patel-1b399737a/" },
  { name: "S Madhur",    role: "Hospitality", image: madhurHos, insta: "https://www.instagram.com/not__madhur/", linkedin: "https://www.linkedin.com/in/sirigiri-madhur-abb78a384/" },
  { name: "Manaswini Darbha", role: "Hospitality", image: manaswiniHos, insta: "https://www.instagram.com/mmanax_/", linkedin: "https://www.linkedin.com/in/manasvini-darbha/" },
  { name: "M Rutvika",  role: "Hospitality", image: ruthvikaHos, insta: "https://www.instagram.com/rutvikaaa.30/", linkedin: "https://www.linkedin.com/in/rutvika-muriki-3a004132b/" },
  { name: "Y Govind Ganesh",    role: "Hospitality", image: govindHos, insta: "https://www.instagram.com/ganesh._.27_/", linkedin: "https://www.linkedin.com/in/govind-ganesh-yada-520915326/" },

  // ── Treasury ──
  { name: "Akshay Saharsh",   role: "Treasury", image: akshayTreasury, insta: "https://www.instagram.com/akshaysaharshgajula/", linkedin: "https://www.linkedin.com/in/akshay-saharsh-8522a53a1/" },
  { name: "Mohammad Faiz Ali", role: "Treasury", image: faizTreasury, insta: "https://www.instagram.com/fxiz_ali3/", linkedin: "https://in.linkedin.com/in/mohammed-faiz-ali-13b854402/" },
  { name: "K Rahul",    role: "Treasury", image: rahulTreasury, insta: "https://www.instagram.com/rahul__chary_07/", linkedin: "https://www.linkedin.com/in/rahul-kolloju-b4732438a/" },
  { name: "Karthik Ramavath",  role: "Treasury", image: karthikTreasury, insta: "https://www.instagram.com/karthik.__.200/", linkedin: "https://www.linkedin.com/in/ramavath-karthik-403235403/" },

  // ── Web Designing ──
  { name: "Jyothsna Kakarla",        role: "Web Designing", image: jyothsnaWD, insta: "https://www.instagram.com/jyothsna._30/", linkedin: "https://www.linkedin.com/in/jyothsna-kakarla-245b8a37a/" },
  { name: "G Ram Gopal",       role: "Web Designing", image: ramgopalWD, insta: "https://www.instagram.com/raai.gen/", linkedin: "https://www.linkedin.com/in/ram-gopal-163479280/" },
  { name: "Siddhu Srinivas", role: "Web Designing", image: sidduWD, insta: "https://www.instagram.com/itz_me_siddhu_6351/", linkedin: "https://www.linkedin.com/in/gajula-siddhu-srinivas-611439322/", imageClass: "scale-110 object-top" },

  // ── Social Media Promotions ──
  { name: "G Karthikeya", role: "Social Media Promotions", image: karthikeyaSMP, insta: "https://www.instagram.com/karthikeyaganchiri/", linkedin: "https://www.linkedin.com/in/karthikeya-ganchiri-294a13330/" },
  { name: "Saiveer Pendkar",   role: "Social Media Promotions", image: saiveerSMP, insta: "https://www.instagram.com/_.shutterbug_89/", linkedin: "https://www.linkedin.com/in/saiveer-pendkar-126415365/" },
  { name: "Viswajith Reddy",   role: "Social Media Promotions", image: viswajitSMP, insta: "https://www.instagram.com/s.__.u.__.r.__.y.__.a/", linkedin: "https://www.linkedin.com/in/viswajit-reddy-7a0739402/" },
  { name: "Bhavana Keerthi",    role: "Social Media Promotions", image: bhavanaSMP, insta: "https://www.instagram.com/bhavanakeerthi.s/", linkedin: "https://www.linkedin.com/in/bhavana-keerthi-808381403/" },
];

const OurTeam = () => (
  <Layout>
    <div className="page-container">
      <h1 className="page-title">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
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
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${m.imageClass || 'object-top'}`}
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
            <div className="p-4 text-center bg-slate-50 border-t border-slate-100">
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
