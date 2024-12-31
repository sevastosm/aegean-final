import Image from "next/image";
import Link from "next/link";
import presencegreece from "./img/presence-greece.png";
const PresenceGreece = () => {
	return (
		<section className="relative py-[35px] min-h-[681px]">
			<Image
				className="absolute top-0 left-0 w-full h-full object-cover"
				src={presencegreece}
				width={900}
				height={900}
				alt=""
			/>
			<div className="container relative px-[52px]">
				<h2 className="text-[32px] leading-[36px] font-bold mb-11 text-[#2B2B6E]">
					We know Mykonos!
				</h2>
				<div className="font-bold text-xl mb-[99px]">
					We have covered every inch of Mykonos island! Our Mykonos taxi
					fleet transports tourists in every beach, every restaurant, bar,
					and every tourist attraction in Mykonos. Our Mykonos Airport
					transfer and Mykonos Port transfer services welcome and transport
					thousands of tourists to and from the airport and ports of
					Mykonos.
				</div>
				<Link
					className="inline-flex bg-[#2B2B6E] text-white gap-4 items-center h-[35px] font-semibold text-sm px-7 rounded-full"
					href=""
				>
					<span>Read more about us</span> {arrow}
				</Link>
			</div>
		</section>
	);
};

const arrow = (
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

export default PresenceGreece;
