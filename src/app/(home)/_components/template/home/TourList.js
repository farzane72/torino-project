import ShowAlltours from "../../modules/buttons/ShowAllTours";
import ShowMoreBtn from "../../modules/buttons/ShowMoreBtn";
import Tour from "../../modules/tour/Tour";
import Resize from "../../modules/tour/Resize";


function TourList({ data, searchParams }) {
  console.log(searchParams);
 
  if (data.length === 0)
    return (
      <div className="flex justify-between text-base p-16 mb-4 text-rose-500 ">
        <p className="text-base  text-rose-500">نتیجه ای یافت نشد</p>
        <ShowAlltours />
      </div>
    );

  return (
    <div className="mt-8 container mx-auto  p-4 flex flex-col items-center overscroll-x-none">
      {/* <Resize /> */}
      <div className="grid justify-items-start ">
        <h1 className="text-[20px] md:text-[32px] text-right mb-8">
          {!searchParams?.originId &&
          !searchParams?.destinationId &&
          !searchParams?.startDate &&
          !searchParams?.endDate ? (
            "همه تورها"
          ) : (
              <ShowAlltours />
            // <div></div>
          )}
        </h1>
        <div className="grid grid-cols-1 md:hidden gap-4">
          {data.slice(0, 4).map((tour) => (
            <Tour key={tour.id} tourData={tour} />
          ))}
          {
            data.length>4 ?
            <ShowMoreBtn searchParams={searchParams} />
            :""
          }
          
          
          
         {/* // (!searchParams?.page && data.length<4 ) ? :""  */}

          {searchParams?.page &&
            data.slice(4).map((tour) => <Tour key={tour.id} tourData={tour} />)}
        </div>
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4 gap-4">
          {data.map((tour) => (
            <Tour key={tour.id} tourData={tour} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TourList;

{
  /* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4 gap-4">
          {/* {data.map((tour) => (
            <Tour key={tour.id} tourData={tour} />
          ))} 
          {data.slice(0, 4).map((tour) => (
            <Tour key={tour.id} tourData={tour} />
          ))}
        </div> */
}
