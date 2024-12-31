"use client";
import { bookingAllCardData } from "@/data/bookingAllCardData";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const AllCardSlider = () => {
  return (
    <div className="mt-7">
      <Swiper
        slidesPerView={.9}
        spaceBetween={16}
        style={{ paddingLeft: "16px" }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => `
            <span class="${className} bg-[#CBCBCB] w-2 h-2 rounded-full inline-block"></span>
          `,
        }}
        modules={[Pagination]}
        className="custom-swiper"
      >
        {bookingAllCardData.map((category) => (
          <SwiperSlide key={category.category}>
            <div className="grid grid-cols-3 gap-3">
              {category.items.map((card) => (
                <div key={card.id} className="flex flex-col gap-3">
                  <Link
                    href={card.link}
                    className="flex flex-col justify-between h-[112px] rounded-[20px] bg-[#D0D0D0] box-card-shadow"
                  >
                    <div className="p-1 px-2">
                      <h4 className="text-center font-bold font-SFProBold text-[#121824]">
                        {card.title}
                      </h4>
                    </div>

                    <div className="h-[54px] flex items-center justify-center">
                      <Image
                        src={card.image}
                        alt={card.title}
                        className="h-[54px]"
                      />
                    </div>

                    <div className="px-2 pb-1.5 flex items-center gap-2">
                      <div className="w-[22px] h-[20px] rounded-full custom-circle"></div>
                      <p className="text-sm font-bold text-[#329171]">
                        {card.onlineCount} Online
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AllCardSlider;
