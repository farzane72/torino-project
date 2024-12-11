import Image from "next/image";

function Footer() {
  return (
    <footer className="flex flex-col gap-4 lg:container mx-auto px-16 py-4">
      <div className="w-full h-[2px] bg-black/10 rounded-md mx-4"></div>
      <div className="flex flex-col lg:flex-row py-4  ">
        <div className=" flex   justify-between lg:basis-1/3">
          <div className=" flex flex-col ">
            <p className="text-2xl py-4">تورینو</p>
            <span className="text-lg">درباره ما</span>
            <span className="text-lg">تماس با ما</span>
            <span className="text-lg">چرا تورینو؟</span>
            <span className="text-lg">بیمه مسافرتی</span>
          </div>
          <div className=" flex flex-col  ">
            <p className="text-2xl py-4 ">خدمات مشتریان</p>
            <span className="text-lg "> پشتیبانی آنلاین</span>
            <span className="text-lg">راهنمای خرید</span>
            <span className="text-lg "> راهنمای استرداد </span>
            <span className="text-lg "> پرسش و پاسخ </span>
          </div>
        </div>
        <div className=" flex basis-full lg:basis-2/3 lg:flex-col-reverse mt-8 lg:mt-0 gap-6 ">
          <div className="flex flex-wrap   basis-1/2 lg:basis-0  lg:self-end  gap-6">
            <img
              src="/images/ecunion.png"
              className="w-[35px] height-[38px]  md:w-[68px] md:height-[74px]"
            />
            <img
              src="/images/samandehi.png"
              className="w-[34px] height-[38px]  md:w-[67px] md:height-[74px]"
            />
            <img
              src="/images/aira.png"
              className="w-[35px] height-[38px]  md:w-[68px] md:height-[74px]"
            />
            <img
              src="/images/state-airline.png"
              className="w-[40px] height-[38px]  md:w-[78px] md:height-[74px]"
            />
            <img
              src="/images/passenger-rights.png"
              className="w-[36px] height-[38px]   md:w-[71px] md:height-[74px]"
            />
          </div>
          <div
            dir="ltr"
            className="flex  flex-col basis-1/2 self-start lg:basis-0 lg:self-end justify-between gap-8  "
          >
            <div className="">
              <Image
                src="/images/torino.png"
                width={146}
                height={44}
                alt="logo of torino"
              />
            </div>
            <div className=" text-[15px]">
              <span>تلفن پشتیبانی:</span>
              <span>8574</span>
              <span>-021</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" h-[1px] bg-black/15   mx-[-64px]"></div>
        <div className="text-center mt-4 text-[15px]">
          کلیه حقوق این وب سایت متعلق به تورینو میباشد.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
