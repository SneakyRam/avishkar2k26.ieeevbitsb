import { useState } from "react";
import Layout from "@/components/Layout";

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800", alt: "Students participating in a hackathon" },
  { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800", alt: "Technical robotics project demonstration" },
  { url: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800", alt: "Classroom workshop session" },
  { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800", alt: "Large stage event presentation" },
  { url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", alt: "Group photo of students" },
  { url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800", alt: "Engaged audience during a fest" },
  { url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800", alt: "College campus fest atmosphere and lighting" },
  { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", alt: "Team collaborating on laptops" },
  { url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800", alt: "Keynote speaker on stage" }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Layout>
      <div className="page-container">
        <h1 className="page-title">GALLERY</h1>
        <div className="grid grid-cols-3 gap-2 sm:gap-6">
          {galleryImages.map((image, i) => (
            <div key={i} className="aspect-[4/3] bg-muted rounded-xl hover:shadow-lg transition-shadow overflow-hidden group cursor-pointer" onClick={() => setSelectedImage(image.url)}>
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Lightbox Overlay */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-black/70 border border-white/20 text-white text-xl sm:text-2xl font-bold leading-none hover:bg-white/20 transition-colors z-[101]"
                onClick={() => setSelectedImage(null)}
                aria-label="Close lightbox"
              >
                &times;
              </button>
              <img
                src={selectedImage.replace('w=800', 'w=1600')}
                alt="Enlarged gallery view"
                className="max-w-[98vw] max-h-[88vh] lg:max-w-[99vw] lg:max-h-[90vh] w-auto h-auto min-w-[60vw] lg:min-w-[75vw] object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Gallery;
