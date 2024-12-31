import Image from "next/image";
import Link from "next/link";
import cardMap from "../../../../assets/booking/card-map-1.png";
import cardMap2 from "../../../../assets/booking/card-map-2.png";

const MapCartStatic = () => {
  return (
    <div className="mt-5 px-4">
      <div className="grid grid-cols-2 gap-5">
        <Link href={"./map-searching"} className="rounded-[20px] bg-[#F3F3F3] box-card-shadow flex flex-col justify-between">
          <div className="py-1.5  px-2">
            <h4 className="text-center font-bold font-SFProBold text-[#121824]">
              Mykonos
            </h4>
          </div>
          <div className="flex items-center justify-center">
            <Image src={cardMap} alt="cardMap" />
          </div>
          <div className="pl-6 pr-2 pb-1.5 flex items-center gap-2">
            <div className="w-[22px] h-[20px] rounded-full custom-circle"></div>
            <p className="text-sm font-bold text-[#329171]">55 Online</p>
          </div>
        </Link>
        <Link href={"./map-searching"} className="rounded-[20px] bg-[#F3F3F3] box-card-shadow">
          <div className="py-1.5  px-2">
            <h4 className="text-center font-bold font-SFProBold text-[#121824]">
              Santorini
            </h4>
          </div>
          <div className="flex items-center justify-center">
            <Image src={cardMap2} alt="cardMap2" className="pl-2" />
          </div>
          <div className="pl-6 pr-2 pb-1.5 flex items-center gap-2">
            <div className="w-[22px] h-[20px] rounded-full custom-circle"></div>
            <p className="text-sm font-bold text-[#329171]">55 Online</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MapCartStatic;
