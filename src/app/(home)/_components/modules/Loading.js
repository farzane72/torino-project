"use client"
import { ThreeDots } from "react-loader-spinner";

function Loading() {
  return (
    <div className="flex justify-center">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#28A745"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loading;