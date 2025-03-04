import { cn } from "../../../lib/utils";
import { motion } from "framer-motion";

type Props = {
  src: string;
  severity?: "primary" | "secondary" | "tertiary";
};
export const Image = ({ src, severity = "primary" }: Props) => {
  return (
    <motion.div
      className="w-full mb-10 sm:mb-0 sm:w-1/2 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="relative h-full ml-0 mr-0 sm:mr-10">
        <span
          className={cn(
            "absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg",
            severity === "tertiary" && "bg-tertiary",
            severity === "secondary" && "bg-secondary",
            severity === "primary" && "bg-primary"
          )}
        />
        <div
          className={cn(
            "relative h-full p-1 bg-primary border-2 rounded-lg",
            severity === "tertiary" && "border-tertiary",
            severity === "secondary" && "border-secondary",
            severity === "primary" && "border-primary"
          )}
        >
          <img src={src} />
        </div>
      </div>
    </motion.div>
  );
};
