export default function Third() {
  return (
    <div className="h-screen w-full flex sm:flex-row items-center ml-36 justify-center  gap-10 py-12">
      <div className="w-1/2 ">
        <div className="flex flex-col  justify-start w-full max-w-2xl text-white">
          <h1 className="text-7xl font-extrabold text-blue-600 text-left mb-4">
            About Me
          </h1>
          <h2 className="text-[#FFDAB9] font-bold text-left mb-2">
            UnderGraduate in Computer Science Engineering <br />
            <span className="text-[#FFDAB9]">
              Delhi Technological University
            </span>
          </h2>
          <h2 className="max-w-xl text-left mb-6">
            I'm a full-stack web developer with a passion for 3D web, game
            development, and cybersecurity. I blend engineering precision with
            creative flair—building secure, scalable apps and solving complex
            problems through code and competitive programming.
          </h2>
          <div className="flex flex-row w-full gap-10 items-center mt-3 mb-6">
            <div className="text-2xl font-extrabold text-left">
              3+ <br />
              <span className="font-thin text-lg">projects built</span>
            </div>
            <div className="text-2xl font-extrabold text-left">
              500+ <br />
              <span className="font-thin text-lg">problems solved</span>
            </div>
            <div className="text-2xl font-extrabold text-left">
              1 <br />
              <span className="font-thin text-lg">internship done</span>
            </div>
          </div>
          <div className="flex flex-row gap-10 items-center  mt-3">
            <div className="text-md font-medium text-left">
              <span className="text-[#FFDAB9] font-black ">
                <a href="" target="__blank">
                  <span className="text-[#FFDAB9] font-black ">Codeforces</span>
                </a>
              </span>
              : 1169
            </div>
            <div className="text-md font-medium text-left">
              <span className="text-[#FFDAB9] font-black">
                <a href="" target="__blank">LeetCode</a>
              </span>
              : rating : 1700
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex  items-center">
        <h1 className="font-black text-white text-6xl">2d model</h1>
      </div>
    </div>
  );
}
