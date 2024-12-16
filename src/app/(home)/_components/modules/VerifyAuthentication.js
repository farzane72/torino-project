import { MdOutlineKeyboardBackspace } from "react-icons/md";
import React, { Component } from "react";
import OtpInput from "react18-input-otp";
import Timer from "./Timer";
import { useState } from "react";
import toast from "react-hot-toast";
import { useCheckOtp } from "../../_api/main/mutations";
//import SetCookie from "@/core/hooks/setCookie";

function VerifyAuthentication(props) {
  const {
    showAuthentication,
    setShowAuthentication,
    step,
    setStep,
    code,
    setCode,
    phoneNumber,
    setPhoneNumber,
  } = props;
  const { mutate, mutateAsync, isPending, isSuccess } = useCheckOtp();
  const [otp, setOtp] = useState("");
  // const handleChange = (enteredOtp) => {
  //   setOtp(enteredOtp);
  // };
  const checkOtpHandler = (event) => {
    event.preventDefault();
    if (otp === code) {
      mutate({ mobile: phoneNumber, code });
      if (isSuccess) {
        toast.success("شما با موفقیت وارد شدین");
        setOtp(1);
        setShowAuthentication(false);
      }
    } else {
      toast.error("لطفا در وارد کردن کد دقت نمایید");
      return;
    }

    console.log(otp);
  };

  return (
    <div className=" relative  shadow-[0_4px_4px_0_rgba(0,0,0,0,.25)] ">
      <div className="absolute left-4 top-4 cursor-pointer">
        <MdOutlineKeyboardBackspace size={24} onClick={() => setStep(1)} />
      </div>
      <div className="p-10 flex flex-col  w-[358px] h-[362px] md:w-[581px] md:h-[362px] bg-white border rounded-lg ">
        {/* <div className=""> */}
        <p className="font-semibold mt-4 text-center text-[22px] md:text-[28px]">
          کد تایید را وارد کنید.
        </p>
        {/* </div> */}
        <form
          className="mt-6 flex flex-col  items-center gap-6 "
          onSubmit={checkOtpHandler}
        >
          {/* <label className="text-base">شماره موبایل خود را وارد کنید</label> */}
          <div className="flex font-normal  text-[14px] md:text-base  gap-1 ">
            <span>کد تایید به شماره</span>
            <span>{phoneNumber}</span>
            <span>ارسال شد</span>
          </div>
          {/* <input  className="p-2 border rounded-md placeholder:text-[15px] height-[54px] " placeholder="4253***0912"/> */}
          <div className="flex gap-2 justify-center  text-left " dir="ltr">
            <OtpInput
              inputStyle="inputStyle"
              numInputs={6}
              onChange={(value) => setOtp(value)}
              separator={<span></span>}
              // isInputNum={true}
              value={otp}
              className=" "
              // dir="ltr"
            />
          </div>

          {/* <div className="flex text-xs font-light"> */}
          <Timer />
          {/* <p>ارسال مجدد تا کد</p> */}
          {/* </div> */}

          <button
            className=" w-full p-2 rounded-md  border bg-[#28A745] font-medium text-white text-lg"
            type="submit"
          >
            ورود به تورینو
          </button>
        </form>
        {/* <div className=""> */}

        {/* </div> */}
      </div>
    </div>
  );
}

export default VerifyAuthentication;
