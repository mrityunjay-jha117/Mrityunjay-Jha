export default function Sixth() {
  return (
    <div
      id="contact-section"
      className="min-h-screen mx-36 mb-10 rounded-4xl overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Left side - Contact Info */}
        <div className="w-full lg:w-1/2 flex flex-col mx-30 justify-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black ">Let's Connect</h1>
            <div className="w-1/3 h-1 bg-red-400 rounded-full"></div>
          </div>

          <p className="text-lg text-gray-300 max-w-md">
            Have a project in mind? Want to collaborate? I'm always open to
            discussing new opportunities and creative ideas.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <a
                href="mailto:mrityunjayjha117@gmail.com"
                className="text-gray-300 hover:text-red-400 transition-colors"
              >
                mrityunjayjha117@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-gray-300">New Delhi, India</span>
            </div>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="w-full h-8/10 my-auto lg:w-1/2 mr-10 mt-8 lg:mt-0">
          <div className="relative">
            {/* Highlight accent */}
            <div className="absolute -inset-1 rounded-2xl opacity-30"></div>

            {/* Form container */}
            <div className="relative bg-gray-900 rounded-xl border border-gray-800 shadow-xl p-8">
              <h3 className="text-3xl font-black mb-2">Send me a message</h3>

              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm text-gray-400 block mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm text-gray-400 block mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm text-gray-400 block mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="I'd like to talk about..."
                    rows={5}
                    className="w-full bg-gray-800 border text-sm border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
