import React, { useState } from "react";
import banner1 from "../assets/img/instagram/1.JPG";
import banner2 from "../assets/img/instagram/2.JPEG";
import banner3 from "../assets/img/instagram/3.JPEG";
import banner4 from "../assets/img/instagram/4.JPEG";
import banner5 from "../assets/img/instagram/5.JPEG";
import banner6 from "../assets/img/instagram/6.JPEG";
import banner7 from "../assets/img/instagram/7.JPEG";
import banner8 from "../assets/img/instagram/8.JPEG";

const images = [
  {
    src: banner8,
    link: "https://www.instagram.com/p/CxNl5sqPtuo/?igsh=dXlvOHpqa3hiY3Vi",
  },
  {
    src: banner1,
    link: "https://www.instagram.com/p/C8_Zo5WvdVJ/?igsh=MW0wYWQ0bzIyeTRwNQ==",
  },
  {
    src: banner2,
    link: "https://www.instagram.com/p/C84B9Irv8Gl/?igsh=NjN5NnMwNm9icnNp",
  },
  {
    src: banner4,
    link: "https://www.instagram.com/reel/C6bAXaHurAs/?igsh=MWg4dnV0eHN3N3lkbg==",
  },
  {
    src: banner3,
    link: "https://www.instagram.com/p/C8JpW2XPDp9/?igsh=ZmVlanQxdHl5aXE2",
  },
  {
    src: banner5,
    link: "https://www.instagram.com/p/C68WSFFPl6s/?igsh=ZDNqczFyd2V1N3I=",
  },
  {
    src: banner6,
    link: "https://www.instagram.com/p/CySjw3gLZLN/?igsh=YjE5a2c0bmExZWh5",
  },
  {
    src: banner7,
    link: "https://www.instagram.com/p/C7llhPAP3-W/?igsh=Znd2ZW11azE5eXNt",
  },
];

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden border shadow-lg transform transition-all  duration-300 ease-in-out ${
              hoveredIndex === index ? "scale-105 z-10" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              opacity:
                hoveredIndex !== null && hoveredIndex !== index ? 0.5 : 1,
            }}
          >
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img
                src={image.src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </a>
            <div className="absolute inset-0 bg-black bg-opacity-0 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
