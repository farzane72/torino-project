import Link from "next/link";
import TextWithIcon from "../../modules/TextWithIcon";
import { HiMiniUser } from "react-icons/hi2";
import { PiSunHorizonFill } from "react-icons/pi";
import { PiCardsFill } from "react-icons/pi";
function ProfileLayoat({ children }) {
  return (
    <div className="h-screen ">
      <div className="flex flex-col lg:flex-row gap-4 p-4">
        <div className="lg:basis-1/5  border-b lg:border lg:rounded-lg  flex justify-center lg:justify-start lg:flex-col overflow-hidden">
          <Link className=" border-b p-4 lg:focus:bg-[#28A74540] focus:text-[#28A745] active:bg-[#28A74540] active:text-[#28A745] " href="/profile">
            <TextWithIcon text="پروفایل" icon={<HiMiniUser size={20} />} />
          </Link>
          <Link className=" border-b p-4 lg:focus:bg-[#28A74540] focus:text-[#28A745] " href="/profile/my-tours">
            <TextWithIcon text="تور های من" icon={<PiSunHorizonFill size={20} />} />
          </Link>
          <Link className=" border-b p-4 lg:focus:bg-[#28A74540] focus:text-[#28A745] " href="/profile/transactions">
            <TextWithIcon text="تراکنش ها" icon={<PiCardsFill size={20} />} />
          </Link>
        </div>
        <div className="lg:basis-4/5 border rounded-md p-4">{children}</div>
      </div>
    </div>
  );
}

export default ProfileLayoat;
