"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useAddToBasket } from "@/app/(home)/_api/main/mutations";

function RezerveButton({ id }) {
    const router = useRouter();
    const { isPending,mutate} = useAddToBasket();
   

  const cartHandler = () => {
   // if (isPending) return 

    mutate(id, {
      
      onSuccess: (res) => {
        toast.success(res.data.message);
        router.push("/checkout")
      }})
      
     
   // });


   
      
    
      

    
  };
  return (
    <button
      type="button"
      className="bg-[#28A745] p-2 rounded-md text-white w-[64px] h-[25px]  md:w-[99px] md:h-[29px] flex justify-center
         items-center"
      onClick={cartHandler}
     
    >
     رزرو و خرید
    </button>
  );
}

export default RezerveButton;
