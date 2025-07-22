import { motion } from "framer-motion";

export default function Second() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 justify-center gap-6 sm:gap-8 lg:gap-10 py-8 sm:py-12">
      <div
        id="projects-section"
        className="flex flex-col items-center justify-center w-full "
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white font-extrabold tracking-tight mb-8 sm:mb-12">
          PROJECTS
        </h1>
        <section className="px-2 sm:px-4 w-full py-6 sm:py-8 md:py-12 lg:py-16">
          <motion.div
            className="w-full mx-auto flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            {/* Mobile: Stack vertically, Desktop: Row layout with proper spacing */}
            <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center">
              {[1, 2, 3, 4, 5].map((_, idx) => {
                // Calculate distance from center (index 2)
                const centerIndex = 2;
                const distanceFromCenter = Math.abs(idx - centerIndex);

                // Size classes based on distance from center
                const getSizeClasses = (distance: number) => {
                  switch (distance) {
                    case 0: // Center card (largest)
                      return "w-full sm:w-1/4 h-40 sm:h-48 md:h-56 lg:h-80 xl:h-96";
                    case 1: // Adjacent cards (medium)
                      return "w-full sm:w-1/5 h-36 sm:h-44 md:h-52 lg:h-72 xl:h-88";
                    case 2: // Outer cards (smallest)
                      return "w-full sm:w-1/6 h-32 sm:h-40 md:h-48 lg:h-64 xl:h-80";
                    default:
                      return "w-full sm:w-1/6 h-32 sm:h-40 md:h-48 lg:h-64 xl:h-80";
                  }
                };

                return (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.1 * idx }}
                    className={`relative rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-white shadow-xl ${getSizeClasses(
                      distanceFromCenter
                    )}`}
                  >
                    <video
                      className="rounded-2xl sm:rounded-3xl lg:rounded-4xl border-2 border-blue-600 w-full h-full object-cover"
                      src={`/gif/${idx + 1}.webm`}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                    <div className="absolute flex flex-row sm:flex-col justify-end gap-2 sm:gap-3 lg:gap-4 bottom-2 sm:bottom-3 lg:bottom-4 right-2 sm:right-3 lg:right-4">
                      <button className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-13 xl:h-13 rounded-lg sm:rounded-xl bg-red-400 hover:bg-red-500 transition-colors text-white text-xs sm:text-sm lg:text-base font-bold">
                        G
                      </button>
                      <button className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-13 xl:h-13 rounded-lg sm:rounded-xl bg-blue-400 hover:bg-blue-500 transition-colors text-white text-xs sm:text-sm lg:text-base font-bold">
                        L
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
