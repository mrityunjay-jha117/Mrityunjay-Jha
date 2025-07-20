import { ThreeDMarquee } from "@/pages/components/3d-marquee";

export default function ThreeDMarqueeDemo() {
  // const images = [
  //   "particles/1.png",
  //   "particles/2.png",
  //   "particles/3.png",
  //   "particles/4.png",
  //   "particles/5.png",
  //   "particles/6.png",
  //   "particles/7.png",
  //   "particles/8.png",
  //   "particles/9.png",
  //   "particles/10.png",
  //   "particles/1.png",
  //   "particles/2.png",
  //   "particles/3.png",
  //   "particles/4.png",
  //   "particles/5.png",
  //   "particles/6.png",
  //   "particles/7.png",
  //   "particles/8.png",
  //   "particles/9.png",
  //   "particles/10.png",
  //   "particles/1.png",
  //   "particles/2.png",
  //   "particles/3.png",
  //   "particles/4.png",
  //   "particles/5.png",
  //   "particles/6.png",
  //   "particles/7.png",
  //   "particles/8.png",
  //   "particles/9.png",
  //   "particles/10.png",
  // ];
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
      className="relative  mx-36 mb-10 overflow-hidden flex flex-col items-center justify-center"
    >
      <div className=" text-white font-black text-8xl mb-10 z-0 ">SKILLS</div>
      <div className=" rounded-4xl border-t-10 border-b-10 overflow-hidden h-[80vh] w-full">
        <ThreeDMarquee columns={5} images={images} />
      </div>
    </div>
  );
}
