import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion";
function Card({ docs, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      className="relative w-56 h-64 rounded-[35px] bg-zinc-900/80 text-zinc-300 px-5 py-8 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="leading-tight mt-5 text-sm font-semibold">{docs.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between py-3 px-5 mb-3">
          <h5>{docs.filesize}</h5>
          {docs.close ? <IoClose /> : <LuDownload />}
        </div>
        {docs.tag.isOpen && (
          <div
            className={`tag flex items-center justify-center py-3 w-full  bg-${docs.tag.tagColor}-600`}
          >
            <h3 className="text-md">{docs.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
