import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import bag from "./assets/bag.png";
import banner2 from "./assets/banner-2.png";
import banner from "./assets/banner.png";
import whatsapp from "./assets/whatsapp.png";
function cn(...input) {
	return twMerge(clsx(...input));
}
export const GettingAroundBanner = () => {
	return (
		<section className="getting-around-banner pt-[75px]">
			<div className="container relative">
				<h2 className="text-[40px] leading-[1.24] font-semibold mb-4">
					Getting around Mykonos
				</h2>
				<div className="font-bold text-xl max-w-[270px] mb-[-40px]">
					Discover the best ways to explore Mykonos
				</div>
			</div>
			<Image
				src={banner}
				width={600}
				height={600}
				className="w-full"
				alt=""
			/>
			<div className="container pb-11 pt-4">
				<div className="relative">
					<div className="flex justify-end">
						<Link href="">
							<Image
								src={whatsapp}
								width={168}
								height={40}
								className="w-[151px]"
								alt=""
							/>
						</Link>
					</div>
					<Image
						src={bag}
						width={108}
						height={166}
						className="w-[108px] h-auto absolute bottom-0 left-0"
						alt=""
					/>
				</div>
			</div>
			<div className="container flex flex-col gap-7">
				{featuredata.map((item, index) => (
					<div
						className={cn("flex text-sm", {
							"flex-row-reverse": index % 2 == 1,
						})}
						key={index}
					>
						<div className="w-[203px] text-justify">{item.text}</div>
						<div className="flex flex-grow items-center justify-center">
							<Image
								className={cn("w-auto h-auto max-w-full", {
									[item.imgClass]: item.imgClass,
								})}
								src={item.img}
								width={200}
								height={200}
								alt=""
							/>
						</div>
					</div>
				))}
			</div>
			<Image
				src={banner2}
				width={600}
				height={600}
				className="w-full"
				alt=""
			/>
		</section>
	);
};
const featuredata = [
	{
		img: img1,
		text: "Navigating the island of Mykonos is an adventure in itself. Mykonos offers visitors many transportation options that blend in convenience, charm, and local flavour. ",
		imgClass: "w-[108px] ml-auto",
	},
	{
		img: img2,
		text: "Whether you are looking to explore Mykonos Town, reach its world-famous beaches, or discover the hidden gems it has to offer, understanding Mykonos island transportation landscape and how to best move around, is the key to maximising your experience. ",
		imgClass: "w-[94px] mr-auto",
	},
	{
		img: img3,
		text: "From Mykonos buses and convenient Mykonos taxi services to adventurous scooter rentals and scenic boat trips, Mykonos offers many ways to explore. In this guide, we'll break down everything you need to know about getting around Mykonos.",
		imgClass: "w-[90px] ml-auto",
	},
];
