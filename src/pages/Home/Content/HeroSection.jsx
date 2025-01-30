import { motion } from "framer-motion";
import Person from "../../../assets/images/person.jpg";

export default function HeroSection() {
  return (
    <>
      {/* Hero Section Start */}
      <div className="w-full max-w-content mx-auto mt-16">
        <div className="flex flex-col items-center lg:flex-row-reverse lg:ml-16 overflow-hidden">
          {/* content1 */}
          <motion.section
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="w-full p-5"
          >
            <div
              className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 m-auto rounded-full shadow-xl bg-cover bg-center object-cover"
              style={{ backgroundImage: `url(${Person})` }}
            ></div>
          </motion.section>
          {/* content2 */}
          <motion.section
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="w-full p-5 overflow-x-hidden"
          >
            <h1 className="font-semibold font-heebo text-3xl text-center mb-5 lg:text-start lg:text-4xl xl:text-5xl text-dark">
              Hi, I am John, <br />
              Creative Technologist
            </h1>
            <p className="text-center font-heebo text-base font-extralight mb-5 lg:mb-7 m-auto max-w-[500px] text-dark lg:max-w-[530px] lg:text-start lg:m-0 lg:leading-relaxed lg:text-lg">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1 }}
              className="flex justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="px-8 py-3 rounded-sm bg-primary text-white mt-5 font-semibold text-xl font-heebo"
              >
                Donwload Resume
              </motion.button>
            </motion.div>
          </motion.section>
        </div>
      </div>
      {/* Hero Section End */}
    </>
  );
}
