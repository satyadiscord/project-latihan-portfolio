import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import useInViewAnimation from "../../../hooks/useInViewAnimation";
import image1 from "../../../assets/images/image1.jpg";
import image2 from "../../../assets/images/image2.jpg";
import image3 from "../../../assets/images/image3.jpg";

// function useInView
function useInView(ref) {
  const animation = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animation.start("animate");
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [animation, ref]);

  return animation;
}

export default function Feature() {
  const { ref, inView } = useInViewAnimation();

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const anim1 = useInView(ref1);
  const anim2 = useInView(ref2);
  const anim3 = useInView(ref3);

  const datangArahKanan = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 5 },
  };

  const datangArahKiri = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 5 },
  };

  return (
    <>
      <div className="w-full max-w-content mx-auto mt-16">
        <div className="flex justify-center flex-col overflow-hidden">
          <motion.h4
            ref={ref}
            initial={{ opacity: 0, y: -100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center text-[18px] lg:text-start py-10 font-medium font-heebo lg:ml-8 xl:ml-16"
          >
            Featured works
          </motion.h4>

          {/* created card */}
          <div>
            <div className="flex flex-col justify-around lg:flex-row mx-4 gap-y-8 lg:gap-y-28 lg:gap-x-16 flex-wrap">
              {/* content pertama */}
              <motion.div
                ref={ref1}
                initial="initial"
                animate={anim1}
                variants={datangArahKanan}
                transition="transition"
              >
                {/* image */}
                <div className="w-full h-72 mx-auto">
                  <img
                    src={image1}
                    alt="Image"
                    className="w-full h-full bg-cover bg-center object-cover overflow-hidden rounded-lg"
                  />
                </div>
              </motion.div>
              <motion.div
                ref={ref1}
                initial="initial"
                animate={anim1}
                variants={datangArahKanan}
                transition="transition"
              >
                {/* content */}
                <h1 className="font-heebo text-dark text-xl font-bold my-4">
                  Designing Dashboards
                </h1>
                {/* button 2020 */}
                <h5 className="text-light font-heebo my-6">
                  {" "}
                  <span className="bg-dark text-white text-lg rounded-full py-1 px-5 mr-4">
                    2020
                  </span>{" "}
                  Dashboard
                </h5>
                <p className="font-heebo text-base font-extralight leading-relaxed max-w-[500px]">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </motion.div>
              <div className="w-full h-[1px] bg-light" />

              {/* content kedua */}
              <motion.div
                ref={ref2}
                initial="initial"
                animate={anim2}
                variants={datangArahKiri}
              >
                {/* image */}
                <div className="w-full h-72 mx-auto hidden lg:block">
                  <img
                    src={image2}
                    alt="Image"
                    className="w-full h-full bg-cover bg-center object-cover overflow-hidden rounded-lg"
                  />
                </div>
              </motion.div>
              <motion.div
                ref={ref2}
                initial="initial"
                animate={anim2}
                variants={datangArahKiri}
                transition="transition"
                className="hidden lg:block"
              >
                {/* content */}
                <h1 className="font-heebo text-dark text-xl font-bold my-4">
                  Vibrant Portraits of 2020
                </h1>
                {/* button 2020 */}
                <h5 className="text-light font-heebo my-6">
                  {" "}
                  <span className="bg-dark text-white text-lg rounded-full py-1 px-5 mr-4">
                    2018
                  </span>{" "}
                  Illustration
                </h5>
                <p className="font-heebo text-base font-extralight leading-relaxed max-w-[500px]">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </motion.div>
              <div className="w-full h-[1px] bg-light hidden lg:block" />

              {/* content terakhir */}
              <motion.div
                ref={ref3}
                initial="initial"
                animate={anim3}
                variants={datangArahKanan}
              >
                {/* image */}
                <div className="w-full h-72 mx-auto hidden lg:block">
                  <img
                    src={image3}
                    alt="Image"
                    className="w-full h-full bg-cover bg-center object-cover overflow-hidden rounded-lg"
                  />
                </div>
              </motion.div>
              <motion.div
                ref={ref3}
                initial="initial"
                animate={anim3}
                variants={datangArahKanan}
                className="hidden lg:block"
              >
                {/* content */}
                <h1 className="font-heebo text-dark text-xl font-bold my-4">
                  36 Days of Malayalam type
                </h1>
                {/* button 2020 */}
                <h5 className="text-light font-heebo my-6">
                  {" "}
                  <span className="bg-dark text-white text-lg rounded-full py-1 px-5 mr-4">
                    2018
                  </span>{" "}
                  Typography
                </h5>
                <p className="font-heebo text-base font-extralight leading-relaxed max-w-[500px]">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </motion.div>
              <div className="w-full h-[1px] bg-light hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
