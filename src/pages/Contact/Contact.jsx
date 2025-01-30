// import icon from react icons
import { CgMail } from "react-icons/cg"; //gmail
import { IoLocationOutline } from "react-icons/io5"; //location
import { TbNetwork } from "react-icons/tb"; //network
import { MdOutlinePhoneEnabled } from "react-icons/md"; //phone

export default function Contact() {
  return (
    <>
      <div className="w-full max-w-[1070px] mx-auto mt-16">
        <h1 className="pl-2 text-2xl md:text-3xl font-heebo font-semibold text-dark tracking-[2px] mb-10">
          Contact
        </h1>

        <div className="px-2">
          <section className="flex flex-col gap-y-10">
            <div className="flex gap-x-2 items-center border-b border-b-dark py-3">
              {/* Alamat Email */}
              <CgMail className="text-4xl" />
              <h1 className="text-lg font-heebo text-dark font-normal">
                K8TbD@example.com
              </h1>
            </div>

            {/* Location */}
            <div className="flex gap-x-2 items-center border-b border-b-dark py-3">
              {/* Alamat Email */}
              <IoLocationOutline className="text-4xl" />
              <h1 className="text-lg font-heebo text-dark font-normal">
                Jakarta, Indonesia
              </h1>
            </div>
            {/* Website Url */}
            <div className="flex gap-x-2 items-center border-b border-b-dark py-3">
              <TbNetwork className="text-4xl" />
              <h1 className="text-lg font-heebo text-dark font-normal">
                www.figma.com
              </h1>
            </div>

            {/* Nomber Telpon */}
            <div className="flex gap-x-2 items-center border-b border-b-dark py-3">
              <MdOutlinePhoneEnabled className="text-4xl" />
              <h1 className="text-lg font-heebo text-dark font-normal">
                +628123456789
              </h1>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
