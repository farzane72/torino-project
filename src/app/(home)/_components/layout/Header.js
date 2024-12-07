import Image from "next/image";
function Header() {
  return (
    <header className="flex justify-between  items-center lg:container mx-auto px-16 py-4 sticky top-0 bg-white ">
      <div>
        <Image
          src="/images/torino.png"
          width={146}
          height={44}
          alt="logo of torino"
        />
      </div>
      <div className="flex  gap-8  cursor-pointer items-center">
        <div className="text-[#28A745] hover:text-[#28A745]  ">
          صفحه اصلی
        </div>
        <div className="color-[#282828] hover:text-[#28A745]">
          خدمات گردشگری
        </div>
        <div className="hover:text-[#28A745]">درباره ما</div>
        <div className="hover:text-[#28A745]">تماس با ما</div>
      </div>
      <div className=" flex items-center  border border-[#28A745] rounded-md p-2 ">
        <div className="flex items-center">
          <img src="/images/frame.png" className="w-6 h-6" />
        </div>
        <div className="flex gap-2 items-center align-middle justify-center text-[#28A745] ">
         
          <span>ورود</span>
          <span>|</span>
          <span>ثبت نام</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
