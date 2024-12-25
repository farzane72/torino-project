"use client";
import { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbWorldSearch } from "react-icons/tb";
import InputLocation from "../../modules/inputs/InputLocation";
import InputDate from "../../modules/inputs/InputDate";
import { useGetAllTours } from "@/app/(home)/_api/main/queries";
import Loading from "@/app/(home)/loading";
import Tour from "../../modules/tour/Tour";
import TourList from "../../modules/tour/TourList";

function Tours() {
  const [destination, setDestination] = useState("");
  const [origin, setOrigin] = useState("");
  const [date, setDate] = useState("");
  const searchQuery = {
    destinationId: destination.id || "",
    originId: origin.id || "",
    startDate: date ? date.toISOString() : "",
  };

  const { data, isPending, isSuccess, isError, error, status } =
    useGetAllTours(searchQuery);

  console.log(data);
  console.log(searchQuery);
  console.log(status);
  const searchHandler = () => {
    console.log("serach");
    //http://localhost:6500/tour?destinationId=9&originId=1&startDate=2024-11-20T00%3A00%3A00.000Z
    console.log(origin.id || "");
    console.log(destination.id || "");

    console.log(searchQuery);
    console.log(data);
    //window.location.reload();
    setDestination("");
    setDate("");
    setOrigin("");
  };

  if (isPending) return <Loading />;
  if (isError) return <div>{error.message}</div>;
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
            // isOpen={isOpenOrigin}
            // onOPen={SetIsOpenOrigin}
            tours={data}
          />

          <InputLocation
            icon={<TbWorldSearch size={18} />}
            className="w-[160px] h-[47]  md:w-[260px] lg:w-[218px] lg:border-r lg:border-y-0 lg:border-l-0 lg:rounded-none  "
            title="مقصد"
            selectValue={destination}
            onSelect={setDestination}
            // isOpen={isOpenOrigin}
            // onOPen={SetIsOpenOrigin}
            tours={data}
          />
        </div>

        <InputDate date={date} setDate={setDate} />

        <button
          className="cursor-pointer bg-[#28A745] text-white rounded-2xl w-[328px] h-[47px]
            md:w-[528px] lg:h-[51px] lg:w-[218px] text-[20px] font-normal   "
          onClick={searchHandler}
        >
          جستجو
        </button>
      </div>
      {/* <div className="grid justify-items-start ">
        <h1 className="text-[20px] md:text-[32px] text-right">همه تورها</h1> */}
      {/* {isPending ? (
          <Loading />
        ) : ( */}
      <TourList data={data} />

      {/* )} */}
      {/* </div> */}
    </div>
  );
}

export default Tours;

// setSearchQuery((prev)=>(
//   {
//     destinationId:destination.id ||"",
//     originId:origin.id ||"",
//     startDate:convertDate  }

// ))
//setSearchQuery(()=>`?destinationId=${destination.id ||""}&originId=${origin.id}&startDate=${convertDate}` )

//console.log(date);
// const convertDate=date?date.toISOString():"";
// console.log(convertDate);
//  if(!origin || !destination || !date) return

//  setSearchQuery(()=>`?${destination?`destinationId=${destination.id}`:""}& ${origin?`originId=${origin.id}`:""}
//   & ${date?`startDate=${date.toISOString()}`:""} ` )

// searchQuery=`destinationId=9&originId=1&startDate=2024-11-20T00%3A00%3A00.000Z`
