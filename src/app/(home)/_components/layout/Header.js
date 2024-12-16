"use client";
import Image from "next/image";
import { CgMenu } from "react-icons/cg";
import { useState } from "react";
import NavbarMenu from "../modules/NavbarMenu";
import Link from "next/link";
import AuthenticationForm from "../modules/AuthenticationForm";
import { BiLogInCircle } from "react-icons/bi";
import { HiMiniUser } from "react-icons/hi2";
import VerifyAuthentication from "../modules/VerifyAuthentication";
import AuthForm from "../template/AuthForm";
function Header() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showAuthentication,setShowAuthentication] = useState(false);
  const [verifiedUser, setVerifiedUser] = useState(false);
  const menuHandler = () => {
    setShowNavbar(true);
    // console.log(showNavbar);
  };
  const authenticationHandler = () => {
    console.log("test");

    setShowAuthentication(true);
     console.log(showAuthentication);
  };
  return (
    <>
      <header className="relative">
        <div className="flex justify-between  items-center container mx-auto  p-4   sticky top-0 bg-white">
          <div className="hidden lg:block">
            <Image
              src="/images/torino.png"
              width={146}
              height={44}
              alt="logo of torino"
            />
          </div>
          <div className="hidden md:flex  md:gap-6  md:cursor-pointer md:items-center  ">
            <Link href="/" className="text-[#28A745] hover:text-[#28A745]  ">
              {" "}
              صفحه اصلی
            </Link>
            <Link
              href="#tours"
              className="color-[#282828] hover:text-[#28A745]"
            >
              خدمات گردشگری
            </Link>
            <Link href="#about-us" className="hover:text-[#28A745]">
              درباره ما
            </Link>
            <Link href="#contact-us" className="hover:text-[#28A745]">
              تماس با ما
            </Link>
          </div>
          <div className=" md:hidden">
            <CgMenu
              className="cursor-pointer"
              size={28}
              onClick={menuHandler}
            />
          </div>
          <div className={`${!verifiedUser?'flex items-center  border border-[#28A745] rounded-md p-2' :'border-none '} text-[#28A745]`}    >
            <div className="hidden md:block">
              {/* <img src="/images/frame.png" className="w-6 h-6" /> */}
              <HiMiniUser size={20} />
            </div>
            <div className="md:hidden cursor-pointer" onClick={authenticationHandler} >
              {/* <img src="/icons/signin.png" /> */}
              <BiLogInCircle size={20} />
            </div>
            <div className="hidden md:flex md:gap-2 md:items-center md:align-middle md:justify-center md:text-[#28A745] cursor-pointer ">
              <div onClick={authenticationHandler}>ورود</div>
              <span>|</span>
              <span>ثبت نام</span>
            </div>
          </div>

         
        </div>
        <>
          <div
            className={`  ${
              !showNavbar
                ? `hidden`
                : `absolute top-0 right-0 w-1/2 h-screen teransition-all duration-200 ease-in-out z-[1000]
           bg-white rounded-2xl`
            }  
             `}
          >
            <NavbarMenu />
          </div>
          <div
            className={` ${
              ((!showNavbar) && (!showAuthentication))
                ? `bg-red-800`
                : `w-full h-screen absolute top-0 right-0 z-[500]  bg-black/25 backdrop-blur-none  md:backdrop-blur-[2px]
             `
            } `}
            onClick={() => setShowNavbar(false)}
          ></div>
          <div className={` ${!showAuthentication?`hidden`:`absolute top-0 right-0  z-[500] w-full h-screen flex justify-center align-middle items-center`}`}>
            {
              showAuthentication && <AuthForm  showAuthentication={showAuthentication}
               setShowAuthentication={setShowAuthentication}/>
            }

          </div>
        </>
      </header>
    </>
  );
}

export default Header;
