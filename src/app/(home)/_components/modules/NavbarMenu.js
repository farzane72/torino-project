"use client";
import { RiHome5Fill } from "react-icons/ri";
import { PiAirplaneLight } from "react-icons/pi";
import { PiAirplane } from "react-icons/pi";
import { TbVolume2 } from "react-icons/tb";
import { BiVolumeLow } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";
import Link from "next/link";

function NavbarMenu() {
  return (
    <div className="flex  flex-col gap-8 cursor-pointer  p-4 mt-4 md:hidden ">
      {/* <div className=""> */}
      <div className="text-[#28A745] hover:text-[#28A745] flex gap-4 items-center  ">
        <div>
          <RiHome5Fill size={22} />
        </div>
        <Link href='/' > صفحه اصلی</Link>
      </div>
      <div className="color-[#282828] hover:text-[#28A745] flex gap-4 items-center group ">
        <div className="border  border-black group-hover:border-[#28A745] rounded-md p-1">
          <PiAirplane size={16} />
        </div>
        <Link  href='#tours'>خدمات گردشگری</Link>
      </div>
      <div className="hover:text-[#28A745] flex gap-4 items-center">
        <div className="">
          <BiVolumeLow  size={20}  />
        </div>
        <Link  href='#about-us'>درباره ما</Link>
      </div>
      <div className="hover:text-[#28A745] flex gap-4 items-center">
        <div className="">
          <IoCallOutline size={20}  />
        </div>
        <Link  href='#contact-us'>تماس با ما</Link>
      </div>
      {/* </div> */}
    </div>
  );
}

export default NavbarMenu;
