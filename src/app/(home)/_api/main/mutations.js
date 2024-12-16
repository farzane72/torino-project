import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createData } from "@/core/services/http-service";
import toast from "react-hot-toast";
import SetCookie from "@/core/hooks/setCookie";

const sendOtp = async (data) => {
  const url = `auth/send-otp/`;
  return createData(url, data);
};

const checkOtp = async (data) => {
  const url = `auth/check-otp/`;
  return createData(url, data);
};

export const useSendOtp = () => {
  //const client = useQueryClient();
  const { mutate, mutateAsync, isPending, isError,isSuccess } = useMutation({
    mutationKey: ["SendOtp"],
    mutationFn: (data) => sendOtp(data),

    onError: (e, y, context) => {
      // client.setQueryData(['users'],context)
      toast.error(" خطایی رخ داده است،لطفا مجدد تلاش نمایید");
      console.log(e);
    },
   onSuccess: (res) => {
      console.log(res);
     
   },
  });
  return { mutate, mutateAsync, isPending,isSuccess };
};

export const useCheckOtp = () => {
  //const client = useQueryClient();
  const { mutate, mutateAsync, isPending, isError,isSuccess } = useMutation({
    mutationKey: ["SendOtp"],
    mutationFn: (data) => checkOtp(data),

    onError: (e, y, context) => {
      // client.setQueryData(['users'],context)
      toast.error("وجود خطا");
      console.log(e);
    },
   onSuccess: (res) => {
      console.log(res);
      SetCookie("accessToken",res?.accessToken,30)
      SetCookie("refreshToken",res?.refreshToken,360)
     
   },
  });
  return { mutate, mutateAsync, isPending,isSuccess };
};
