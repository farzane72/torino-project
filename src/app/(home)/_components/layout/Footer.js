import Image from "next/image";
function Footer() {
  return (
    <footer className="flex flex-col gap-4 lg:container mx-auto px-16 py-4">
      <div className="w-full h-[2px] bg-black/10 rounded-md mx-4"></div>
      <div className="flex py-4">
        <div className="basis-1/3 flex justify-between">
          <div className=" flex flex-col">
            <p className="text-2xl py-4">تورینو</p>
            <span className="text-lg">درباره ما</span>
            <span className="text-lg">تماس با ما</span>
            <span className="text-lg">چرا تورینو؟</span>
            <span className="text-lg">بیمه مسافرتی</span>
          </div>
          <div className=" flex flex-col">
            <p className="text-2xl py-4">خدمات مشتریان</p>
            <span className="text-lg"> پشتیبانی آنلاین</span>
            <span className="text-lg"> راهنمای خرید</span>
            <span className="text-lg"> راهنمای استرداد </span>
            <span className="text-lg"> پرسش و پاسخ </span>
          </div>
        </div>
        <div className="basis-2/3 flex flex-col gap-4  ">
          <div className="self-end">
            <Image
              src="/images/torino.png"
              width={146}
              height={44}
              alt="logo of torino"
            />
          </div>
          <div className="self-end text-[15px]">
            <span>
            تلفن پشتیبانی:
            </span>
            <span>
            8574
            </span>
            <span>
            -021
            </span>
           
         
          </div>
          <div className="self-end flex gap-6">
            <img   src="/images/state-airline.png"  />
            <img   src="/images/passenger-rights.png"  />
            <img   src="/images/ecunion.png"  />
            <img   src="/images/samandehi.png"  />
            <img   src="/images/aira.png"  />
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
