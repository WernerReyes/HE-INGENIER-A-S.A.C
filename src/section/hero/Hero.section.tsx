import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";
import { Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-6"
    >
      {/* Typing Effect for Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        <ReactTyped
          strings={[
            "Ingeniería y Construcción de Alta Calidad",
            "Expertos en Sistemas Eléctricos",
            "Construcción y Mantenimiento Industrial",
          ]}
          typeSpeed={50} // Speed of typing
          backSpeed={30} // Speed of deleting
          loop
        />
      </h1>

      {/* Paragraph Animation */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        className="text-xl text-gray-200 mb-8 max-w-2xl"
      >
        Experiencia en proyectos de infraestructura eléctrica, sistemas de
        protección a tierra y mantenimiento eléctrico.
      </motion.p>

      {/* Button Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
      >
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-8 py-3 rounded-md font-semibold transition transform hover:scale-105 duration-200 flex items-center space-x-2"
        >
          <Mail size={20} />
          <span>Contáctanos</span>
        </Link>
      </motion.div>
    </motion.div>
  );
};
