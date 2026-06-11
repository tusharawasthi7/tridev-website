import logo from "../assets/logo.png";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "leadership",
      "projects",
      "services",
      "gallery",
      "contact",
    ];

    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const el = document.getElementById(id);

        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id: string) =>
    `hover:text-yellow-400 transition ${
      active === id ? "text-yellow-400 font-semibold" : ""
    }`;

  return (
    <nav className="fixed w-full z-50 bg-black/60 backdrop-blur-md text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

        {/* Logo */}
       <a href="#home" className="flex items-center">
  <img
    src={logo}
    alt="Tridev Technocrafts"
    className="h-24 w-auto"
  />
</a>  

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg items-center">

          <li>
            <a href="#home" className={linkClass("home")}>
              Home
            </a>
          </li>

          {/* About Dropdown */}
          <li className="relative group">

            <a
              href="#about"
              className={`${linkClass("about")} flex items-center gap-1`}
            >
              About
              <span className="text-xs">▼</span>
            </a>

            <div className="absolute top-full left-0 mt-2 w-52 bg-white text-black rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

              <a
                href="#leadership"
                className="block px-4 py-3 hover:bg-gray-100 rounded-xl"
              >
                Leadership Team
              </a>

            </div>

          </li>

          <li>
            <a href="#projects" className={linkClass("projects")}>
              Projects
            </a>
          </li>

          <li>
            <a href="#services" className={linkClass("services")}>
              Services
            </a>
          </li>

          <li>
            <a href="#gallery" className={linkClass("gallery")}>
              Gallery
            </a>
          </li>

          <li>
            <a href="#contact" className={linkClass("contact")}>
              Contact
            </a>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-4">

          <ul className="flex flex-col gap-4 text-lg">

            <li>
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="block"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="block"
              >
                About
              </a>

              <a
                href="#leadership"
                onClick={() => setIsOpen(false)}
                className="block pl-5 mt-1 text-sm text-gray-400"
              >
                ↳ Leadership Team
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="block"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#services"
                onClick={() => setIsOpen(false)}
                className="block"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#gallery"
                onClick={() => setIsOpen(false)}
                className="block"
              >
                Gallery
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block"
              >
                Contact
              </a>
            </li>

          </ul>

        </div>
      )}
    </nav>
  );
}