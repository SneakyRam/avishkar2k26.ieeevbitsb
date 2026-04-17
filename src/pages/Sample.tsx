import Layout from "@/components/Layout";
import { Download } from "lucide-react";

import samplePPT from "@/assets/team/sample/SamplePPT.pptx";
import sampleAbstractInd from "@/assets/team/sample/Sample Abstract individual.pdf";
import sampleAbstractTeam from "@/assets/team/sample/Sample Abtract team.pdf";
import problemStatement from "@/assets/team/sample/Avishkar 2k26 Problem statemen (1).pdf";
import sampleVideo from "@/assets/team/sample/Sample Abstract Tutorial Video.mp4";

const btnClass = "inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#1C31D4] text-white text-sm font-medium transition-all duration-200 hover:bg-[#1C31D4] hover:text-white hover:shadow-md hover:scale-105 active:scale-95 group";

const Sample = () => (
  <Layout>
    <div className="page-container">
      <h1 className="page-title">Sample</h1>

      <div className="max-w-3xl mx-auto space-y-8">
        <section>
          <div className="aspect-video rounded-xl overflow-hidden bg-black shadow-lg border border-border">
            <video 
              src={sampleVideo} 
              controls 
              className="w-full h-full object-cover"
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold font-display mb-4 text-foreground">DOWNLOAD SAMPLE ABSTRACTS</h2>
          <div className="flex flex-wrap gap-4">
            <a href={sampleAbstractInd} download="Sample_Abstract_Individual.pdf" className={btnClass}>
              INDIVIDUAL
              <Download size={16} className="transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
            <a href={sampleAbstractTeam} download="Sample_Abstract_Team.pdf" className={btnClass}>
              TEAM
              <Download size={16} className="transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold font-display mb-4 text-foreground">DOWNLOAD SAMPLE PPT</h2>
          <a href={samplePPT} download="Sample_PPT.pptx" className={btnClass}>
            PPT
            <Download size={16} className="transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold font-display mb-4 text-foreground">DOWNLOAD PROBLEM STATEMENTS</h2>
          <a href={problemStatement} download="Avishkar_Problem_Statements.pdf" className={btnClass}>
            PROBLEM STATEMENTS
            <Download size={16} className="transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>
        </section>
      </div>
    </div>
  </Layout>
);

export default Sample;
