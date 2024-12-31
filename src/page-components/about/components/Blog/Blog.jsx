import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { twMerge } from "tailwind-merge";
import check from "./assets/img/check.png";
function cn(...inputs) {
	return twMerge(clsx(...inputs));
}
const Blog = () => {
	return (
		<section className="book-ride-section bg-black py-[60px] overflow-hidden">
			<div className="container max-sm:px-6">
				<h2 className="text-[#0044FF] text-[30px] leading-[36px] font-bold mb-7">
					Blog
				</h2>
				<h5 className="text-xl font-bold text-white mb-12">
					Read our blog, your ultimate resource for insider tips, local
					insights, and information from true experts
				</h5>
			</div>
			<div className="flex flex-col gap-4">
				<Marquee autoFill pauseOnHover direction="left">
					{["", "", "", ""].map((item, index) => (
						<div
							key={index}
							className="flex items-center gap-4 px-6 text-white bg-white bg-opacity-20 rounded-xl aspect-[170/110] min-w-[170px] mx-2"
						>
							<div className=""></div>
						</div>
					))}
				</Marquee>
				<Marquee autoFill pauseOnHover direction="right">
					{["", "", "", ""].map((item, index) => (
						<div
							key={index}
							className="flex items-center gap-4 px-6 text-white bg-white bg-opacity-20 rounded-xl aspect-[170/110] min-w-[170px] mx-2"
						>
							<div className=""></div>
						</div>
					))}
				</Marquee>
			</div>
			<div className="px-7 mt-14">
				<div className="flex flex-col gap-[6px] font-semibold">
					{data.map(({ text }, index) => (
						<div className="text-white flex gap-[14px]" key={index}>
							<Image
								src={check}
								width={42}
								height={42}
								alt=""
								className="w-[42px]"
							/>
							<span className="w-0 flex-grow content-center">
								{text}
							</span>
						</div>
					))}
				</div>
			</div>
			<div className="px-9">
				<div className="relative mt-12 flex justify-end">
					<Link
						href=""
						className="btn flex items-center gap-3 justify-center bg-[#067DF9] text-white h-[55px] rounded-lg text-xl px-12 font-bold w-full"
					>
						<span>Go to Blog </span>
						<span className="translate-x-4">{icons.arrow}</span>
					</Link>
				</div>
			</div>
		</section>
	);
};
const data = [
	{
		text: "Written by local Mykonos experts",
	},
	{
		text: "Fact-checked information",
	},
	{
		text: "Practical, actionable advice",
	},
	{
		text: "Updated regularly",
	},
];
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

export default Blog;
