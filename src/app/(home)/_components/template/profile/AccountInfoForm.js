"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import InputForm from "../../modules/inputs/InputForm";
import { useUpdateUserAccount } from "@/app/(home)/_api/main/mutations";
import { AiOutlineEdit } from "react-icons/ai";
import Loading from "../../modules/Loading";
import TextWithIcon from "../../modules/TextWithIcon";
import toast from "react-hot-toast";
import { emailAccountSchema } from "@/core/schema";
// const schema = yup.object().shape({
//   email: yup.string().required("وارد کردن ایمیل ضروری است"),
// });

function AccountInfoForm({ userData }) {
  const [status, setStatus] = useState("");
  const { mutate, isPendingAccount } = useUpdateUserAccount();
  console.log(userData);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(emailAccountSchema) });

  const onSubmit = (formData, e) => {
    e.preventDefault();
    console.log(formData);
    if (isPendingAccount) return;

    mutate(formData, {
      onSuccess: (data) => {
        toast.success(data?.data?.message);
        setStatus("");
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <div className="flex flex-col border rounded-md gap-4 p-4 pb-8">
      <h1 className="text-base">اطلاعات حساب کاربری</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="  flex flex-col lg:flex-row lg:justify-between    gap-4  "
      >
        <div className="flex gap-2 ">
          <span className=""> شماره موبایل:</span>
          <span className="">{userData.mobile}</span>
        </div>
        {status === "edit" ? (
          <div className="flex  items-center gap-4 h-[45px] w-[350px]">
            <InputForm
              register={register}
              placeholder="آدرس ایمیل"
              name="email"
              errors={errors.email?.message}
              type="email"
              value={userData?.email || ""}
            />
            <button
              type="submit"
              className="text-white  rounded-md bg-[#28A745] w-[125px] h-full"
            >
              تایید
            </button>
          </div>
        ) : (
          <div className="flex justify-between  w-[350px]">
            <div className="flex gap-2 ">
              <span className="">ایمیل:</span>
              <span className="">
                {userData?.email ? userData?.email : " -- "}
              </span>
            </div>
            <div onClick={() => setStatus("edit")} className="cursor-pointer">
              <TextWithIcon
                icon={<AiOutlineEdit color="#009ECA" size="16" />}
                text="ویرایش اطلاعات"
                className="text-[#009ECA] text-sm"
              />
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default AccountInfoForm;
