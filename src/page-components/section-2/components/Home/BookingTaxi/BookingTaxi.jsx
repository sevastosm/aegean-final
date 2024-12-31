import AllCardSlider from "./AllCardSlider";
import BookingContact from "./BookingContact";
import MapCartStatic from "./MapCartStatic";

const BookingTaxi = () => {
  return (
    <section>
      <div className="py-20">
        <div className="px-4 pt-6 pb-2.5 bg-black text-white">
          <h3 className="text-xl leading-6 text-center font-medium font-SFProMedium max-w-[255px] mx-auto">
            Book a taxi online instantly For now or later{" "}
          </h3>
        </div>
        
        <div className="mt-2 px-4">
          <p className="text-xl font-medium font-SFProMedium">
          Select location
          </p>
        </div>
        <MapCartStatic />
        <AllCardSlider />
        <BookingContact />
      </div>
    </section>
  );
};

export default BookingTaxi;
