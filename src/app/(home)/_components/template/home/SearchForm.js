"use client";
import { useForm, Controller } from "react-hook-form";
import SelectLocation from "../../modules/inputs/SelectLocation";
import { HiOutlineLocationMarker } from "react-icons/hi";
import SelectDate from "../../modules/inputs/SelectDate";
import { useState } from "react";
import { flattenObject } from "@/utils/helper";
import { useGetAllTours } from "@/app/(home)/_api/main/queries";
import { useEffect } from "react";
import Loading from "../../modules/Loading";
import TourList from "../../modules/tour/TourList";
import { useRouter } from "next/navigation";
import QueryString from "qs";
import useQuery from "@/core/hooks/query";
import { useSearchParams } from "next/navigation";
function SearchForm({ tours }) {
  const [query, setQuery] = useState("");
  const { register, handleSubmit, control, reset } = useForm();
  const router = useRouter();
  const {
    //data: tours,
    isPending,
    isSuccess,
    isError,
    error,
    status,
    refetch,
  } = useGetAllTours(query);
  //console.log(tours);

  const { getQuery } = useQuery();
 
  useEffect(() => {
    const originId = getQuery("originId");
    const destinationId = getQuery("destinationId");
    if (originId && destinationId) reset({ originId, destinationId });
    console.log({ originId, destinationId });
  }, []);

  // useEffect(() => {
  //   refetch();

  // }, [query]);

  const onSubmit = (data, e) => {
    e.preventDefault();
    // console.log(data);
    // const newData=data.date?{...data}:{...data,date:""}
    // console.log(newData);
    // setQuery(flattenObject(newData));

    const query = QueryString.stringify(flattenObject(data));
    console.log(query);
    router.push(`/?${query}`);
  };
  //if(isPending) return <Loading />
  //if(isError) return <div>{error.message}</div>

  return (
    <div className="mt-8 container mx-auto  p-4 flex flex-col items-center overscroll-x-none">
      <h1 className="text-base md:text-xl lg:text-[28px] font-semibold">
        <span className="text-[#28A745]">تورینو</span>
        <span className="text-[#595959]">
          برگزار کننده بهترین تور های داخلی و خارجی{" "}
        </span>
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8  mt-8  w-[328px] md:w-[528px]  lg:w-[874px] lg:h-[71px]   lg:flex-row lg:gap-0  lg:rounded-md lg:border lg:border-[#00000033]
                        lg:p-2 "
      >
        <div className="flex justify-between lg:flex-none">
          <SelectLocation
            register={register}
            icon={<HiOutlineLocationMarker size={18} />}
            className="lg:border-none "
            title="مبدا"
            selectValue="originId"
            tours={tours}
          />

          <SelectLocation
            register={register}
            icon={<HiOutlineLocationMarker size={18} />}
            className="lg:border-r lg:border-y-0 lg:border-l-0 lg:rounded-none "
            title="مقصد"
            selectValue="destinationId"
            tours={tours}
          />
        </div>

        <SelectDate
          register={register}
          Controller={Controller}
          control={control}
        />

        {/* <input
       
       className="cursor-pointer bg-[#28A745] text-white rounded-2xl w-[328px] h-[47px]
            md:w-[528px] lg:h-[51px] lg:w-[218px] text-[20px] font-normal   "
            placeholder="جستجو"
             type="submit"
          
      /> */}

        <button
          className="cursor-pointer bg-[#28A745] text-white rounded-2xl w-[328px] h-[47px]
            md:w-[528px] lg:h-[51px] lg:w-[218px] text-[20px] font-normal   "
          type="submit"
        >
          جستجو
        </button>
      </form>

      {/* <TourList data={tours} /> */}
    </div>
  );
}

export default SearchForm;

//for render server

// import { Hydrate, QueryClient, dehydrate } from "@tanstack/react-query";
// import getQueryClient from "@/lib/getQueryClient";

// export default async function Page() {
//   const queryClient = getQueryClient();

//   await queryClient.prefetchQuery(["data"], async () => {
//     const res = await fetch("https://api.example.com/data");
//     return res.json();
//   });

//   const dehydratedState = dehydrate(queryClient);

//   return (
//     <Hydrate state={dehydratedState}>
//       {/* کامپوننت‌های کلاینت */}
//     </Hydrate>
//   );
// }
