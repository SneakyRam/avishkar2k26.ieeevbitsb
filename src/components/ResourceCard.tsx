
interface ResourceCardProps {
  title: string;
  description: string;
  link: string;
}

const ResourceCard = ({ title, description, link }: ResourceCardProps) => (
  <div className="bg-[#CBD5F5] rounded-xl p-5 sm:p-6 flex flex-col gap-3 shadow-sm">
    <h3 className="text-lg font-bold text-foreground">{title}</h3>
    <p className="text-sm text-muted-foreground flex-1 text-justify">{description}</p>
    <div className="flex justify-center mt-2">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 rounded-full bg-[#4B6BFB] text-white text-sm font-semibold tracking-wide shadow-md"
      >
        Click here
      </a>
    </div>
  </div>
);

export default ResourceCard;
