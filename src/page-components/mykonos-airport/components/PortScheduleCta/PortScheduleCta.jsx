import Image from "next/image";
import Link from "next/link";
import blog from "./img/blog.png";
import cta from "./img/portschedule-cta.png";
export const PortScheduleCta = () => {
	return (
		<section className="pb-12">
			<div className="container">
				<h5 className="text-xl font-semibold text-center mb-6">
					Schedule your ride to Mykonos port for now or later
				</h5>

				<Image
					src={cta}
					width={297}
					height={222}
					className="w-full h-auto mb-5"
					alt=""
				/>
				<div className="flex justify-center">
					<Link
						className="btn flex items-center gap-2 bg-black text-white h-10 rounded-full text-sm px-5 min-w-[241px] justify-between w-auto"
						href=""
					>
						<span>{targetIcon}</span>
						<span>Book Online Now</span>
						<span>{arrow1}</span>
					</Link>
				</div>
				<Blog />
			</div>
		</section>
	);
};

const Blog = () => {
	return (
		<div>
			<Link
				href=""
				className="flex py-5 border-b border-t border-[#999999] gap-5 mt-[50px] mb-3"
			>
				<Image src={blog} width={122} height={106} alt="" />
				<div className="w-0 flex-grow">
					<h5 className="font-semibold mb-3">
						Mykonos: A journey through time and the transformation from
						rags to riches
					</h5>
					<div className="text-xs flex items-center gap-2 font-medium">
						Read the blog post{" "}
						<span className="text-[#0066FF]">{arrow2}</span>
					</div>
				</div>
			</Link>
		</div>
	);
};

const arrow2 = (
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
);

const arrow1 = (
	<svg
		width="15"
		height="15"
		viewBox="0 0 15 15"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M14.6277 1.21585C14.6277 0.663569 14.18 0.215854 13.6277 0.215854L4.62769 0.215856C4.07541 0.215856 3.62769 0.663571 3.62769 1.21586C3.62769 1.76814 4.07541 2.21586 4.62769 2.21586L12.6277 2.21585L12.6277 10.2159C12.6277 10.7681 13.0754 11.2159 13.6277 11.2159C14.18 11.2159 14.6277 10.7681 14.6277 10.2159L14.6277 1.21585ZM1.62341 14.6344L14.3348 1.92296L12.9206 0.508748L0.209199 13.2201L1.62341 14.6344Z"
			fill="white"
		/>
	</svg>
);

const targetIcon = (
	<svg
		width="22"
		viewBox="0 0 26 23"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<ellipse
			cx="13"
			cy="11.5"
			rx="13"
			ry="11.5"
			fill="url(#paint0_radial_1_2189)"
		/>
		<defs>
			<radialGradient
				id="paint0_radial_1_2189"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(13 11.5) rotate(90) scale(11.5 13)"
			>
				<stop offset="0.406102" stopColor="#00FF15" />
				<stop offset="0.811102" stopColor="#E2D116" />
			</radialGradient>
		</defs>
	</svg>
);
