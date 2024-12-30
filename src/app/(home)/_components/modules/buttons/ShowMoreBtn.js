"use client";

import { useState, useEffect } from "react";
import { RxCaretDown } from "react-icons/rx";
import { useRouter } from "next/navigation";
import useQuery from "@/core/hooks/query";


function ShowMoreBtn({searchParams}) {
    const [isOpenShowAllTours, setIsOpenShowAllTours] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const { addQuery, removeQuery } = useQuery();
    //console.log(isMobile);
    //console.log(data.slice(0,4));
    const router = useRouter();
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      //  if(isMobile) router.push(`?isMobileSize=true`);
      };
  
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);

      };
    }, []);

    
   
        const clickHandler=()=>{
          //  router.push(`?showAllTours=true`);
           // router.push(`?page=2`);
            addQuery("page","2")
        }
       if(!isMobile)   return
       if( searchParams?.page  ) return
     //  if( searchParams?.page && data.length<4) return

     //  if(isMobile && searcParams?.page)   return
    return (
        <>
       
         <div className="flex justify-center items-center mt-2 text-[13px] text-[#00000080] gap-1 cursor-pointer">
                <p onClick={clickHandler}>مشاهده بیشتر</p>
                <RxCaretDown size={13} />
              </div>
        </>
       
    )
}

export default ShowMoreBtn
