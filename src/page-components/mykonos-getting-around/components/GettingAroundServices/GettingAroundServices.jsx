import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { twMerge } from "tailwind-merge";
import taxi from "./img/1.png";
import car from "./img/2.png";
import bus from "./img/3.png";
import scooter from "./img/4.png";
import watertaxi from "./img/5.png";
import foot from "./img/6.png";
import blog from "./img/blog.png";

function cn(...input) {
	return twMerge(clsx(...input));
}
export const GettingAroundServices = () => {
	const [swiper, setSwiper] = useState(null);
	const [activeTab, setActiveTab] = useState(menudata[0]);
	return (
		<section className="getting-around">
			<div className="pt-[45px] pb-[30px]">
				<div className="container">
					<div className="py-[6px] px-2 rounded-full mb-6 overflow-hidden relative bg-[#D6D6D6]">
						<Swiper
							slidesPerView="auto"
							className="!overflow-visible"
							onSwiper={(swiper) => setSwiper(swiper)}
							spaceBetween={0}
							modules={[Navigation, FreeMode]}
							navigation={{
								nextEl: ".next",
								prevEl: ".prev",
							}}
						>
							{menudata.map((item, index) => (
								<SwiperSlide
									key={index}
									className="!w-auto will-change-scroll"
								>
									<span
										className="h-10 rounded-full px-6 text-sm cursor-pointer flex items-center justify-center select-none min-w-[93px]"
										style={{
											backgroundColor:
												activeTab.id === item.id ? "#000000" : "",
											color:
												activeTab.id === item.id
													? "#fff"
													: "#3F3E3E",
										}}
										onClick={() => {
											setActiveTab(item);
											swiper.slideTo(index);
										}}
									>
										{item.name}
									</span>
								</SwiperSlide>
							))}
						</Swiper>
						<div className="prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer [&.swiper-button-disabled]:hidden w-8 h-[52px] flex items-center justify-center bg-gradient-to-r from-[#E9E8ED] to-[#E9E8ED00]">
							{prevIcon}
						</div>
						<div className="next absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer [&.swiper-button-disabled]:hidden w-8 h-[52px] flex items-center justify-center bg-gradient-to-l from-[#E9E8ED] to-[#E9E8ED00]">
							{nextIcon}
						</div>
					</div>
				</div>
			</div>
			{/* Getting Around Services */}
			<div className="text-sm">
				{data.map((item, index) => (
					<div className="mt-[39px]" key={index}>
						<div className="bg-[#F0F0F0] pb-11">
							<div className="container">
								<div className="">
									<div className="flex justify-center">
										<Image
											className={cn(
												"w-full mx-auto translate-y-[-39px] mb-[-19px] h-auto",
												{
													[item.imgClass]: item.imgClass,
												}
											)}
											src={item.img}
											width={500}
											height={500}
											alt=""
										/>
									</div>
									<h3 className="text-2xl text-center mb-6 font-semibold">
										{item.title}
									</h3>
									<div className="">
										{item?.text?.map((info, i) => (
											<p
												className="mb-5"
												key={i}
												dangerouslySetInnerHTML={{
													__html: info.text,
												}}
											></p>
										))}
									</div>
									<CtaButton title="Go to Mykonos Taxi" url="" />
									{item?.taxiPlaceAndPricesInfo && (
										<TaxiPlaceAndPricesInfo />
									)}
								</div>
							</div>
						</div>
						{item.blogs && (
							<>
								<Blog />
								<br />
							</>
						)}
					</div>
				))}
			</div>
		</section>
	);
};

