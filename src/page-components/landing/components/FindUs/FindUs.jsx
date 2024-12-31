import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "./assets/img/map.png";
const FindUs = () => {
	const [swiper, setSwiper] = React.useState(null);
	const [activeCount, setActiveCount] = React.useState(1);

	return (
		<section className="book-ride-section py-[60px] overflow-hidden">
			<div className="container">
				<h2 className="text-[30px] leading-[36px] font-bold mb-7 text-center">
					Find us in Mykonos
				</h2>
			</div>
			<div className="container">
				<Image
					src={img}
					width={800}
					height={800}
					className="w-full"
					alt=""
				/>
				<div className="mt-16 text-[#6d6d6d] font-medium px-7">
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
									<span className="text-[#1760A5]">{arrow}</span>
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
						<div className="w-0 flex-grow">athens@aegeantaxi.com</div>
					</div>
					<h5 className="font-bold text-black my-6">Services</h5>
					<div className="font-semibold underline flex flex-col gap-1 items-start">
						<Link
							href=""
							target="_blank"
							className="flex items-center gap-2"
						>
							Taxi {arrow}
						</Link>
						<Link
							href=""
							target="_blank"
							className="flex items-center gap-2"
						>
							Airport transfers {arrow}
						</Link>
						<Link
							href=""
							target="_blank"
							className="flex items-center gap-2"
						>
							Port transfers {arrow}
						</Link>
						<Link
							href=""
							target="_blank"
							className="flex items-center gap-2"
						>
							Tours {arrow}
						</Link>
						<Link
							href=""
							target="_blank"
							className="flex items-center gap-2 font-medium text-[#006FE1]"
						>
							Book Online{" "}
							<span className="text-[#1760A5]"> {arrow2}</span>
						</Link>
					</div>
					<div className="relative mt-12">
						<Link href="">
							<button
								className="btn flex items-center gap-3 justify-center bg-[#343434] text-white h-9 rounded-full text-sm px-7"
								type="button"
							>
								<span>Go to Mykonos</span>
								<span className="translate-x-2">{arrow2}</span>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
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

export default FindUs;
