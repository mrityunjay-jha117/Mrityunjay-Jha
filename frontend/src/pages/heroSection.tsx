import RapierPhysics from "./components/rapier";

export default function First() {
  return (
    <div
      id="home-section"
      className="relative h-screen w-full text-white flex lg:flex-row flex-col items-stretch"
    >
      {/* Physics layer visually on top but doesn't block clicks */}
      <div className="absolute inset-0 z-5 ">
        <RapierPhysics />
      </div>

      {/* Content fully above physics layer */}
      <div className="absolute overflow-hidden inset-y-0 left-0 ml-36 flex-1 flex flex-col justify-center py-12 w-full sm:w-3/5">
        <h1 className="text-lg lg:text-2xl text-blue-600 font-bold mb-2">
          --FULL STACK WEB DEVELOPER <br />
          <span className="text-4xl lg:text-7xl text-blue-500 font-black block">
            MRITYUNJAY JHA
          </span>
        </h1>
        <p className="max-w-lg text-base  lg:text-lg mb-2">
          Full-stack developer by day, 3D web creator by passion <br />I build
          robust APIs and craft interactive visuals that elevate digital
          experiences.
        </p>
        <h2 className="text-md font-bold lg:text-sm mb-4">NEW DELHI | INDIA</h2>

        <div className="gap-3  flex flex-col sm:flex-row mb-4">
          <a
            href="https://drive.google.com/file/d/1pszshrx1FGB3yUIYwUOMrDXJEaye1Mpl/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="w-32 h-10 z-100 cursor-pointer bg-red-400 rounded-lg font-semibold mb-2 sm:mb-0 hover:bg-red-500 transition-colors flex items-center justify-center text-white no-underline"
          >
            RESUME
          </a>
            <button
            onClick={() => {
              const contactSection = document.getElementById("contact-section");
              if (contactSection) {
              contactSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
              }
            }}
            className="w-32 h-10 z-100 cursor-pointer border-2 border-white rounded-lg font-semibold hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-colors duration-1000"
            >
            Let's Talk
            </button>
        </div>
      </div>
    </div>
  );
}
