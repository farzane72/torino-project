import Image from "next/image";
import MainSlider from "./MainSlider";
import Tours from "./Tours";
import SearchForm from "./SearchForm";
import Banner from "./Banner";
import WhyTorino from "./WhyTorino";
import Services from "./Services";
import { serverFetch } from "@/core/services/http-server";
import TourList from "./TourList";


export default async function HomePage({ searchParams }) {
  console.log("params");
  

  const resolvedParams = await searchParams;
  console.log(resolvedParams);
  const data = await serverFetch("tour", resolvedParams, { cache: "no-store" });
  console.log(data);
  return (
    <main className="  ">
      <MainSlider />
      {/* <Tours /> */}
      <SearchForm  tours={data} />
      <TourList data={data }/>
      <Banner />
      <WhyTorino />
      <Services />
    </main>
  );
}


