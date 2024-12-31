import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "./assets/img/map.png";
const WhereToFind = () => {
	const [swiper, setSwiper] = React.useState(null);
	const [activeCount, setActiveCount] = React.useState(1);

	return (
		<section className="book-ride-section py-[60px] overflow-hidden">
			<div className="container">
				<h2 className="text-[30px] leading-[36px] font-bold mb-12 max-sm:max-w-[292px]">
					Where to find your taxi driver in Mykonos airport
				</h2>
				<div className="font-medium mb-[60px] max-sm:max-w-[321px] text-xl">
					Click on the map below to see where you can find your taxi driver
					in Mykonos Port. All rides are being confirmed the day before and
					our drivers contact you directly
				</div>
			</div>
			<div className="container mt-16">
				<Image
					src={img}
					width={800}
					height={800}
					className="w-full"
					alt=""
				/>
				<div className="mt-3 flex justify-end">
					<Link href="" target="_blank">
						<button
							type="button"
							className="flex items-center font-medium h-[55px] text-[#006FE1] underline gap-2"
						>
							<span>Navigate </span>
							<span>
								<svg
									width="13"
									height="13"
									viewBox="0 0 13 13"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M11.8982 0.959326C11.8764 0.546276 11.523 0.229106 11.1088 0.250908L4.3585 0.606184C3.94427 0.627986 3.62609 0.980502 3.64783 1.39355C3.66957 1.8066 4.02299 2.12377 4.43722 2.10197L10.4375 1.78617L10.7524 7.76931C10.7741 8.18236 11.1275 8.49953 11.5418 8.47773C11.956 8.45593 12.2742 8.10341 12.2524 7.69036L11.8982 0.959326ZM1.55819 12.7431L11.7063 1.49973L10.59 0.497873L0.441814 11.7413L1.55819 12.7431Z"
										fill="#1760A5"
									/>
								</svg>
							</span>
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default WhereToFind;
