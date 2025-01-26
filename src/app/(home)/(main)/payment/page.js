"use client";

import useQuery from "@/core/hooks/query";
import Link from "next/link";

function PaymentPage() {
  const { getQuery } = useQuery();

  const status = getQuery("status");

  if (status === "success")
    return (
      <div className="flex justify-center mt-44 h-screen">
        <div className="flex  flex-col  gap-8 text-lg items-center ">
          <p className="text-green-900">پرداخت شما با موفقیت انجام شد</p>
          <Link href="/profile/my-tours" className="text-rose-500">
            برو به پروفایل
          </Link>
        </div>
      </div>
    );

  return (
    <div className="flex justify-center mt-44 h-screen">
      <div className="flex  flex-col  gap-8 text-lg items-center ">
        <p className="text-rose-500">پرداخت انجام نشد</p>
        <Link href="/profile/my-tours" className="text-rose-500">
          برو به پروفایل
        </Link>
      </div>
    </div>
  );
}

export default PaymentPage;
