"use client";
import { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbWorldSearch } from "react-icons/tb";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import ModalCities from "../../modules/modals/ModalLocation";
import InputLocation from "../../modules/inputs/InputLocation";
import InputDate from "../../modules/inputs/InputDate";

function Tours() {
  const [isOpenOrigin, SetIsOpenOrigin] = useState(false);
  const [isOpenDestination, SetIsOpenDestination] = useState(false);
 // const [isOpenDate, SetIsOpenDate] = useState(false);
  const [destination, setDestination] = useState("");
  const [origin, setOrigin] = useState("");
 // const [date, setDate] = useState("");
  const [date, setDate] = useState("");
  // const btnOriginHandler = (e) => {
  //   console.log(e.target.value);
  //   setOrigin(e.target.value);
  // };
  const serchHandler =(e)=>{
    console.log(origin);
    console.log(destination);
    console.log(date);

  }

  return (
    <div className="mt-8 container mx-auto  p-4 flex flex-col items-center">
      <h1 className="text-base md:text-xl lg:text-[28px] font-semibold">
        <span className="text-[#28A745]">تورینو</span>
        <span className="text-[#595959]">
          برگزار کننده بهترین تور های داخلی و خارجی{" "}
        </span>
      </h1>
      <div
        className="flex flex-col gap-8  mt-8  w-[328px] md:w-[528px]  lg:w-[874px] lg:h-[71px]   lg:flex-row lg:gap-0  lg:rounded-md lg:border lg:border-[#00000033]
                        lg:p-2 "
      >
        <div className="flex justify-between lg:flex-none">
          <InputLocation
            icon={<HiOutlineLocationMarker size={18} />}
            className="w-[160px] h-[47]  md:w-[260px] lg:w-[218px] lg:border-none "
            title="مبدا"
            selectValue={origin}
            onSelect={setOrigin}
            isOpen={isOpenOrigin}
            onOPen={SetIsOpenOrigin}
          />
          {/* <div
            className="relative flex  justify-center items-center  gap-2 p-2  text-black/35 text-base  font-normal  border rounded-md border-[#00000033]
               lg:text-[#2C2C2C]  lg:justify-start lg:border-none  "
          >
            <HiOutlineLocationMarker size={18} />
            
            <input placeholder="مبدا"  className="placeholder:text-black/35 lg:placeholder:text-[#2C2C2C] border-none appearance-none outline-none shadow-none w-full focus:outline-none  disabled:text-gray-200"
              onChange={btnOriginHandler}
              onClick={()=>SetIsOpenOrigin(true)}
              value={origin}
               />


            {
              isOpenOrigin && <ModalCities  onSelect={setOrigin} onOPen={SetIsOpenOrigin}  />
            }
          </div> */}

          <InputLocation
            icon={<TbWorldSearch size={18} />}
            className="w-[160px] h-[47]  md:w-[260px] lg:w-[218px] lg:border-r lg:border-y-0 lg:border-l-0 lg:rounded-none  "
            title="مقصد"
            selectValue={destination}
            onSelect={setDestination}
            isOpen={isOpenDestination}
            onOPen={SetIsOpenDestination}
          />

          {/* <div
            className="relative flex w-[160px] h-[47] justify-center items-center gap-2 p-2  text-black/35 text-base  font-normal  border rounded-md border-[#00000033]
             md:w-[260px] lg:text-[#2C2C2C]  lg:justify-start lg:border-r lg:border-y-0 lg:border-l-0 lg:rounded-none  lg:w-[218px] "
          >
            <TbWorldSearch size={18} />
            <span className="">مقصد</span>
          </div> */}
        </div>

        {/* <div
          className="relative flex w-[328px] h-[47]  justify-center items-center gap-2 p-2  text-black/35 text-base  font-normal  border rounded-md border-[#00000033] 
             md:w-[528px] lg:text-[#2C2C2C]  lg:justify-start  lg:w-[218px] lg:border-r lg:border-y-0 lg:border-l-0 lg:rounded-none "
        >
          <HiOutlineCalendarDateRange size={18} />
          <span className="">تاریخ</span>
          {isOpenDate && <DataPiker />}
        </div> */}


        {/* <InputLocation
            icon={<HiOutlineCalendarDateRange size={18} />}
            className="w-[328px] h-[47]  md:w-[528px] lg:w-[218px] lg:border-r lg:border-y-0 lg:border-l-0 lg:rounded-none  "
            title="تاریخ"
            stateValue={calendarValue}
            onSelect={setCalendarValue}
            isOpen={isOpenDate}
            onOPen={SetIsOpenDate}
          /> */}
          <InputDate
           
           date={date} setDate={setDate}
          
          />





        <button
          className="bg-[#28A745] text-white rounded-2xl w-[328px] h-[47px]
            md:w-[528px] lg:h-[51px] lg:w-[218px] text-[20px] font-normal  "
            onClick={serchHandler}
        >
          جستجو
        </button>
      </div>
      <div>همه تورها</div>
    </div>
  );
}

export default Tours;
