export default function Third() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 justify-center gap-6 sm:gap-8 lg:gap-10 py-8 sm:py-12">
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col justify-start w-full max-w-2xl text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-blue-600 text-left mb-3 sm:mb-4">
            About Me
          </h1>
          <h2 className="text-[#FFDAB9] font-bold text-left mb-2 text-sm sm:text-base lg:text-lg leading-relaxed">
            UnderGraduate in Computer Science Engineering <br />
            <span className="text-[#FFDAB9]">
              Delhi Technological University
            </span>
          </h2>
          <h2 className="max-w-xl text-left mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
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
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 items-start sm:items-center mt-3">
            <div className="text-sm sm:text-base font-medium text-left">
              <span className="text-[#FFDAB9] font-black">
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
              <span className="text-[#FFDAB9] font-black">
                <a
                  href="https://leetcode.com/mrityunjay-jha117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LeetCode
                </a>
              </span>
              : rating : 1700
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Placeholder for 3D model/image */}
      <div className="w-full lg:w-1/2 flex items-center justify-center mt-6 lg:mt-0">
        <div className="text-center p-8 sm:p-12 bg-gray-800 rounded-2xl border border-gray-700">
          <h1 className="font-black text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl opacity-50">
            3D Model
          </h1>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">Coming Soon</p>
        </div>
      </div>
    </div>
  );
}
