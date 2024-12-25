import Image from "next/image";
import MainSlider from "./MainSlider";
import Tours from "./Tours";
import SearchForm from "./SearchForm";
function HomePage() {
  return (
    <main className=" w-full h-screen   ">
      <MainSlider />
      {/* <Tours /> */}
      <SearchForm />
    </main>
  );
}

export default HomePage;
