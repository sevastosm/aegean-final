import Image from "next/image";
import img1 from "./assets/img/1.png";
import img2 from "./assets/img/2.png";
import img3 from "./assets/img/3.png";
import img4 from "./assets/img/4.png";
import bag from "./assets/img/bag.svg";
const CarCategories = () => {
	return (
		<section className="partner-section py-[71px] overflow-hidden">
			<div className="container max-sm:px-5">
				<div className="px-6">
					<h2 className="text-[29px] font-semibold mb-6 text-[#0000FF]">
						Taxi car categories
					</h2>
					<p className="mb-12 text-xl max-sm:max-w-[282px] tracking-wide">
						From taxis to luxury cars, you choose the right ride for you
					</p>
				</div>
				<div className="border rounded-xl border-black p-4">
					<div className="max-h-[425px] overflow-y-auto">
						<div className="flex flex-col gap-[30px]">
							{data.map((item, index) => (
								<div className="flex gap-5" key={index}>
									<div className="w-0 flex-grow">
										<div className="flex mb-2">
											<h5 className="text-xl font-medium w-[100px]">
												{item.title}
											</h5>
											<div className="flex items-center gap-2 text-xs text-[#8E8E8E]">
												<div className="flex items-center gap-1">
													<span>{user}</span>
													<span>{item.user}</span>
												</div>
												<div className="flex items-center gap-1">
													<span>{bagImg}</span>
													<span>{item.bag}</span>
												</div>
											</div>
										</div>
										<div className="font-medium text-sm leading-[16px] mb-[6px] text-[#737373]">
											{item.text}
										</div>
										<div className="flex gap-3 font-semibold items-center">
											<span className="text-xs">From</span>
											<span className="text-normal">
												{item.from}
											</span>
										</div>
									</div>
									<div className="w-[86px] text-center">
										<Image
											className="w-full object-contain"
											src={item.img}
											alt=""
											width={86}
											height={86}
										/>
										<div className="mt-[7px] text-xs font-thin">
											{item.name}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="mt-10 flex flex-wrap gap-5">
					<button
						className="btn flex-grow flex items-center gap-2 justify-center bg-[#004080] text-white h-10 rounded-full text-sm px-2"
						type="button"
					>
						<span>{targetIcon}</span>
						<span>Book Online</span>
						<span>{arrow1}</span>
					</button>
					<button
						className="btn flex-grow flex items-center gap-2 justify-center bg-[#343434] text-white h-10 rounded-full text-sm px-2"
						type="button"
					>
						<span>Download the App</span>
						<span>{arrow2}</span>
					</button>
				</div>
			</div>
		</section>
	);
};
const data = [
	{
		img: img1,
		title: "Taxi",
		text: "Our most common taxi cars available in main locations",
		from: "€20",
		name: "Mercedes E or similar",
		user: "4",
		bag: "3",
	},
	{
		img: img2,
		title: "Standard",
		text: "Budget friendly rides with our standard taxis",
		from: "€36",
		name: "Mercedes GLA, BMW X1 or similar",
		user: "4",
		bag: "3",
	},
	{
		img: img3,
		title: "Van",
		text: "Our more spacious luxury vans for larger groups",
		from: "€45",
		name: "Mercedes V / Vito or similar",
		user: "4",
		bag: "3",
	},
	{
		img: img4,
		title: "Mini Bus",
		text: "Even more space for groups of up to 12 passengers",
		from: "€60",
		name: "Mercedes E or similar",
		user: "4",
		bag: "3",
	},
];

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

const arrow1 = (
	<svg
		width="15"
		height="15"
		viewBox="0 0 15 15"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M14.6277 1.21585C14.6277 0.663569 14.18 0.215854 13.6277 0.215854L4.62769 0.215856C4.07541 0.215856 3.62769 0.663571 3.62769 1.21586C3.62769 1.76814 4.07541 2.21586 4.62769 2.21586L12.6277 2.21585L12.6277 10.2159C12.6277 10.7681 13.0754 11.2159 13.6277 11.2159C14.18 11.2159 14.6277 10.7681 14.6277 10.2159L14.6277 1.21585ZM1.62341 14.6344L14.3348 1.92296L12.9206 0.508748L0.209199 13.2201L1.62341 14.6344Z"
			fill="white"
		/>
	</svg>
);
const arrow2 = (
	<svg
		width="16"
		height="19"
		viewBox="0 0 16 19"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M7.29288 18.4856C7.6834 18.8767 8.31657 18.8777 8.70709 18.4878L15.071 12.1334C15.4616 11.7435 15.4616 11.1103 15.071 10.7192C14.6805 10.3281 14.0474 10.3271 13.6568 10.7171L7.99998 16.3654L2.34314 10.6999C1.95261 10.3088 1.31945 10.3079 0.928925 10.6978C0.538402 11.0877 0.538402 11.7209 0.928926 12.112L7.29288 18.4856ZM6.99999 -0.00151357L6.99999 17.7781L8.99998 17.7811L8.99998 0.00151357L6.99999 -0.00151357Z"
			fill="white"
		/>
	</svg>
);
const targetIcon = (
	<svg
		width="22"
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
export default CarCategories;
