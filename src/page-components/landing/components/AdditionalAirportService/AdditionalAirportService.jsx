import Image from "next/image";
import React from "react";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import icon1 from "./assets/img/icon1.png";
import icon2 from "./assets/img/icon2.png";
const AdditionalAirportService = () => {
	const [swiper, setSwiper] = React.useState(null);
	const [activeCount, setActiveCount] = React.useState(1);

	return (
		<section className="book-ride-section py-[60px] overflow-hidden">
			<div className="container">
				<h2 className="text-[#0044FF] text-[30px] leading-[36px] font-bold mb-9">
					Additional airport arrival services in Greece
				</h2>
				<div className="font-medium">
					We remove the stress of additional logistics and hassle by
					offering you essential services and extras.
				</div>
			</div>
			<div className="container mt-16">
				<Swiper
					slidesPerView="auto"
					className="!overflow-visible"
					onSwiper={(swiper) => setSwiper(swiper)}
					spaceBetween={40}
					modules={[FreeMode, Pagination]}
					pagination={{
						el: ".swiper-pagination-6",
						clickable: true,
					}}
					onSlideChange={(swiper) => {
						setActiveCount(swiper.realIndex + 1);
					}}
				>
					{data.map((item, index) => (
						<SwiperSlide key={index} className="!w-auto !h-auto">
							<div
								className="w-[163px] rounded-[18px] h-full border border-[#174FCD]"
								style={{
									boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
								}}
							>
								<div className="p-[15px]">
									<Image
										src={item.img}
										width={86}
										height={86}
										className="h-[43px] object-contain w-auto"
										alt=""
									/>
									<h5 className="font-semibold mb-6 mt-3 text-xs leading-[1.4]">
										{item.title}
									</h5>
									<p
										className="text-[#696969] text-xs"
										dangerouslySetInnerHTML={{
											__html: item.text,
										}}
									></p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div>
					<div className="swiper-pagination-6 !relative w-full flex justify-center mt-8 gap-2"></div>
					<style>
						{`.swiper-pagination-bullet {
                            width: 12px;
                            height: 12px;
                        } .swiper-pagination-bullet {
                            background: #000
                        }`}
					</style>
				</div>
				<div className="px-7 mt-14">
					<button
						type="button"
						className="w-full btn text-xl font-bold h-[55px] bg-[#174FCD] rounded-lg text-white"
					>
						Contact us for details
					</button>
				</div>
			</div>
		</section>
	);
};

const data = [
	{
		img: icon1,
		title: "Child seats",
		text: "We have the best mykonos rates. All fares include taxes fees and tolls.",
	},
	{
		img: icon2,
		title: "Local SIM card",
		text: "We have the best mykonos rates. All fares include taxes fees and tolls.",
	},
	{
		img: icon1,
		title: "Child seats",
		text: "We have the best mykonos rates. All fares include taxes fees and tolls.",
	},
	{
		img: icon2,
		title: "Local SIM card",
		text: "We have the best mykonos rates. All fares include taxes fees and tolls.",
	},
	{
		img: icon1,
		title: "Child seats",
		text: "We have the best mykonos rates. All fares include taxes fees and tolls.",
	},
	{
		img: icon2,
		title: "Local SIM card",
		text: "We have the best mykonos rates. All fares include taxes fees and tolls.",
	},
];
export default AdditionalAirportService;
