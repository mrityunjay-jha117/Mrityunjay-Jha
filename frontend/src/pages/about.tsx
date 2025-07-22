export default function Third() {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 justify-center gap-6 sm:gap-8 lg:gap-10 py-8 sm:py-12">
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-none lg:w-1/2">
        <div className="flex flex-col justify-center items-center lg:items-start w-full text-white">
          <h1 className="text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-blue-500 text-center lg:text-left mb-3 sm:mb-4">
            About Me
          </h1>
          <h2 className="text-red-400 font-bold text-center lg:text-left mb-2 text-base sm:text-lg lg:text-xl leading-relaxed">
            UnderGraduate in Computer Science Engineering <br />
            <span className="text-red-400">Delhi Technological University</span>
          </h2>
          <h2 className="w-full lg:max-w-xl text-center lg:text-left mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
            I'm a full-stack web developer with a passion for 3D web, game
            development, and cybersecurity. I blend engineering precision with
            creative flair—building secure, scalable apps and solving complex
            problems through code and competitive programming.
          </h2>

          {/* Stats Section - Responsive Flex */}
          <div className="flex flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 mt-3 mb-4 sm:mb-6">
            <div className="text-xl sm:text-2xl font-extrabold text-center">
              3+ <br />
              <span className="font-thin text-sm sm:text-base lg:text-lg">
                projects built
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-center">
              500+ <br />
              <span className="font-thin text-sm sm:text-base lg:text-lg">
                problems solved
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-center">
              1 <br />
              <span className="font-thin text-sm sm:text-base lg:text-lg">
                internship done
              </span>
            </div>
          </div>

          {/* Coding Profiles - Responsive Layout */}
          <div className="flex flex-row gap-4 sm:gap-6 lg:gap-10 items-start sm:items-center mt-3">
            <div className="text-sm sm:text-base font-medium text-left">
              <span className="text-red-400 font-black">
                <a
                  href="https://codeforces.com/profile/mrityunjay-jha117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Codeforces
                </a>
              </span>
              : 1169
            </div>
            <div className="text-sm sm:text-base font-medium text-left">
              <span className="text-red-400 font-black">
                <a
                  href="https://leetcode.com/mrityunjay-jha117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LeetCode
                </a>
              </span>
              : 1700
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Placeholder for 3D model/image */}
      <div className="hidden sm:block w-full lg:w-1/2 flex items-center justify-center mt-6 lg:mt-0">
        <div className="text-center p-8 sm:p-12 bg-gray-800 rounded-2xl border border-gray-700">
          <h1 className="font-black text-blue-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl opacity-50">
            3D Model
          </h1>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">Coming Soon</p>
        </div>
      </div>
    </div>
  );
}
