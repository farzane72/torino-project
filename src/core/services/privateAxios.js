import axios from "axios";
import GetCookie from "../hooks/getCookie";
import SetCookie from "../hooks/setCookie";
import { publicAxios } from "./publicAxios";

const privateAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
            "Content-Type": "application/json",
        },
});
privateAxios.interceptors.request.use(
  (config) => {
    //congig or request
    //Authorization inam deghat konam
    //const accessToken=localStorage.getItem("accessToken")
    const accessToken = GetCookie("accessToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

privateAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    console.log(error);
    const originalRequest = error.config;

    // if (error.response){
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const res = await getNewTokens();
      if (res?.response?.status === 201) {
        SetCookie("accessToken", res?.response?.data.accessToken, 30);
        SetCookie("refreshToken", res?.response?.data.refreshToken, 360);
        return privateAxios(originalRequest);
      } else {
        SetCookie("accessToken", "", 0);
        SetCookie("refreshToken", "", 0);
      }
      return Promise.reject(error);
      //try {
      //const currentRefreshToken = localStorage.getItem("refreshToken")
      //const currentRefreshToken = GetCookie("refreshToken")

      //const res = await publicAxios.post("/auth/refresh/" , {
      //  refresh : currentRefreshToken
      // })

      // const accesToken = res.data.access

      // if (accesToken){
      //    // localStorage.setItem("accessToken" , accesToken)
      //    SetCookie("access" , accesToken)
      //     return privateAxios(originalConfig)
      // }
    }
    // catch (err){
    //     if(err.status===401)
    //     {
    //         window.location.href="/account/login"
    //     }

    // }
  }
  // }
);

const getNewTokens = async () => {
  const refreshToken = GetCookie("refreshToken");
  if (!refreshToken) return;
  try {
    const response = await publicAxios.post("auth/refresh-token/", {
      refreshToken,
    });
    return { response };
  } catch (err) {
    return err;
  }
};

export { privateAxios };
