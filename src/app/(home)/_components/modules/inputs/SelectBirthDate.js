"use client";

import { DatePicker } from "zaman";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";

function SelectBirthDate({ register, Controller, control, errors }) {
  return (
    <div className="flex flex-col gap-1">
      <div
        className=" flex  justify-center items-center gap-1 p-2  text-[#282828B2] text-base  font-normal  border rounded-md border-[#00000033] 
              lg:justify-start  "
      >
        <HiOutlineCalendarDateRange size={18} />

        <Controller
          control={control}
          name="birthDate"
          render={({ field: { onChange } }) => (
            <DatePicker
              round="x2"
              accentColor="#28A745"
              onChange={(e) =>
                onChange({
                  birthDate: e.value,
                })
              }
              inputClass=" placeholder:text-sm   text-[#282828B2] text-sm outline-none"
              inputAttributes={{
                placeholder: "تاریخ تولد",
              }}
              position="center"
              locale="fa"
              // range
            />
          )}
        />
      </div>
      <p className="text-red-500 text-xs">{errors}</p>
    </div>
  );
}

export default SelectBirthDate;
