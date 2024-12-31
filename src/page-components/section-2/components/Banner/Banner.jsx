import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import img1 from "./assets/img/Mykonos.png";
import img2 from "./assets/img/Santorini.png";

import clsx from "clsx";
import Link from "next/link";
import { FreeMode, Grid, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { twMerge } from "tailwind-merge";
import img7 from "./assets/img/Anthens.png";
import call from "./assets/img/call-us.png";
import img6 from "./assets/img/corfo.png";
import img4 from "./assets/img/kos.png";
import img8 from "./assets/img/milos.png";
import img5 from "./assets/img/paros.png";
import img3 from "./assets/img/rhodes.png";
import whatsapp from "./assets/img/whatsapp.png";
function cn(...inputs) {
	return twMerge(clsx(...inputs));
}
const Banner = () => {
	return (
		<div className="relative overflow-hidden">
			<Navbar />
			<div className="min-h-[133px] bg-black pt-[71px] pb-[9px]">
				<div className="container">
					<h2 className="text-xl font-semibold text-white text-center max-w-[264px] mx-auto">
						Book a taxi online instantly For now or later
					</h2>
				</div>
			</div>
			<div className="py-6">
				<div className="container px-4">
					<h5 className="text-xl mb-[14px] font-semibold">
						Select location
					</h5>
					<div className="grid grid-cols-2 gap-6">
						{data.map((item, index) => (
							<InfoCard item={item} key={index} />
						))}
					</div>
					<div className="mt-[40px]">
						<Swiper
							slidesPerView="auto"
							className="!overflow-visible"
							spaceBetween={16}
							modules={[Grid, FreeMode, Pagination]}
							grid={{
								rows: 2,
								fill: "row",
							}}
							pagination={{
								el: ".swiper-pagination-7",
								clickable: true,
							}}
						>
							{data2.map((item, index) => (
								<SwiperSlide key={index} className="!w-auto !h-auto">
									<InfoCard
										className="bg-[#D0D0D0] w-[130px]"
										item={item}
									/>
								</SwiperSlide>
							))}
						</Swiper>
						<div>
							<div className="swiper-pagination-7 !relative w-full flex justify-center mt-8 gap-2"></div>
							<style>
								{`.swiper-pagination-bullet {
                            width: 8px;
                            height: 8px;
                        } .swiper-pagination-bullet {
                            background: #000
                        }`}
							</style>
						</div>
					</div>
					<div className="mt-[10px] flex justify-between">
						<Link
							href="Tel:39083240"
							className="block w-[152px] rounded-lg shadow-card"
						>
							<Image
								src={call}
								width={304}
								height={84}
								className="w-full"
								alt=""
							/>
						</Link>
						<Link
							href=""
							className="block w-[152px] rounded-lg shadow-btn"
						>
							<Image
								src={whatsapp}
								width={304}
								height={84}
								className="w-full"
								alt=""
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

const InfoCard = ({ className, item }) => {
	return (
		<>
			<div
				className={cn(
					"bg-[#f3f3f3] shadow-card rounded-[20px] text-center px-3 py-1",
					{ [className]: className }
				)}
			>
				<div className="flex items-center flex-col">
					<h6 className="text-normal font-semibold">{item.title}</h6>
					<div className="w-[81px] h-[55px] mx-auto flex items-center justify-center">
						<Image
							src={item.img}
							width={80}
							height={50}
							className="object-contain w-[auto] h-[auto]"
							alt=""
						/>
					</div>
				</div>
				<div className="relative text-center">
					{targetIcon}{" "}
					<span className="text-sm font-bold text-[#329171]">
						55 Online
					</span>
				</div>
			</div>
		</>
	);
};

const data = [
	{
		img: img1,
		title: "Mykonos",
	},
	{
		img: img2,
		title: "Santorini",
	},
];
const data2 = [
	{
		img: img3,
		title: "Rhodes",
	},
	{
		img: img4,
		title: "Kos",
	},
	{
		img: img5,
		title: "Paros",
	},
	{
		img: img6,
		title: "Corfu",
	},
	{
		img: img7,
		title: "Milos",
	},
	{
		img: img8,
		title: "Athens",
	},
];
const targetIcon = (
	<svg
		width="22"
		height="20"
		viewBox="0 0 22 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="absolute -left-1 top-1/2 -translate-y-1/2"
	>
		<ellipse
			cx="11"
			cy="10"
			rx="11"
			ry="10"
			fill="url(#paint0_radial_25_1817)"
		/>
		<defs>
			<radialGradient
				id="paint0_radial_25_1817"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(11 10) rotate(90) scale(10 11)"
			>
				<stop offset="0.406102" stopColor="#00FF15" />
				<stop offset="0.811102" stopColor="#E2D116" />
			</radialGradient>
		</defs>
	</svg>
);

export default Banner;
