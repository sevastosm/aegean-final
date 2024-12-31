import Image from "next/image";
import Link from "next/link";
import img from "./img/banner.png";
import whatsapp from "./img/whatsapp.png";
const Banner = () => {
	return (
		<section className="bg-partner-gradient pt-20 pb-[190px]">
			<div className="container text-center px-3">
				<h1 className="text-white text-[32px] font-bold">
					Partner with <br /> Aegean Taxi
				</h1>
				<Image
					src={img}
					width={652}
					height={420}
					className="w-full max-w-[326px] mx-auto mt-5"
					alt=""
				/>
				<p className="text-white font-semibold max-w-[285px] mb-9 mx-auto mt-12">
					Expand your business and earn extra revenue, by joining the
					Aegean Taxi network across our 20 locations in Greece. We partner
					with a broad range of businesses in the tourism and travel
					sector, and offer custom solutions to help you grow.
				</p>
				<div className="flex flex-wrap gap-3 justify-center items-center">
					<Link
						href="tel:4"
						className="bg-white border border-black rounded-full flex items-center gap-1 text-sm font-bold px-1 flex-grow justify-center max-w-[210px] h-10"
					>
						{phone}Call +30 215 215 4000
					</Link>
					<Link href="" className="max-w-[168px]">
						<Image
							src={whatsapp}
							width={336}
							height={80}
							className="w-full"
							alt=""
						/>
					</Link>
				</div>
			</div>
		</section>
	);
};
const phone = (
	<svg
		width="22"
		viewBox="0 0 22 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="translate-y-1"
	>
		<g filter="url(#filter0_d_27_8606)">
			<path
				d="M6.81556 7.79C7.93556 10.62 9.74 12.94 11.9411 14.38L13.6522 12.18C13.87 11.9 14.1733 11.82 14.4456 11.93C15.3167 12.3 16.25 12.5 17.2222 12.5C17.4285 12.5 17.6263 12.6054 17.7722 12.7929C17.9181 12.9804 18 13.2348 18 13.5V17C18 17.2652 17.9181 17.5196 17.7722 17.7071C17.6263 17.8946 17.4285 18 17.2222 18C13.7155 18 10.3523 16.2089 7.8727 13.0208C5.39305 9.8327 4 5.50868 4 1C4 0.734784 4.08194 0.48043 4.22781 0.292893C4.37367 0.105357 4.5715 0 4.77778 0H7.5C7.70628 0 7.90411 0.105357 8.04997 0.292893C8.19583 0.48043 8.27778 0.734784 8.27778 1C8.27778 2.25 8.43333 3.45 8.72111 4.57C8.80667 4.92 8.74444 5.31 8.52667 5.59L6.81556 7.79Z"
				fill="black"
			/>
		</g>
		<defs>
			<filter
				id="filter0_d_27_8606"
				x="0"
				y="0"
				width="22"
				height="26"
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
					result="effect1_dropShadow_27_8606"
				/>
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="effect1_dropShadow_27_8606"
					result="shape"
				/>
			</filter>
		</defs>
	</svg>
);

export default Banner;
