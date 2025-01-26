"use client";
import TextWithIcon from "../../modules/TextWithIcon";
import { HiUser } from "react-icons/hi2";
import { Controller } from "react-hook-form";
import SelectBirthDate from "../../modules/inputs/SelectBirthDate";
import InputForm from "../../modules/inputs/InputForm";
//import { useGetUserData } from "@/app/(home)/_api/main/queries";

function PersonalInfo({ userData,status }) {
  //console.log(data);
  // const { data: userData, isPending, isSuccess } = useGetUserData();
  return (
    <>
      {/* <div className="flex flex-col  gap-4"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mt-4">
        <div className="flex gap-2 ">
            <span className=""> نام و نام خانوادگی:</span>
            
            <span className="">{userData.firstName || "--"}</span>
          </div>
          <div className="flex gap-2 ">
            <span className="">کدملی :</span>
            <span className="">{userData.nationalCode || "--"}</span>
          </div>
          <div className="flex gap-2 ">
            <span className="">جنسیت:</span>
            <span className="">{userData.gender || "--"}</span>
          </div>
          <div className="flex gap-2 ">
            <span className=""> تاریخ تولد:</span>
            <span className="">{userData.birthDate || "--"}</span>
          </div>
        {/* <div className="flex gap-2  w-full ">
          <span className="text-nowrap"> نام و نام خانوادگی:</span>
          {userData.firstName ? (
            <span className="">{userData.firstName}</span>
          ) : (
            <input
              {...register("firstName")}
              className=" outline-none   "
              value={userData.firstName}
              readOnly
            />
          )}
        </div>
        <div className="flex gap-2 ">
          <span className="">کدملی :</span>
          {userData.nationalCode ? (
            <span className="">{userData.nationalCode}</span>
          ) : (
            <input
              {...register("nationalCode")}
              className=" outline-none  "
              value={userData.nationalCode}
              readOnly
            />
          )}
        </div>

        <div className="flex gap-2 ">
          <span className="">جنسیت:</span>

          {userData.gender ? (
            <span className="">
              {userData.gender === "female" ? "خانم" : "آقا"}
            </span>
          ) : (
            <input
              {...register("gender")}
              className="outline-none "
              readOnly
              value={userData.gender === "female" ? "خانم" : "آقا"}
            />
          )}
        </div>

        <div className="flex gap-2 ">
          <span className=""> تاریخ تولد:</span>
          {userData.birthDate ? (
            <span className="">{userData.birthDate}</span>
          ) : (
            <input
              {...register("birthDate")}
              className=" outline-none   "
              readOnly
              value={userData.birthDate}
            />
          )}
        </div> */}
      </div>
    </>
  );
}

export default PersonalInfo;
