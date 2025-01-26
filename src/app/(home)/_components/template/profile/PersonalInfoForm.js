"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import { useUpdateUserAccount } from "@/app/(home)/_api/main/mutations";
import { AiOutlineEdit } from "react-icons/ai";
import Loading from "../../modules/Loading";
import toast from "react-hot-toast";
import PersonalInfo from "./PersonalInfo";
import { validateIranianNationalCode } from "@/utils/helper";
import TextWithIcon from "../../modules/TextWithIcon";
import { personalInfoSchema } from "@/core/schema";
import PersonalInfoInputs from "./PersonalInfoInputs";

function PersonalInfoForm({ userData }) {
  const [status, setStatus] = useState("");
  const { mutate, isPendingAccount } = useUpdateUserAccount();
  console.log(userData);
  // const { data: userData, isPending, isSuccess } = useGetUserData();
  const moment = require("jalali-moment");

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ resolver: yupResolver(personalInfoSchema) });

  const onSubmit = (formData, e) => {
    e.preventDefault();

    console.log(formData);

    const date = moment(
      formData.birthDate.birthDate,
      "YYYY-MM-DDTHH:mm:ss.SSSZ"
    )
      .locale("fa")
      .format("YYYY/MM/DD");

    console.log(date);
    mutate(
      { ...formData, birthDate: date },
      {
        onSuccess: (data) => {
          console.log(data);
          toast.success(data?.data?.message);
          setStatus("");
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };
  const cancellHandler = () => {
    reset();
  };

  return (
    <div className="flex flex-col border rounded-md gap-4 p-4 pb-8">
      <div className="flex justify-between items-center">
        <h1 className="text-base">اطلاعات شخصی</h1>
        {status === "" && (
          <div onClick={() => setStatus("edit")} className="cursor-pointer">
            <TextWithIcon
              icon={<AiOutlineEdit color="#009ECA" size="16" />}
              text="ویرایش اطلاعات"
              className="text-[#009ECA] text-sm"
            />
          </div>
        )}
      </div>
      {status === "edit" ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="  flex flex-col  gap-4   "
        >
          <PersonalInfoInputs
            userData={userData}
            register={register}
            control={control}
            errors={errors}
            status={status}
          />
          {/* {(status === "edit" || !userData.firstName) && ( */}
            <div className="border-t flex gap-4 justify-end p-4 ">
              <button
                className="text-[#28A745] border border-[#28A745] outline-none rounded-md px-8 py-2"
                onClick={cancellHandler}
              >
                انصراف
              </button>
              <button
                type="submit"
                className="text-white  rounded-md bg-[#28A745] px-8 py-1"
              >
                تایید
              </button>
            </div>
          {/* )} */}
        </form>
      ) : (
        <PersonalInfo userData={userData} />
      )}
    </div>
  );
}

export default PersonalInfoForm;

{
  /* <div className="rounded-lg p-4 bg-white border border-[#00000033] basis-3/4">
<TextWithIcon
  icon={<HiUser size="24" />}
  text="مشخصات مسافر"
  className="text-2xl"
/>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mt-4">
  <InputForm
    name="fullName"
    register={register}
    placeholder="نام و نام خانوادگی"
    errors={errors.fullName?.message}
  />
  <InputForm
    name="nationalCode"
    register={register}
    placeholder="کد ملی"
    errors={errors.nationalCode?.message}
  />

  <SelectBirthDate
    register={register}
    Controller={Controller}
    control={control}
    errors={errors.birthDate?.message}
  />
  <div className="flex flex-col gap-1">
    <select
      name={"gender"}
      {...register("gender")}
      className="border rounded-md w-full  placeholder:text-sm  p-2 text-[#282828B2] text-sm"
      placeholder="جنسیت"
    >
      <option value="" className="text-[#191818b2] " defaultValue="جنسیت">
        جنسیت
      </option>
      <option value="female">خانم</option>
      <option value="male">آقا</option>
    </select>
    <p className="text-red-500 text-xs">{errors.gender?.message}</p>
  </div>
</div>
</div> */
}
