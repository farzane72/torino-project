import Image from "next/image";
function HomePage() {
  return (
    <main className=" w-full h-screen   ">
      <div className="   ">
        <img
          src="/images/banner.png"
          className="h-72 w-full"
          alt="Picture of the banner's torino "
        />
      </div>
    </main>
  );
}

export default HomePage;