const CtaButton = ({ title, url }) => {
	return (
		<div className="flex justify-center pt-6">
			<Link href={url} className="block">
				<button
					className="btn flex items-center gap-2 justify-center bg-[#2B2B6E] text-white h-9 rounded-full text-sm px-4 min-w-[260px]"
					type="button"
				>
					<span>{title}</span>
					{arrowRight}
				</button>
			</Link>
		</div>
	);
};
const Blog = () => {
	return (
		<div className="container">
			<Link
				href=""
				className="flex py-5 border-b border-t border-[#999999] gap-5 mt-[50px] mb-3"
			>
				<Image src={blog} width={122} height={106} alt="" />
				<div className="w-0 flex-grow">
					<h5 className="font-semibold mb-3">
						Mykonos: A journey through time and the transformation from
						rags to riches
					</h5>
					<div className="text-xs flex items-center gap-2 font-medium">
						Read the blog post{" "}
						<span className="text-[#0066FF]">{arrow2}</span>
					</div>
				</div>
			</Link>
		</div>
	);
};
const TaxiPlaceAndPricesInfo = () => {
	return (
		<div className="py-3 px-5 rounded-[20px] text-sm shadow-card bg-black mt-6">
			<div className="mb-[10px] relative">
				<div className="border-l border-black absolute left-[31px] h-[50px] top-[20px] z-[10] pointer-events-none"></div>
				<input
					type="text"
					placeholder="Enter pick-up location"
					className="w-full bg-white rounded-lg font-medium placeholder:text-[#414141] h-10 border-none outline-none shadow-none pl-[57px] pr-5"
				/>
				<span className="absolute left-6 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
					{icon1}
				</span>
			</div>
			<div className="mb-[10px] relative">
				<input
					type="text"
					placeholder="Enter destination"
					className="w-full bg-white rounded-lg font-medium placeholder:text-[#414141] h-10 border-none outline-none shadow-none pl-[57px] pr-5"
				/>
				<span className="absolute left-6 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
					{icon2}
				</span>
			</div>
			<div className="flex gap-[10px]">
				<Link href="" className="block flex-grow">
					<button
						className="bg-white font-bold text-xl text-primary h-10 rounded-lg w-full"
						aria-label="See prices & book"
					>
						See prices & book
					</button>
				</Link>
				<button
					className="h-10 bg-white  w-12 rounded-lg flex justify-center items-center"
					aria-label="Calendar"
				>
					{calendar}
				</button>
			</div>
		</div>
	);
};

