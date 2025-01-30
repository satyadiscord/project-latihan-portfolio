// import icon from react icons
import { CgMail } from "react-icons/cg"; //gmail
import { IoLocationOutline } from "react-icons/io5"; //location
import { TbNetwork } from "react-icons/tb"; //network
import { MdOutlinePhoneEnabled } from "react-icons/md"; //phone
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <div className="w-full max-w-[1070px] mx-auto mt-16">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="pl-2 text-2xl md:text-3xl font-heebo font-semibold text-dark tracking-[2px] mb-10"
        >
          Contact
        </motion.h1>

        <div className="px-2">
          <section className="flex flex-col gap-y-10">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-x-2 items-center border-b border-b-dark py-3"
            >
              {/* Alamat Email */}
              <CgMail className="text-4xl" />
              <h1 className="text-lg font-heebo text-dark font-normal">
                K8TbD@example.com
              </h1>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-x-2 items-center border-b border-b-dark py-3"
            >
              {/* Alamat Email */}
              <IoLocationOutline className="text-4xl" />
              <h1 className="text-lg font-heebo text-dark font-normal">
                Jakarta, Indonesia
              </h1>
            </motion.div>
            {/* Website Url */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex gap-x-2 items-center border-b border-b-dark py-3"
            >
              <TbNetwork className="text-4xl" />
              <h1 className="text-lg font-heebo text-dark font-normal">
                www.figma.com
              </h1>
            </motion.div>

            {/* Nomber Telpon */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex gap-x-2 items-center border-b border-b-dark py-3"
            >
              <MdOutlinePhoneEnabled className="text-4xl" />
              <h1 className="text-lg font-heebo text-dark font-normal">
                +628123456789
              </h1>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
}
