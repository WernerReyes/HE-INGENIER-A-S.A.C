import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { HeroSection } from "../section";

const sections = [
  {
    id: "home",
    name: "Inicio",
  },
  {
    id: "about",
    name: "Sobre Nosotros",
  },
  {
    id: "services",
    name: "Nuestros Servicios",
  },

  {
    id: "contact",
    name: "Contáctanos",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollPosition = window.scrollY + 200;
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = section.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="home" className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80"
          alt="Electrical infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/75 to-primary/30"></div>
      </div>

      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-primary/80 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="HE Ingeniería" className="w-12 h-12" />
            <span className="text-2xl font-bold text-white">
              HE INGENIERÍA S.A.C.
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-white">
            {sections.map((section) => (
              <Link
                key={section.id}
                to={section.id}
                smooth={true}
                duration={500}
                className={`cursor-pointer transition font-semibold ${
                  activeSection === section.id
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-600"
                }`}
              >
                {section.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#0A2239]/90 absolute top-16 left-0 w-full p-6 text-white">
            {sections.map((section) => (
              <Link
                key={section.id}
                to={section.id}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className={`block py-3 text-lg font-medium transition ${
                  activeSection === section.id
                    ? "text-orange-400 font-semibold"
                    : "hover:text-orange-400"
                }`}
              >
                {section.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <HeroSection />
    </header>
  );
};

export default Header;
