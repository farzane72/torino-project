"use client";

import { useForm } from "react-hook-form";
import { useOrder } from "@/app/(home)/_api/main/mutations";
import PersonalInfo from "../../_components/template/profile/PersonalInfo";
import { yupResolver } from "@hookform/resolvers/yup";
import { validateIranianNationalCode } from "@/utils/helper";
import { useGetBasket } from "../../_api/main/queries";
import { useGetUserData } from "@/app/(home)/_api/main/queries";
import { useRouter } from "next/navigation";
import Link from "next/link";
import TextWithIcon from "../../_components/modules/TextWithIcon";
import { HiUser } from "react-icons/hi2";
import { AiOutlineEdit } from "react-icons/ai";
import * as yup from "yup";
import InputForm from "../../_components/modules/inputs/InputForm";
import { personalInfoSchema } from "@/core/schema";
import PersonalInfoInputs from "../../_components/template/profile/PersonalInfoInputs";

const schema = yup.object().shape({
  firstName: yup.string().required("وارد کردن نام ضروری است"),
  nationalCode: yup
    .string()
    .required("وارد کردن کد ملی ضروری است")
    .test("کد ملی معتبر است", "کد ملی نامعتبراست", validateIranianNationalCode),
  gender: yup.string().required("وارد کردن جنسیت ضروری است"),
  birthDate: yup.string().required("وارد کردن تاریخ تولد ضروری است"),
});

function page() {
  const { data, isPending } = useGetBasket();
  const { mutate, isSuccess, isPendingOrder } = useOrder();

  const { data: userData, isPendingUser, isSuccessUser } = useGetUserData();
  const moment = require("jalali-moment");
  const router = useRouter();

  console.log(data);
  // console.log(userData);

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(personalInfoSchema ) });
  console.log(userData);

  const onSubmit = (formData) => {
    // if (isPendingOrder) return;
    // e.preventDefault();
    console.log("test");
    console.log(formData);

    const date = moment(
      formData.birthDate.birthDate,
      "YYYY-MM-DDTHH:mm:ss.SSSZ"
    )
      .locale("en")
      .format("YYYY-MM-DD");

    //   mutate({ ...formData, birthDate: date });
    // const newData={
    //   fullName:userData.firstName || formData.firstName,
    //   nationalCode:userData.nationalCode || formData.nationalCode,
    //   gender:userData.gender || formData.gender,
    //   birthDate:userData.birthDate || date,

    // }
    mutate(
      { ...formData, fullName: formData.firstName, birthDate: date },
      //newData,
      {
        onSuccess: (data) => {
          console.log(data);
          router.push("/payment?status=success");
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );
  };

  const onError = (e) => {
    //  e.preventDefault();

    console.log("test");
    console.log(e);
  };

  if (!data)
    return (
      <div>
        <p>سبد خرید شما خالی است</p>
        <Link href="/">برو به صفحه اصلی</Link>
      </div>
    );

  return (
    <div className="flex justify-center mx-auto md:bg-neutral-200 h-screen  ">
      <div
        className=" w-[340px] md:w-[600px] md:h-[600px] lg:h-[427px] lg:w-[900px] 2xl:w-[1188px]  mt-8 
         "
      >
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="  flex items-center   gap-4  "
        >
          <div className="rounded-lg p-4 bg-white border border-[#00000033] basis-3/4">
            <TextWithIcon
              icon={<HiUser size="24" />}
              text="مشخصات مسافر"
              className="text-2xl"
            />

            {userData.firstName ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mt-4">
                <div className="flex gap-2  w-full ">
                  <span className="text-nowrap"> نام و نام خانوادگی:</span>

                  <input
                    {...register("firstName")}
                    className=" outline-none   "
                    value={userData.firstName}
                    readOnly
                  />
                </div>
                <div className="flex gap-2 ">
                  <span className="">کدملی :</span>

                  <input
                    {...register("nationalCode")}
                    className=" outline-none  "
                    value={userData.nationalCode}
                    readOnly
                  />
                </div>

                <div className="flex gap-2 ">
                  <span className="">جنسیت:</span>

                  <input
                    {...register("gender")}
                    className="outline-none "
                    readOnly
                    value={userData.gender === "female" ? "خانم" : "آقا"}
                  />
                </div>

                <div className="flex gap-2 ">
                  <span className=""> تاریخ تولد:</span>

                  <input
                    {...register("birthDate")}
                    className=" outline-none   "
                    readOnly
                    value={userData.birthDate || "--"}
                  />
                </div>
              </div>
            ) : (
              <PersonalInfoInputs
                register={register}
                control={control}
                errors={errors}
                userData={userData}
                status=""
              />
            )}
          </div>

          <div className="flex flex-col gap-6 basis-1/3 py-2 rounded-lg p-4 bg-white border border-[#00000033]">
            <div className="flex justify-between  border-b border-dashed border-[#00000080] p-2  ">
              <h3 className="text-2xl font-[600]">{data.title}</h3>
              <p className="text-base">5 روز و 4 شب</p>
            </div>
            <div className="flex justify-between">
              <span className="text-base">قیمت نهایی</span>
              <div className="flex gap-2">
                <span className="text-[#009ECA] text-2xl">{data.price}</span>
                <span className="text-sm">تومان</span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#28A745] p-2 rounded-md text-white  flex justify-center items-center "
            >
              ثبت و خرید نهایی
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;

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
                  <option
                    value=""
                    className="text-[#191818b2] "
                    defaultValue="جنسیت"
                  >
                    جنسیت
                  </option>
                  <option value="female">خانم</option>
                  <option value="male">آقا</option>
                </select>
                <p className="text-red-500 text-xs">{errors.gender?.message}</p>
              </div>
            </div>
          </div>  */
}
