"use client";
import TextWithIcon from "../../modules/TextWithIcon";
import { HiUser } from "react-icons/hi2";
import { Controller } from "react-hook-form";
import SelectBirthDate from "../../modules/inputs/SelectBirthDate";
import InputForm from "../../modules/inputs/InputForm";

function PersonalInfoInputs({ register, control, errors, userData, status = "" }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mt-4">
          <InputForm
            name="firstName"
            register={register}
            placeholder="نام و نام خانوادگی"
            errors={errors.firstName?.message}
            type="text"
            value={userData?.firstName || ""}
          />
          <InputForm
            name="nationalCode"
            register={register}
            placeholder="کد ملی"
            errors={errors.nationalCode?.message}
            type="text"
            value={userData?.nationalCode || ""}
          />

          <SelectBirthDate
            register={register}
            Controller={Controller}
            control={control}
            errors={errors.birthDate?.message}
            value={userData?.birthDate || ""}
          />
          <div className="flex flex-col gap-1">
            <select
              name={"gender"}
              {...register("gender")}
              className="border rounded-md w-full  placeholder:text-sm  p-2 text-[#282828B2] text-sm"
              placeholder="جنسیت"
              defaultValue={userData?.gender || ""}
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
    )
}

export default PersonalInfoInputs
