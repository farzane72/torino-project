"use client";
import TextWithIcon from "../../modules/TextWithIcon";
import { HiUser } from "react-icons/hi2";
import { useForm, Controller } from "react-hook-form";
import SelectBirthDate from "../../modules/inputs/SelectBirthDate";
import { validateIranianNationalCode } from "@/utils/helper";
import InputForm from "../../modules/inputs/InputForm";
import { useGetUserData } from "@/app/(home)/_api/main/queries";
import { yupResolver } from "@hookform/resolvers/yup";
import { useOrder } from "@/app/(home)/_api/main/mutations";
import * as yup from "yup";

const schema = yup.object().shape({
  fullName: yup.string().required("وارد کردن نام ضروری است"),
  nationalCode: yup
    .string()
    .required("وارد کردن کد ملی ضروری است")
    .test("کد ملی معتبر است", "کد ملی نامعتبراست", validateIranianNationalCode),
  gender: yup.string().required("وارد کردن جنسیت ضروری است"),
  birthDate: yup.object().required("وارد کردن تاریخ تولد ضروری است"),
});

function PersonalInfoForm({ data }) {
  //console.log(data);
  const { data: userData, isPending, isSuccess } = useGetUserData();
  const { mutate }=useOrder()
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  //console.log(userData);
  const moment = require("jalali-moment");

  const onSubmit = (formData, e) => {
    e.preventDefault();

    console.log(formData);

   
   const date=   moment(formData.birthDate.birthDate, "YYYY-MM-DDTHH:mm:ss.SSSZ")
        .locale("en")
        .format("YYYY-MM-DD")
  
    mutate({...formData,birthDate:date});


  };

  return (
    <div className="flex justify-center mx-auto md:bg-neutral-200 h-screen  ">
      <div
        className=" w-[340px] md:w-[600px] md:h-[600px] lg:h-[427px] lg:w-[900px] 2xl:w-[1188px]  mt-8 
         "
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="  flex items-center   gap-4  "
        >
          <div className="rounded-lg p-4 bg-white border border-[#00000033] basis-3/4">
            <TextWithIcon
              icon={<HiUser size="24" />}
              text="مشخصات مسافر"
              className="text-2xl"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mt-4">
              {/* <input
              {...register("fullName")}
              className="border rounded-md w-full  placeholder:text-sm text-[#282828B2] p-2"
              placeholder="نام و نام خانوادگی"
            /> */}

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
              {/* <input
              {...register("nationalCode")}
              className=" border rounded-md w-full  placeholder:text-sm text-[#282828B2] p-2"
              placeholder="کد ملی"
            /> */}
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

export default PersonalInfoForm;
