import Image from "next/image";
function Tour({ tourData }) {
  console.log(tourData.image);
  return (
    <div className="w-[327px] h-[277px] md:[278] flex flex-col gap-2 border rounded-lg">
      <Image
        src={tourData.image}
        width={327}
        height={277}
        className=""
        //layout="fill"

        alt={tourData.image}
      />
      <div className="flex flex-col">
        <p className="text-[22px]">{tourData.title}</p>
        <p>جزئیات</p>
      </div>
      <div className="flex justify-between">
        <div>رزرو</div>
        <div>قیمت</div>
      </div>

      {tourData.title}
    </div>
  );
}

export default Tour;
