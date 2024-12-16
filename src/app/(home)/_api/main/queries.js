
import { useQuery } from "@tanstack/react-query";
import { readData } from "@/core/services/http-service";

const getUserData = async () => {
    const url = `user/profile/`;
    return readData(url);
  };



export const useGetUserData = () => {
    return useQuery({
        queryKey: ["GetUserData"],
        queryFn: () => getUserData(),
        // staleTime: 2 * 60 * 60 * 1000,
       // gcTime: 6 * 60 * 60 * 1000,
    });
};