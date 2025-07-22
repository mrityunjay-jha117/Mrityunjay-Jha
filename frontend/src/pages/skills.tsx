import { ThreeDMarquee } from "@/pages/components/3d-marquee";
import { useState, useEffect } from "react";

export default function ThreeDMarqueeDemo() {
  const [columns, setColumns] = useState(5);

  useEffect(() => {
    const updateColumns = () => {
      setColumns(5);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);
  const images = [
    "icons/1.png",
    "icons/2.png",
    "icons/3.png",
    "icons/4.png",
    "icons/5.png",
    "icons/6.png",
    "icons/7.png",
    "icons/8.png",
    "icons/9.png",
    "icons/10.png",
    "icons/11.png",
    "icons/12.png",
    "icons/13.png",
    "icons/14.webp",
    "icons/15.webp",
    "icons/1.png",
    "icons/2.png",
    "icons/3.png",
    "icons/4.png",
    "icons/5.png",
    "icons/6.png",
    "icons/7.png",
    "icons/8.png",
    "icons/9.png",
    "icons/10.png",
    "icons/11.png",
    "icons/12.png",
    "icons/13.png",
    "icons/14.webp",
    "icons/15.webp",
  ];
  return (
    <div
      id="skills-section"
      className="relative mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-36 mb-6 sm:mb-10 overflow-hidden flex flex-col items-center justify-center py-8 sm:py-12"
    >
      <div className="text-white font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-6 sm:mb-8 lg:mb-10 z-0 text-center">
        SKILLS
      </div>
      <div className="rounded-2xl sm:rounded-3xl lg:rounded-4xl border-t-4 sm:border-t-6 lg:border-t-10 border-b-4 sm:border-b-6 lg:border-b-10 overflow-hidden h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] w-full">
        <ThreeDMarquee columns={columns} images={images} />
      </div>
    </div>
  );
}
