import { motion } from "framer-motion";
import avatar from "../../assets/images/avatar.jpg";

export const Avatar = () => {
  return (
    <motion.div
      className="flex-1 relative"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 3, ease: "easeOut" }}
    >
      <div
        className="aspect-[3/4] w-full max-w-lg overflow-hidden rounded-3xl sm:max-w-3xl lg:max-w-none"
        style={{
          clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <img
          src={avatar}
          alt="Gonçalo Mendes web developer"
          className="w-full object-cover object-center text-center"
        />
      </div>
    </motion.div>
  );
};

export default Avatar;
