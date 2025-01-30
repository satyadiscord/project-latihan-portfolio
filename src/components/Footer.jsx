//! import icon from react icons
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

// list link footer
const listFooter = [
  {
    id: 1,
    icons: <FaFacebookSquare />,
    link: "https://www.facebook.com/",
  },
  {
    id: 2,
    icons: <FaInstagram />,
    link: "https://www.instagram.com/satya375__",
  },
  { id: 3, icons: <FaTwitter />, link: "https://www.twitter.com" },
  { id: 4, icons: <FaLinkedin />, link: "https://www.linkedin.com" },
];
export default function Footer() {
  return (
    <>
      <div className="w-full max-w-content mx-auto mt-36 mb-5 p-3">
        <footer className="flex justify-center items-center flex-col">
          <div className="flex gap-x-6">
            {/* icons */}
            {listFooter.map((item, index) => (
              <div key={index}>
                <Link to={item.link}>
                  <button className="text-4xl hover:text-primary">
                    {item.icons}
                  </button>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <h1 className="text-center text-sm font-extralight font-heebo">
              Copyright ©2020 All rights reserved{" "}
            </h1>
          </div>
        </footer>
      </div>
    </>
  );
}
