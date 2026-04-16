import { ExternalLink } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  link: string;
}

const ResourceCard = ({ title, description, link }: ResourceCardProps) => (
  <div className="bg-[#CBD5F5] rounded-xl p-5 sm:p-6 flex flex-col gap-2 shadow-sm border-l-4 border-transparent">
    <h3 className="text-lg font-bold text-foreground">{title}</h3>
    <p className="text-sm text-muted-foreground flex-1 text-justify">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 mt-2 self-start px-4 py-1.5 rounded-md
                 text-[#1C31D4] text-sm font-semibold"
    >
      Click here
      <ExternalLink size={14} />
    </a>
  </div>
);

export default ResourceCard;
