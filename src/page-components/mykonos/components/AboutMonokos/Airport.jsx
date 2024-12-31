import Image from "next/image";
import Link from "next/link";
import img from "./img/blog.png";
export const Airport = () => {
	return (
		<div className="py-16">
			<div className="container px-11">
				<h3 className="text-2xl font-semibold mb-10 flex gap-4 text-[#2B2B6E]">
					{icons.title1}
					<span className="w-0 flex-grow">Mykonos Airport (JMK)</span>
				</h3>
				<p className="text-sm mb-[29px]">
					Mykonos Airport (JMK) serves as the primary entry point to the
					island, welcoming both domestic and international travelers.
					Situated just 4 kilometers from Mykonos Town, it provides
					convenient access to the island’s famous beaches, ports, and
					vibrant attractions. The airport operates year-round, with a
					significant increase in flights during the summer season to
					accommodate the influx of visitors. Facilities include a range of
					services such as cafes, shops, and car rental options, ensuring a
					comfortable experience for passengers.
					<br /> <br />
					For more details about flight schedules, airport facilities, and
					transportation options, visit our comprehensive guide
				</p>

				<div className="relative flex justify-end mb-[60px]">
					<button
						className="btn flex items-center gap-2 justify-center bg-[#2B2B6E] text-white h-9 rounded-full text-sm px-7"
						type="button"
					>
						<span>Go to Mykonos Airport</span>
						{icons.arrow}
					</button>
				</div>

				<Link
					href=""
					className="flex py-5 border-b border-t border-[#999999] gap-5 mb-[60px]"
				>
					<Image src={img} width={122} height={106} alt="" />
					<div className="w-0 flex-grow">
						<h5 className="font-semibold mb-3">
							Mykonos: A journey through time and the transformation from
							rags to riches
						</h5>
						<div className="text-xs flex items-center gap-2 font-medium">
							Read the blog post{" "}
							<span className="text-[#0066FF]"> {icons.arrow}</span>
						</div>
					</div>
				</Link>
				<h3 className="text-2xl font-semibold mb-10 flex gap-4 text-[#2B2B6E]">
					{icons.title2}
					<span className="w-0 flex-grow">Mykonos Airport Taxis</span>
				</h3>
				<p className="text-sm">
					Mykonos Airport taxi services provide a convenient and
					hassle-free way to reach your destination on the island. With its
					proximity to Mykonos Town and other popular areas, taxis are a
					preferred choice for travelers seeking quick and reliable
					transportation. Whether you’re heading to your hotel, a beach, or
					the port, taxis ensure a comfortable ride without the need to
					navigate public transport or wait for shuttles.
				</p>
				<br />
				<p className="text-sm">
					Learn more about booking a reliable taxi from Mykonos Airport,
					including tips, pricing, and recommendations, on our dedicated
					page from the link below. Aegean Taxi offers a seamless,
					stress-free travel experience tailored to your needs.
				</p>
				<div className="mt-5 mb-8 flex justify-end">
					<Link
						href=""
						className="text-[#0066FF] flex gap-3 items-center text-sm font-semibold"
					>
						Book Mykonos Airport Taxi
						<span>{icons.arrow}</span>
					</Link>
				</div>
				<div className="relative flex justify-end">
					<button
						className="btn flex items-center gap-2 justify-center bg-[#2B2B6E] text-white h-9 rounded-full text-sm px-7"
						type="button"
					>
						<span>Mykonos Airport Taxis</span>
						{icons.arrow}
					</button>
				</div>
			</div>
		</div>
	);
};

