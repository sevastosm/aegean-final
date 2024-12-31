import Image from "next/image";
import React from "react";

import Link from "next/link";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "./beach-img.png";
import blog from "./blog.png";
import img from "./img.png";
export const MykonosBeachService = () => {
	const [activeTab, setActiveTab] = React.useState(menudata[0]);
	const [swiper, setSwiper] = React.useState(null);
	return (
		<section className="bg-[#F1F3FB] rounded-t-[40px] relative z-10 mt-[-30px] pt-7 pb-[60px]">
			<div className="container relative z-10">
				<div className="max-w-[266px] mx-auto text-sm">
					<p className="">
						Mykonos features an extraordinary coastal landscape, offering
						a mesmerising array of shorelines that host some of the
						world’s best beaches.
						<br />
						<br />
						From pulsing party beaches that never sleep to tranquil hidden
						gems, Mykonos presents a beach experience as diverse as its
						visitors. The Aegean Taxi fleet has explored every single one
						of them, having transported thousands of tourists and received
						their feedback as well, so we offer you our own inside view of
						our top beaches in Mykonos.
						<br />
						<br />
						Your ultimate beach adventure in Mykonos starts here!
					</p>
				</div>
			</div>
			<Image
				src={img}
				width={600}
				height={600}
				alt=""
				className="w-full h-auto object-contain -translate-y-9"
			/>
			<div className="container">
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
					>
						{menudata.map((item, index) => (
							<SwiperSlide
								key={index}
								className="!w-auto will-change-scroll"
							>
								<span
									className="h-10 rounded-full px-6 text-sm cursor-pointer flex items-center justify-center select-none min-w-[116px]"
									style={{
										backgroundColor:
											activeTab.id === item.id ? "#000000" : "",
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
				<div className="flex flex-col gap-[26px]">
					{data.map(({ img, buttonText, buttonUrl, blogs }, index) => (
						<div key={index}>
							<div className="rounded-[22px] border border-black">
								<Image
									src={img}
									width={500}
									height={500}
									alt=""
									className="object-cover w-full rounded-t-[20px]"
								/>
								<div className="px-[22px] py-4">
									<h5 className="underline font-bold text-xl mb-[18px]">
										Psarou Beach
									</h5>
									<ul className="flex flex-col gap-3 text-sm">
										<li className="flex gap-3">
											{icons.distance}
											<strong>Distance from Town:</strong>
											<span className="w-0 flex-grow">5km</span>
										</li>
										<li className="flex gap-3">
											{icons.thumbs}
											<strong>Best for:</strong>
											<span className="w-0 flex-grow">
												Luxury, Couples, Groups{" "}
											</span>
										</li>
										<li className="flex gap-3">
											{icons.restaurant}
											<strong>Notable Restaurants:</strong>
											<span className="w-0 flex-grow">Nammos</span>
										</li>
									</ul>
									<div className="border-t border-black pt-[15px] mt-[15px] text-xs leading-[21px] overflow-y-auto max-h-[200px]">
										<strong>Description:</strong>This upmarket sandy
										beach with its turquoise waters is very popular
										among celebrities. Many luxury hotels, apartments
										and restaurants are located here. The most notable
										one is Nammos, which is considered one of the best
										beach clubs in Mykonos. Psarou beach is easily
										accessible from Mykonos Town, just one stop before
										the last
									</div>
									<Link href="" className="block">
										<button
											type="button"
											className="w-full btn text-[15px] h-9 font-bold bg-[#174FCD] rounded-lg text-white mt-[15px] relative flex justify-between items-center px-5"
										>
											Book Taxi to Psarou Beach {arrow}
										</button>
									</Link>
									<Link href="">
										<button
											type="button"
											className="text-[15px] font-semibold text-[#1865D9] mt-[15px] flex items-center gap-2"
										>
											Book Taxi to Nammos {arrow}
										</button>
									</Link>
								</div>
							</div>

							{blogs && (
								<Link
									href=""
									className="flex py-5 border-b border-t border-[#999999] gap-5 mt-[50px] mb-3"
								>
									<Image src={blog} width={122} height={106} alt="" />
									<div className="w-0 flex-grow">
										<h5 className="font-semibold mb-3">
											Mykonos: A journey through time and the
											transformation from rags to riches
										</h5>
										<div className="text-xs flex items-center gap-2 font-medium">
											Read the blog post{" "}
											<span className="text-[#0066FF]">
												{" "}
												{icons.arrow}
											</span>
										</div>
									</div>
								</Link>
							)}
							<div className="flex justify-center pt-6">
								<Link href={buttonUrl} className="block">
									<button
										className="btn flex items-center gap-2 justify-center bg-[#2B2B6E] text-white h-9 rounded-full text-sm px-4 min-w-[260px]"
										type="button"
									>
										<span>{buttonText}</span>
										{arrowRight}
									</button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
const data = [
	{
		img: img1,
		buttonText: "Explore how to get around Mykonos",
		buttonUrl: "",
		blogs: {},
	},
	{
		img: img1,
		buttonText: "Explore Mykonos Restaurants",
		buttonUrl: "",
		blogs: {},
	},
	{
		img: img1,
		buttonText: "Mykonos Sightseeing",
		buttonUrl: "",
	},
	{
		img: img1,
		buttonText: "Explore Mykonos Bars & Clubs",
		buttonUrl: "",
	},
	{
		img: img1,
		buttonText: "Go to Mykonos Airport",
		buttonUrl: "",
	},
	{
		img: img1,
		buttonText: "Go to Mykonos Port",
		buttonUrl: "",
	},
	{
		img: img1,
		buttonText: "Go to Mykonos Taxi",
		buttonUrl: "",
	},
	{
		img: img1,
		buttonText: "Go to Mykonos",
		buttonUrl: "",
	},
];
const icons = {
	distance: (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M17.1572 4.37543C17.1572 7.24407 13.5479 9.27368 13.5479 9.27368C13.5479 9.27368 9.93848 7.26095 9.93848 4.37543C9.93848 2.49288 11.5544 0.966797 13.5479 0.966797C15.5413 0.966797 17.1572 2.49288 17.1572 4.37543Z"
				stroke="black"
				strokeWidth="0.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13.5478 5.96499C14.4776 5.96499 15.2313 5.25316 15.2313 4.37507C15.2313 3.49699 14.4776 2.78516 13.5478 2.78516C12.618 2.78516 11.8643 3.49699 11.8643 4.37507C11.8643 5.25316 12.618 5.96499 13.5478 5.96499Z"
				stroke="black"
				strokeWidth="0.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13.5459 10.843C14.0049 10.843 14.3769 10.4917 14.3769 10.0582C14.3769 9.6248 14.0049 9.27344 13.5459 9.27344C13.0869 9.27344 12.7148 9.6248 12.7148 10.0582C12.7148 10.4917 13.0869 10.843 13.5459 10.843Z"
				stroke="black"
				strokeWidth="0.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8.96953 9.33215C8.96953 12.6501 4.79484 14.9976 4.79484 14.9976C4.79484 14.9976 0.620117 12.6696 0.620117 9.33215C0.620117 7.15477 2.48918 5.38965 4.79484 5.38965C7.1005 5.38965 8.96953 7.15477 8.96953 9.33215Z"
				stroke="black"
				strokeWidth="0.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4.79693 11.6159C6.13237 11.6159 7.21496 10.5935 7.21496 9.33236C7.21496 8.0712 6.13237 7.04883 4.79693 7.04883C3.46149 7.04883 2.37891 8.0712 2.37891 9.33236C2.37891 10.5935 3.46149 11.6159 4.79693 11.6159Z"
				stroke="black"
				strokeWidth="0.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4.79518 16.8135C5.32603 16.8135 5.75637 16.4071 5.75637 15.9058C5.75637 15.4045 5.32603 14.998 4.79518 14.998C4.26433 14.998 3.83398 15.4045 3.83398 15.9058C3.83398 16.4071 4.26433 16.8135 4.79518 16.8135Z"
				stroke="black"
				strokeWidth="0.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13.5469 12.1992C13.5469 12.6292 13.1779 12.9777 12.7226 12.9777H11.4867C11.0364 12.9777 10.6714 13.3224 10.6714 13.7477C10.6714 14.1729 11.0364 14.5176 11.4867 14.5176H15.2159C15.703 14.5176 16.0977 14.8904 16.0977 15.3504C16.0977 15.8103 15.703 16.1831 15.2159 16.1831H7.22168"
				stroke="black"
				strokeWidth="0.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	),
	thumbs: (
		<svg
			width="18"
			height="15"
			viewBox="0 0 18 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0.929415 5.55127C0.929415 4.53667 1.82475 3.71135 2.92542 3.71135H4.32453C5.25508 3.71135 6.0388 4.30118 6.25905 5.09679C6.3068 5.07974 6.35694 5.06598 6.40887 5.05663C6.89593 4.96474 7.29227 4.83654 7.46895 4.71494C7.71069 4.54768 7.79903 4.36335 7.88558 4.06018C8.08315 3.37021 8.31892 2.24226 8.33384 1.33716C8.34518 0.624626 8.93312 0.107422 9.73236 0.107422C9.79384 0.107422 9.8577 0.110173 9.92097 0.116225C10.4988 0.169046 11.03 0.444155 11.4162 0.889831C11.8477 1.38723 12.0447 2.04584 11.9576 2.6962C11.8818 3.25852 11.8036 3.81699 11.7606 4.11686C12.0943 4.07614 12.4691 4.04093 12.7675 4.04093H15.6965C16.2074 4.04093 16.707 4.2346 17.0669 4.57299C17.4227 4.90752 17.6137 5.34549 17.6042 5.80712C17.5934 6.31828 17.3379 6.77771 16.9422 7.08913C17.1971 7.39725 17.3314 7.77195 17.3248 8.16646C17.3141 8.7772 16.9482 9.31421 16.4086 9.61463C16.5859 9.88809 16.6778 10.2028 16.6718 10.5302C16.6593 11.2152 16.2009 11.8072 15.5514 12.0774C15.6899 12.3267 15.7604 12.6056 15.7556 12.8945C15.7389 13.8337 14.8829 14.5979 13.8479 14.5979H11.332C10.9118 14.5979 10.5006 14.5275 10.1102 14.3883L7.39314 13.4227C7.14006 13.3324 6.87325 13.2868 6.60107 13.2868C6.48766 13.2868 6.37903 13.2686 6.27755 13.2351C6.08834 14.0697 5.28433 14.6986 4.32393 14.6986H2.92482C1.82415 14.6986 0.928816 13.8733 0.928816 12.8587V5.55127H0.929415ZM6.23995 12.4037C6.23995 12.5875 6.40171 12.7366 6.60107 12.7366C6.94547 12.7366 7.2863 12.7949 7.60802 12.9093L10.3251 13.875C10.6462 13.9894 10.9876 14.0477 11.3326 14.0477H13.8485C14.5534 14.0477 15.1479 13.5349 15.1599 12.8857C15.1659 12.5511 15.0214 12.248 14.7844 12.0295C14.5522 11.816 14.2311 11.6834 13.8772 11.6834H14.7647C15.4697 11.6834 16.0642 11.1706 16.0755 10.5214C16.0815 10.1869 15.937 9.88369 15.7001 9.66525C15.4679 9.45176 15.1473 9.31916 14.7928 9.31916H15.4165C16.1215 9.31916 16.716 8.80636 16.7273 8.1571C16.7333 7.82257 16.5888 7.5194 16.3519 7.30096C16.1197 7.08748 15.7992 6.95488 15.4446 6.95488H15.7245C16.4247 6.95488 16.9935 6.43822 17.0067 5.79612C17.0204 5.13311 16.4145 4.59114 15.6959 4.59114H12.7669C12.1354 4.59114 11.0986 4.76886 11.0634 4.77657C11.0634 4.77657 11.1052 4.48825 11.1637 4.07504C11.2222 3.66238 11.2974 3.12536 11.3643 2.62907C11.4974 1.63648 10.7835 0.748975 9.86069 0.664242C9.24112 0.607019 8.93551 0.959158 8.92954 1.34541C8.91342 2.28078 8.67526 3.45274 8.46158 4.20104C8.35593 4.57024 8.21566 4.88661 7.82529 5.15622C7.49044 5.38731 6.88579 5.52926 6.52705 5.59694C6.35933 5.62885 6.23876 5.76476 6.23876 5.92322V12.4048L6.23995 12.4037ZM2.92542 14.1484H4.32453C5.0969 14.1484 5.72364 13.5712 5.72364 12.8587V5.55127C5.72364 4.83929 5.0975 4.26156 4.32453 4.26156H2.92542C2.15304 4.26156 1.5263 4.83874 1.5263 5.55127V12.8587C1.5263 13.5707 2.15244 14.1484 2.92542 14.1484Z"
				fill="black"
			/>
		</svg>
	),
	restaurant: (
		<svg
			width="17"
			height="16"
			viewBox="0 0 17 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_27_14498)">
				<path
					d="M10.7318 8.02205L11.5953 7.1583C12.1426 7.34064 12.73 7.36636 13.2911 7.23255C13.8522 7.09874 14.3648 6.81074 14.7709 6.40106C16.5865 4.58489 17.0424 2.19493 15.8073 0.960129C14.5723 -0.274669 12.1826 0.180899 10.3664 1.99658C9.95671 2.40268 9.6687 2.91523 9.5349 3.47636C9.40109 4.03748 9.42681 4.62484 9.60915 5.17212L8.7454 6.03562L7.95786 5.24833L7.92928 4.70238C7.89859 4.11477 7.65126 3.55938 7.23506 3.14344L4.48357 0.391951C4.44388 0.352254 4.39675 0.320764 4.34488 0.299281C4.29302 0.277797 4.23743 0.266739 4.18129 0.266739C4.06791 0.266739 3.95917 0.311779 3.879 0.391951C3.79883 0.472122 3.75379 0.580858 3.75379 0.694238C3.75379 0.750378 3.76485 0.805968 3.78633 0.857835C3.80781 0.909701 3.8393 0.956828 3.879 0.996525L5.99489 3.11217L5.21761 3.88945L3.1027 1.7738C3.06294 1.73404 3.01574 1.7025 2.96379 1.68098C2.91184 1.65946 2.85616 1.64839 2.79992 1.64839C2.74369 1.64839 2.68801 1.65946 2.63606 1.68098C2.58411 1.7025 2.53691 1.73404 2.49715 1.7738C2.41685 1.8541 2.37173 1.96301 2.37173 2.07658C2.37173 2.19014 2.41685 2.29905 2.49715 2.37935L4.61304 4.49524L3.83552 5.27154L1.71987 3.15565C1.6397 3.07548 1.53097 3.03044 1.41759 3.03044C1.30421 3.03044 1.19547 3.07548 1.1153 3.15565C1.03513 3.23582 0.990087 3.34456 0.990087 3.45794C0.990087 3.57132 1.03513 3.68005 1.1153 3.76023L3.86679 6.51171C4.28272 6.92791 4.83812 7.17524 5.42573 7.20594L5.97168 7.23451L6.75897 8.02205L1.40061 13.3807C1.13723 13.644 0.989258 14.0013 0.989258 14.3737C0.989258 14.7462 1.13723 15.1035 1.40061 15.3668C1.66399 15.6302 2.02122 15.7782 2.3937 15.7782C2.76618 15.7782 3.12341 15.6302 3.38679 15.3668L8.7454 10.0085L14.1035 15.3666C14.2339 15.497 14.3888 15.6005 14.5592 15.6711C14.7296 15.7417 14.9123 15.778 15.0967 15.778C15.2812 15.778 15.4638 15.7417 15.6343 15.6711C15.8047 15.6005 15.9595 15.497 16.0899 15.3666C16.2204 15.2362 16.3238 15.0813 16.3944 14.9109C16.465 14.7405 16.5013 14.5578 16.5013 14.3734C16.5013 14.1889 16.465 14.0063 16.3944 13.8359C16.3238 13.6654 16.2204 13.5106 16.0899 13.3802L10.7318 8.02205ZM10.4096 5.57932C10.4705 5.51852 10.5116 5.44073 10.5275 5.35617C10.5434 5.27161 10.5334 5.18421 10.4988 5.10543C10.3146 4.68926 10.2612 4.22698 10.3455 3.77976C10.4298 3.33255 10.6479 2.92146 10.971 2.60091C12.3987 1.17313 14.3368 0.698513 15.2027 1.5647C16.0687 2.43089 15.5936 4.36871 14.1665 5.79648C13.8459 6.11977 13.4346 6.33803 12.9871 6.42235C12.5396 6.50667 12.0771 6.45308 11.6608 6.26866C11.582 6.23404 11.4946 6.22403 11.4101 6.23994C11.3255 6.25585 11.2477 6.29694 11.1869 6.35782L10.1272 7.41747L9.34997 6.6402L10.4096 5.57932ZM2.78221 14.7625C2.67911 14.8656 2.53928 14.9235 2.39349 14.9235C2.2477 14.9234 2.10789 14.8655 2.00482 14.7624C1.90174 14.6593 1.84385 14.5195 1.84387 14.3737C1.8439 14.2279 1.90183 14.0881 2.00494 13.985L7.36355 8.62662L8.14082 9.4039L2.78221 14.7625ZM15.4844 14.7625C15.3813 14.8655 15.2415 14.9233 15.0958 14.9233C14.95 14.9233 14.8102 14.8655 14.7071 14.7625L6.46023 6.51415C6.3855 6.43948 6.28579 6.39511 6.18029 6.38958L5.4719 6.3522C5.09453 6.33304 4.73771 6.17443 4.47063 5.90714L4.4396 5.87611L6.59873 3.71699L6.62975 3.74801C6.89661 4.0146 7.05518 4.37064 7.07482 4.74733L7.11219 5.45572C7.11772 5.56122 7.1621 5.66093 7.23677 5.73566L15.4854 13.9847C15.5883 14.0879 15.6461 14.2277 15.6461 14.3734C15.6461 14.5191 15.5883 14.6589 15.4854 14.762L15.4844 14.7625Z"
					fill="black"
				/>
			</g>
			<defs>
				<clipPath id="clip0_27_14498">
					<rect
						width="15.6334"
						height="15.6334"
						fill="white"
						transform="translate(0.928711 0.205078)"
					/>
				</clipPath>
			</defs>
		</svg>
	),
	arrow: (
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
	),
};
const menudata = [
	{
		id: "1",
		name: "Psarou",
	},
	{
		id: "2",
		name: "Ornos",
	},
	{
		id: "3",
		name: "Kalo Livadi",
	},
	{
		id: "4",
		name: "Psarou",
	},
	{
		id: "5",
		name: "Ornos",
	},
	{
		id: "6",
		name: "Kalo Livadi",
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
