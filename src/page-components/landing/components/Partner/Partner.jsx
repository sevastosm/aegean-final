import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "./assets/img/img1.png";
import img2 from "./assets/img/img2.png";
const Partner = () => {
	const [activeTab, setActiveTab] = React.useState(data[0]);
	const [swiper, setSwiper] = React.useState(null);
	const [contentSwiper, setContentSwiper] = React.useState(null);
	const [activeCount, setActiveCount] = React.useState(1);

	return (
		<section className="partner-section py-[71px] overflow-hidden">
			<div className="container">
				<h2 className="text-4xl font-semibold mb-6 text-[#0000FF]">
					Partner with us
				</h2>
				<p className="mb-10">
					Learn how you can partner with us to expand your business and
					earn extra revenue. Aegean Taxi partners with a broad range of
					businesses and offers custom solutions.
				</p>
				<h5 className="text-xl mb-7">Who can partner with us</h5>
				<div className="py-[6px] px-2 bg-[#E9E8ED] rounded-full mb-6 overflow-hidden relative">
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
						onSlideChange={(swiper) => {
							setActiveTab(data[swiper.activeIndex]);
						}}
						onInit={(swiper) => {
							setActiveTab(data[swiper.activeIndex]);
						}}
					>
						{data.map((item, index) => (
							<SwiperSlide
								key={index}
								className="!w-auto will-change-scroll"
							>
								<span
									className="h-10 rounded-full px-6 text-sm cursor-pointer flex items-center justify-center select-none min-w-[116px]"
									style={{
										backgroundColor:
											activeTab.id === item.id ? "#004080" : "",
										color:
											activeTab.id === item.id ? "#fff" : "#3F3E3E",
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
				<Swiper
					slidesPerView="auto"
					className="!overflow-visible"
					onSwiper={(swiper) => {
						setContentSwiper(swiper);
						setActiveCount(swiper.activeIndex + 1);
					}}
					spaceBetween={37}
					modules={[Navigation, FreeMode]}
					navigation={{
						nextEl: ".next-2",
						prevEl: ".prev-2",
					}}
					onSlideChange={(swiper) => {
						setActiveCount(swiper.activeIndex + 1);
					}}
					onInit={(swiper) => {
						setActiveCount(swiper.activeIndex + 1);
					}}
				>
					{activeTab.content.map((item, index) => (
						<SwiperSlide
							key={item.id}
							className="!w-auto will-change-scroll !h-auto"
						>
							<div className="border border-current rounded-[25px] pb-5 px-2 pt-2 w-[194px] text-center h-full">
								<div className="flex justify-center">
									<Image
										src={item.img}
										alt=""
										width={123}
										height={123}
										className="w-[123px] aspect-square object-contain h-auto"
									/>
								</div>
								<h5 className="font-semibold text-sm mb-2">
									{item.title}
								</h5>
								<p className="text-sm">{item.text}</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className="flex justify-end items-center mt-8 gap-2">
					<button className="prev-2" aria-label="prev">
						{prevIcon2}
					</button>
					{activeCount + " / " + activeTab?.content?.length}
					<button className="next-2" aria-label="next">
						{nextIcon2}
					</button>
				</div>
				<div className="mt-5">
					<Link
						className="inline-flex bg-primary text-white gap-4 items-center h-[35px] font-semibold text-sm px-7 rounded-full"
						href=""
					>
						Go to partners {arrowRight}
					</Link>
				</div>
			</div>
		</section>
	);
};
const content1 = [
	{
		id: "1",
		img: img1.src,
		title: "Airlines",
		text: "We integrate with major airlines and offer a range of products like checking-out taxi booking integrations",
	},
	{
		id: "2",
		img: img2.src,
		title: "Hotels",
		text: "Let us handle all their logistics. From airport transfers to Tours, our motto: “arrive-get around - depart” encapsulates all.",
	},
	{
		id: "3",
		img: img1.src,
		title: "Airlines",
		text: "We integrate with major airlines and offer a range of products like checking-out taxi booking integrations",
	},
	{
		id: "4",
		img: img2.src,
		title: "Hotels",
		text: "Let us handle all their logistics. From airport transfers to Tours, our motto: “arrive-get around - depart” encapsulates all.",
	},
	{
		id: "5",
		img: img1.src,
		title: "Airlines",
		text: "We integrate with major airlines and offer a range of products like checking-out taxi booking integrations",
	},
	{
		id: "6",
		img: img2.src,
		title: "Hotels",
		text: "Let us handle all their logistics. From airport transfers to Tours, our motto: “arrive-get around - depart” encapsulates all.",
	},
	{
		id: "7",
		img: img1.src,
		title: "Airlines",
		text: "We integrate with major airlines and offer a range of products like checking-out taxi booking integrations",
	},
	{
		id: "8",
		img: img2.src,
		title: "Hotels",
		text: "Let us handle all their logistics. From airport transfers to Tours, our motto: “arrive-get around - depart” encapsulates all.",
	},
];
const data = [
	{
		id: "1",
		name: "Airlines",
		content: content1,
	},
	{
		id: "2",
		name: "Hotels",
		content: content1,
	},
	{
		id: "3",
		name: "Travel Agents",
		content: content1,
	},
	{
		id: "4",
		name: "Travel Agencies",
		content: content1,
	},
	{
		id: "5",
		name: "Tour Operators",
		content: content1,
	},
	{
		id: "6",
		name: "Tour Operators",
		content: content1,
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

export default Partner;
