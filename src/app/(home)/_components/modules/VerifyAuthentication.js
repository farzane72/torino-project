import { MdOutlineKeyboardBackspace } from "react-icons/md";
import React, { Component } from "react";
import OtpInput from "react18-input-otp";
import Timer from "./timer";
import { useState } from "react";

function VerifyAuthentication(props) {
  const { showAuthentication, setShowAuthentication } = props;

  const [otp, setOtp] = useState("");
  // const handleChange = (enteredOtp) => {
  //   setOtp(enteredOtp);
  // };

  return (
    <div className=" relative  shadow-[0_4px_4px_0_rgba(0,0,0,0,.25)] ">
      <div className="absolute left-4 top-4 cursor-pointer">
        <MdOutlineKeyboardBackspace
          size={24}
          onClick={() => setShowAuthentication(false)}
        />
      </div>
      <div className="p-10 flex flex-col  w-[358px] h-[362px] md:w-[581px] md:h-[362px] bg-white border rounded-lg ">
        {/* <div className=""> */}
        <p className="font-semibold mt-8 text-center text-[22px] md:text-[28px]">
          کد تایید را وارد کنید.
        </p>
        {/* </div> */}
        <form className="mt-6 flex flex-col  items-center gap-6 ">
          {/* <label className="text-base">شماره موبایل خود را وارد کنید</label> */}
          <div className="flex font-normal  text-[14px] md:text-base  gap-1 ">
            <span>کد تایید به شماره</span>
            <span>{`09119321901`}</span>
            <span>ارسال شد</span>
          </div>
          {/* <input  className="p-2 border rounded-md placeholder:text-[15px] height-[54px] " placeholder="4253***0912"/> */}
          <div className="flex gap-2 justify-center">
            <OtpInput
              inputStyle="inputStyle"
              numInputs={5}
              onChange={(value) => setOtp(value)}
              separator={<span></span>}
              // isInputNum={true}
              value={otp}
              className=" "
            />
          </div>

          {/* <div className="flex text-xs font-light"> */}
            <Timer />
            {/* <p>ارسال مجدد تا کد</p> */}
          {/* </div> */}
        </form>
        {/* <div className=""> */}
        <button className="mt-4 w-full p-2 rounded-md  border bg-[#28A745] font-medium text-white text-lg">
          ورود به تورینو
        </button>
        {/* </div> */}
      </div>
    </div>
  );
}

export default VerifyAuthentication;
