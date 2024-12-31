import Image from "next/image";
import mapImage from "../../../assets/home/map-4.png";


const Hero = () => {
  return (
    <div>
      <div className="ml-[14px] mt-1 w-[157px]">
        <h2 className="text-4xl leading-[52px] font-bold font-SFProBold text-blueMain max-w-[157px]">Your Mykonos taxi app</h2>
      </div>
      <div className="absolute top-[58px] left-[140px]">
        <div className="w-full h-[206px]">
        <Image src={mapImage} alt="mapImage" className="h-[206px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;