const data = [
	{
		img: taxi,
		imgClass: "max-w-[163px]",
		title: "Mykonos Taxis",
		text: [
			{
				text: "Taxis are the best way to get around Mykonos, especially for travelers who want to avoid the hassle of navigating the island's difficult roads or parking challenges. However, the availability of traditional taxis is quite limited, with only a total of 32 taxis serving the island. This means they can be hard to find, especially during peak tourist season or late-night hours. ",
			},
			{
				text: "Taxis are typically found at designated stands in hotspots like Mykonos Town, the airport, and the port, but waiting times can be long. Fares are generally fixed for popular routes, such as transfers from the airport to Mykonos Town or from Mykonos Town to Paradise Beach, and start from about €20 per ride.",
			},
			{
				text: "For a more reliable and easy alternative,  Aegean Taxi offer the best Mykonos Taxi service, with more than 100 cars available in Mykonos, operating 24/7. The company offers seamless rides at cheap prices, and a number of booking options. Tourists can book their Mykonos Taxi using the Aegean Taxi Mykonos Taxi app, the Mykonos taxi Whatsapp booking service, the Mykonos taxi Phone booking, or the Online Mykonos Taxi booking option. Aegean Taxi provides instant booking and also a book later taxi booking option, fixed rates, professional drivers, and a great service, ensuring comfort and convenience throughout your journey. ",
			},
			{
				text: "This service is particularly useful for travelers looking to avoid delays and secure transportation in advance, whether for a quick transfer or a longer journey to explore the island’s beaches and attractions. With limited traditional taxis on Mykonos, pre-booking your ride with Aegean Taxi ensures a stress-free way to get around.",
			},
		],
		blogs: {},
		taxiPlaceAndPricesInfo: true,
	},
	{
		img: car,
		imgClass: "max-w-[183px]",
		title: "Mykonos Car Rental",
		text: [
			{
				text: "Renting a car in Mykonos is an excellent way to explore the island's picturesque beaches, and iconic landmarks at your own pace. Options range from compact cars for navigating the narrow streets of Mykonos, to SUVs and jeeps ideal for reaching more remote spots like Fokos Beach, Elia beach or Panormos. ",
			},
			{
				text: "Prices range from as low as €50 per day in the low season for a standard car, up to €350 per day in the high season for an SUV. Rentals are available at many locations such as Mykonos Airport, Mykonos Port, and various spots in town, making it easy to pick up a car rental  when you arrive. During the busy summer season, booking your rental in advance is strongly recommended to secure the best rates and availability.",
			},
			{
				text: "Driving in Mykonos, comes with a few challenges. Roads are often narrow, winding, and busy, especially during peak times, so confidence in driving is important. Parking can be scarce and very expensive (about €25 per car) in popular areas like Mykonos Town or Psarou Beach. Fuel stations are limited and fuel is more expensive than the mainland, about 25% more. For visitors who prefer not to drive, a convenient alternative is Aegean Taxi, the best <strong>Mykonos Taxi</strong> service, which provides stress-free ways to get around. A rental car is ideal for those seeking freedom and flexibility, but understanding these nuances and actual costs will help make your experience enjoyable and hassle-free.",
			},
			{
				text: "Book your Mykonos Taxi with Aegean Taxi, instead of renting a car.",
			},
		],
		blogs: {},
	},
	{
		img: bus,
		imgClass: "max-w-[178px]",
		title: "Mykonos Buses",
		text: [
			{
				text: "Renting a car in Mykonos is an excellent way to explore the island's picturesque beaches, and iconic landmarks at your own pace. Options range from compact cars for navigating the narrow streets of Mykonos, to SUVs and jeeps ideal for reaching more remote spots like Fokos Beach, Elia beach or Panormos. ",
			},
			{
				text: "Prices range from as low as €50 per day in the low season for a standard car, up to €350 per day in the high season for an SUV. Rentals are available at many locations such as Mykonos Airport, Mykonos Port, and various spots in town, making it easy to pick up a car rental  when you arrive. During the busy summer season, booking your rental in advance is strongly recommended to secure the best rates and availability.",
			},
			{
				text: "Driving in Mykonos, comes with a few challenges. Roads are often narrow, winding, and busy, especially during peak times, so confidence in driving is important. Parking can be scarce and very expensive (about €25 per car) in popular areas like Mykonos Town or Psarou Beach. Fuel stations are limited and fuel is more expensive than the mainland, about 25% more. For visitors who prefer not to drive, a convenient alternative is Aegean Taxi, the best <strong>Mykonos Taxi</strong> service, which provides stress-free ways to get around. A rental car is ideal for those seeking freedom and flexibility, but understanding these nuances and actual costs will help make your experience enjoyable and hassle-free.",
			},
			{
				text: "Book your Mykonos Taxi with Aegean Taxi, instead of renting a car.",
			},
		],
		blogs: {},
	},
	{
		img: scooter,
		imgClass: "max-w-[131px]",
		title: "Mykonos Scooter Rental",
		text: [
			{
				text: "Renting a car in Mykonos is an excellent way to explore the island's picturesque beaches, and iconic landmarks at your own pace. Options range from compact cars for navigating the narrow streets of Mykonos, to SUVs and jeeps ideal for reaching more remote spots like Fokos Beach, Elia beach or Panormos. ",
			},
			{
				text: "Prices range from as low as €50 per day in the low season for a standard car, up to €350 per day in the high season for an SUV. Rentals are available at many locations such as Mykonos Airport, Mykonos Port, and various spots in town, making it easy to pick up a car rental  when you arrive. During the busy summer season, booking your rental in advance is strongly recommended to secure the best rates and availability.",
			},
			{
				text: "Driving in Mykonos, comes with a few challenges. Roads are often narrow, winding, and busy, especially during peak times, so confidence in driving is important. Parking can be scarce and very expensive (about €25 per car) in popular areas like Mykonos Town or Psarou Beach. Fuel stations are limited and fuel is more expensive than the mainland, about 25% more. For visitors who prefer not to drive, a convenient alternative is Aegean Taxi, the best <strong>Mykonos Taxi</strong> service, which provides stress-free ways to get around. A rental car is ideal for those seeking freedom and flexibility, but understanding these nuances and actual costs will help make your experience enjoyable and hassle-free.",
			},
			{
				text: "Book your Mykonos Taxi with Aegean Taxi, instead of renting a car.",
			},
		],
		blogs: {},
	},
	{
		img: watertaxi,
		imgClass: "max-w-[269px] mt-[-40px]",
		title: "Mykonos Water Taxi",
		text: [
			{
				text: "Renting a car in Mykonos is an excellent way to explore the island's picturesque beaches, and iconic landmarks at your own pace. Options range from compact cars for navigating the narrow streets of Mykonos, to SUVs and jeeps ideal for reaching more remote spots like Fokos Beach, Elia beach or Panormos. ",
			},
			{
				text: "Prices range from as low as €50 per day in the low season for a standard car, up to €350 per day in the high season for an SUV. Rentals are available at many locations such as Mykonos Airport, Mykonos Port, and various spots in town, making it easy to pick up a car rental  when you arrive. During the busy summer season, booking your rental in advance is strongly recommended to secure the best rates and availability.",
			},
			{
				text: "Driving in Mykonos, comes with a few challenges. Roads are often narrow, winding, and busy, especially during peak times, so confidence in driving is important. Parking can be scarce and very expensive (about €25 per car) in popular areas like Mykonos Town or Psarou Beach. Fuel stations are limited and fuel is more expensive than the mainland, about 25% more. For visitors who prefer not to drive, a convenient alternative is Aegean Taxi, the best <strong>Mykonos Taxi</strong> service, which provides stress-free ways to get around. A rental car is ideal for those seeking freedom and flexibility, but understanding these nuances and actual costs will help make your experience enjoyable and hassle-free.",
			},
			{
				text: "Book your Mykonos Taxi with Aegean Taxi, instead of renting a car.",
			},
		],
		blogs: {},
	},
	{
		img: foot,
		imgClass: "max-w-[189px]",
		title: "Mykonos by Foot",
		text: [
			{
				text: "Renting a car in Mykonos is an excellent way to explore the island's picturesque beaches, and iconic landmarks at your own pace. Options range from compact cars for navigating the narrow streets of Mykonos, to SUVs and jeeps ideal for reaching more remote spots like Fokos Beach, Elia beach or Panormos. ",
			},
			{
				text: "Prices range from as low as €50 per day in the low season for a standard car, up to €350 per day in the high season for an SUV. Rentals are available at many locations such as Mykonos Airport, Mykonos Port, and various spots in town, making it easy to pick up a car rental  when you arrive. During the busy summer season, booking your rental in advance is strongly recommended to secure the best rates and availability.",
			},
			{
				text: "Driving in Mykonos, comes with a few challenges. Roads are often narrow, winding, and busy, especially during peak times, so confidence in driving is important. Parking can be scarce and very expensive (about €25 per car) in popular areas like Mykonos Town or Psarou Beach. Fuel stations are limited and fuel is more expensive than the mainland, about 25% more. For visitors who prefer not to drive, a convenient alternative is Aegean Taxi, the best <strong>Mykonos Taxi</strong> service, which provides stress-free ways to get around. A rental car is ideal for those seeking freedom and flexibility, but understanding these nuances and actual costs will help make your experience enjoyable and hassle-free.",
			},
			{
				text: "Book your Mykonos Taxi with Aegean Taxi, instead of renting a car.",
			},
		],
	},
];

