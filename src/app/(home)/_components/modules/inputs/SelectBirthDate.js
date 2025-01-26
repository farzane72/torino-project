"use client";

import { DatePicker } from "zaman";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { useState, useRef, useEffect } from "react";

function SelectBirthDate({
  register,
  Controller,
  control,
  errors,
  value: previousValue,
}) {
  // useEffect(() => {
  //   // Initialize the Zaman date picker
  //   const zamanPicker = new Zaman({
  //     element: datePickerRef.current,
  //   });

  //   // Explicitly set the calendar to match the default value
  //   zamanPicker.setDate(new Date(preSelectedDate));
  // }, [preSelectedDate]);

  //const moment = require("jalali-moment");

  //console.log(value);

 // const date = moment(previousDate).locale("fa").format("YYYY-MM-DD");
  //console.log(date);
  // console.log(new Date(date));

  return (
    <div className="flex flex-col gap-1">
      <div
        className=" flex  items-center gap-1 p-2  text-[#282828B2] text-base  font-normal  border rounded-md border-[#00000033] 
               "
      >
        <HiOutlineCalendarDateRange size={18} />

        <Controller
          control={control}
          name="birthDate"
          render={({ field: { onChange, value } }) => (
            <DatePicker
              round="x2"
              accentColor="#28A745"
              onChange={(e) =>
                onChange({
                  birthDate: e.value,
                //  value:e.value
                })
              }
            //  value={value}
              inputClass=" placeholder:text-sm   text-[#282828B2] text-sm outline-none"
              inputAttributes={{
                placeholder: "تاریخ تولد",
              }}
              position="center"
              locale="fa"
              selected={value}
            //  defaultValue={Date( previousValue)}
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
