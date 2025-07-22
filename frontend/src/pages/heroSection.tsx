import RapierPhysics from "./components/rapier";

export default function First() {
  return (
    <div
      id="home-section"
      className="relative h-screen w-full text-white flex lg:flex-row flex-col items-stretch"
    >
      {/* Physics layer visually on top but doesn't block clicks */}
      <div className="hidden sm:block absolute inset-0 z-20 ">
        <RapierPhysics />
      </div>

      {/* Content fully above physics layer */}
      <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-8 sm:py-12">
        <div className="max-w-4xl w-full lg:w-3/5">
          <h1 className="text-md sm:text-base md:text-lg lg:text-xl xl:text-2xl text-blue-600 font-bold mb-2 sm:mb-3 lg:mb-4">
            --FULL STACK WEB DEVELOPER <br />
            <span className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-blue-500 font-black block mt-1 sm:mt-2">
              MRITYUNJAY JHA
            </span>
          </h1>
          <p className="w-3/4 text-xs sm:text-base lg:text-lg xl:text-xl mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
            Full-stack developer by day, 3D web creator by passion.{" "}
            <span>
              I build robust APIs and craft interactive visuals that elevate
              digital experiences.
            </span>
          </p>
          <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-4 sm:mb-6 lg:mb-8">
            NEW DELHI | INDIA
          </h2>

          <div className="flex flex-row gap-3 sm:gap-4">
            <a
              href="https://drive.google.com/file/d/1pszshrx1FGB3yUIYwUOMrDXJEaye1Mpl/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="w-32 md:w-36 lg:w-40 h-10 sm:h-11 md:h-12 z-100 cursor-pointer bg-red-400 rounded-lg font-semibold hover:bg-red-500 transition-colors flex items-center justify-center text-white no-underline text-sm sm:text-base"
            >
              RESUME
            </a>
            <a
              href="https://drive.google.com/file/d/1pszshrx1FGB3yUIYwUOMrDXJEaye1Mpl/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="w-32 md:w-36 lg:w-40 h-10 sm:h-11 md:h-12 z-100 cursor-pointer bg-blue-500 rounded-lg font-semibold hover:bg-blue-400 transition-colors flex items-center justify-center text-white no-underline text-sm sm:text-base"
            >
              RESUME
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
