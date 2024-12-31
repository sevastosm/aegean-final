import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "./assets/img/logo.png";

import { twMerge } from "tailwind-merge";
import { NabnarMenus } from "../Navbar/Navbar";

function cn(...inputs) {
	return twMerge(clsx(...inputs));
}
const Navbar2 = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<header
			className={cn("py-5 absolute left-0 top-0 w-full z-[100]", {
				"z-[999]": menuOpen,
			})}
		>
			<div className="container px-6">
				<div className="flex items-center gap-6">
					<NabnarMenus
						className="text-white"
						{...{ menuOpen, setMenuOpen }}
					/>
					<Link href="/">
						<Image
							src={logo}
							width={154}
							height={23}
							className="max-w-full h-auto"
							alt=""
						/>
					</Link>
					<Link
						href=""
						className="ml-auto text-white flex items-center gap-1 font-bold pl-[14px] pr-[20px] text-nowrap border border-white rounded-full py-[2px]"
					>
						<span className="translate-y-1">{phone}</span>
						<span>Call us</span>
					</Link>
				</div>
			</div>
		</header>
	);
};

const phone = (
	<svg
		width="20"
		height="23"
		viewBox="0 0 20 23"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g filter="url(#filter0_d_52_1834)">
			<path
				d="M6.41333 6.49167C7.37333 8.85 8.92 10.7833 10.8067 11.9833L12.2733 10.15C12.46 9.91667 12.72 9.85 12.9533 9.94167C13.7 10.25 14.5 10.4167 15.3333 10.4167C15.5101 10.4167 15.6797 10.5045 15.8047 10.6607C15.9298 10.817 16 11.029 16 11.25V14.1667C16 14.3877 15.9298 14.5996 15.8047 14.7559C15.6797 14.9122 15.5101 15 15.3333 15C12.3275 15 9.44487 13.5074 7.31946 10.8507C5.19404 8.19391 4 4.59057 4 0.833333C4 0.61232 4.07024 0.400358 4.19526 0.244078C4.32029 0.0877973 4.48986 0 4.66667 0H7C7.17681 0 7.34638 0.0877973 7.4714 0.244078C7.59643 0.400358 7.66667 0.61232 7.66667 0.833333C7.66667 1.875 7.8 2.875 8.04667 3.80833C8.12 4.1 8.06667 4.425 7.88 4.65833L6.41333 6.49167Z"
				fill="white"
			/>
		</g>
		<defs>
			<filter
				id="filter0_d_52_1834"
				x="0"
				y="0"
				width="20"
				height="23"
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
					result="effect1_dropShadow_52_1834"
				/>
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="effect1_dropShadow_52_1834"
					result="shape"
				/>
			</filter>
		</defs>
	</svg>
);

export default Navbar2;
