import Image from "next/image";
import Link from "next/link";
import BuyButton from "../buttons/BuyButton";
function Tour({ tourData }) {
  //console.log(tourData.image);
  return (
    <div className="w-[327px]   md:w-[278] flex flex-col gap-2 border rounded-lg ">
      <Image
        src={tourData.image}
        width={327}
        height={159}
        className=""
        //layout="fill"

        alt={tourData.image}
      />
      <div className="flex flex-col gap-2 font-normal">
        <p className="text-[22px]  pr-2 mt-2">{tourData.title}</p>
        <div className="text-[15px] text-[#282828B2] truncate w-[305px]  pr-2">
          <span> {tourData.fleetVehicle} </span>
          {tourData.options
            ? tourData.options.map((option) => (
                <span key={option}>-{option} </span>
              ))
            : ""}
        </div>
        <hr className="bg-[#D9D9D9]" />
        <div className="flex justify-between  p-2">
          {/* <Link
            className="bg-[#28A745] p-2 rounded-md text-white w-[64px] h-[25px]  md:w-[99px] md:h-[29px] flex justify-center
         items-center"
            href={`/detail-tour/${tourData.id}`}
          >
            رزرو
          </Link> */}
          <BuyButton text="رزرو" url={`/detail-tour/${tourData.id}`} />
          <div className="flex gap-2 items-center">
            <span className="text-base text-[#009ECA]">{tourData.price}</span>
            <span className="text-xs text-[#000000]">تومان</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tour;
