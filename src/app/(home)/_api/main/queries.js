
import { useQuery } from "@tanstack/react-query";
import { readData } from "@/core/services/http-service";

const getUserData = async () => {
    const url = `user/profile/`;
    return readData(url);
  };

  const getTours = async (query) => {
    console.log(query);
    const  {originId,destinationId,startDate } =query
    const url = `tour?destinationId=${destinationId }&originId=${originId}&startDate=${startDate}`
  
    // url = `tour${query}`;
    //const url = query?`tour?${query}`:"tour";
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


export const useGetAllTours = (query) => {
  console.log(query);
  
  return useQuery({
      queryKey: ["AllTours",query],
      queryFn: () => getTours(query),
     
        onError: (err) => {
          console.log(err);
        },
      // staleTime: 2 * 60 * 60 * 1000,
     // gcTime: 6 * 60 * 60 * 1000,
  });
};


//const  {originId,destinationId,startDate } =query

// if(originId || destinationId || startDate  ) {
    //   url = `tour?destinationId=${destinationId }&originId=${origin.id}&startDate=${startDate}`
    // }
    // if(originId || !destinationId || !startDate ) {
    //   url = `tour?originId=${originId}`
    // }
    // if(!originId || destinationId || !startDate ) {
    //   url = `tour?destinationId=${destinationId}`
    // }
    // if(!originId || !destinationId || startDate ) {
    //   url = `tour?startDate=${startDate}`
    // }
    // if(!originId && !destinationId && !startDate ) {
    //   url = `tour`;
    // }