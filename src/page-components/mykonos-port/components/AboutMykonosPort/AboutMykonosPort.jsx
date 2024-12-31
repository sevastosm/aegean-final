import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import map from "./img/map.png";
import ship from "./img/ship.png";
const AboutMykonosPort = () => {
	const [swiper, setSwiper] = useState(null);
	const [activeTab, setActiveTab] = useState(menudata[0]);

	return (
		<section className="pt-[50px]">
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
									className="min-h-12 rounded-full px-1 text-sm cursor-pointer flex items-center justify-center select-none w-[128px] text-center font-bold"
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
									dangerouslySetInnerHTML={{
										__html: item.name,
									}}
								></span>
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
			<div className="bg-[#e3e3e3] py-6">
				<div className="container">
					<h4 className="flex items-center gap-3 text-2xl font-bold leading-[28px] mb-8">
						{icons.info}
						<span className="w-0 flex-grow">
							Mykonos port live streaming
						</span>
					</h4>
					<div className="text-sm">
						<strong>Call Centre:</strong> +30 22890 28933 email:
						info@MykonosPorts.gr
						<br />
						<br />
						<div>
							<strong>Address:</strong>
						</div>
						<div className="underline">
							Tourlos New Port <br /> Mykonos, 847 00, Greece
						</div>
						<br />
						<div>
							<strong>
								Port Latitude and Longitude: <br /> UN/LOCODE: GRJMK
							</strong>
						</div>
						<div>Lat: 37.46280</div>
						<div>Lon: 25.32190</div>
						<br />
						<div>
							Located approximately 2 kilometers from Mykonos town
							(Chora), the new port is the primary maritime gateway for
							the island. All major ferry companies, including Hellenic
							Seaways, Blue Star Ferries, Highspeed Ferries, and Golden
							Star Ferries, now operate from this newly constructed port.
							As the sole active commercial port, it handles virtually
							all passenger ferry traffic to and from Mykonos.
						</div>
					</div>
					<div className="flex pt-6">
						<Link href={""} className="block">
							<button
								className="btn flex items-center gap-2 justify-center bg-black text-white h-9 rounded-full text-sm px-4 min-w-[260px]"
								type="button"
							>
								<span>Go to Mykonos Port Transfers</span>
								{arrowRight}
							</button>
						</Link>
					</div>
					<Image
						src={ship}
						width={600}
						height={600}
						className="w-full mt-14 mb-6"
						alt=""
					/>
					<h4 className="flex items-center gap-3 text-2xl font-bold leading-[28px] mb-8">
						<span className="w-0 flex-grow">About Mykonos Old Port</span>
					</h4>
					<div className="text-sm">
						<strong>Call Centre:</strong> +30 22890 28933 email:
						info@MykonosPorts.gr
						<br />
						<br />
						<div>
							<strong>Address:</strong>
						</div>
						<div className="underline">
							Tourlos New Port <br /> Mykonos, 847 00, Greece
						</div>
						<br />
						<div>
							<strong>
								Port Latitude and Longitude: <br /> UN/LOCODE: GRJMK
							</strong>
						</div>
						<div>Lat: 37.46280</div>
						<div>Lon: 25.32190</div>
						<br />
						<div>
							Located approximately 2 kilometers from Mykonos town
							(Chora), the new port is the primary maritime gateway for
							the island. All major ferry companies, including Hellenic
							Seaways, Blue Star Ferries, Highspeed Ferries, and Golden
							Star Ferries, now operate from this newly constructed port.
							As the sole active commercial port, it handles virtually
							all passenger ferry traffic to and from Mykonos.
						</div>
					</div>

					<h4 className="flex items-center gap-3 text-2xl font-bold leading-[28px] mb-8 mt-[30px]">
						{icons.traffic}
						<span className="w-0 flex-grow">
							Live Mykonos port <br /> traffic
						</span>
					</h4>
					<div className="text-sm">
						See the status of all vessels arriving and departing Mykonos
						port live. Complete with vessel names, estimated arrival to
						the port of mykonos, as well as ferries and ships anchored in
						and around Mykonos
					</div>
					<Image
						src={map}
						width={600}
						height={600}
						className="w-full mt-12"
						alt=""
					/>
					<br />
				</div>
			</div>
		</section>
	);
};
const menudata = [
	{
		id: "1",
		name: "About Mykonos Port",
	},
	{
		id: "2",
		name: "Live traffic <br /> map",
	},
	{
		id: "3",
		name: "Getting to and from",
	},
	{
		id: "11",
		name: "About Mykonos Port",
	},
	{
		id: "21",
		name: "Live traffic <br /> map",
	},
	{
		id: "31",
		name: "Getting to and from",
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

const icons = {
	info: (
		<svg
			width="50"
			height="50"
			viewBox="0 0 50 50"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M26.6732 33.6296V26.5691C26.6117 22.9502 21.7069 22.1047 20.3994 25.4193C22.1114 26.0901 23.3269 27.7585 23.3269 29.7056V36.7677C23.3917 40.3821 28.2909 41.2338 29.6004 37.9193C28.3179 37.4189 26.6732 35.9979 26.6732 33.6296Z"
				fill="black"
			/>
			<path
				d="M25.0007 14.9052C26.3559 14.9052 27.4584 13.8027 27.4584 12.4475C27.3349 9.19158 22.6661 9.19236 22.543 12.4475C22.543 13.8027 23.6455 14.9052 25.0007 14.9052Z"
				fill="black"
			/>
			<path
				d="M46.4006 3.59941C44.281 1.47979 41.0136 0 36.1963 0H13.8037C8.98643 0 5.71904 1.47979 3.59941 3.59941C1.4793 5.71953 0 8.98691 0 13.8037V36.1963C0 41.0131 1.4793 44.2805 3.59941 46.4005C5.71904 48.5202 8.98643 50 13.8037 50H36.1963C41.0136 50 44.281 48.5202 46.4006 46.4006C48.5207 44.2806 50 41.0131 50 36.1963V13.8037C50 8.98691 48.5207 5.71953 46.4006 3.59941ZM25.0004 7.06055C27.971 7.06055 30.3878 9.47734 30.3878 12.4479C30.117 19.5853 19.8828 19.5833 19.613 12.4479C19.613 9.47734 22.0298 7.06055 25.0004 7.06055ZM26.5706 42.9395C23.1659 42.9395 20.3972 40.1707 20.3972 36.7676V29.7055C20.3972 28.7838 19.6473 28.0339 18.7256 28.0339H18.724C17.915 28.0339 17.2592 27.378 17.2592 26.569C17.5676 18.393 29.3038 18.392 29.6029 26.569V33.6296C29.6029 34.555 30.3518 35.3028 31.2761 35.3028C32.0851 35.3028 32.7409 35.9587 32.7409 36.7677C32.7409 40.1714 29.9729 42.9395 26.5706 42.9395Z"
				fill="black"
			/>
		</svg>
	),
	traffic: (
		<svg
			width="47"
			height="47"
			viewBox="0 0 47 47"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M41.8719 0H4.22187C1.89375 0 0 1.89375 0 4.22187V41.8719C0 44.2 1.89375 46.0938 4.22187 46.0938H41.8719C44.2 46.0938 46.0938 44.2 46.0938 41.8719V4.22187C46.0938 1.89375 44.2 0 41.8719 0ZM5.85938 19.0344C5.38594 19.0344 4.95781 18.7484 4.77656 18.3109C4.59531 17.8734 4.69531 17.3688 5.03125 17.0344L13.8625 8.20312C14.3016 7.76406 15.0797 7.76406 15.5203 8.20312L24.3516 17.0344C24.6859 17.3688 24.7875 17.8734 24.6062 18.3109C24.425 18.7484 23.9969 19.0344 23.5234 19.0344H19.9531V37.0625C19.9531 37.7094 19.4281 38.2344 18.7812 38.2344H10.6016C9.95469 38.2344 9.42969 37.7094 9.42969 37.0625V19.0344H5.85938ZM41.0625 29.0594L32.2313 37.8906C32.0109 38.1109 31.7141 38.2344 31.4031 38.2344C31.0922 38.2344 30.7938 38.1109 30.575 37.8906L21.7438 29.0594C21.4094 28.725 21.3078 28.2203 21.4891 27.7828C21.6703 27.3453 22.0984 27.0594 22.5719 27.0594H26.1422V9.03125C26.1422 8.38438 26.6672 7.85938 27.3141 7.85938H35.4922C36.1391 7.85938 36.6641 8.38438 36.6641 9.03125V27.0594H40.2344C40.7094 27.0594 41.1359 27.3453 41.3172 27.7828C41.4984 28.2203 41.3984 28.725 41.0625 29.0594Z"
				fill="black"
			/>
		</svg>
	),
};

export default AboutMykonosPort;
