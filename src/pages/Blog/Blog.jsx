export default function Blog() {
  return (
    <>
      <div className="w-full max-w-[1070px] mx-auto mt-16">
        <h1 className="pl-4 text-2xl md:text-3xl font-heebo font-semibold text-dark tracking-[1px] mb-10">
          Blog
        </h1>

        <div className="flex flex-col gap-y-10">
          {[1, 2, 3, 4].map((item, index) => (
            <>
              <section key={index} className="pl-4">
                <h1 className="font-heebo text-xl md:text-2xl font-medium text-dark mb-3">
                  UI Interactions of the week
                </h1>
                <h3 className="mb-5 font-heebo font-light">
                  12 Feb 2019 |{" "}
                  <span className="text-light">Design, Coding</span>
                </h3>
                <p className="text-base font-heebo leading-relaxed font-extralight pr-1 max-w-[600px]">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </section>
              <div className="w-full h-[1px] bg-light my-5" />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
