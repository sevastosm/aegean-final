import Image from "next/image";
import cellIcon from "../../../assets/home/cell-icon.svg";
import destination from "../../../assets/home/destination-icon.svg";
import Whatsapp from "../../../assets/home/whatsapp.svg";
import VehiclesSlider from "./VehiclesSlider";

const PricesAndBook = () => {
  return (
    <div className="mt-[-102px] h-[410px] rounded-tl-[35px] rounded-tr-[35px] bg-[#F5F5F7] relative">
      <div className="py-4 px-7">
        <div className="w-full h-[101px] flex flex-col justify-between relative">
          <div className="w-full h-[45px] bg-white border border-[#766A6A] rounded-lg px-[60px] flex items-center justify-center ">
            <input
              type="text"
              placeholder="Enter pick-up location"
              className="outline-none text-base font-medium font-SFProMedium placeholder:text-[#818181] leading-[19.09px] "
            />
          </div>
          <div className="w-full h-[45px] bg-white border border-[#766A6A] rounded-lg px-[60px] flex items-center justify-center ">
            <input
              type="text"
              placeholder="Enter pick-up location"
              className="outline-none text-base font-medium font-SFProMedium placeholder:text-[#818181] leading-[19.09px] "
            />
          </div>
          <div className="absolute top-[14px] left-[30px]">
            <Image src={destination} alt="destination" />
          </div>
        </div>
      </div>
      <VehiclesSlider />
      <div className="mt-4 px-3 flex justify-between gap-3">
        <div>
          <button className="w-[55px] h-[55px] rounded-[15px]">
            <Image src={cellIcon} alt="cellIcon" />
          </button>
          <p className="text-xs mt-[-4px] font-semibold font-SFProMedium text-black text-center">
            Call
          </p>
        </div>
        <button className="w-full h-[55px] rounded-lg bg-[#004080] flex items-center justify-center text-xl font-bold font-SFProBold text-white">
          See prices & book
        </button>
        <div>
          <button className="w-[55px] h-[55px] rounded-[15px]">
            <Image src={Whatsapp} alt="Whatsapp" />
          </button>
          <p className="text-xs mt-[-4px] font-semibold font-SFProMedium text-black text-center">
            Whatsapp
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricesAndBook;
