//import BuyButton from "@/app/(home)/_components/modules/buttons/BuyButton";
function ReservePage() {
  return (
    <div className="flex justify-center mx-auto md:bg-neutral-200 h-screen ">
      <div
        className=" w-[340px] md:w-[600px] md:h-[600px] lg:h-[427px] lg:w-[900px] 2xl:w-[1188px] mt-8 
      flex items-center  "
      >
        <div className="border rounded-lg p-4 bg-white">
          <div></div>
          <div className="flex flex-col lg:flex-row gap-2">
            <span>نام</span>
            <span>کدملی</span>
            <span>تولد</span>
          </div>
          <div>جنسیت</div>
        </div>
        <div className="border rounded-lg p-4 bg-white flex flex-col">
            <div className="flex justify-between">
              <h3>hh</h3>
              <p>5 روز و 4 شب</p>
            </div>
            <div className="flex justify-between">
                <span>قیمت نهایی</span>
               <div className="flex gap-2">
                <span></span>
                <span>تومان</span>
               </div>
            </div>
            {/* <BuyButton text="ثبت و خرید نهایی" url="" /> */}

        </div>
      </div>
    </div>
  );
}

export default ReservePage;
