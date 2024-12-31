import Image from "next/image";
import Link from "next/link";
import img from "./img/blog.png";
export const PortTourlos = () => {
	return (
		<div className="bg-[#F0F0F0] py-16 pb-[197px]">
			<div className="container px-11">
				<h3 className="text-2xl font-semibold mb-10 flex gap-4 text-[#2B2B6E]">
					{icons.title1}
					<span className="w-0 flex-grow">Mykonos Port (Tourlos)</span>
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
					<br />
					<br />
					For more details about flight schedules, airport facilities, and
					transportation options, visit our comprehensive guide
				</p>

				<div className="relative flex justify-end mb-[60px]">
					<button
						className="btn flex items-center gap-2 justify-center bg-[#2B2B6E] text-white h-9 rounded-full text-sm px-7"
						type="button"
					>
						<span>Go to Mykonos Port</span>
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
					<span className="w-0 flex-grow">Mykonos Port Taxis</span>
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
						Book Mykonos port Taxi
						<span>{icons.arrow}</span>
					</Link>
				</div>
				<div className="relative flex justify-end">
					<button
						className="btn flex items-center gap-2 justify-center bg-[#2B2B6E] text-white h-9 rounded-full text-sm px-7"
						type="button"
					>
						<span>Mykonos Port Taxis</span>
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
				d="M17.8728 13.3085V9.10352H12.1274V13.3086L15.0002 11.5131L17.8728 13.3085Z"
				fill="#2B2B6E"
			/>
			<path
				d="M0 30.0001H30V0H0V30.0001ZM5.56228 20.3543C7.04587 20.3543 7.84287 20.8524 8.48326 21.2527C8.89327 21.5089 9.21689 21.7102 9.73916 21.7906L7.37648 16.2778L10.008 14.6331V6.98419H13.9403V4.89794H16.0597V6.98419H19.992V14.6331L22.6235 16.2778L20.2608 21.7906C20.783 21.7101 21.1067 21.5088 21.5166 21.2526C22.157 20.8524 22.9541 20.3542 24.4377 20.3542V22.4735C23.5619 22.4735 23.1751 22.7152 22.6398 23.0498C21.9994 23.4501 21.2024 23.9482 19.7187 23.9482C18.2351 23.9482 17.4381 23.4501 16.7976 23.0499C16.2623 22.7153 15.8756 22.4736 14.9997 22.4736C14.1239 22.4736 13.7372 22.7153 13.202 23.0499C12.5615 23.4501 11.7645 23.9482 10.2809 23.9482C8.79734 23.9482 8.00033 23.4501 7.35995 23.0499C6.82468 22.7154 6.43798 22.4736 5.56228 22.4736V20.3543Z"
				fill="#2B2B6E"
			/>
			<path
				d="M10.04 17.1128L11.8698 21.3823C12.4922 20.8992 13.5163 20.3547 14.9999 20.3547C16.4835 20.3547 17.4899 20.9822 18.1304 21.3825L19.9603 17.1128L15.0001 14.0127L10.04 17.1128Z"
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
				d="M21.5171 21.3131C20.949 21.3131 20.4867 20.8508 20.4867 20.2827H19.7997C19.7997 20.8508 19.3374 21.3131 18.7693 21.3131C18.2012 21.3131 17.7389 20.8508 17.7389 20.2827H17.052C17.052 20.8508 16.5897 21.3131 16.0216 21.3131C15.4535 21.3131 14.9912 20.8508 14.9912 20.2827H14.3043C14.3043 20.8508 13.8419 21.3131 13.2738 21.3131C12.7058 21.3131 12.2434 20.8508 12.2434 20.2827H11.5565C11.5565 20.8508 11.0942 21.3131 10.5261 21.3131C9.95801 21.3131 9.49571 20.8508 9.49571 20.2827H8.80877C8.80877 20.8508 8.34647 21.3131 7.77837 21.3131C7.21028 21.3131 6.74797 20.8508 6.74797 20.2827H6.06104C6.06104 21.2297 6.83143 22.0001 7.77837 22.0001C8.342 22.0001 8.839 21.7232 9.15224 21.3025C9.46548 21.7232 9.96248 22.0001 10.5261 22.0001C11.0897 22.0001 11.5867 21.7232 11.9 21.3025C12.2132 21.7232 12.7102 22.0001 13.2738 22.0001C13.8375 22.0001 14.3345 21.7232 14.6477 21.3025C14.961 21.7232 15.458 22.0001 16.0216 22.0001C16.5852 22.0001 17.0822 21.7232 17.3955 21.3025C17.7087 21.7232 18.2057 22.0001 18.7693 22.0001C19.333 22.0001 19.83 21.7232 20.1432 21.3025C20.4564 21.7232 20.9534 22.0001 21.5171 22.0001C22.464 22.0001 23.2344 21.2297 23.2344 20.2827H22.5475C22.5475 20.8508 22.0852 21.3131 21.5171 21.3131Z"
				fill="white"
			/>
			<path
				d="M23.5774 18.9088C23.0093 18.9088 22.547 18.4465 22.547 17.8784H21.86C21.86 18.4465 21.3977 18.9088 20.8296 18.9088C20.2615 18.9088 19.7992 18.4465 19.7992 17.8784H19.1123C19.1123 18.8254 19.8827 19.5958 20.8296 19.5958C21.3933 19.5958 21.8903 19.3189 22.2035 18.8982C22.5168 19.3189 23.0137 19.5958 23.5774 19.5958C24.5243 19.5958 25.2947 18.8254 25.2947 17.8784H24.6078C24.6078 18.4465 24.1455 18.9088 23.5774 18.9088Z"
				fill="white"
			/>
			<path
				d="M14.6474 18.8982C14.9606 19.3189 15.4576 19.5958 16.0212 19.5958C16.9682 19.5958 17.7386 18.8254 17.7386 17.8784H17.0516C17.0516 18.4465 16.5893 18.9088 16.0212 18.9088C15.4531 18.9088 14.9908 18.4465 14.9908 17.8784H14.3039C14.3039 18.4465 13.8416 18.9088 13.2735 18.9088C12.7054 18.9088 12.2431 18.4465 12.2431 17.8784H11.5562C11.5562 18.8254 12.3265 19.5958 13.2735 19.5958C13.8371 19.5958 14.3341 19.3189 14.6474 18.8982Z"
				fill="white"
			/>
			<path
				d="M7.09121 18.8982C7.40445 19.3189 7.90144 19.5958 8.46508 19.5958C9.41201 19.5958 10.1824 18.8254 10.1824 17.8784H9.49548C9.49548 18.4465 9.03317 18.9088 8.46508 18.9088C7.89698 18.9088 7.43467 18.4465 7.43467 17.8784H6.74774C6.74774 18.4465 6.28543 18.9088 5.71734 18.9088C5.14924 18.9088 4.68693 18.4465 4.68693 17.8784H4C4 18.8254 4.7704 19.5958 5.71734 19.5958C6.28097 19.5958 6.77796 19.3189 7.09121 18.8982Z"
				fill="white"
			/>
			<path
				d="M24.9515 10.6658H23.7542L22.1395 8.40547C22.0753 8.31514 21.9712 8.26156 21.8603 8.26156H19.7995V8.94849H21.6834L22.9103 10.6658H15.6779V8.26156C15.6779 7.69346 15.2156 7.23115 14.6475 7.23115C14.0794 7.23115 13.6171 7.69346 13.6171 8.26156V10.6658H12.9302V9.63542C12.9302 9.44583 12.7766 9.29196 12.5867 9.29196H10.4905L12.1539 7.46231L11.6456 7L8.31292 10.6658H7.09121C5.38658 10.6658 4 12.0527 4 13.757V15.1309C4 15.699 4.46231 16.1613 5.0304 16.1613H5.49408C5.41783 16.3767 5.37387 16.6071 5.37387 16.8482H6.0608C6.0608 16.0905 6.67698 15.4744 7.43467 15.4744C8.19236 15.4744 8.80854 16.0905 8.80854 16.8482H9.49548C9.49548 16.6071 9.45151 16.3767 9.37526 16.1613H19.9197C19.8435 16.3767 19.7995 16.6071 19.7995 16.8482H20.4864C20.4864 16.0905 21.1026 15.4744 21.8603 15.4744C22.618 15.4744 23.2342 16.0905 23.2342 16.8482H23.9211C23.9211 16.6071 23.8771 16.3767 23.8009 16.1613H24.2646C24.8327 16.1613 25.295 15.699 25.295 15.1309V11.0093C25.295 10.8197 25.1414 10.6658 24.9515 10.6658ZM24.608 12.0397H8.80854V11.3528H24.608V12.0397ZM14.304 8.26156C14.304 8.0723 14.4579 7.91809 14.6475 7.91809C14.8371 7.91809 14.991 8.0723 14.991 8.26156V10.6658H14.304V8.26156ZM9.86608 9.97889H12.2432V10.6658H9.24165L9.86608 9.97889ZM6.74774 11.3802V12.7266H4.92221C5.2619 12.015 5.9399 11.4967 6.74774 11.3802ZM24.2646 15.4744H23.3922C23.0147 15.054 22.4689 14.7874 21.8603 14.7874C21.2517 14.7874 20.7063 15.054 20.3284 15.4744H8.96654C8.58907 15.054 8.0433 14.7874 7.43467 14.7874C6.82605 14.7874 6.28062 15.054 5.90281 15.4744H5.0304C4.84081 15.4744 4.68693 15.3202 4.68693 15.1309V13.757C4.68693 13.6403 4.69827 13.5262 4.71441 13.4136H7.09121C7.28114 13.4136 7.43467 13.2597 7.43467 13.0701V11.3528H8.12161V12.3832C8.12161 12.5728 8.27514 12.7266 8.46508 12.7266H24.608V15.1309C24.608 15.3202 24.4542 15.4744 24.2646 15.4744Z"
				fill="white"
			/>
			<path
				d="M21.5166 16.1611H22.2035V16.8481H21.5166V16.1611Z"
				fill="white"
			/>
			<path
				d="M7.09131 16.1611H7.77824V16.8481H7.09131V16.1611Z"
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
