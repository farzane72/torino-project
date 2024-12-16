"use client";
import { useState } from "react";
import { VscClose } from "react-icons/vsc";
import { useSendOtp } from "../../_api/main/mutations";
import toast from "react-hot-toast";
import Loading from "./Loading";
//import { useRouter } from "next/router";
function AuthenticationForm(props) {
  const {
    showAuthentication,
    setShowAuthentication,
    phoneNumber,
    setPhoneNumber,
    step,
    setStep,
    code,
    setCode,
  } = props;
  const [messege, setMessage] = useState("");
  //const router = useRouter();

  const { mutate, isPending, mutateAsync, isSuccess } = useSendOtp();
  console.log(phoneNumber);
  console.log(showAuthentication);

  const sendOtpHandler = (event) => {
    event.preventDefault();
    console.log(phoneNumber);
    if (messege === "شماره همراه وارد شده معتبر است.") {
      console.log("test");
      mutateAsync({ mobile: phoneNumber }).then((res) => {
        toast.success(`${res.message}`),
          toast(`کد اعتبارسنجی شما:${res.code}`, {
            icon: "👏",
          });
        setCode(res.code), setStep(2);
      });
      //  if (isSuccess){
      //   toast.success("کاربر با موفقیت ویرایش شد"),
      //   //router.push("")
      //
      //  }
    } else {
      // //toast ba format sahih vared konid
      toast.error("لطفا شمراه همراه با فرمت صحیح وارد کنید");
      return;
    }
  };
  const changeHandler = (e) => {
    const value = e.target.value;

    const regex = /^09(0[1-5]|1[0-9]|2[0-9]|3[0-9]|9[0-9])[0-9]{7}$/;

    // if (/^\d*$/.test(value)) {
    setPhoneNumber(value);

    setMessage(
      regex.test(value)
        ? "شماره همراه وارد شده معتبر است."
        : "شماره همراه وارد شده معتبر نیست."
    );
    // } else {
    //   setMessage("شماره همراه وارد شده معتبرنیست");
    // }

    // if (/^\d*$/.test(value)) {
    //   setMobileNumber(value);

    //   // Regular expression to match exactly 10 digits
    //   const regex = /^\d{10}$/;
    //   if (value.length === 0 || regex.test(value)) {
    //     setMessage(value.length === 10 ? 'Mobile number is valid.' : '');
    //   } else {
    //     setMessage('Mobile number must be exactly 10 digits.');
    //   }
    // } else {
    //   setMessage('Only digits are allowed.');
    // }
  };

  return (
    <div className=" relative  shadow-[0_4px_4px_0_rgba(0,0,0,0,.25)] ">
      <div className="absolute left-4 top-4 cursor-pointer">
        <VscClose size={24} onClick={() => setShowAuthentication(false)} />
      </div>
      <div className="p-10 flex flex-col  w-[358px] h-[362px] md:w-[581px] md:h-[362px] bg-white border rounded-lg ">
        {/* <div className=""> */}
        <p className="font-semibold mt-8 text-center text-[22px] md:text-[28px]">
          ورود به تورینو
        </p>
        {/* </div> */}
        <form
          className="mt-10 flex flex-col gap-2 font-light"
          onSubmit={sendOtpHandler}
        >
          <label className="text-base">شماره موبایل خود را وارد کنید</label>
          <input
            className="p-2 border rounded-md placeholder:text-[15px] height-[54px] "
            placeholder="4253***0912"
            value={phoneNumber}
            onChange={changeHandler}
          />
          <p className={` ${messege ? "text-red-500 text-base" : "hidden"} `}>
            {messege}
          </p>

          {isPending ? (
            <Loading />
          ) : (
            <button
              className="mt-8 w-full p-2 rounded-md  border bg-[#28A745] font-medium text-white text-lg"
              type="submit"
            >
              ارسال کد تایید
            </button>
          )}
        </form>
        {/* <div className=""> */}

        {/* </div> */}
      </div>
    </div>
  );
}

export default AuthenticationForm;
