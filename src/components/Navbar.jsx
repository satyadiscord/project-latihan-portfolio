import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

// list navbar
const navList = [
  { id: 1, name: "Home", link: "/" },
  { id: 3, name: "Blog", link: "/blog" },
  { id: 2, name: "Works", link: "/works" },
  { id: 4, name: "Contact", link: "/contact" },
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //? mencegah user agar tidak bisa scroll navbar jika belum di close hamburger tersebut
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  //? Menu Variants animasi Framer-Motion
  const menuVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <nav className="relative container p-4 z-20">
        {/* button ukuran mobile */}
        <div className="flex justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center gap-y-2 lg:hidden"
          >
            <motion.div
              animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="h-[2px] w-8 rounded bg-black"
            ></motion.div>
            <motion.div
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="h-[2px] w-8 rounded bg-black"
            ></motion.div>
            <motion.div
              animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="h-[2px] w-8 rounded bg-black"
            ></motion.div>
          </button>
        </div>

        {(isOpen || isLargeScreen) && (
          <motion.ul
            variants={menuVariant}
            initial="hidden"
            animate={isOpen || isLargeScreen ? "visible" : "hidden"}
            className="absolute bg-gray-50 top-full left-0 w-screen h-screen lg:bg-transparent lg:top-auto lg:left-auto lg:w-auto lg:h-auto lg:static lg:flex lg:items-center lg:gap-x-7 lg:justify-end"
          >
            {navList.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  navigate(item.link);
                  setIsOpen(false);
                }}
                className={`text-lg font-medium font-heebo cursor-pointer ${
                  isActive(item.link) ? "text-red-600" : ""
                } hover:text-red-600 text-center my-20 tracking-widest lg:tracking-normal lg:my-0 lg:text-start text-dark`}
              >
                {item.name}
              </li>
            ))}
          </motion.ul>
        )}
      </nav>
    </>
  );
}
