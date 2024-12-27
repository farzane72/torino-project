import Image from "next/image";
import MainSlider from "./MainSlider";
import Tours from "./Tours";
import SearchForm from "./SearchForm";
import Banner from "./Banner";
import WhyTorino from "./WhyTorino";
import Services from "./Services";
function HomePage() {
  return (
    <main className=" w-full h-screen   ">
      <MainSlider />
      {/* <Tours /> */}
      {/* <SearchForm /> */}
      {/* <Banner /> */}
      <WhyTorino />
      <Services />
    </main>
  );
}

export default HomePage;