const icons = {
	title1: (
		<svg
			width="30"
			height="30"
			viewBox="0 0 30 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M23.3478 0H6.65217C4.88833 0.00138178 3.19713 0.702678 1.9499 1.9499C0.702678 3.19713 0.00138178 4.88833 0 6.65217V23.3478C0.00138178 25.1117 0.702678 26.8029 1.9499 28.0501C3.19713 29.2973 4.88833 29.9986 6.65217 30H23.3478C25.1117 29.9986 26.8029 29.2973 28.0501 28.0501C29.2973 26.8029 29.9986 25.1117 30 23.3478V6.65217C29.9986 4.88833 29.2973 3.19713 28.0501 1.9499C26.8029 0.702678 25.1117 0.00138178 23.3478 0ZM4.1113 9.19304C4.1566 9.11245 4.22251 9.04535 4.30226 8.99859C4.38202 8.95184 4.47277 8.92712 4.56522 8.92696H6.49565C6.57101 8.92695 6.64548 8.94327 6.71393 8.9748C6.78238 9.00632 6.84319 9.0523 6.89217 9.10956L10.1687 12.913H15.5583L10.9774 7.30957C10.915 7.23321 10.8755 7.14074 10.8635 7.04286C10.8515 6.94497 10.8674 6.84569 10.9096 6.75652C10.9522 6.66693 11.0196 6.59137 11.1037 6.5387C11.1877 6.48602 11.2851 6.45842 11.3843 6.45913H13.6748C13.8034 6.45803 13.9279 6.50449 14.0243 6.58957L21.0365 12.913H24.0887C24.3465 12.9141 24.6015 12.9673 24.8383 13.0695C25.075 13.1717 25.2885 13.3208 25.4661 13.5078C25.6311 13.6791 25.7596 13.8821 25.8439 14.1045C25.9282 14.3269 25.9665 14.5641 25.9565 14.8017C25.935 15.2604 25.7376 15.6931 25.4053 16.0098C25.0729 16.3266 24.6313 16.5031 24.1722 16.5026H8.52C8.39138 16.5037 8.2669 16.4573 8.17043 16.3722C8.13182 16.3352 8.09846 16.293 8.0713 16.247L4.11652 9.72C4.06896 9.64053 4.04341 9.54984 4.04249 9.45723C4.04158 9.36462 4.06533 9.27344 4.1113 9.19304ZM25.4348 19.5757H4.56522C4.42684 19.5757 4.29414 19.5207 4.19629 19.4228C4.09845 19.325 4.04348 19.1923 4.04348 19.0539C4.04348 18.9155 4.09845 18.7828 4.19629 18.685C4.29414 18.5871 4.42684 18.5322 4.56522 18.5322H25.4348C25.5732 18.5322 25.7059 18.5871 25.8037 18.685C25.9016 18.7828 25.9565 18.9155 25.9565 19.0539C25.9565 19.1923 25.9016 19.325 25.8037 19.4228C25.7059 19.5207 25.5732 19.5757 25.4348 19.5757Z"
				fill="#2B2B6E"
			/>
		</svg>
	),
	title2: (
		<svg
			width="30"
			height="30"
			viewBox="0 0 30 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="30" height="30" rx="7" fill="#2B2B6E" />
			<path
				d="M12.2605 12.4912H9.53231C9.31693 12.4912 9.17334 12.6348 9.17334 12.8502C9.17334 13.0656 9.31693 13.2092 9.53231 13.2092H10.5374V15.7578C10.5374 15.9732 10.681 16.1168 10.8964 16.1168C11.1118 16.1168 11.2554 15.9732 11.2554 15.7578V13.2092H12.2605C12.4759 13.2092 12.6195 13.0656 12.6195 12.8502C12.6195 12.6348 12.4759 12.4912 12.2605 12.4912Z"
				fill="white"
			/>
			<path
				d="M21.4503 12.4912C21.2349 12.4912 21.0913 12.6348 21.0913 12.8502V15.7578C21.0913 15.9732 21.2349 16.1168 21.4503 16.1168C21.6657 16.1168 21.8092 15.9732 21.8092 15.7578V12.8502C21.8092 12.6707 21.6298 12.4912 21.4503 12.4912Z"
				fill="white"
			/>
			<path
				d="M18.9017 14.3213L19.9427 13.1008C20.0863 12.9572 20.0504 12.7059 19.9068 12.5982C19.7632 12.4547 19.5119 12.4906 19.4042 12.6341L18.4709 13.747L17.5376 12.6341C17.394 12.4906 17.1786 12.4547 17.035 12.5982C16.8914 12.7418 16.8556 12.9572 16.9991 13.1008L18.0402 14.3213L16.9273 15.5418C16.7838 15.6854 16.8197 15.9367 16.9632 16.0444C17.1068 16.1879 17.3581 16.1521 17.4658 16.0085L18.3991 14.8957L19.3324 16.0085C19.476 16.1521 19.6914 16.1879 19.835 16.0444C19.9786 15.9008 20.0145 15.6854 19.8709 15.5418L18.9017 14.3213Z"
				fill="white"
			/>
			<path
				d="M14.5939 12.7427C14.4862 12.4555 14.0554 12.4555 13.9118 12.7427L13.0862 14.7889L12.7272 15.6145C12.6554 15.794 12.7272 16.0094 12.9067 16.0812C13.0862 16.1529 13.3016 16.0812 13.3734 15.9017L13.6246 15.2914H14.8451L15.0964 15.9017C15.1682 16.0812 15.3836 16.1888 15.5631 16.0812C15.7426 16.0094 15.8503 15.794 15.7426 15.6145L14.5939 12.7427ZM13.9477 14.5735L14.2708 13.8196L14.5939 14.5735H13.9477Z"
				fill="white"
			/>
			<path
				d="M26.9425 20.0294L26.3323 18.5935C26.2246 18.3422 25.9733 18.1627 25.6861 18.1627H25.2194L24.0348 11.773C23.8195 10.6243 22.922 9.72692 21.7733 9.51153C17.6811 8.82949 13.4452 8.82949 9.20936 9.51153C8.06065 9.69102 7.12733 10.5884 6.91195 11.773L5.76324 18.1627H5.29658C5.0094 18.1627 4.75812 18.3422 4.65043 18.5935L4.04018 20.0294C3.93249 20.2807 4.11198 20.5319 4.36326 20.5319H26.6194C26.8707 20.5319 27.0502 20.2448 26.9425 20.0294ZM7.62989 11.8807C7.77348 11.0192 8.45552 10.3372 9.31705 10.1936C13.4811 9.51153 17.6452 9.51153 21.6656 10.1936C22.5272 10.3372 23.2092 11.0192 23.3528 11.8807L24.5015 18.1627H6.48118L7.62989 11.8807ZM4.90171 19.814L5.29658 18.8807H25.6861L26.081 19.814H4.90171Z"
				fill="white"
			/>
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
