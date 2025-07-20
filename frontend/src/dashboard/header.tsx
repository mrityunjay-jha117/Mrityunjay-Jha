export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="w-4/7 mr-30 bg-black h-14 ml-auto items-center justify-center flex rounded-full px-20 ">
      <div className="container mx-auto flex items-center justify-end pr-10">
        {/* Right side - Navigation menu */}
        <nav>
          <ul className="flex space-x-6 text-white">
            <li>
              <button
                onClick={() => scrollToSection("skills-section")}
                className="hover:text-red-400 transition-colors cursor-pointer font-medium"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects-section")}
                className="hover:text-red-400 transition-colors cursor-pointer font-medium"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact-section")}
                className="hover:text-red-400 transition-colors cursor-pointer font-medium"
              >
                Contact Me
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
