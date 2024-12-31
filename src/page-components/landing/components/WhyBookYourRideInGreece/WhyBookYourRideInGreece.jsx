import React from "react";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import appStore from "./assets/img/app-store.png";
import img from "./assets/img/map-vector-img.png";
const WhyBookYourRideInGreece = () => {
	const [swiper, setSwiper] = React.useState(null);
	const [activeCount, setActiveCount] = React.useState(1);

	return (
		<section className="book-ride-section py-[60px] overflow-hidden">
			<div className="container">
				<h2 className="text-[#0044FF] text-[30px] leading-[36px] font-bold">
					Why book your <br /> ride in Greece with <br /> Aegean Taxi
				</h2>
			</div>
			<Image
				src={img}
				width={720}
				height={810}
				className="max-w-full mb-4 object-contain"
				alt=""
			/>
			<div className="container">
				<Swiper
					slidesPerView="auto"
					className="!overflow-visible"
					onSwiper={(swiper) => setSwiper(swiper)}
					spaceBetween={19}
					modules={[FreeMode, Pagination]}
					pagination={{
						el: ".swiper-pagination-4",
						clickable: true,
					}}
					onSlideChange={(swiper) => {
						setActiveCount(swiper.realIndex + 1);
					}}
				>
					{data.map((item, index) => (
						<SwiperSlide key={index} className="!w-auto !h-auto">
							<div className="w-[147px] border border-[#000] bg-[#F5F5F7] rounded-[25px] p-[15px] h-full">
								{icon}
								<div className="">
									<h5 className="font-semibold mb-3 mt-2 leading-[1.4]">
										{item.title}
									</h5>
									<p className="text-[#696969] text-xs">{item.text}</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div>
					<div className="swiper-pagination-4 !relative w-full flex justify-center mt-6 gap-2"></div>
					<style>
						{`.swiper-pagination-bullet {
                            width: 12px;
                            height: 12px;
                        } .swiper-pagination-bullet {
                            background: #000
                        }`}
					</style>
				</div>
				<div className="relative mt-5 flex justify-between">
					<button
						className="btn flex-grow gap-2 h-9 rounded-full"
						type="button"
					>
						<Image
							src={appStore}
							width={292}
							height={70}
							className="w-[146px]"
							alt="appstore"
						/>
					</button>
					<button
						className="btn flex items-center gap-2 justify-center bg-[#343434] text-white h-9 rounded-full text-sm px-4 w-full max-w-[151px]"
						type="button"
					>
						<span>{targetIcon}</span>
						<span>Contact Us</span>
					</button>
				</div>
			</div>
		</section>
	);
};

const data = [
	{
		title: "Low price guarantee",
		text: "We have the best mykonos rates. All fares include taxes fees and tolls.",
	},
	{
		title: "24/7 customer support",
		text: "Our Mykonos taxi team is available 24/7 to offer a more personalised service",
	},
	{
		title: "Low price guarantee",
		text: "We have the best mykonos rates. All fares include taxes fees and tolls.",
	},
	{
		title: "24/7 customer support",
		text: "Our Mykonos taxi team is available 24/7 to offer a more personalised service",
	},
	{
		title: "24/7 customer support",
		text: "Our Mykonos taxi team is available 24/7 to offer a more personalised service",
	},
];
const icon = (
	<svg
		width="44"
		height="40"
		viewBox="0 0 44 40"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M22.0149 0C34.0985 0 43.8941 8.9543 43.8941 20C43.8941 31.0457 34.0985 40 22.0149 40C9.93138 40 0.135742 31.0457 0.135742 20C0.135742 8.9543 9.93138 0 22.0149 0ZM20.6042 13.625C20.6042 13.283 20.7528 12.9551 21.0174 12.7133C21.2819 12.4715 21.6407 12.3356 22.0148 12.3356C22.3889 12.3356 22.7476 12.4715 23.0122 12.7133C23.2767 12.9551 23.4253 13.283 23.4253 13.625C23.4242 13.7299 23.4458 13.8339 23.4889 13.9311C23.532 14.0283 23.5958 14.1167 23.6765 14.1912C23.7572 14.2658 23.8533 14.3249 23.9592 14.3653C24.0651 14.4057 24.1787 14.4265 24.2934 14.4265C24.4081 14.4265 24.5217 14.4057 24.6276 14.3653C24.7335 14.3249 24.8296 14.2658 24.9103 14.1912C24.9911 14.1167 25.0548 14.0283 25.0979 13.9311C25.141 13.8339 25.1627 13.7299 25.1615 13.625C25.1606 13.0007 24.9378 12.3937 24.5269 11.8951C24.1159 11.3966 23.5389 11.0335 22.8827 10.8606V9.99523C22.8827 9.78482 22.7912 9.58303 22.6285 9.43424C22.4657 9.28546 22.2449 9.20187 22.0148 9.20187C21.7846 9.20187 21.5638 9.28546 21.4011 9.43424C21.2383 9.58303 21.1469 9.78482 21.1469 9.99523V10.8607C20.4178 11.052 19.7888 11.4777 19.3758 12.0593C18.9628 12.6409 18.7936 13.3393 18.8992 14.0259C19.0049 14.7125 19.3784 15.3411 19.9509 15.796C20.5234 16.2509 21.2564 16.5014 22.0149 16.5014C22.2938 16.5014 22.5665 16.577 22.7984 16.7187C23.0303 16.8603 23.211 17.0616 23.3178 17.2972C23.4245 17.5327 23.4524 17.7919 23.398 18.042C23.3436 18.292 23.2093 18.5217 23.0121 18.702C22.8149 18.8823 22.5636 19.005 22.2901 19.0548C22.0165 19.1045 21.733 19.079 21.4753 18.9814C21.2176 18.8838 20.9974 18.7186 20.8424 18.5066C20.6875 18.2946 20.6048 18.0454 20.6048 17.7905C20.6048 17.5801 20.5133 17.3783 20.3505 17.2295C20.1878 17.0807 19.967 16.9971 19.7369 16.9971C19.5067 16.9971 19.2859 17.0807 19.1231 17.2295C18.9604 17.3783 18.8689 17.5801 18.8689 17.7905C18.8699 18.4146 19.0925 19.0215 19.5033 19.52C19.9141 20.0185 20.4909 20.3816 21.1469 20.5547V21.4205C21.1469 21.5247 21.1693 21.6278 21.2129 21.7241C21.2565 21.8203 21.3205 21.9078 21.4011 21.9815C21.4817 22.0551 21.5773 22.1136 21.6826 22.1534C21.7879 22.1933 21.9008 22.2138 22.0148 22.2138C22.1287 22.2138 22.2416 22.1933 22.3469 22.1534C22.4522 22.1136 22.5479 22.0551 22.6285 21.9815C22.7091 21.9078 22.773 21.8203 22.8166 21.7241C22.8602 21.6278 22.8827 21.5247 22.8827 21.4205V20.5547C23.6115 20.3633 24.2402 19.9377 24.6531 19.3562C25.0659 18.7747 25.2351 18.0765 25.1295 17.39C25.0239 16.7036 24.6506 16.0751 24.0783 15.6202C23.506 15.1654 22.7733 14.9148 22.0149 14.9146C21.641 14.9141 21.2826 14.7781 21.0182 14.5363C20.7538 14.2946 20.6046 13.9668 20.6042 13.625ZM31.9767 20.1245H29.6475C29.4173 20.1244 29.1965 20.0408 29.0337 19.892C28.8709 19.7432 28.7794 19.5414 28.7794 19.3309V8.89172H15.2509V19.331C15.2508 19.5414 15.1594 19.7432 14.9966 19.892C14.8338 20.0408 14.6131 20.1244 14.3829 20.1245H12.0532L22.0149 30.6875L31.9767 20.1245ZM29.6475 7.30469H14.3829C14.1526 7.30471 13.9319 7.38832 13.7691 7.53713C13.6063 7.68593 13.5148 7.88776 13.5148 8.0982V18.5374H10.1588C9.99253 18.5373 9.82972 18.5808 9.68974 18.6629C9.54977 18.7449 9.43853 18.862 9.36928 19.0001C9.30002 19.1383 9.27566 19.2918 9.2991 19.4423C9.32254 19.5927 9.39279 19.7339 9.50149 19.8489L21.3577 32.4202C21.4392 32.5065 21.5401 32.5758 21.6535 32.6233C21.7669 32.6709 21.8902 32.6954 22.015 32.6954C22.1397 32.6954 22.263 32.6709 22.3765 32.6233C22.4899 32.5758 22.5908 32.5065 22.6723 32.4202L34.5288 19.8489C34.6373 19.7338 34.7074 19.5926 34.7307 19.4421C34.754 19.2917 34.7295 19.1382 34.6602 19.0001C34.5909 18.862 34.4797 18.7449 34.3397 18.6629C34.1997 18.5809 34.037 18.5373 33.8707 18.5374H30.5153V8.09812C30.5152 7.88776 30.4237 7.68603 30.261 7.53725C30.0983 7.38848 29.8777 7.30483 29.6475 7.30469Z"
			fill="#0291F7"
		/>
	</svg>
);

const targetIcon = (
	<svg
		width="19"
		viewBox="0 0 26 23"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<ellipse
			cx="13"
			cy="11.5"
			rx="13"
			ry="11.5"
			fill="url(#paint0_radial_1_2189)"
		/>
		<defs>
			<radialGradient
				id="paint0_radial_1_2189"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(13 11.5) rotate(90) scale(11.5 13)"
			>
				<stop offset="0.406102" stopColor="#00FF15" />
				<stop offset="0.811102" stopColor="#E2D116" />
			</radialGradient>
		</defs>
	</svg>
);
export default WhyBookYourRideInGreece;
