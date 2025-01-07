import { publicAxios } from "@/core/services/publicAxios";
import Image from "next/image";
import { FaUserCheck } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import TextWithIcon from "@/app/(home)/_components/modules/TextWithIcon";
import { FaBus } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { SiSpringsecurity } from "react-icons/si";
import Link from "next/link";
import { TbRouteSquare2 } from "react-icons/tb";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import RezerveButton from "@/app/(home)/_components/modules/buttons/RezerveButton";
import { serverFetch } from "@/core/services/http-server";
export default async function detailTour({ params, searchParams }) {
  const resolvedParams = await params;

  const { tourId } = resolvedParams;
  const moment = require("jalali-moment");

  //const res = await publicAxios.get(`tour/${tourId}`);
  // const data = await res.data;
  const data = await serverFetch(`tour/${tourId}`, "", { cache: "no-store" });
  //console.log(data);

  return (
    <div className="flex justify-center mx-auto md:bg-neutral-200 h-screen ">
      <div className="md:border md:rounded-lg p-4 w-[340px] md:w-[600px] md:h-[600px] lg:h-[427px] lg:w-[900px] 2xl:w-[1188px] mt-8 bg-white ">
        <div className="flex flex-col lg:flex-row gap-4">
          <Image
            className="rounded-md w-[330px] h-[220px] md:w-full lg:w-[397px] lg:h-[265px] "
            src={data.image}
            width={300}
            height={200}
            alt={data.title}
          />
          <div className="flex flex-col w-full gap-8 ">
            <div className="flex justify-between md:flex-col gap-4 mt-8">
              <h1 className="font-bold text-[24px] lg:text-[32px]">
                {data.title}
              </h1>
              <span className="text-base lg:text-xl font-normal text-[#282828] lg:text-[#000000] ">
                5 روز و 4 شب
              </span>
            </div>
            <div className="flex justify-between text-[#7D7D7D] text-[13px] lg:text-xl lg:justify-start lg:gap-8 ">
              <TextWithIcon
                icon={
                  <FaUserCheck className="w-[14px] h-[14px] lg:w-[24px] lg:h-[24px]" />
                }
                text="تورلیدر از مبدا"
              />
              <TextWithIcon
                icon={
                  <FaMap className="w-[14px] h-[14px] lg:w-[24px] lg:h-[24px]" />
                }
                text="برنامه سفر"
              />
              <TextWithIcon
                icon={
                  <FaMap className="w-[14px] h-[14px] lg:w-[24px] lg:h-[24px]" />
                }
                text="تضمین کیفیت"
              />
            </div>
            <div className="flex justify-between lg:hidden ">
              <TourOption
                icon={
                  <FaBus className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]" />
                }
                text="حمل و نقل"
                className="text-base lg:text-lg text-[#444444] "
                option={data.fleetVehicle}
              />

              <TourOption
                icon={
                  <FaUserFriends className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]" />
                }
                text="ظرفیت"
                className="text-base lg:text-lg text-[#444444] "
                option={data.availableSeats}
              />

              <TourOption
                icon={
                  <SiSpringsecurity className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]" />
                }
                text="بیمه"
                className="text-base lg:text-lg text-[#444444] "
                option={data.insurance ? "بیمه دارد" : "بیمه ندارد"}
              />
            </div>
            <div className="flex justify-between lg:flex-row-reverse">
              {/* <Link
                className="bg-[#28A745] p-2 rounded-md text-xl lg:text-2xl text-white w-[154px] h-[42px]  lg:w-[204px] lg:h-[53px] flex justify-center
                  items-center"
                href={``}
              >
                رزرو و خرید
              </Link> */}

              <RezerveButton id={data.id} />
              <div className="flex gap-2 items-center">
                <span className="text-2xl text-[28px] text-[#009ECA]">
                  {data.price}
                </span>
                <span className="text-[10px] lg:text-sm text-[#000000]">
                  تومان
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden  lg:flex lg:justify-between lg:mt-8 lg:p-4">
          <TourOption
            icon={
              <TbRouteSquare2 className="w-[14px] h-[14px] lg:w-[18px] lg:h-[18px]" />
            }
            text="مبدا"
            className="text-base lg:text-lg text-[#444444] "
            option={data?.origin?.name}
          />
          <Line />

          <TourOption
            icon={
              <BsFillCalendarWeekFill className="w-[14px] h-[14px] lg:w-[18px] lg:h-[18px]" />
            }
            text="تاریخ رفت"
            className="text-base lg:text-lg text-[#444444] "
            option={moment(data.startDate, "YYYY-MM-DDTHH:mm:ss.SSSZ")
              .locale("fa")
              .format("YYYY/MM/DD")}
          />
          <Line />
          <TourOption
            icon={
              <BsFillCalendarWeekFill className="w-[14px] h-[14px] lg:w-[18px] lg:h-[18px]" />
            }
            text="تاریخ برگشت"
            className="text-base lg:text-lg text-[#444444] "
            option={moment(data.endDate, "YYYY-MM-DDTHH:mm:ss.SSSZ")
              .locale("fa")
              .format("YYYY/MM/DD")}
          />
          <Line />

          <TourOption
            icon={
              <FaBus className="w-[14px] h-[14px] lg:w-[18px] lg:h-[18px]" />
            }
            text="حمل و نقل"
            className="text-base lg:text-lg text-[#444444] "
            option={data.fleetVehicle}
          />
          <Line />

          <TourOption
            icon={
              <FaUserFriends className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]" />
            }
            text="ظرفیت"
            className="text-base lg:text-lg text-[#444444] "
            option={data.availableSeats}
          />
          <Line />

          <TourOption
            icon={
              <SiSpringsecurity className="w-[14px] h-[14px] lg:w-[18px] lg:h-[18px]" />
            }
            text="بیمه"
            className="text-base lg:text-lg text-[#444444] "
            option={data.insurance ? "بیمه دارد" : "بیمه ندارد"}
          />
        </div>
      </div>
    </div>
  );
}

function TourOption({ icon, text, className, option }) {
  return (
    <div className="flex flex-col gap-2 ">
      <TextWithIcon icon={icon} text={text} className={className} />
      <span className="text-sm lg:text-base">{option}</span>
    </div>
  );
}
function Line() {
  return <div className="w-[1px] h-[60px] rounded-lg bg-[#33323240] "></div>;
}
