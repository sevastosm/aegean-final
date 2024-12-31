"use client"
import { vehicleData } from "@/data/vehicleData";
import Image from "next/image";
import { FaClock } from "react-icons/fa6";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import bagIcon from "../../../assets/home/bag-icon.svg";
import UserIcon from "../../../assets/home/user-icon.svg";

const VehiclesSlider = () => {
  return (
    <Swiper
      spaceBetween={28}
      slidesPerView={2.5}
      style={{ paddingLeft: "28px" }}
      
    >
      {vehicleData.map((vehicle) => (
        <SwiperSlide key={vehicle.id}>
          <div className="w-full h-[170px] flex items-end">
          <div className="bg-[#E2E6E9] h-[154px] border border-black rounded-2xl overflow-visible">
            <div className="flex items-center justify-center">
              <div className="w-[112px] mt-[-16px] z-30">
                <Image src={vehicle.image} alt={vehicle.name} />
              </div>
            </div>
            <div className="px-7 pb-2 space-y-2">
              <h4 className="text-sm leading-[16.8px] font-bold font-inter text-black">
                {vehicle.name}
              </h4>
              <div className="pt-1">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-[2px]">
                    <Image src={UserIcon} alt="User Icon" />
                    <p className="text-xs font-medium font-inter">
                      {vehicle.passengers}
                    </p>
                  </div>
                  <div className="flex items-center gap-[2px]">
                    <Image src={bagIcon} alt="Bag Icon" />
                    <p className="text-xs font-medium font-inter">
                      {vehicle.bags}
                    </p>
                  </div>
                </div>
                <div className="mt-[2px] flex items-center gap-2">
                  <div >
                    <FaClock size={12} />
                  </div>
                  <p className="text-xs font-medium font-inter">
                    {vehicle.time}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-xs font-semibold font-SFProMedium">From</p>
                <p className="font-semibold font-inter text-black">
                  {vehicle.price}
                </p>
              </div>
            </div>
          </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default VehiclesSlider;
