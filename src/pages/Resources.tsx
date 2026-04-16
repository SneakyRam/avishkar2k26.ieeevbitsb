import Layout from "@/components/Layout";
import ResourceCard from "@/components/ResourceCard";

const resources: { title: string; description: string; link: string }[] = [
  {
    title: "CORE",
    description:
      "Access millions of open access research papers aggregated from repositories and journals worldwide, making academic discovery simple and efficient.",
    link: "https://core.ac.uk",
  },
  {
    title: "Semantic Scholar",
    description:
      "An AI-powered research platform that helps students quickly find relevant papers, key insights, and influential studies across various fields.",
    link: "https://www.semanticscholar.org",
  },
  {
    title: "Zenodo",
    description:
      "A trusted open repository developed by CERN where researchers can share datasets, research papers, and software across all disciplines.",
    link: "https://zenodo.org",
  },
  {
    title: "Harvard Dataverse",
    description:
      "An open data repository that provides access to high-quality research datasets, enabling students to explore and reuse real-world data.",
    link: "https://dataverse.harvard.edu",
  },
  {
    title: "DOAJ",
    description:
      "A comprehensive directory of peer-reviewed open access journals, ensuring access to reliable and high-quality academic publications.",
    link: "https://doaj.org",
  },
  {
    title: "PubMed Central",
    description:
      "A free digital archive of biomedical and life sciences research articles, widely used for scientific and medical studies.",
    link: "https://www.ncbi.nlm.nih.gov/pmc/",
  },
  {
    title: "Shodhganga",
    description:
      "A national repository of Indian theses and dissertations, providing valuable academic research from universities across India.",
    link: "https://shodhganga.inflibnet.ac.in",
  },
  {
    title: "OpenAIRE",
    description:
      "A comprehensive platform that connects research publications, datasets, and projects, supporting open science and collaboration.",
    link: "https://www.openaire.eu",
  },
];

const Resources = () => (
  <Layout>
    <div className="page-container">
      <h1 className="page-title">Resources</h1>
      <div className="max-w-3xl mx-auto space-y-4">
        {resources.map((resource) => (
          <ResourceCard
            key={resource.title}
            title={resource.title}
            description={resource.description}
            link={resource.link}
          />
        ))}
      </div>
    </div>
  </Layout>
);

export default Resources;
