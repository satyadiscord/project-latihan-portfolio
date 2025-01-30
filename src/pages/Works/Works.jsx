import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";
import AnimatedSection from "../../hooks/AnimatedSection";

export default function Works() {
  return (
    <>
      <div className="w-full max-w-[1070px] mx-auto mt-16">
        <h1 className="pl-2 text-2xl md:text-3xl font-heebo font-semibold text-dark tracking-[1px] mb-10">
          Work
        </h1>

        <AnimatedSection>
          <div className="flex flex-col gap-y-10 lg:gap-y-16 lg:gap-x-16 lg:flex-row flex-wrap m-2">
            <>
              {/* image */}
              <div>
                <div className="w-full h-72 mx-auto">
                  <img
                    src={image1}
                    alt="Image"
                    className="w-full h-full bg-cover bg-center object-cover overflow-hidden rounded-lg"
                  />
                </div>
              </div>
              <div className="pl-1 lg:pl-0">
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
              </div>
              <div className="w-full h-[1px] bg-light" />

              {/* content 2 */}
              <div className="lg:hidden">
                <div className="w-full h-72 mx-auto">
                  <img
                    src={image4}
                    alt="Image"
                    className="w-full h-full bg-cover bg-center object-cover overflow-hidden rounded-lg"
                  />
                </div>
              </div>
              <div className="pl-1 lg:pl-0 lg:hidden">
                {/* content */}
                <h1 className="font-heebo text-dark text-xl font-bold my-4">
                  Designing Landing pages
                </h1>
                {/* button 2020 */}
                <h5 className="text-light font-heebo my-6">
                  {" "}
                  <span className="bg-dark text-white text-lg rounded-full py-1 px-5 mr-4">
                    2020
                  </span>{" "}
                  Website
                </h5>
                <p className="font-heebo text-base font-extralight leading-relaxed max-w-[500px]">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="w-full h-[1px] bg-light lg:hidden" />

              {/* content 3 */}
              <div>
                <div className="w-full h-72 mx-auto hidden lg:block">
                  <img
                    src={image2}
                    alt="Image"
                    className="w-full h-full bg-cover bg-center object-cover overflow-hidden rounded-lg"
                  />
                </div>
              </div>
              <div className="pl-1 lg:pl-0 hidden lg:block">
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
              </div>
              <div className="w-full h-[1px] bg-light hidden lg:block" />

              {/* content 4 */}
              <div>
                <div className="w-full h-72 mx-auto hidden lg:block">
                  <img
                    src={image3}
                    alt="Image"
                    className="w-full h-full bg-cover bg-center object-cover overflow-hidden rounded-lg"
                  />
                </div>
              </div>
              <div className="pl-1 lg:pl-0 hidden lg:block">
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
                  Illustration
                </h5>
                <p className="font-heebo text-base font-extralight leading-relaxed max-w-[500px]">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="w-full h-[1px] bg-light hidden lg:block" />

              {/* content 5 */}
              <div>
                <div className="w-full h-72 mx-auto hidden lg:block">
                  <img
                    src={image5}
                    alt="Image"
                    className="w-full h-full bg-cover bg-center object-cover overflow-hidden rounded-lg"
                  />
                </div>
              </div>
              <div className="pl-1 lg:pl-0 hidden lg:block">
                {/* content */}
                <h1 className="font-heebo text-dark text-xl font-bold my-4">
                  Components
                </h1>
                {/* button 2020 */}
                <h5 className="text-light font-heebo my-6">
                  {" "}
                  <span className="bg-dark text-white text-lg rounded-full py-1 px-5 mr-4">
                    2018
                  </span>{" "}
                  Components, Design
                </h5>
                <p className="font-heebo text-base font-extralight leading-relaxed max-w-[500px]">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="w-full h-[1px] bg-light hidden lg:block" />
            </>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
