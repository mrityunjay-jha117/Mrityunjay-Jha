import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import First from "./heroSection";
import Second from "./Projects";
import Third from "./about";
import Sixth from "./contactMe";
import Header from "../dashboard/header";
import Sidenav from "../dashboard/sidenav";
import ThreeDMarqueeDemo from "./skills";

export default function Portfolio() {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll detection - listen to the actual scrolling container
  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      setShowScrollTop(target.scrollTop > 300);
    };

    const scrollContainer = document.querySelector(".overflow-y-auto");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const openGame = () => {
    navigate("/game");
  };

  const scrollToTop = () => {
    const scrollContainer = document.querySelector(
      ".overflow-y-auto"
    ) as HTMLElement;
    if (scrollContainer) {
      scrollContainer.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative bg-gray-900 w-full h-screen overflow-x-hidden scrollbar-hide overflow-y-auto">
      <div className="fixed left-10 w-12 max-h-screen z-10 top-40 bottom-20 bg-red-400 rounded-full">
        <Sidenav />
      </div>
      <div className="fixed left-10 z-10 w-full h-15  top-5 rounded-full">
        <Header />
      </div>
      <motion.div
        className="fixed bottom-10 w-15 h-35 flex flex-col gap-5 items-center justify-center right-10 z-10"
        layout
      >
        {/* Animated Scroll to Top Button */}
        <AnimatePresence mode="wait">
          {showScrollTop && (
            <motion.button
              layout
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 20 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                duration: 0.5,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="w-15 h-15 rounded-full text-white flex items-center justify-center bg-blue-500 hover:bg-blue-600 transition-colors cursor-pointer shadow-lg"
              title="Scroll to Top"
            >
              ⬆️
            </motion.button>
          )}
        </AnimatePresence>

        {/* Game Button */}
        <motion.button
          layout
          transition={{
            layout: {
              type: "spring",
              stiffness: 300,
              damping: 25,
            },
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={openGame}
          className="w-15 h-15 rounded-full text-white flex items-center justify-center bg-red-400 hover:bg-red-500 transition-colors cursor-pointer shadow-lg"
          title="Open 3D Game"
        >
          🎮
        </motion.button>
      </motion.div>

      <div className="w-full flex flex-col ">
        <First />
        <Third />
        <Second />
        <ThreeDMarqueeDemo />
        <Sixth />
      </div>
    </div>
  );
}
