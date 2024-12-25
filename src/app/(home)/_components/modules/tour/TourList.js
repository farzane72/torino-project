"use client";
import Tour from "./Tour";
import { useState,useEffect } from "react";
import { RxCaretDown } from "react-icons/rx";
function TourList({ data }) {
  //const [widthScreen,setWidthScreen]=useState("")
  const [isOpenShowAllTours, setIsOpenShowAllTours] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  console.log(isMobile);
  console.log(data.slice(0,4));

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="grid justify-items-start ">
      <h1 className="text-[20px] md:text-[32px] text-right my-4">همه تورها</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4 gap-4">
        {isMobile ? (
          <>
            {data.slice(0, 4).map((tour) => (
              <Tour key={tour.id} tourData={tour} />
            ))}
            <div className="flex justify-center items-center mt-2 text-[13px] text-[#00000080] gap-1 cursor-pointer">
            <p onClick={() => setIsOpenShowAllTours(true) }
            
              >مشاهده بیشتر</p>
              <RxCaretDown size={13} />

            </div>
           

            {isOpenShowAllTours
              ? data
                  .slice(4)
                  .map((tour) => <Tour key={tour.id} tourData={tour} />)
              : ""}
          </>
        ) : (
          data.map((tour) => <Tour key={tour.id} tourData={tour} />)
        )}
      </div>
    </div>
  );
}

export default TourList;


