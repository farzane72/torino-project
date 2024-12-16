"use client";
import { useState } from "react";
import AuthenticationForm from "./AuthenticationForm";
import VerifyAuthentication from "./VerifyAuthentication";
import ModalContainer from "../../modules/ModalContainer";
import { HiMiniUser } from "react-icons/hi2";
import { BsChevronDown } from "react-icons/bs";
import { BiLogInCircle } from "react-icons/bi";
import { useGetUserData } from "@/app/(home)/_api/main/queries";
import { AiOutlineLogout } from "react-icons/ai";
import RemoveCookie from "@/core/hooks/removeCookie";

import Link from "next/link";
function AuthForm(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [showModalAccount, setShowModalAccount] = useState(false);

  const authenticationHandler = () => {
    // console.log("test");

    setIsOpen(true);
    //  console.log(isOpen);
  };
  const signOutHandler = () => {
    RemoveCookie("accessToken");
    RemoveCookie("refreshToken");
    setShowModalAccount(false);
    //router.push('/')
    //router.refresh();
    //router.reload();
    //router.replace(router.asPath);
    window.location.reload();
    // redirect('/');
  };
  const { data, isPending, isSuccess } = useGetUserData();

  return (
    <>
      {data ? (
        <div className="flex items-center justify-center  gap-1  p-2 text-[#28A745] relative">
          <HiMiniUser size={20} />
          <div className="text-sm md:text-lg font-medium ">{data.mobile}</div>
          <div
            className=" "
            onClick={() =>
              setShowModalAccount((showModalAccount) => !showModalAccount)
            }
          >
            <BsChevronDown />
          </div>
          {showModalAccount && (
            <div className="absolute top-[52px] md:top-[59px] right-0 left-0 bg-white rounded-md  flex flex-col cursor-pointer ">
              <div className="flex gap-1 bg-[#F4F4F4] p-2 items-center">
                <div className="hidden md:block md:p-1 md:rounded-full md:border bg-[#cdcccc]">
                  <HiMiniUser size={14} color={"#696969"} />
                </div>
                <div className="text-[#10411B]">{data.mobile}</div>
              </div>
              <div className="flex gap-1  p-2 items-center">
                <HiMiniUser className="hidden md:block" size={14} />

                <Link
                  href="/profile"
                  className="text-sm font-normal text-[#282828]"
                >
                  اطلاعات حساب کاربری
                </Link>
              </div>
              <div className="flex gap-1  p-2 items-center text-[#D40000]">
                <AiOutlineLogout className="hidden md:block" size={14} />

                <div className="text-sm font-normal " onClick={signOutHandler}>
                  خروج از حساب کاربری
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center border border-[#28A745] rounded-md p-2 text-[#28A745]">
          <div className="hidden md:block">
            <HiMiniUser size={20} />
          </div>
          <div
            className="md:hidden cursor-pointer"
            onClick={authenticationHandler}
          >
            <BiLogInCircle size={20} />
          </div>
          <div className="hidden md:flex md:gap-2 md:items-center md:align-middle md:justify-center md:text-[#28A745] cursor-pointer ">
            <div onClick={authenticationHandler}>ورود</div>
            <span>|</span>
            <span>ثبت نام</span>
          </div>
        </div>
      )}

      {isOpen && (
        <ModalContainer modalName="auth" setState="">
          {step == 1 && (
            <AuthenticationForm
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              setStep={setStep}
              setCode={setCode}
            />
          )}
          {step == 2 && (
            <VerifyAuthentication
              setIsOpen={setIsOpen}
              phoneNumber={phoneNumber}
              setStep={setStep}
              code={code}
            />
          )}
        </ModalContainer>
      )}
    </>
  );
}

export default AuthForm;
