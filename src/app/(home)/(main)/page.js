import MainSlider from "../_components/template/home/MainSlider";
import SearchForm from "../_components/template/home/SearchForm";
import TourList from "../_components/template/home/TourList";
import Banner from "../_components/template/home/Banner";
import WhyTorino from "../_components/template/home/WhyTorino";
import Services from "../_components/template/home/Services";
import { serverFetch } from "@/core/services/http-server";


export default async function Home({searchParams }) {
 
  const resolvedParams = await searchParams;
  console.log(resolvedParams);

  

  const data = await serverFetch("tour", searchParams, { cache: "no-store" });
  console.log(data);
  return (
    <main className="  ">
    <MainSlider />
    {/* <Tours /> */}
    <SearchForm  tours={data} />
    <TourList data={data } searchParams={resolvedParams }/>
    <Banner />
    <WhyTorino />
    <Services />
  </main>
  );
}
