import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import choose from "./assets/img/choose.png";
import man from "./assets/img/man.png";
import schedule from "./assets/img/schedule.png";
import vector from "./assets/img/vector.png";

const Faq2 = () => {
	const [open, setOpen] = useState([0]); // Tracks open FAQ items
	const [maxHeights, setMaxHeights] = useState([]); // Track max-height for each FAQ
	const contentRefs = useRef([]); // Store refs for each FAQ item

	useEffect(() => {
		const newMaxHeights = data.map((_, index) => {
			if (contentRefs.current[index]) {
				return contentRefs.current[index].scrollHeight;
			}
			return 0;
		});
		setMaxHeights(newMaxHeights);
	}, [open]);
	return (
		<section className="book-ride-section py-[60px] overflow-hidden">
			<div className="container">
				<div className="px-4 mb-7">
					<h2 className="text-[#0044FF] text-[30px] leading-[36px] font-bold mb-5">
						Quality Transport Services wherever you go in Greece
					</h2>
				</div>
				<div className="px-7 pt-4 pb-8 rounded-[31px] bg-[#F5F5F7]">
					{data?.map((faq, fIndex) => (
						<div className="border-b border-[#E9EAEB]" key={fIndex}>
							<h5
								className="flex justify-between items-center text-2xl font-semibold cursor-pointer select-none py-[14px]"
								onClick={() => {
									if (open.includes(fIndex)) {
										setOpen(open.filter((i) => i !== fIndex));
									} else {
										// setOpen([...open, fIndex]);
										setOpen([fIndex]); // single item open
									}
								}}
							>
								<span className="w-0 flex-grow">{faq.title}</span>
								<span>
									{open.includes(fIndex)
										? faqIcons.minus
										: faqIcons.plus}
								</span>
							</h5>
							<div
								className={`transition-all duration-500 ease-in-out overflow-hidden`}
								style={{
									maxHeight: open.includes(fIndex)
										? `${maxHeights[fIndex]}px`
										: "0px",
								}}
							>
								<div ref={(el) => (contentRefs.current[fIndex] = el)}>
									<div
										className="py-3"
										dangerouslySetInnerHTML={{
											__html: faq.text,
										}}
									></div>
									<ul className="flex flex-col gap-2">
										{faq.info.map((info, iIndex) => (
											<li key={iIndex}>
												<div className="flex items-center gap-2 font-italic text-sm">
													<Image
														src={info.icon}
														width={20}
														height={20}
														alt=""
													/>
													<span>{info.title}</span>
												</div>
											</li>
										))}
									</ul>
									<div className="w-full py-3">
										<Link
											href={faq.button.link}
											className="flex items-center gap-2 text-[#1760A5]"
										>
											{faq.button.text}
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
										</Link>
									</div>
								</div>
							</div>
						</div>
					))}
					<div className="mt-9">
						<Link href="">
							<button
								className="btn flex items-center gap-3 justify-center bg-[#004080] text-white h-9 rounded-full text-sm px-6"
								type="button"
							>
								<span>About Us</span>
								<span className="translate-x-1">{icons.arrow}</span>
							</button>
						</Link>
						<Image src={vector} width={450} height={450} alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};
const arrow = (
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
const icons = {
	arrow: (
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
	),
};
const data = [
	{
		title: "Taxi Services",
		info: [
			{
				title: "Get  an ride in minutes",
				icon: man,
			},
			{
				title: "Schedule a ride in advance",
				icon: schedule,
			},
			{
				title: "Choose an easy way to book",
				icon: choose,
			},
		],
		text: `<p class="mb-3">Choose our fastest pickup option when you need a quick taxi ride in Greece</p>`,
		button: {
			text: "Go To Taxi Section",
			link: "#",
		},
	},
	{
		title: "Airport Transfers",
		info: [
			{
				title: "Get  an ride in minutes",
				icon: man,
			},
			{
				title: "Schedule a ride in advance",
				icon: schedule,
			},
			{
				title: "Choose an easy way to book",
				icon: choose,
			},
		],
		text: `<p class="mb-3">Choose our fastest pickup option when you need a quick taxi ride in Greece</p>`,
		button: {
			text: "Go To Taxi Section",
			link: "#",
		},
	},
	{
		title: "Port Transfers",
		info: [
			{
				title: "Get  an ride in minutes",
				icon: man,
			},
			{
				title: "Schedule a ride in advance",
				icon: schedule,
			},
			{
				title: "Choose an easy way to book",
				icon: choose,
			},
		],
		text: `<p class="mb-3">Choose our fastest pickup option when you need a quick taxi ride in Greece</p>`,
		button: {
			text: "Go To Taxi Section",
			link: "#",
		},
	},
	{
		title: "Tours",
		info: [
			{
				title: "Get  an ride in minutes",
				icon: man,
			},
			{
				title: "Schedule a ride in advance",
				icon: schedule,
			},
			{
				title: "Choose an easy way to book",
				icon: choose,
			},
		],
		text: `<p class="mb-3">Choose our fastest pickup option when you need a quick taxi ride in Greece</p>`,
		button: {
			text: "Go To Taxi Section",
			link: "#",
		},
	},
];
const faqIcons = {
	minus: (
		<svg
			width="17"
			height="10"
			viewBox="0 0 17 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M7.08263 0.415396L0.376498 7.47231C0.132183 7.7385 -0.00300525 8.09497 5.06392e-05 8.46495C0.00310653 8.83493 0.144162 9.18881 0.392836 9.45037C0.641511 9.71194 0.977907 9.86026 1.32957 9.8634C1.68124 9.86653 2.02004 9.72422 2.27299 9.46713L8.03088 3.40806L13.7888 9.46446C13.9125 9.5992 14.0605 9.70667 14.2241 9.78058C14.3878 9.8545 14.5638 9.89338 14.7418 9.89497C14.9199 9.89656 15.0965 9.86081 15.2614 9.78983C15.4262 9.71884 15.576 9.61403 15.7019 9.48151C15.8278 9.34899 15.9274 9.19142 15.9948 9.01799C16.0623 8.84456 16.0962 8.65874 16.0947 8.47138C16.0931 8.28402 16.0561 8.09886 15.9858 7.92672C15.9155 7.75458 15.8134 7.5989 15.6853 7.46877L8.97913 0.414956C8.72761 0.15048 8.38653 0.0019505 8.03088 0.00203283C7.67524 0.00211516 7.33415 0.150802 7.08263 0.415396Z"
				fill="#86858A"
			/>
		</svg>
	),
	plus: (
		<svg
			width="17"
			height="10"
			viewBox="0 0 17 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M7.08263 9.48304L0.376498 2.42613C0.132183 2.15994 -0.00300525 1.80347 5.06392e-05 1.43349C0.00310653 1.06351 0.144162 0.70963 0.392836 0.448064C0.641511 0.186497 0.977907 0.0381738 1.32957 0.0350402C1.68124 0.0319066 2.02004 0.174213 2.27299 0.43131L8.03088 6.49038L13.7888 0.433976C13.9125 0.299233 14.0605 0.191768 14.2241 0.117853C14.3878 0.0439384 14.5638 0.00505284 14.7418 0.00346595C14.9199 0.00187906 15.0965 0.0376225 15.2614 0.108611C15.4262 0.179599 15.576 0.28441 15.7019 0.416929C15.8278 0.549447 15.9274 0.707019 15.9948 0.88045C16.0623 1.05388 16.0962 1.2397 16.0947 1.42706C16.0931 1.61442 16.0561 1.79957 15.9858 1.97171C15.9155 2.14385 15.8134 2.29953 15.6853 2.42967L8.97913 9.48348C8.72761 9.74796 8.38653 9.89649 8.03088 9.8964C7.67524 9.89632 7.33415 9.74764 7.08263 9.48304Z"
				fill="#86858A"
			/>
		</svg>
	),
};
export default Faq2;
