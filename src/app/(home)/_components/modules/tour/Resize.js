"use client";

import { useState, useEffect } from "react";
import { RxCaretDown } from "react-icons/rx";
import { useRouter } from "next/navigation";
import useQuery from "@/core/hooks/query";

function Resize() {
  const [isOpenShowAllTours, setIsOpenShowAllTours] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { addQuery, removeQuery } = useQuery();
  //console.log(isMobile);
  //console.log(data.slice(0,4));

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
  if (isMobile) {
    addQuery("isMobileSize", "true");
  } else {
    removeQuery("isMobileSize");
  }

  return <div></div>;
}

export default Resize;
