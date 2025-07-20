import { motion } from "framer-motion";
export default function Second() {
  return (
    <div
      id="projects-section"
      className="flex flex-col items-center justify-center w-4/5 mx-auto h-screen "
    >
      <h1 className="text-3xl text-white sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight">
        PROJECTS
      </h1>
      <section className="px-4 w-full sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20 lg:py-24">
        <motion.div
          className="w-full mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-12 lg:gap-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full flex gap-4 sm:gap-6 flex-row justify-around items-center">
            {[1, 2, 3, 4, 5].map((_, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 * idx }}
                className={`relative rounded-4xl bg-white h-40 ${
                  [
                    "scale-90",
                    "scale-100",
                    "scale-110",
                    "scale-100",
                    "scale-90",
                  ][idx]
                } sm:h-52 md:h-64 lg:h-100 w-1/3  shadow-2xl`}
              >
                <video
                  className="rounded-4xl border-2 border-blue-600 w-full h-full object-cover"
                  src={`/gif/${idx+1}.webm`}
                  autoPlay
                  muted
                  loop
                />
                <div className="absolute flex  flex-col justify-end gap-4 bottom-4 right-4 h-26">
                  <button className="w-13 h-13 rounded-xl bg-red-400">G</button>
                  <button className="w-13 h-13 rounded-xl bg-red-400">G</button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
