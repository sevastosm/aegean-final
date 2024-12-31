import Image from "next/image";
import Link from "next/link";
import whatsapp from "./img/whatsapp.png";

export const ContactCtas = () => {
	return (
		<section className="pt-[80px] pb-[116px] text-white relative before:absolute before:left-1/2 before:top-0 before:-translate-x-1/2 before:bg-black before:h-full before:aspect-square before:min-w-full before:rounded-t-full">
			<div className="container relative z-10">
				<div className="border-b border-[#8E8E8E] pb-10 mb-12">
					<h2 className="text-2xl text-center font-semibold mb-8">
						For Clients
					</h2>
					<div className="font-light max-w-[307px] mb-12">
						Need assistance with a recent ride or have a question? We're
						here to help 24/7.
					</div>
					<div className="flex flex-wrap gap-2 pb-7">
						<Link
							href="tel:4234"
							className="h-12 text-xl text-black bg-white rounded-xl flex items-center justify-center font-semibold gap-1 px-1 flex-grow"
						>
							{phone}
							Call us
						</Link>
						<Link href="">
							<Image src={whatsapp} width={67} height={48} alt="" />
						</Link>
						<Link
							href="tel:4234"
							className="h-12 text-xl text-black bg-white rounded-xl flex items-center justify-center font-semibold gap-1 px-1 flex-grow"
						>
							{email}
							email us
						</Link>
					</div>
					<Link
						className="inline-flex gap-2 items-center font-semibold"
						href=""
					>
						<span className="underline">Download the client app</span>{" "}
						{arrow}
					</Link>
				</div>

				<div className="border-b border-[#8E8E8E] pb-12 mb-12">
					<h2 className="text-2xl font-semibold mb-8">For Partners</h2>
					<div className="font-light mb-12">
						Partner with us to expand your business and earn extra
						revenue. Contact us to explore collaboration opportunities
						with Aegean Taxi.
					</div>
					<div className="flex flex-wrap gap-7 pb-10">
						<Link
							href="tel:4234"
							className="h-12 text-xl text-black bg-white rounded-xl flex items-center justify-center font-semibold gap-1 px-1 flex-grow w-10"
						>
							{phone}
							Call us
						</Link>
						<Link
							href="tel:4234"
							className="h-12 text-xl text-black bg-white rounded-xl flex items-center justify-center font-semibold gap-1 px-1 flex-grow w-10"
						>
							{email}
							email us
						</Link>
					</div>
					<Link
						className="inline-flex bg-[#006FE1] text-white gap-4 items-center h-[35px] font-semibold text-sm px-7 rounded-full"
						href=""
					>
						<span>Go to partners</span> {arrow}
					</Link>
				</div>

				<div>
					<h2 className="text-2xl font-semibold mb-8">For Drivers</h2>
					<div className="font-light max-w-[307px] mb-12">
						Interested in joining our growing drivers team? Contact us to
						learn more about how to become a driver for Aegean Taxi and
						other driver opportunities, or fill out the form below
					</div>
					<div className="flex flex-wrap gap-2 pb-7">
						<Link
							href="tel:4234"
							className="h-12 text-xl text-black bg-white rounded-xl flex items-center justify-center font-semibold gap-1 px-1 flex-grow"
						>
							{phone}
							Call us
						</Link>
						<Link
							href="tel:4234"
							className="h-12 text-xl text-black bg-white rounded-xl flex items-center justify-center font-semibold gap-1 px-1 flex-grow"
						>
							{email}
							email us
						</Link>
					</div>
					<Link
						className="inline-flex gap-2 items-center font-semibold"
						href=""
					>
						<span className="underline">Download the client app</span>{" "}
						{arrow}
					</Link>
				</div>
			</div>
		</section>
	);
};
const phone = (
	<svg
		width="29"
		height="32"
		viewBox="0 0 29 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="translate-y-1"
	>
		<g filter="url(#filter0_d_27_8806)">
			<path
				d="M8.22333 10.3867C9.90333 14.16 12.61 17.2533 15.9117 19.1733L18.4783 16.24C18.805 15.8667 19.26 15.76 19.6683 15.9067C20.975 16.4 22.375 16.6667 23.8333 16.6667C24.1428 16.6667 24.4395 16.8071 24.6583 17.0572C24.8771 17.3072 25 17.6464 25 18V22.6667C25 23.0203 24.8771 23.3594 24.6583 23.6095C24.4395 23.8595 24.1428 24 23.8333 24C18.5732 24 13.5285 21.6119 9.80905 17.3611C6.08958 13.1103 4 7.34491 4 1.33333C4 0.979711 4.12292 0.640573 4.34171 0.390524C4.5605 0.140476 4.85725 0 5.16667 0H9.25C9.55942 0 9.85616 0.140476 10.075 0.390524C10.2937 0.640573 10.4167 0.979711 10.4167 1.33333C10.4167 3 10.65 4.6 11.0817 6.09333C11.21 6.56 11.1167 7.08 10.79 7.45333L8.22333 10.3867Z"
				fill="black"
			/>
		</g>
		<defs>
			<filter
				id="filter0_d_27_8806"
				x="0"
				y="0"
				width="29"
				height="32"
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB"
			>
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset dy="4" />
				<feGaussianBlur stdDeviation="2" />
				<feComposite in2="hardAlpha" operator="out" />
				<feColorMatrix
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
				/>
				<feBlend
					mode="normal"
					in2="BackgroundImageFix"
					result="effect1_dropShadow_27_8806"
				/>
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="effect1_dropShadow_27_8806"
					result="shape"
				/>
			</filter>
		</defs>
	</svg>
);
const email = (
	<svg
		width="45"
		height="28"
		viewBox="0 0 45 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="translate-y-[-2px]"
	>
		<rect
			x="5.62451"
			y="6.61719"
			width="32.9181"
			height="21.0199"
			rx="5"
			fill="black"
		/>
		<line
			y1="-0.75"
			x2="15.9919"
			y2="-0.75"
			transform="matrix(0.661009 -0.750378 0.723595 0.690225 7.48877 28)"
			stroke="white"
			strokeWidth="1.5"
		/>
		<line
			y1="-0.75"
			x2="14.8379"
			y2="-0.75"
			transform="matrix(-0.705893 -0.708318 0.679699 -0.733491 38.1685 26.4688)"
			stroke="white"
			strokeWidth="1.5"
		/>
		<path
			d="M5.72917 6.00462L22.4578 20.0405L39.1864 6.00462H5.72917Z"
			stroke="white"
			strokeWidth="1.5"
		/>
	</svg>
);
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
