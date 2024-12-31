import Image from "next/image";
import React from "react";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "./assets/img/driver1.png";
import img2 from "./assets/img/driver2.png";
const SomeTaxiDrivers = () => {
	const [swiper, setSwiper] = React.useState(null);
	const [activeCount, setActiveCount] = React.useState(1);

	return (
		<section className="book-ride-section py-[60px] overflow-hidden">
			<div className="container">
				<h2 className="text-[#0044FF] text-[30px] leading-[36px] font-bold mb-9">
					Meet some of our Mykonos taxi drivers
				</h2>
				<div className="font-medium">
					We employ only the best and treat them fairly. All our Mykonos
					taxi drivers speak English, are professionally trained, and know
					the areas they work in like the back of their hands.
					<br />
					<br />
					Whatever the occasion, you can rest assured that we will get you
					where you need to be on time!
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
						el: ".swiper-pagination-5",
						clickable: true,
					}}
					onSlideChange={(swiper) => {
						setActiveCount(swiper.realIndex + 1);
					}}
				>
					{data.map((item, index) => (
						<SwiperSlide key={index} className="!w-auto !h-auto">
							<div
								className="w-[180px] rounded-[18px] h-full "
								style={{
									boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
								}}
							>
								<div className="p-[15px]">
									<h5 className="font-semibold mb-[10px] text-xs leading-[1.4]">
										{item.title}
									</h5>
									<p
										className="text-[#696969] text-xs"
										dangerouslySetInnerHTML={{
											__html: item.text,
										}}
									></p>
								</div>
								<Image
									src={item.img}
									width={360}
									height={340}
									className="w-full rounded-[18px] object-cover object-top aspect-[180/170]"
									alt=""
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div>
					<div className="swiper-pagination-5 !relative w-full flex justify-center mt-8 gap-2"></div>
					<style>
						{`.swiper-pagination-bullet {
                            width: 12px;
                            height: 12px;
                        } .swiper-pagination-bullet {
                            background: #000
                        }`}
					</style>
				</div>
			</div>
		</section>
	);
};

const data = [
	{
		img: img1,
		title: "KOSTAS | MYKONOS",
		text: "Start Date: 2016 <br /> Car: Mercedes V 250",
	},
	{
		img: img2,
		title: "GIANNIS | MYKONOS",
		text: "Start Date: 2019 <br /> Car: Mercedes VITO",
	},
	{
		img: img1,
		title: "KOSTAS | MYKONOS",
		text: "Start Date: 2016 <br /> Car: Mercedes V 250",
	},
	{
		img: img2,
		title: "GIANNIS | MYKONOS",
		text: "Start Date: 2019 <br /> Car: Mercedes VITO",
	},
];
export default SomeTaxiDrivers;
