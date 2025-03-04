import { motion } from "framer-motion";
import { Image } from "./components/Image";

export const AboutUsSection = () => {
  return (
    <section id="about" className="bg-primary text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title Animation */}
        <motion.h2
          className="text-4xl font-bold underline underline-offset-8 decoration-secondary text-white mb-6 relative inline-block"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Sobre Nosotros
          <motion.span
            className="absolute left-0 bottom-0 w-full h-1 bg-secondary"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.h2>

        {/* Text Animation */}
        <motion.p
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          En{" "}
          <span className="text-secondary font-semibold">
            HE INGENIERÍA S.A.C.
          </span>{" "}
          nos especializamos en ingeniería y construcción de alta calidad.
          Contamos con un equipo altamente capacitado para llevar a cabo
          proyectos de infraestructura eléctrica, sistemas de protección a
          tierra y mantenimiento eléctrico.
        </motion.p>

        {/* Image Grid Animation */}
        <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
          <motion.div
            className="w-full"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            viewport={{ once: true }}
          >
            {/* Row 1 */}
            <div className="flex flex-col w-full mb-10 sm:flex-row">
              <Image
                severity="tertiary"
                src="https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3"
              />

              <Image
                severity="secondary"
                src="https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3"
              />
            </div>

            {/* Row 2 */}
            <div className="flex flex-col w-full mb-5 sm:flex-row">
              <Image
                severity="tertiary"
                src="https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3"
              />

              <Image
                severity="secondary"
                src="https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3"
              />

              <Image
                severity="tertiary"
                src="https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
