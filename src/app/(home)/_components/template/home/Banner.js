import { FaPhoneAlt } from "react-icons/fa";
function Banner() {
  return (
    <div className="mt-8 container mx-auto  p-4 ">
      <div className="border rounded-md  flex flex-col  lg:flex-row">
        <div className="lg:basis-2/3 bg-[#28A745] h-[138px] lg:h-[251px] rounded-md px-4  md:pt-2  md:px-12 flex justify-between 
              ">
              {/* //  w-[327px] h-[277px] lg:w-full lg:h-auto */}
          <div className="flex flex-col gap-4 text-white md:mt-2 self-center  ">
            <div className="text-[22px]  md:text-4xl lg:text-5xl   font-bold md:tracking-wide ">
              <span className=""> خرید تلفنی از </span>

              <span className="text-[#10411B]"> تورینو</span>
            </div>
            <p className="text-[14px] md:text-[22px] lg:text-[28px]  2xl:text-[32px] md:tracking-wide">به هرکجا که میخواهید!</p>
          </div>

          <img src="images/animation.png" className="w-[195px] h-[158px] md:w-[308]px] md:h-[158px]  lg:h-[225px] self-end " />
        </div>
        <div className="lg:basis-1/3 flex  justify-between lg:flex-col lg:justify-center items-center p-8 lg:p-0">
          <div className="flex gap-2 items-center">
            {/* <div className="flex  items-center justify-center"> */}
            <span className="text-xl text-[28px] font-bold ">021-1840</span>
            {/* </div> */}
           
           <FaPhoneAlt  className="-mt-2  w-[15px] h[15px]  md:w-[18px] md:-h[18px]" />
          </div>
          <div className="flex justify-center items-center text-white rounded-md bg-[#10411B] px-6 py-2">
          اطلاعات بیشتر
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
