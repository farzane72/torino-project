import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createData, updateData } from "@/core/services/http-service";
import toast from "react-hot-toast";
import SetCookie from "@/core/hooks/setCookie";
import { privateAxios } from "@/core/services/privateAxios";

const sendOtp = async (data) => {
  const url = `auth/send-otp/`;
  return createData(url, data);
};

const checkOtp = async (data) => {
  const url = `auth/check-otp/`;
  return createData(url, data);
};

const tourOdrder = async (data) => {
  const url = `order`;
  // return createData(url, data);
  const res = privateAxios.post(url, data);
  console.log(res.message);
  return res;
};
const abbBasket = async (id) => {
  const res = privateAxios.put(`basket/${id}`);
  if (!res.ok) {
    toast.error(
      " برای رزرو  تور لطفا ابتدا عملیات ورود به سایت را انجام دهید"
    );
  }
  return res;
};

//----------------------------------------------------------------------------------------------------------------------
export const useSendOtp = () => {
  //const client = useQueryClient();
  const { mutate, mutateAsync, isPending, isError, isSuccess } = useMutation({
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
  return { mutate, mutateAsync, isPending, isSuccess };
};
//-----------------------------------------------------------------------------------------------------------------------------------

export const useCheckOtp = () => {
  const client = useQueryClient();
  const { mutate, mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationKey: ["SendOtp"],
    mutationFn: (data) => checkOtp(data),

    onError: (e, y, context) => {
      // client.setQueryData(['users'],context)

      toast.error("وجود خطا");
      console.log(e);
    },
    onSuccess: async (res) => {
      console.log(res);
      SetCookie("accessToken", res?.accessToken, 30);
      SetCookie("refreshToken", res?.refreshToken, 360);
      client.invalidateQueries({ queryKey: ["GetUserData"] });
    },
  });
  return { mutate, mutateAsync, isPending, isSuccess };
};
//-----------------------------------------------------------------------------------------------------------------------------------
export const useOrder = () => {
  const client = useQueryClient();
  const { mutate, mutateAsync, isPending, isError, isSuccess } = useMutation({
    mutationKey: ["Order"],
    mutationFn: (data) => tourOdrder(data),

    onError: (e, y, context) => {
      // client.setQueryData(['users'],context)
      toast.error("وجود خطا");
      console.log(e);
    },
    onSuccess: async () => {
      //  console.log(res);
      toast.success("سفارش شما با موفقیت ثبت شد");
      //سبد خریدآپدیت شه my tours
      // client.invalidateQueries({queryKey:['GetUserData']})
    },
  });
  return { mutate, mutateAsync, isPending, isSuccess };
};

//-----------------------------------------------------------------------------------------------------------------------------------

export const useAddToBasket = () => {
  // const mutationFn = (id) =>  privateAxios.put(`basket/${id}`);

  // return useMutation({ mutationFn });

  const { mutate, mutateAsync, isPending,isError,isSuccess } = useMutation({
    mutationKey: ["Basket"],
    mutationFn: (id) => abbBasket(id),

    onError:async  (e) => {
     console.log(e);
      if ( e.status === 403 || e.status === 401) {
        toast.error(
          " برای رزرو  تور لطفا ابتدا عملیات ورود به سایت را انجام دهید"
        );
      }
    },
  });
  return { mutate, mutateAsync, isPending };
};

//-----------------------------------------------------------------------------------------------------------------------------------

 

//-----------------------------------------------------------------------------------------------------------------------------------
export const useUpdateUserAccount = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => privateAxios.put("user/profile", data);

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["UserData"] });
  };

  return useMutation({ mutationFn, onSuccess });
};


// const useCheckout = () => {
//   const queryClient = useQueryClient();

//   const mutationFn = (data) => api.post("order", data);

//   const onSuccess = () => {
//     queryClient.invalidateQueries({ queryKey: ["user/tours"] });
//   };

//   return useMutation({ mutationFn, onSuccess });
// };
