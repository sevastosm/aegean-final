import Link from "next/link";
import Navbar from "../Navbar/Navbar";
import banner from "./assets/img/banner.png";
import phone from "./assets/img/phone.svg";
import whatsapp from "./assets/img/whatsapp.svg";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import bag from "./assets/img/bag.svg";
import car1 from "./assets/img/car1.svg";
import car2 from "./assets/img/car2.svg";
import car3 from "./assets/img/car3.svg";

const BannerTwo = () => {
	return (
		<div className="relative">
			<Navbar />
			<section className="banner-section">
				<div className="pt-[84px] pb-[108px] relative">
					<Image
						src={banner}
						width={780}
						height={780}
						alt=""
						className="absolute top-0 left-0 w-full h-full object-cover"
					/>
					<div className="container max-sm:px-3 relative">
						<h1 className="text-[36px] leading-[52px] font-bold mb-[19px] text-[#174FCD]">
							Your <br /> Mykonos <br /> taxi app
						</h1>
					</div>
				</div>
				<div
					className="relative bg-white border border-black rounded-t-[22px] translate-y-[-22px]"
					style={{ boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)" }}
				>
					<div className="mb-[26px]">
						<div className="py-[18px] px-7 text-sm">
							<div className="mb-[10px] relative">
								<div className="border-l border-black absolute left-[31px] h-[50px] top-[20px] z-[10] pointer-events-none"></div>
								<input
									type="text"
									placeholder="Enter pick-up location"
									className="w-full bg-white rounded-lg font-medium placeholder:text-[#4F4F4F] h-10 border border-[#766A6A] outline-none shadow-none pl-[57px] pr-5"
								/>
								<span className="absolute left-6 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
									{icon1}
								</span>
							</div>
							<div className="relative">
								<input
									type="text"
									placeholder="Enter destination"
									className="w-full bg-white rounded-lg font-medium placeholder:text-[#4F4F4F] h-10 border border-[#766A6A] outline-none shadow-none pl-[57px] pr-5"
								/>
								<span className="absolute left-6 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
									{icon2}
								</span>
							</div>
						</div>
						<div className="overflow-hidden">
							<div className="px-7 pt-4">
								<Swiper
									slidesPerView="auto"
									className="!overflow-visible"
									spaceBetween={30}
								>
									{data.map((item, index) => (
										<SwiperSlide
											key={index}
											className="!w-auto will-change-scroll !h-auto"
										>
											<div className="pt-[34px] relative w-[134px] bg-[#E2E6E9] rounded-[16px] border border-black">
												<Image
													src={item.img.src}
													className="w-[85px] absolute -top-4 left-1/2 -translate-x-1/2 h-auto"
													alt=""
													width={85}
													height={49}
												/>
												<div className="flex flex-col gap-2 max-w-[82px] mx-auto text-xs pb-3">
													<div className="font-bold text-sm">
														{item.name}
													</div>
													<div className="flex items-center gap-2">
														<div className="flex items-center gap-1">
															<span>{user}</span>
															<span>{item.user}</span>
														</div>
														<div className="flex items-center gap-1">
															<span>{bagImg}</span>
															<span>{item.bag}</span>
														</div>
													</div>
													<div className="flex items-center gap-1">
														<span>{clock}</span>
														<span>{item.clock}</span>
													</div>
													<div className="flex items-center gap-2">
														<span className="text-xs font-semibold">
															From
														</span>
														<div className="font-semibold text-[16px]">
															{item.price}
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
									))}
								</Swiper>
							</div>
						</div>
					</div>
					<div className="flex justify-between pb-4 gap-3 px-3">
						<Link
							href=""
							className="flex items-center flex-col justify-center font-extrabold text-xs gap-1"
						>
							<Image
								width={200}
								height={200}
								src={phone}
								className="rounded-[15px] w-[55px]"
								alt=""
							/>
							<div className="">Call</div>
						</Link>
						<Link href="" className="block flex-grow">
							<button
								className="bg-[#174FCD] font-bold text-xl text-white h-[55px] rounded-lg w-full"
								aria-label="See prices & book"
							>
								See prices & book
							</button>
						</Link>
						<Link
							href=""
							className="flex items-center flex-col justify-center font-extrabold text-xs gap-1"
						>
							<Image
								width={200}
								height={200}
								src={whatsapp}
								className="rounded-[15px] w-[55px]"
								alt=""
							/>
							<div className="">Whatsapp</div>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

const data = [
	{
		img: car1,
		name: "Standard",
		price: "€36",
		user: "4",
		bag: "3",
		clock: "3 min",
	},
	{
		img: car2,
		name: "Van",
		price: "€36",
		user: "7",
		bag: "5",
		clock: "12 min",
	},
	{
		img: car3,
		name: "Standard",
		price: "€36",
		user: "12",
		bag: "5",
		clock: "12 min",
	},
	{
		img: car1,
		name: "Standard",
		price: "€36",
		user: "4",
		bag: "3",
		clock: "3 min",
	},
	{
		img: car2,
		name: "Standard",
		price: "€36",
		user: "7",
		bag: "5",
		clock: "12 min",
	},
	{
		img: car3,
		name: "Standard",
		price: "€36",
		user: "12",
		bag: "5",
		clock: "12 min",
	},
];

const icon1 = (
	<svg
		width="15"
		height="16"
		viewBox="0 0 15 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<ellipse
			cx="7.33503"
			cy="8.07345"
			rx="7.26904"
			ry="7.72335"
			fill="black"
		/>
		<circle cx="7.33503" cy="8.52765" r="2.72589" fill="#48E744" />
	</svg>
);
const icon2 = (
	<svg
		width="15"
		height="14"
		viewBox="0 0 15 14"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M0.0659943 0.14209H14.6041V13.7715H0.0659943V0.14209Z"
			fill="black"
		/>
		<path
			d="M5.51776 4.68506H9.15228V9.22821H5.51776V4.68506Z"
			fill="#FF0404"
		/>
	</svg>
);
const calendar = (
	<svg
		width="34"
		height="34"
		viewBox="0 0 34 34"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M8.5 7.0835C6.93519 7.0835 5.66666 8.35202 5.66666 9.91683V26.9168C5.66666 28.4816 6.93519 29.7502 8.5 29.7502H22.6667C19.5371 29.7502 17 27.2131 17 24.0835C17 20.9539 19.5371 18.4168 22.6667 18.4168C25.7963 18.4168 28.3333 20.9539 28.3333 24.0835V9.91683C28.3333 8.35202 27.0648 7.0835 25.5 7.0835H8.5Z"
			fill="black"
			fillOpacity="0.15"
		/>
		<path
			d="M22.6667 21.5334V23.924L23.9417 25.3584M28.3333 12.75V9.91667C28.3333 8.35186 27.0648 7.08333 25.5 7.08333H21.25M12.75 29.75H8.5C6.93519 29.75 5.66666 28.4815 5.66666 26.9167V15.5833M21.25 4.25V7.08333M21.25 9.91667V7.08333M12.75 4.25V7.08333M12.75 9.91667V7.08333M21.25 7.08333H12.75M12.75 7.08333H8.5C6.93519 7.08333 5.66666 8.35186 5.66666 9.91667V15.5833M12.75 15.5833H5.66666M29.0417 24.0833C29.0417 27.6042 26.1875 30.4583 22.6667 30.4583C19.1458 30.4583 16.2917 27.6042 16.2917 24.0833C16.2917 20.5625 19.1458 17.7083 22.6667 17.7083C26.1875 17.7083 29.0417 20.5625 29.0417 24.0833Z"
			stroke="white"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
const user = (
	<svg
		width="10"
		height="10"
		viewBox="0 0 10 10"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<ellipse
			cx="4.83112"
			cy="2.7428"
			rx="2.94259"
			ry="2.37341"
			fill="black"
		/>
		<path
			d="M9.66317 8.87991C9.66317 10.6455 7.89958 9.69035 5.23113 9.69035C2.56268 9.69035 -0.000138438 10.5297 -0.000137329 8.87991C-0.000137329 6.80182 2.16307 5.11719 4.83152 5.11719C7.49997 5.11719 9.66317 6.80182 9.66317 8.87991Z"
			fill="black"
		/>
	</svg>
);
const bagImg = <Image src={bag} width={13} height={12} alt="" />;
const clock = (
	<svg
		width="13"
		height="12"
		viewBox="0 0 13 12"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<ellipse
			cx="6.19497"
			cy="5.67909"
			rx="6.19503"
			ry="5.34559"
			fill="black"
		/>
		<path
			d="M5.83121 3.21378C5.83121 3.01252 5.99436 2.84937 6.19562 2.84937C6.39688 2.84937 6.56003 3.01252 6.56003 3.21378V6.62272H5.83121V3.21378Z"
			fill="white"
		/>
		<path
			d="M8.73036 7.1935C8.89356 7.27028 8.94777 7.45613 8.85143 7.6086V7.6086C8.75509 7.76108 8.54469 7.82244 8.38148 7.74566L5.83076 6.54568L6.17963 5.99352L8.73036 7.1935Z"
			fill="white"
		/>
	</svg>
);

export default BannerTwo;
