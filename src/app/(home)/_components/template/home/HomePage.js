import Image from "next/image";
import MainSlider from "./MainSlider";
import Tours from "./Tours";
function HomePage() {
  return (
    <main className=" w-full h-screen   ">
      <MainSlider />
      <Tours />
    </main>
  );
}

export default HomePage;