const menudata = [
	{
		id: "1",
		name: "Taxi",
	},
	{
		id: "2",
		name: "Car Rent",
	},
	{
		id: "3",
		name: "Bus",
	},
	{
		id: "4",
		name: "Scooter",
	},
	{
		id: "11",
		name: "Taxi",
	},
	{
		id: "22",
		name: "Car Rent",
	},
	{
		id: "33",
		name: "Bus",
	},
	{
		id: "44",
		name: "Scooter",
	},
];
const nextIcon = (
	<svg
		width="12"
		height="20"
		viewBox="0 0 12 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M-1.02722e-07 17.65L7.417 10L-7.71506e-07 2.35L2.2834 -9.98106e-08L12 10L2.2834 20L-1.02722e-07 17.65Z"
			fill="#5B5B5B"
		/>
	</svg>
);
const prevIcon = (
	<svg
		width="12"
		height="20"
		viewBox="0 0 12 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M12 2.35L4.583 10L12 17.65L9.7166 20L0 10L9.7166 0L12 2.35Z"
			fill="#5B5B5B"
		/>
	</svg>
);
const arrow = (
	<svg
		width="18"
		height="15"
		viewBox="0 0 18 15"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M17.7246 2.36129C17.767 1.84805 17.327 1.3928 16.7418 1.34445L7.20499 0.556611C6.61977 0.508265 6.11098 0.885136 6.06858 1.39838C6.02618 1.91162 6.46623 2.36687 7.05145 2.41522L15.5286 3.11552L14.9144 10.5499C14.872 11.0632 15.3121 11.5184 15.8973 11.5668C16.4825 11.6151 16.9913 11.2383 17.0337 10.725L17.7246 2.36129ZM1.88249 14.4573L17.36 2.99277L15.97 1.55474L0.492506 13.0193L1.88249 14.4573Z"
			fill="currentColor"
		/>
	</svg>
);
const arrow2 = (
	<svg
		width="15"
		height="12"
		viewBox="0 0 15 12"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M14.5877 6.53033C14.8806 6.23744 14.8806 5.76256 14.5877 5.46967L9.81478 0.696699C9.52188 0.403806 9.04701 0.403806 8.75412 0.696699C8.46122 0.989593 8.46122 1.46447 8.75412 1.75736L12.9968 6L8.75412 10.2426C8.46122 10.5355 8.46122 11.0104 8.75412 11.3033C9.04701 11.5962 9.52188 11.5962 9.81478 11.3033L14.5877 6.53033ZM-3.82199e-09 6.75L14.0574 6.75L14.0574 5.25L3.82199e-09 5.25L-3.82199e-09 6.75Z"
			fill="currentColor"
		/>
	</svg>
);

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
			d="M8.50033 7.08301C6.93552 7.08301 5.66699 8.35153 5.66699 9.91634V26.9163C5.66699 28.4811 6.93552 29.7497 8.50033 29.7497H22.667C19.5374 29.7497 17.0003 27.2126 17.0003 24.083C17.0003 20.9534 19.5374 18.4163 22.667 18.4163C25.7966 18.4163 28.3337 20.9534 28.3337 24.083V9.91634C28.3337 8.35153 27.0651 7.08301 25.5003 7.08301H8.50033Z"
			fill="white"
		/>
		<path
			d="M22.667 21.5334V23.924L23.942 25.3584M28.3337 12.75V9.91667C28.3337 8.35186 27.0651 7.08333 25.5003 7.08333H21.2503M12.7503 29.75H8.50033C6.93552 29.75 5.66699 28.4815 5.66699 26.9167V15.5833M21.2503 4.25V7.08333M21.2503 9.91667V7.08333M12.7503 4.25V7.08333M12.7503 9.91667V7.08333M21.2503 7.08333H12.7503M12.7503 7.08333H8.50033C6.93552 7.08333 5.66699 8.35186 5.66699 9.91667V15.5833M12.7503 15.5833H5.66699M29.042 24.0833C29.042 27.6042 26.1878 30.4583 22.667 30.4583C19.1462 30.4583 16.292 27.6042 16.292 24.0833C16.292 20.5625 19.1462 17.7083 22.667 17.7083C26.1878 17.7083 29.042 20.5625 29.042 24.0833Z"
			stroke="black"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
const arrowRight = (
	<svg
		width="15"
		height="12"
		viewBox="0 0 15 12"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M14.5877 6.53033C14.8806 6.23744 14.8806 5.76256 14.5877 5.46967L9.81478 0.696699C9.52188 0.403806 9.04701 0.403806 8.75412 0.696699C8.46122 0.989593 8.46122 1.46447 8.75412 1.75736L12.9968 6L8.75412 10.2426C8.46122 10.5355 8.46122 11.0104 8.75412 11.3033C9.04701 11.5962 9.52188 11.5962 9.81478 11.3033L14.5877 6.53033ZM-3.82199e-09 6.75L14.0574 6.75L14.0574 5.25L3.82199e-09 5.25L-3.82199e-09 6.75Z"
			fill="currentColor"
		></path>
	</svg>
);
