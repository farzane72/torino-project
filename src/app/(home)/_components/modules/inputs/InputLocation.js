import ModalLocation from "../modals/ModalLocation";
//import DataPiker from "../../modules/DataPiker";
function InputLocation({
  icon,
  className,
  title,
  onSelect,
  onOPen,
  isOpen,
  selectValue,
}) {
  // icon="HiOutlineLocationMarker"
  // className="  w-[328px] md:w-[528px]  lg:w-[874px] lg:h-[71px] "
  // title="مبدا"
  // state={origin}
  // openState={isOpenOrigin}
  // onSelect={setOrigin}
  // onOPen={SetIsOpenOrigin}
  return (
    <div
      className={` relative flex  justify-center items-center  gap-2 p-2  text-black/35 text-base  font-normal  border rounded-md border-[#00000033]
                lg:text-[#2C2C2C]  lg:justify-start   
               ${className} `}
    >
      {icon}
      {/* <span className="">مبدا</span> */}
      <input
        placeholder={title}
        className="placeholder:text-black/35 lg:placeholder:text-[#2C2C2C] border-none appearance-none outline-none shadow-none w-full focus:outline-none  disabled:text-gray-200"
        onChange={(e) => onselect(e.target.value)}
        onClick={() => onOPen(true)}
        value={selectValue}
      />

      {
        <>
          <ModalLocation onSelect={onSelect} onOPen={onOPen} isOpen={isOpen} />

          {/* {title === "تاریخ" && <DataPiker isOpen={isOpen} onOPen={onOPen}
           calendarValue={stateValue} setCalendarValue={onSelect} />} */}
        </>
      }
    </div>
  );
}

export default InputLocation;
