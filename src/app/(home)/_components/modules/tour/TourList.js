import Tour from "./Tour";
function TourList({ data }) {
  return (
    <div className="grid justify-items-start ">
      <h1 className="text-[20px] md:text-[32px] text-right">همه تورها</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {data.map((tour) => (
          <Tour key={tour.id} tourData={tour} />
        ))}
      </div>
    </div>
  );
}

export default TourList;
