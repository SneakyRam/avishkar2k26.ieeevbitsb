import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What is Avishkar?", a: "Avishkar is the flagship event of IEEE - VBIT SB. It is a Technical Paper Presentation competition which provides Freshmen of VBIT an opportunity to share their ideas and improve their presentation skills." },
  { q: "On what date and at which venue will Avishkar 2K26 be conducted?", a: "Avishkar 2K26 will be conducted on 21st April, 2026 and 22nd April, 2026 at Vignana Bharathi Institute of Technology." },
  { q: "How is the Problem statement assigned?", a: "Problem statement is provided in the registration confirmation mail and is available on the Avishkar 2K26 website." },
  { q: "Can I change the topic after I have submitted the Abstract?", a: "Yes, you can change your topic by submitting a new abstract." },
  { q: "Can a student from another branch be my teammate?", a: "You can choose anyone from first year to be your teammate." },
  { q: "Can I participate as an individual?", a: "Yes, you can participate as an individual or in a team of two." },
  { q: "What should I do if I was absent for Student Development Program?", a: "The sample Abstract and PPT will be provided in the Avishkar 2K26 website if you did not attend the Student Development Program." },
  { q: "What is the registration fee for Avishkar 2K26?", a: "There is no registration fee for Avishkar 2K26." },
  { q: "Can I submit more than one Problem statement?", a: "No, only one Problem statement is allowed per individual or team." },
  { q: "Whom do we contact in case of any queries?", a: "For queries, contact:\nSai Krishna: 9032348479\nGokul: 7207232672" },
];

const FAQs = () => (
  <Layout>
    <div className="page-container">
      <h1 className="page-title">FAQ's</h1>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible>
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="group bg-white mb-3 rounded-lg border border-border border-l-4 border-l-transparent px-4
                         transition-all duration-300 ease-in-out
                         data-[state=open]:bg-[#D9E1FF] data-[state=open]:border-l-primary
                         hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]"
            >
              <AccordionTrigger className="text-sm sm:text-base text-foreground font-medium hover:no-underline transition-colors duration-300 data-[state=open]:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground text-justify whitespace-pre-line">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </Layout>
);

export default FAQs;
