"use client";

import { useRouter } from "next/navigation";

function BuyButton({ text, url }) {
    const router = useRouter();
  return (
    <button
      type="button"
      className="bg-[#28A745] p-2 rounded-md text-white w-[64px] h-[25px]  md:w-[99px] md:h-[29px] flex justify-center
         items-center"
      onClick={() => router.push(url)}
    >
      {text}
    </button>
  );
}

export default BuyButton;
