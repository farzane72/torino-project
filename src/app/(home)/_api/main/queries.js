import { useQuery } from "@tanstack/react-query";
import { readData } from "@/core/services/http-service";
import QueryString from "qs";
import { privateAxios } from "@/core/services/privateAxios";

const getUserData = async () => {
  const url = `user/profile/`;
  return readData(url);
};
//-----------------------------------------------------------------------------------------------------------------------------------

const getTours = async () => {
  // const  {originId,destinationId,startDate } =query
  // const url = `tour?destinationId=${destinationId }&originId=${originId}&startDate=${startDate}`

  //const url = "tour?" + QueryString.stringify(query);
  //console.log("url");
  const url = "tour";
 // console.log(url);
  // url = `tour${query}`;
  //const url = query?`tour?${query}`:"tour";
  return readData(url);
};

const getBasket = async () => {
  const url = `basket`;
  return readData(url);
};

//-----------------------------------------------------------------------------------------------------------------------------------
export const useGetUserData = () => {
  return useQuery({
    queryKey: ["UserData"],
    queryFn: () => getUserData(),
    // staleTime: 2 * 60 * 60 * 1000,
    // gcTime: 6 * 60 * 60 * 1000,
  });
};
//-----------------------------------------------------------------------------------------------------------------------------------

export const useGetAllTours = () => {
  //console.log(query);

  // return useQuery({
  //     queryKey: ["AllTours",query],
  //     queryFn: () => getTours(query),

  //       onError: (err) => {
  //         console.log(err);
  //       },
  //      // enabled: false
  //     // staleTime: 2 * 60 * 60 * 1000,
  //    // gcTime: 6 * 60 * 60 * 1000,
  // });

  const queryFn = () => getTours();
  const queryKey = ["AllTours"];

  return useQuery({ queryFn, queryKey, enabled: false });
};
//-----------------------------------------------------------------------------------------------------------------------------------

export const useGetBasket = () => {
  const queryFn = () => getBasket();
  const queryKey = ["UserBasket"];

  return useQuery({ queryFn, queryKey });
};

//-----------------------------------------------------------------------------------------------------------------------------------

const useGetUserTours = () => {
  const queryFn = () => api.get("user/tours");
  const queryKey = ["user-tours"];

  return useQuery({ queryFn, queryKey });
};
//-----------------------------------------------------------------------------------------------------------------------------------

// const useGetTours = (query) => {
//   const url = "tour?" + QueryString.stringify(query);

//   const queryFn = () => api.get(url);
//   const queryKey = ["tour", query];

//   return useQuery({ queryFn, queryKey, enabled: false });
// };

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
