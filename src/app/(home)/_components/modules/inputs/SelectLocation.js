"use client";
import { uniqueItem } from "@/utils/helper";

function SelectLocation({
  register,
  title,
  icon,
  className,
  selectValue,
  tours,
}) {
  // if (title === "مبدا") {
  //   console.log(uniqueItem(tours,"origin"));

  // }
  // if (title === "مقصد") {
  //  console.log(uniqueItem(tours,"destination"));
  // }



  const cities = uniqueItem(tours, title === "مبدا" ? "origin" : "destination");
  console.log(cities);




  //const cities=uniqueCities(title);
  //console.log(uniqueCities(title));
  return (
    <div
      className={`flex  justify-center items-center  gap-2 p-2  text-black/35 text-base  font-normal  border rounded-md border-[#00000033]
                lg:text-[#2C2C2C]  lg:justify-start w-[160px] h-[47]  md:w-[260px] lg:w-[218px]   
               ${className} `}
    >
      {icon}

      {/* <input
        placeholder={title}
        className="placeholder:text-black/35 lg:placeholder:text-[#2C2C2C] border-none appearance-none outline-none shadow-none w-full focus:outline-none  disabled:text-gray-200"
        onChange={(e) => onselect(e.target.value)}
        onClick={clickHandler}
        value={selectValue?.name || ""}
      /> */}
      <select
        {...register(selectValue)}
        placeholder={title}
        className="text-black/35 lg:text-[#2C2C2C] border-none appearance-none focus:outline-none outline-none rounded-none
         shadow-none w-full   disabled:text-gray-200 p-1 "
        //onChange={(e) => onselect(e.target.value)}
        // onClick={clickHandler}
        //value={selectValue?.name || ""}
      >
        <option
          value=""
          className="text-[#282828B2] bg-[#F8F8F8] text-[13px] "
          defaultValue={title}
        >
          {title}
        </option>
        {cities.map((city) => (
          <option value={city.id} key={city.id} className="">
            {city.name}
          </option>
        ))}

        {/* <option value="1" className="">
          تهران
        </option>
        <option value="2">سنندج</option> */}
      </select>
    </div>
  );
}

export default SelectLocation;
