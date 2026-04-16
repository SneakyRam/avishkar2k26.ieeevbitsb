import { useState } from "react";
import Layout from "@/components/Layout";

const galleryImages = [
  { url: "/avishkar2k26.ieeevbitsb/gallery/day1_07.jpg", alt: "Avishkar Day 1 presentation panel" },
  { url: "/avishkar2k26.ieeevbitsb/gallery/day1_03_1.jpg", alt: "Avishkar Day 1 classroom presentation" },
  { url: "/avishkar2k26.ieeevbitsb/gallery/image1.jpg", alt: "Avishkar event presentation" },
  { url: "/avishkar2k26.ieeevbitsb/gallery/image2.jpg", alt: "Students presenting during event" },
  { url: "/avishkar2k26.ieeevbitsb/gallery/image3.jpg", alt: "Judges and participants interaction" },
  { url: "/avishkar2k26.ieeevbitsb/gallery/image4.jpg", alt: "Technical presentation on stage" },
  { url: "/avishkar2k26.ieeevbitsb/gallery/image5.jpg", alt: "Seminar session in progress" },
  { url: "/avishkar2k26.ieeevbitsb/gallery/image6.jpg", alt: "Presentation evaluation session" },
  { url: "/avishkar2k26.ieeevbitsb/gallery/image7.jpg", alt: "College campus fest atmosphere" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Layout>
      <div className="page-container">
        <h1 className="page-title">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6">
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
