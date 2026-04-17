import Layout from "@/components/Layout";

const About = () => (
  <Layout>
    <div className="page-container">
      <h1 className="page-title">About</h1>

      <div className="max-w-3xl mx-auto space-y-8 text-sm sm:text-base leading-relaxed text-foreground">
        <section>
          <h2 className="text-xl sm:text-2xl font-bold font-display mb-3">INTRODUCTION</h2>
          <p className="text-muted-foreground text-justify">
            Avishkar, the flagship event of IEEE - VBIT SB, is a technical paper presentation competition held exclusively
            for the Freshmen of VBIT. With a legacy of over 17 years, the event has been recognized with the prestigious
            'Darrel Chong Gold Student Activity Award' for its strong focus on student development. This platform helps
            students understand problems, develop solutions and improve their key skills.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold font-display mb-3">WHAT IS AVISHKAR?</h2>
          <p className="text-muted-foreground text-justify">
            Avishkar is a technical paper presentation competition organized by IEEE - VBIT SB, providing first-year
            students an opportunity to share their ideas and improve their presentation skills. It gives students an
            opportunity to understand real-world problems and propose practical solutions. The event helps students
            improve their technical knowledge and basic research skills.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold font-display mb-3">EVENT STRUCTURE</h2>

          <h3 className="text-lg font-bold font-display mb-2">Round 1: Idea Presentation Round</h3>
          <p className="text-muted-foreground text-justify mb-4">
            At the beginning, participants are assigned to specific halls where they will deliver their presentations. Each team is
            given a fixed time for the presentation, followed by two minutes for queries. This helps students overcome stage
            fear and sharpen communication skills. Preparing in IEEE standards builds technical knowledge and introduces
            professional research conventions. The 2-minute query session enhances critical thinking and equips
            participants to address technical questions effectively.
          </p>

          <h3 className="text-lg font-bold font-display mb-2">Round 2: Final Round</h3>
          <p className="text-muted-foreground text-justify">
            A group of judges evaluates the presentations. The top ten presentations, based on performance, advance to the
            Final Round. The finalists compete to give their best presentations, followed by a valedictory ceremony where
            the winners are recognized and awarded with mementos and certificates.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold font-display mb-3">GUIDELINES AND REGULATIONS</h2>

          <h3 className="text-lg font-bold font-display mb-2">ABSTRACT</h3>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1 mb-3">
            <li>The font style should be Times New Roman.</li>
            <li>The problem statement title should be in bold with a font size of 24.</li>
            <li>Participant details (Name, Branch &amp; Section, Roll Number, Email ID) must be written in italics.</li>
            <li>The document must be divided into two columns and properly justified.</li>
            <li>
              Subheadings must be in bold with font size 12 and include:
              <ol className="list-decimal pl-5 mt-1 space-y-1">
                <li>Introduction</li>
                <li>Problem Statement</li>
                <li>Motivation</li>
                <li>Scope</li>
                <li>Proposed Solution</li>
                <li>Conclusion</li>
              </ol>
            </li>
            <li>The content must be written in font size 10 and should be clear, concise and limited to one page.</li>
            <li>The total word count for the abstract must not exceed 250 words.</li>
          </ul>

          <h3 className="text-lg font-bold font-display mb-2">IMPORTANT NOTE</h3>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1 mb-3">
            <li>The abstract must be submitted in .docx format.</li>
            <li>The file must be named as: <span className="font-semibold">'Name_Last3DigitsOfYourRollNumber'</span>.</li>
            <li>Example 1: Gokul_202.docx</li>
            <li className="list-none">Example 2: Hasini_616_Sanjana_2B9.docx</li>
            <li>A sample PPT in IEEE format will be provided after the abstract submission.</li>
          </ul>

          <h3 className="text-lg font-bold font-display mb-2">PPT</h3>
          <p className="text-muted-foreground text-justify mb-2">The PPT must consist of 10 slides and include the following:</p>
          <ol className="list-decimal pl-5 text-muted-foreground space-y-1 mb-3">
            <li>Slide 1: Home Page</li>
            <li>Slide 2: Problem Statement</li>
            <li>Slide 3: Problem Explanation</li>
            <li>Slide 4: Solution</li>
            <li>Slide 5: Domain Chosen</li>
            <li>Slide 6: Feasibility of the solution</li>
            <li>Slide 7: Comparison with existing solutions</li>
            <li>Slide 8: Applications</li>
            <li>Slide 9: Queries</li>
            <li>Slide 10: Thank You</li>
          </ol>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
            <li>The homepage must contain "AVISHKAR" along with your Name, Roll Number and Branch &amp; Section.</li>
            <li>"AVISHKAR" must be in capital letters, bold and font size 80.</li>
            <li>Times New Roman font must be used throughout the PPT.</li>
            <li>No animations or transitions are to be used.</li>
            <li>The Subheading font size from slide 2 to slide 8 must be 40 and the content font size must be 20.</li>
            <li>The PPT must be named using the same format as the abstract.</li>
            <li>Example 1: Krishna_228.pptx</li>
            <li className="list-none">Example 2: Deepthi_2A6_Hasini_2C9.pptx</li>
          </ul>
        </section>
      </div>
    </div>
  </Layout>
);

export default About;
