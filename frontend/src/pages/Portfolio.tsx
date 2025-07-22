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
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
      {/* Desktop Sidenav - Hidden on mobile */}
      <div className="hidden lg:block fixed left-4 xl:left-10 w-12 max-h-screen z-[115] top-40 bottom-20 bg-red-400 rounded-full">
        <Sidenav />
      </div>

      {/* Header - Responsive positioning */}
      <div className="fixed w-full z-[110] h-15 top-5 rounded-full">
        <Header />
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[138] bg-black bg-opacity-50 lg:hidden"
            onClick={() => setShowMobileMenu(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed right-0 top-0 h-full w-80 bg-gray-900 border-l border-gray-700 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-white text-xl font-bold">Connect</h2>
                <button
                  onClick={() => setShowMobileMenu(false)}
                  className="text-white hover:text-red-400 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile Social Links */}
              <div className="space-y-4">
                {[
                  {
                    href: "https://www.linkedin.com/in/mrityunjay-jha-7b0436303/",
                    label: "LinkedIn",
                    src: "icons/sidebar_icons/linkedin.png",
                  },
                  {
                    href: "https://x.com/Mrityunjay2027",
                    label: "Twitter",
                    src: "icons/sidebar_icons/twitter.png",
                  },
                  {
                    href: "https://github.com/mrityunjay-jha117",
                    label: "Github",
                    src: "icons/sidebar_icons/github2.png",
                  },
                  {
                    href: "https://leetcode.com/u/Mrityunjay2005/",
                    label: "LeetCode",
                    src: "icons/sidebar_icons/leetcode.png",
                  },
                  {
                    href: "https://codeforces.com/profile/idk_the_answer",
                    label: "Codeforces",
                    src: "icons/sidebar_icons/codeforces.png",
                  },
                ].map(({ href, label, src }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <img
                      src={src}
                      alt={label}
                      className="w-8 h-8 object-contain"
                    />
                    <span className="text-white font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Floating Action Buttons */}
      <motion.div
        className="fixed bottom-6 sm:bottom-10 z-[105] w-15 h-auto flex flex-col gap-3 sm:gap-5 items-center justify-center right-4 sm:right-10"
        layout
      >
        {/* Mobile Menu Button - Only on mobile */}
        <motion.button
          layout
          onClick={() => setShowMobileMenu(true)}
          className="lg:hidden w-12 h-12 sm:w-15 sm:h-15 rounded-full text-white flex items-center justify-center bg-purple-500 hover:bg-purple-600 transition-colors cursor-pointer shadow-lg z-[105] relative"
          title="Social Links"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
        </motion.button>

        {/* Scroll to Top Button */}
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
              className="w-12 h-12 sm:w-15 sm:h-15 rounded-full text-white flex items-center justify-center bg-blue-500 hover:bg-blue-600 transition-colors cursor-pointer shadow-lg z-[105] relative"
              title="Scroll to Top"
            >
              ^^
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
          className="w-12 hidden sm:block h-12 sm:w-15 sm:h-15 rounded-full text-white flex items-center justify-center bg-white hover:bg-blue-500 transition-colors cursor-pointer shadow-lg z-[105] relative"
          title="Open 3D Game"
        >
          <img src="assets/console.png" alt="no horo tere se" className="h-full w-full p-1 object-cover" />
        </motion.button>
      </motion.div>

      <div className="w-full flex flex-col gap-0 justify-center items-center ">
        <First />
        <Third />
        <Second />
        <ThreeDMarqueeDemo />
        <Sixth />
      </div>
    </div>
  );
}
