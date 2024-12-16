import { CgMenu } from "react-icons/cg";
import { useState } from "react";
import Link from "next/link";
import ModalContainer from "../../modules/ModalContainer";
import NavbarMenu from "./NavbarMenu";
function Menu() {
  const [showNavbar, setShowNavbar] = useState(false);

  const menuHandler = () => {
    console.log("test");
    setShowNavbar(true);
    console.log(showNavbar);
  };
  return (
    <>
      <div className="hidden md:flex  md:gap-6  md:cursor-pointer md:items-center  ">
        <Link href="/" className="text-[#28A745] hover:text-[#28A745]  ">
          {" "}
          صفحه اصلی
        </Link>
        <Link href="#tours" className="color-[#282828] hover:text-[#28A745]">
          خدمات گردشگری
        </Link>
        <Link href="#about-us" className="hover:text-[#28A745]">
          درباره ما
        </Link>
        <Link href="#contact-us" className="hover:text-[#28A745]">
          تماس با ما
        </Link>
      </div>
      <div className="md:hidden">
        <CgMenu className="cursor-pointer" size={28} onClick={menuHandler} />
      </div>

      {
        showNavbar&&(
            <ModalContainer modalName="nav" setState={setShowNavbar} >
                <NavbarMenu />
            </ModalContainer>
        )
      }
    </>
  );
}

export default Menu;
