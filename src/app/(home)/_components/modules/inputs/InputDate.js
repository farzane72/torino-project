"use client";
import { Calendar, CalendarProvider } from "zaman";
import { DatePicker } from "zaman";
import { useState } from "react";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
function InputDate({  date, setDate }) {
  //const [calendarValue, setCalendarValue] = useState(new Date());

  //console.log(date);
  //if (!isOpen) return;
  const changeHandler=(e)=>{
  //  console.log("tetst")
   
   // console.log(e.value);
    setDate((e.value))
  }
  return (
    <>
      <div
        className="relative flex w-[328px] h-[47]  justify-center items-center gap-2 p-2  text-black/35 text-base  font-normal  border rounded-md border-[#00000033] 
             md:w-[528px] lg:text-[#2C2C2C]  lg:justify-start  lg:w-[218px] lg:border-r lg:border-y-0 lg:border-l-0 lg:rounded-none "
      >
        <HiOutlineCalendarDateRange size={18} />
        
        <DatePicker 
        onChange={changeHandler} 
        inputClass="placeholder:text-black/35 lg:placeholder:text-[#2C2C2C] border-none appearance-none outline-none shadow-none w-full focus:outline-none  disabled:text-gray-200"
        inputAttributes={{
          placeholder: "تاریخ", // Set a placeholder
         // id: "date-picker", // Add an ID
         // className: "custom-input", // Add custom className for styling
         // readOnly: true, // Example of other attributes
        }}
        position="center"
         locale="fa" 
         round="x2" 
         accentColor="#28A745"
        calendarStyle="calander-style"
        //customShowDateFormat="dddd, DDD, ddd, d, dd MMMM yyyy à HH'h'mm"
        
        />
       
        {/* <DatePicker onChange={(e) => setCalendarValue((e.value))} /> */}
        {/* <span className="">تاریخ</span> */}
        {/* {isOpenDate && <DataPiker />} */}
      </div>
{/* 
      <div
        className=" fixed w-full h-screen  top-0 right-0 left-0 z-[500]  "
        onClick={() => onOPen(false)}
      ></div> */}
    </>
  );
}

export default InputDate;

 {/* <div className=" absolute right-0 left-0  top-10 lg:top-16 z-[1000] ">
 <CalendarProvider locale="fa" round="x2" accentColor="#28A745">
  <Calendar
    defaultValue={calendarValue }
    onChange={(e) => setCalendarValue (new Date(e.value))}
    className=" w-[268px] h-[200px]"
    // inputClass="data-picker"
  />
</CalendarProvider> 

  <div className="bg-white absolute right-0 left-0  top-10 lg:top-16 rounded-md border border-[#00000026]">
    <DatePicker onChange={(e) => setCalendarValue(new Date(e.value))} />
  </div>
</div>;*/}
