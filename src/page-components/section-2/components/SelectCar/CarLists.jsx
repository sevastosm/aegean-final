"use client";
import bagIcon from "@/assets/home/bag-icon.svg";
import UserIcon from "@/assets/home/user-icon.svg";
import { vehicleData } from "@/data/vehicleData";
import Image from "next/image";
import { useState } from "react";
import { RxDotFilled } from "react-icons/rx";

const CarLists = () => {
  const [activeCar, setActiveCar] = useState(0);
  return (
    <section className="mx-4 mt-1 h-[265px] lg:h-full overflow-hidden ">
      <div className="w-full h-full overflow-y-scroll scrollbar-hide">
        {vehicleData.map((vehicle, index) => (
          <div key={vehicle.id}>
            <div
              onClick={() => setActiveCar(index)}
              role="button"
              className={`pl-2 pr-4 py-[17.23px] max-h-[82px] flex justify-between border-2 ${
                index === activeCar
                  ? "border-black rounded-lg"
                  : "border-transparent"
              } `}
            >
              <div className="flex items-center gap-2">
                <div className="w-[88px] p-2">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    width={88}
                    height={88}
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex  gap-3">
                    <h4 className="text-sm leading-[16.8px] font-bold font-inter text-black">
                      {vehicle.name}
                    </h4>
                    <div className="flex items-center gap-[2px]">
                      <Image
                        src={UserIcon}
                        alt="User Icon"
                      />
                      <p className="text-xs font-medium font-inter">
                        {vehicle.passengers}
                      </p>
                    </div>
                    <div className="flex items-center gap-[2px]">
                      <Image
                        src={bagIcon}
                        alt="Bag Icon"
                      />
                      <p className="text-xs font-medium font-inter">
                        {vehicle.bags}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 text-xs font-inter">
                    <p className="">{vehicle.time}s away</p>
                    <p className="inline-flex">
                      <RxDotFilled className="text-sm mt-0.5" />
                      {vehicle.clock_time}
                    </p>
                  </div>
                </div>
              </div>
              <p className="font-semibold font-inter text-black">
                {vehicle.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarLists;
