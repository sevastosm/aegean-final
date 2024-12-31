import Link from "next/link";
import React from "react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import img1 from "./assets/img/1.png";
import img2 from "./assets/img/2.png";
import img from "./assets/img/map-vector-img.png";
import map from "./assets/img/map.png";

const FindContactLocation = () => {
	const [swiper, setSwiper] = React.useState(null);
	const [activeCount, setActiveCount] = React.useState(1);

	return (
		<section className="book-ride-section pb-[60px] overflow-hidden">
			<div className="container">
				<h2 className="text-[30px] leading-[36px] font-bold mb-5 tracking-tighter max-w-[307px]">
					You can find our offices and contact info in any of the 20
					locations we operate in.
				</h2>
				<Image
					src={img}
					width={720}
					height={810}
					className="max-w-full mb-10 object-contain"
					alt=""
				/>
				<Swiper
					slidesPerView="auto"
					className="!overflow-visible"
					onSwiper={(swiper) => setSwiper(swiper)}
					spaceBetween={45}
					modules={[Navigation, FreeMode, Pagination]}
					navigation={{
						nextEl: ".next-2",
						prevEl: ".prev-2",
					}}
					pagination={{
						el: ".swiper-pagination-find-location",
						clickable: true,
					}}
					onSlideChange={(swiper) => {
						setActiveCount(swiper.realIndex + 1);
					}}
				>
					{data.map((item, index) => (
						<SwiperSlide key={index} className="!w-auto">
							<div className="w-[245px]">
								<Image
									src={map}
									width={800}
									height={800}
									className="w-full"
									alt=""
								/>
								<div className="font-medium px-1 text-xs pt-3">
									<h5 className="text-xl mb-[10px]">Athens (HQ)</h5>
									<div className="flex">
										<div className="w-[70px]">Address:</div>
										<div className="w-0 flex-grow">
											Leoforos Vouliagmenis 58 Voula, 16673
											<br />
											<Link href="" target="_blank">
												<button
													type="button"
													className="flex items-center font-medium text-[#006FE1] underline gap-2 text-sm"
												>
													<span>Navigate </span>
													<span className="text-[#1760A5]">
														{arrow}
													</span>
												</button>
											</Link>
										</div>
									</div>
									<div className="flex">
										<div className="w-[70px]">Hours: </div>
										<div className="w-0 flex-grow">24/7</div>
									</div>
									<div className="flex">
										<div className="w-[70px]">Phone:</div>
										<div className="w-0 flex-grow">
											<Link
												href="tel:+30 215 215 4000"
												className="underline text-[#1760A5]"
											>
												+30 215 215 4000
											</Link>
										</div>
									</div>
									<div className="flex">
										<div className="w-[70px]">email:</div>
										<div className="w-0 flex-grow">
											athens@aegeantaxi.com
										</div>
									</div>
									<h5 className="font-bold text-black mb-2 mt-4">
										Services
									</h5>
									<div className="font-semibold underline flex flex-col gap-2 items-start">
										<Link
											href=""
											target="_blank"
											className="flex items-center gap-2"
										>
											Athens Taxi {arrow}
										</Link>
										<Link
											href=""
											target="_blank"
											className="flex items-center gap-2"
										>
											Athens Airport transfers {arrow}
										</Link>
										<Link
											href=""
											target="_blank"
											className="flex items-center gap-2"
										>
											Athens Port transfers {arrow}
										</Link>
										<Link
											href=""
											target="_blank"
											className="flex items-center gap-2"
										>
											Athens Tours {arrow}
										</Link>
										<Link
											href=""
											target="_blank"
											className="flex items-center gap-2 font-medium text-[#006FE1] mt-3"
										>
											Book Online{" "}
											<span className="text-[#1760A5]">
												{" "}
												{arrow2}
											</span>
										</Link>
									</div>
									<div className="relative mt-6">
										<Link href="">
											<button
												className="btn flex items-center gap-3 justify-center bg-black text-white h-[43px] rounded-xl font-semibold px-7 w-full text-[16px]"
												type="button"
											>
												<span>Go to Athens</span>
												<span className="translate-x-2">
													{arrow2}
												</span>
											</button>
										</Link>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className="flex flex-wrap justify-between items-center mt-8 gap-2 text-xs max-w-[241px] mx-auto">
					<button className="prev-2" aria-label="Previous">
						{prevIcon2}
					</button>
					<div className="flex-grow mt-4">
						<div className="swiper-pagination-find-location !relative w-full flex justify-between mb-1"></div>
					</div>
					<button className="next-2" aria-label="Next">
						{nextIcon2}
					</button>

					<div className="flex justify-center text-[#696969] px-12 w-full -mt-3">
						<span>{activeCount}</span>
						<span className="mx-1">/</span>
						<span>{data?.length}</span>
					</div>
				</div>
			</div>
			<style>
				{`.swiper-pagination-find-location .swiper-pagination-find-location-bullet {
                        width: 12px;
                        height: 12px;
                    }.swiper-pagination-find-location .swiper-pagination-bullet {
                        background: #000
                    }`}
			</style>
		</section>
	);
};

const data = [
	{
		img: img1,
		title: "Mykonos",
		car: "100+ cars",
		categories: "4 car categories",
		operations: "24/7 operations",
	},
	{
		img: img2,
		title: "Santorini",
		car: "100+ cars",
		categories: "4 car categories",
		operations: "24/7 operations",
	},
	{
		img: img1,
		title: "Mykonos",
		car: "100+ cars",
		categories: "4 car categories",
		operations: "24/7 operations",
	},
	{
		img: img2,
		title: "Santorini",
		car: "100+ cars",
		categories: "4 car categories",
		operations: "24/7 operations",
	},
	{
		img: img1,
		title: "Mykonos",
		car: "100+ cars",
		categories: "4 car categories",
		operations: "24/7 operations",
	},
	{
		img: img2,
		title: "Santorini",
		car: "100+ cars",
		categories: "4 car categories",
		operations: "24/7 operations",
	},
	{
		img: img1,
		title: "Mykonos",
		car: "100+ cars",
		categories: "4 car categories",
		operations: "24/7 operations",
	},
];

const arrow = (
	<svg
		width="13"
		height="13"
		viewBox="0 0 13 13"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M11.8982 0.959326C11.8764 0.546276 11.523 0.229106 11.1088 0.250908L4.3585 0.606184C3.94427 0.627986 3.62609 0.980502 3.64783 1.39355C3.66957 1.8066 4.02299 2.12377 4.43722 2.10197L10.4375 1.78617L10.7524 7.76931C10.7741 8.18236 11.1275 8.49953 11.5418 8.47773C11.956 8.45593 12.2742 8.10341 12.2524 7.69036L11.8982 0.959326ZM1.55819 12.7431L11.7063 1.49973L10.59 0.497873L0.441814 11.7413L1.55819 12.7431Z"
			fill="currentColor"
		/>
	</svg>
);
const prevIcon2 = (
	<svg
		width="36"
		height="36"
		viewBox="0 0 36 36"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="18" cy="18" r="18" fill="#DEDDE2" />
		<path
			d="M13.2822 18.9585L18.8327 25.6311C19.0421 25.8742 19.3227 26.0089 19.6141 26.0062C19.9055 26.0035 20.1844 25.8636 20.3907 25.6167C20.597 25.3697 20.7142 25.0355 20.7171 24.6859C20.7199 24.3364 20.6082 23.9995 20.406 23.7478L15.6403 18.0188L20.4169 12.301C20.5232 12.1781 20.608 12.0311 20.6664 11.8685C20.7248 11.706 20.7556 11.531 20.757 11.354C20.7585 11.177 20.7305 11.0014 20.6748 10.8375C20.6191 10.6736 20.5367 10.5247 20.4325 10.3994C20.3282 10.2741 20.2043 10.1749 20.0677 10.1077C19.9312 10.0405 19.7849 10.0066 19.6373 10.008C19.4898 10.0093 19.3439 10.0459 19.2082 10.1157C19.0726 10.1854 18.9498 10.2868 18.8472 10.414L13.284 17.0734C13.0754 17.3232 12.958 17.6621 12.9577 18.0156C12.9574 18.3691 13.0741 18.7083 13.2822 18.9585Z"
			fill="black"
		/>
	</svg>
);
const nextIcon2 = (
	<svg
		width="36"
		height="36"
		viewBox="0 0 36 36"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="18" cy="18" r="18" fill="#DEDDE2" />
		<path
			d="M21.4676 17.0402L15.9108 10.3742C15.7012 10.1314 15.4204 9.99701 15.129 10.0001C14.8376 10.0031 14.5589 10.1433 14.3528 10.3905C14.1468 10.6377 14.0299 10.9721 14.0274 11.3216C14.0248 11.6712 14.1368 12.0079 14.3393 12.2594L19.1104 17.9828L14.3393 23.7062C14.2331 23.8292 14.1485 23.9763 14.0902 24.1389C14.032 24.3016 14.0013 24.4765 14 24.6535C13.9988 24.8306 14.0269 25.0061 14.0828 25.17C14.1386 25.3338 14.2212 25.4827 14.3255 25.6078C14.4299 25.733 14.554 25.832 14.6905 25.899C14.8271 25.9661 14.9735 25.9998 15.121 25.9983C15.2686 25.9967 15.4144 25.96 15.55 25.8901C15.6856 25.8202 15.8083 25.7186 15.9108 25.5913L21.4676 18.9253C21.676 18.6753 21.793 18.3363 21.793 17.9828C21.793 17.6293 21.676 17.2902 21.4676 17.0402Z"
			fill="black"
		/>
	</svg>
);
const arrowRight = (
	<svg
		width="14"
		height="12"
		viewBox="0 0 14 12"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M13.5303 6.53033C13.8232 6.23744 13.8232 5.76256 13.5303 5.46967L8.75736 0.696701C8.46447 0.403807 7.98959 0.403807 7.6967 0.6967C7.40381 0.989594 7.40381 1.46447 7.6967 1.75736L11.9393 6L7.6967 10.2426C7.40381 10.5355 7.40381 11.0104 7.6967 11.3033C7.98959 11.5962 8.46447 11.5962 8.75736 11.3033L13.5303 6.53033ZM-9.58288e-08 6.75L13 6.75L13 5.25L9.58288e-08 5.25L-9.58288e-08 6.75Z"
			fill="white"
		/>
	</svg>
);
const arrowTopRight = (
	<svg
		width="12"
		height="12"
		viewBox="0 0 12 12"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M10.749 0.960581C10.7272 0.54694 10.3742 0.229266 9.96058 0.251037L3.21991 0.605809C2.80627 0.627579 2.4886 0.98055 2.51037 1.39419C2.53214 1.80783 2.88511 2.12551 3.29875 2.10374L9.29046 1.78838L9.60581 7.78009C9.62758 8.19373 9.98055 8.5114 10.3942 8.48963C10.8078 8.46786 11.1255 8.11489 11.1037 7.70125L10.749 0.960581ZM1.55747 11.5017L10.5575 1.50172L9.44253 0.498276L0.442529 10.4983L1.55747 11.5017Z"
			fill="#1760A5"
		/>
	</svg>
);

const arrow2 = (
	<svg
		width="16"
		height="12"
		viewBox="0 0 16 12"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M15.7006 6.53033C15.9935 6.23744 15.9935 5.76256 15.7006 5.46967L10.9276 0.696699C10.6347 0.403806 10.1599 0.403806 9.86696 0.696699C9.57407 0.989593 9.57407 1.46447 9.86696 1.75736L14.1096 6L9.86696 10.2426C9.57407 10.5355 9.57407 11.0104 9.86696 11.3033C10.1599 11.5962 10.6347 11.5962 10.9276 11.3033L15.7006 6.53033ZM0.000335693 6.75H15.1703V5.25H0.000335693V6.75Z"
			fill="currentColor"
		/>
	</svg>
);
export default FindContactLocation;
