"use client";
import { useState } from "react";
import ModalLocation from "../modals/ModalLocation";
//import DataPiker from "../../modules/DataPiker";

function InputLocation({
  icon,
  className,
  title,
  onSelect,
  // onOPen,
  // isOpen,
  selectValue,
  tours,
}) {
  const [location, setLocation] = useState([]);
  const [isOpenLocation, setIsOpenLocation] = useState(false);
  
  console.log(isOpenLocation);

  const uniqueCities = (key) => {
    return Array.from(
      tours
        .reduce((map, item) => {
          const { id, name } = item[key];
          if (!map.has(id)) {
            map.set(id, { id, name });
          }
          return map;
        }, new Map())
        .values()
    );
  };

  //console.log(location);
  const clickHandler = () => {
    setIsOpenLocation(true);
    if (title === "مبدا") {
      setLocation(() => uniqueCities("origin"));
    }
    if (title === "مقصد") {
      setLocation(() => uniqueCities("destination"));
    }
  };

  return (
    <div
      className={` relative flex  justify-center items-center  gap-2 p-2  text-black/35 text-base  font-normal  border rounded-md border-[#00000033]
                lg:text-[#2C2C2C]  lg:justify-start   
               ${className} `}
    >
      {icon}

      <input
        placeholder={title}
        className="placeholder:text-black/35 lg:placeholder:text-[#2C2C2C] border-none appearance-none outline-none shadow-none w-full focus:outline-none  disabled:text-gray-200"
        onChange={(e) => onselect(e.target.value)}
        onClick={clickHandler}
        value={selectValue?.name || ""}
      />

      {
        <>
          <ModalLocation
            onSelect={onSelect}
            onOPen={setIsOpenLocation}
            isOpen={isOpenLocation}
            options={location}
          />
        </>
      }
    </div>
  );
}

export default InputLocation;
