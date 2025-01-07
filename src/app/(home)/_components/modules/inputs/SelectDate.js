"use client";

import { DatePicker } from "zaman";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { DateToIso } from "@/utils/helper";
function SelectDate({ register, Controller, control }) {
  return (
    <div
      className="relative flex w-[328px] h-[47]  justify-center items-center gap-1 p-2  text-black/35 text-base  font-normal  border rounded-md border-[#00000033] 
             md:w-[528px] lg:text-[#2C2C2C]  lg:justify-start  lg:w-[218px] lg:border-r lg:border-y-0 lg:border-l-0 lg:rounded-none "
    >
      <HiOutlineCalendarDateRange size={18} />

      <Controller
        control={control}
        name="date"
        render={({ field: { onChange } }) => (
          <DatePicker
            round="x2"
            accentColor="#28A745"
            onChange={(e) =>
              onChange({
                startDate: DateToIso(e.from),
                endDate: DateToIso(e.to),
              })
            }
            inputClass="placeholder:text-black/35 lg:placeholder:text-[#2C2C2C] border-none appearance-none outline-none shadow-none w-full focus:outline-none  disabled:text-gray-200"
            inputAttributes={{
              placeholder: "تاریخ", // Set a placeholder
            }}
            position="center"
            locale="fa"
            range
          />
        )}
      />
       
    </div>
  );
}

export default SelectDate;
