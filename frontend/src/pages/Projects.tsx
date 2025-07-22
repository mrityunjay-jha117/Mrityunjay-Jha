import { motion } from "framer-motion";
import { useMemo, useCallback } from "react";

export default function Second() {
  // Memoize size calculation function to prevent re-creation
  const getSizeClasses = useCallback((distance: number) => {
    switch (distance) {
      case 0: // Center card (largest)
        return "w-full sm:w-1/4 h-48 sm:h-44 md:h-52 lg:h-72 xl:h-88"; // Increased mobile height from h-36 to h-48
      case 1: // Adjacent cards (medium)
        return "w-full sm:w-1/5 h-44 sm:h-40 md:h-48 lg:h-64 xl:h-80"; // Increased mobile height from h-32 to h-44
      case 2: // Outer cards (smallest)
        return "w-full sm:w-1/6 h-40 sm:h-36 md:h-44 lg:h-56 xl:h-72"; // Increased mobile height from h-28 to h-40
      default:
        return "w-full sm:w-1/6 h-40 sm:h-36 md:h-44 lg:h-56 xl:h-72"; // Increased mobile height from h-28 to h-40
    }
  }, []);

  // Memoize card data to prevent recalculation
  const cardData = useMemo(() => {
    const centerIndex = 2;
    return [1, 2, 3, 4, 5].map((_, idx) => ({
      id: idx,
      distanceFromCenter: Math.abs(idx - centerIndex),
      sizeClass: getSizeClasses(Math.abs(idx - centerIndex)),
      delay: 0.08 * idx, // Reduced delay for faster animations
      isComingSoon: idx === 4, // Last card is "coming soon"
    }));
  }, [getSizeClasses]);

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 justify-center gap-6 sm:gap-8 lg:gap-10 py-8 sm:py-12">
      <div
        id="projects-section"
        className="flex flex-col items-center justify-center w-full "
      >
        <h1 className="text-3xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-blue-500 font-extrabold tracking-tight mb-8 sm:mb-12 text-center">
          PROJECTS
        </h1>
        <section className="px-2 sm:px-4 w-full py-6 sm:py-8 md:py-12 lg:py-16">
          <motion.div
            className="w-full mx-auto flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: 20 }} // Reduced movement
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} // Reduced threshold
            transition={{ duration: 0.6 }} // Faster duration
          >
            {/* Optimized card layout */}
            <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center">
              {" "}
              {/* Reduced gaps */}
              {cardData.map((card) => (
                <motion.div
                  key={card.id}
                  initial={{ scale: 0.95, opacity: 0 }} // Less dramatic initial state
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.4, // Faster duration
                    delay: card.delay,
                    ease: "easeOut", // Simpler easing
                  }}
                  className={`relative rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white shadow-lg will-change-transform transform-gpu ${
                    card.sizeClass
                  } ${card.isComingSoon ? "hidden sm:flex" : ""}`} // Hide coming soon card on mobile
                  style={{ backfaceVisibility: "hidden" }} // Performance optimization
                >
                  {card.isComingSoon ? (
                    // Coming Soon card content
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl lg:rounded-3xl border-2 border-gray-600">
                      <div className="text-center p-4">
                        <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-2">
                          More Projects
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-base">
                          Coming Soon
                        </p>
                        <div className="mt-3 text-blue-500">
                          <svg
                            className="w-8 h-8 mx-auto animate-pulse"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Regular video card content
                    <>
                      <video
                        className="rounded-xl sm:rounded-2xl lg:rounded-3xl border-2 border-blue-600 w-full h-full object-cover"
                        src={`/gif/${card.id + 1}.webm`}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        style={{ willChange: "auto" }} // Remove unnecessary willChange
                      />
                      <div className="absolute flex flex-col sm:flex-row justify-end gap-2 sm:gap-2 lg:gap-3 bottom-3 sm:bottom-3 lg:bottom-4 right-3 sm:right-3 lg:right-4">
                        <button className="w-12 h-12 sm:w-11 sm:h-11 lg:w-13 lg:h-13 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-colors duration-200 text-white font-bold shadow-md hover:shadow-lg transform hover:scale-105 flex items-center justify-center">
                          <svg
                            className="w-5 h-5 sm:w-5 sm:h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        <button className="w-12 h-12 sm:w-11 sm:h-11 lg:w-13 lg:h-13 rounded-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition-colors duration-200 text-white font-bold shadow-md hover:shadow-lg transform hover:scale-105 flex items-center justify-center">
                          <svg
                            className="w-5 h-5 sm:w-5 sm:h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </button>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
