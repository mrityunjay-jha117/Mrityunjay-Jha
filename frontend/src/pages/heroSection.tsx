import RapierPhysics from "./components/rapier";

export default function First() {
  return (
    <div
      id="home-section"
      className="h-full w-full mx-auto text-white flex flex-row items-center justify-center"
    >
      
      {/* Physics layer above hero content but below UI elements */}
      <div className="hidden sm:block absolute inset-0 z-30">
        <RapierPhysics />
      </div>
      {/* Content below physics layer - Centered container */}
      <div className="flex flex-col my-30 w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36  ">
        <div className="max-w-sm mx-auto sm:mx-0 sm:max-w-md md:max-w-lg lg:max-w-4xl w-full text-center lg:text-left lg:w-3/5">
          {/* Main heading with consistent sizing */}
          <h1 className="text-md sm:text-2xl md:text-3xl text-blue-500 font-bold mb-3 sm:mb-4 lg:mb-6 text-center lg:text-left">
            --FULL STACK WEB DEVELOPER
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-blue-500 font-black block mt-2 sm:mt-3">
              MRITYUNJAY JHA
            </span>
          </h1>

          {/* Description with better responsive sizing */}
          <p className="w-full lg:w-4/5 text-sm lg:text-lg sm:mb-6 lg:mb-8 leading-relaxed text-center lg:text-left ">
            Full-stack developer by day, 3D web creator by passion.{" "}
            <span className="block sm:inline mt-1 sm:mt-0">
              I build robust APIs and craft interactive visuals that elevate
              digital experiences.
            </span>
          </p>

          {/* Location with better sizing */}
          <h2 className="text-sm sm:text-base md:text-lg font-medium sm:mb-8 lg:mb-10 text-center lg:text-left tracking-wider">
            NEW DELHI | INDIA
          </h2>

          {/* Buttons with improved layout and sizing */}
          <div className="flex h-8 sm:h-10 flex-row relative w-4/5 mx-auto sm:mr-auto sm:ml-0 z-[100] justify-center lg:justify-start items-center gap-3 sm:gap-6 mt-5 ">
            <a
              href="https://drive.google.com/file/d/1pszshrx1FGB3yUIYwUOMrDXJEaye1Mpl/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full sm:rounded-xl sm:w-36 md:w-40 lg:w-44 h-9 h-full z-[25] relative cursor-pointer bg-red-500 hover:bg-red-600 transition-all duration-300 flex items-center justify-center text-white no-underline text-sm  hover:scale-105 shadow-lg"
            >
              VIEW RESUME
            </a>
            <a
              href="https://drive.google.com/file/d/1pszshrx1FGB3yUIYwUOMrDXJEaye1Mpl/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full sm:rounded-xl sm:w-36 md:w-40 lg:w-44 h-9 h-full z-[25] relative cursor-pointer bg-blue-500 hover:bg-blue-600 transition-all duration-300 flex items-center justify-center text-white no-underline text-sm hover:scale-105 shadow-lg"
            >
              DOWNLOAD
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
