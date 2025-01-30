import { motion } from "framer-motion";
import useInViewAnimation from "../../../hooks/useInViewAnimation";

export default function RecentPost() {
  const { ref, inView } = useInViewAnimation();

  return (
    <>
      {/* Recent Post Start */}
      <section className="w-full bg-cyan-50 mt-16 p-4">
        <div ref={ref} className="w-full max-w-content mx-auto overflow-hidden">
          <motion.h4
            initial={{ opacity: 0, y: -100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center text-[18px] lg:text-start py-10 font-medium font-heebo lg:ml-2 xl:ml-16"
          >
            Recent posts
          </motion.h4>

          {/* created card */}
          <div className="flex justify-center items-center flex-col md:flex-row gap-y-10 md:gap-x-10 lg:mr-10">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full lg:w-[500px] bg-white rounded-md p-3"
            >
              {/* title */}
              <h1 className="text-dark text-xl font-bold font-heebo mb-3 max-w-80">
                Making a design system from scratch
              </h1>
              {/* date | yang sudah dilaksanakan */}
              <h3 className="mb-5 text-dark text-base font-normal font-heebo">
                12 Feb 2020 | Design, Pattern
              </h3>
              {/* description */}
              <p className="font-heebo text-base font-extralight leading-relaxed max-w-[500px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full lg:w-[500px] bg-white rounded-md p-3"
            >
              {/* title */}
              <h1 className="text-dark text-xl font-bold font-heebo mb-3 max-w-80">
                Making a design system from scratch
              </h1>
              {/* date | yang sudah dilaksanakan */}
              <h3 className="mb-5 text-dark text-base font-normal font-heebo">
                12 Feb 2020 | Design, Pattern
              </h3>
              {/* description */}
              <p className="font-heebo text-base font-extralight leading-relaxed max-w-[500px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Recent Post End */}
    </>
  );
}
