function Services() {
  return (
    <div className="flex flex-col gap-8 lg:container mx-auto p-4 overscroll-x-none">
      <div className=" h-[1px] bg-black/15   mx-[-64px]"></div>
      <div className="flex flex-col gap-4 md:flex-row  md:gap-8 md:justify-between ">

        <div className="flex gap-4 items-center justify-start md:w-[331px] md:h-[109px] ">
          <img src="/images/discount.png" className="w-[80px] h-[80px]" />
          <div className="flex  flex-col">
            <h3 className=" text-sm md:text-[20px] lg:text-[26px]">بصرفه ترین قیمت</h3>
            <p className="text-xs md:text-sm lg:text-base font-light text-wrap">بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.</p>
          </div>
        </div>
        
        <div className="flex gap-4 items-center justify-start md:w-[331px] md:h-[109px]" >
        <img src="/images/message.png"  className="w-[80px] h-[80px]" />
          <div className="flex flex-col">
            <h3 className=" text-sm md:text-[20px] lg:text-[26px]">پشتیبانی</h3>
            <p className="text-xs md:text-sm lg:text-base font-light text-wrap">پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.</p>
          </div>
        </div>

        <div className="flex gap-4 items-center  md:w-[331px] md:h-[109px]">
        <img src="/images/heart.png"  className="w-[80px] h-[80px]" />
          <div className="flex flex-col items-start">
            <h3 className=" text-sm md:text-[20px] lg:text-[26px]">رضایت کاربران</h3>
            <p className="text-xs md:text-sm lg:text-base font-light text-wrap">رضایت بیش از 10هزار کاربر از تور های ما. </p>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Services;
