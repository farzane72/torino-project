"use client";
import { useGetUserData } from "@/app/(home)/_api/main/queries";
import Loading from "@/app/(home)/_loading";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { redirect } from "next/navigation";
function AuthProvider({ children }) {
  const { router } = useRouter();
  const { data, isPending, isSuccess } = useGetUserData();

  useEffect(() => {
    if (!isPending && !data) redirect("/");
  }, [isPending, router]);

  if (isPending) return <Loading />;

  return children;
}

export default AuthProvider;
