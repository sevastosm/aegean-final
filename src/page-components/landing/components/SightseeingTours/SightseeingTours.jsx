import React from "react";

import clsx from "clsx";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import img from "./assets/img/img.png";
function cn(...inputs) {
	return twMerge(clsx(...inputs));
}
const SightseeingTours = () => {
	const [swiper, setSwiper] = React.useState(null);
	const [activeCount, setActiveCount] = React.useState(1);

	return (
		<section className="sightseeing-tours-section py-[60px] overflow-hidden">
			<div className="container">
				<div className="rounded-[22px] border border-black">
					<Image
						src={img}
						width={500}
						height={500}
						alt=""
						className="object-cover w-full rounded-t-[20px]"
					/>
					<div className="px-[22px] py-4">
						<h5 className="underline font-bold text-xl mb-[18px]">
							Mykonos Sightseeing Tour
						</h5>
						<ul className="flex flex-col gap-3 text-sm">
							<li className="flex gap-3">
								{icons.clock}
								<strong className="w-[70px]">Duration: </strong>
								<span className="w-0 flex-grow">4 hours</span>
							</li>
							<li className="flex gap-3">
								{icons.cost}
								<strong className="w-[70px]">Cost: </strong>
								<span className="w-0 flex-grow">
									From €200 (€50/hour)
								</span>
							</li>
							<li className="flex gap-3">
								{icons.car}
								<strong className="w-[70px]">Car Type: </strong>
								<span className="w-0 flex-grow">
									Standard/Van (up to 7)
								</span>
							</li>
						</ul>
						<div className="border-t border-black pt-[15px] mt-[15px] text-xs leading-[21px]">
							<strong>Description:</strong> This upmarket sandy beach
							with its turquoise waters is very popular among
							celebrities. Many luxury hotels, apartments and restaurants
							are located here. The most notable one is Nammos, which is
							considered one of the best beach clubs in Mykonos. Psaro
						</div>
						<button
							type="button"
							className="w-full btn text-[15px] h-9 font-bold bg-[#174FCD] rounded-lg text-white mt-[15px] relative"
						>
							Book Tour {icons.arrow1}
						</button>
						<button
							type="button"
							className="text-[15px] font-semibold text-[#1865D9] mt-[15px] flex items-center gap-2"
						>
							Contact us for more info {icons.arrow2}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
const icons = {
	clock: (
		<svg
			width="15"
			viewBox="0 0 15 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M7.5 15C3.36437 15 0 11.6356 0 7.5C0 3.36437 3.36437 0 7.5 0C11.6356 0 15 3.36437 15 7.5C15 11.6356 11.6356 15 7.5 15ZM7.5 1.25C4.05375 1.25 1.25 4.05375 1.25 7.5C1.25 10.9462 4.05375 13.75 7.5 13.75C10.9462 13.75 13.75 10.9462 13.75 7.5C13.75 4.05375 10.9462 1.25 7.5 1.25ZM9.62313 9.87687L8.125 7.32938V3.125H6.875V7.67L8.54563 10.51L9.62375 9.87625L9.62313 9.87687Z"
				fill="black"
			/>
		</svg>
	),
	cost: (
		<svg
			width="15"
			viewBox="0 0 15 13"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12.3379 11.1878C12.1374 11.3158 11.9074 11.3888 11.6699 11.4008C10.8329 11.4463 9.40787 11.5008 7.37487 11.5008C5.34187 11.5008 3.91687 11.4463 3.07987 11.4008C2.83837 11.3888 2.60337 11.3128 2.40087 11.1808C1.98737 10.9233 1.58687 11.5558 2.00437 11.8173C2.31437 12.0163 2.67087 12.1308 3.03887 12.1498C4.25287 12.2148 5.75237 12.2498 7.37487 12.2498C8.99737 12.2498 10.4969 12.2148 11.7109 12.1498C12.0829 12.1308 12.4439 12.0133 12.7564 11.8103C13.1594 11.5353 12.7479 10.9153 12.3379 11.1878Z"
				fill="black"
			/>
			<path
				d="M14.6149 1.935C14.5084 0.9325 13.6824 0.1605 12.6749 0.122C11.6579 0.0665 9.91288 0 7.37488 0C4.83687 0 3.09188 0.0665001 2.07438 0.121C1.58638 0.152 1.62238 0.894 2.11538 0.871C3.72837 0.7215 11.0209 0.7215 12.6344 0.8715C13.2739 0.8845 13.8039 1.3725 13.8689 2.009C13.9559 2.892 13.9999 3.909 13.9999 5.042C13.9999 6.175 13.9559 7.1945 13.8689 8.075C13.8034 8.7115 13.2739 9.199 12.6344 9.2125C11.0224 9.362 3.72688 9.3615 2.11538 9.2125C1.47538 9.1995 0.945875 8.711 0.880875 8.0745C0.706375 6.371 0.706375 3.712 0.880875 2.0085C0.929875 1.523 0.182375 1.446 0.134375 1.935C-0.044625 3.6885 -0.045125 6.395 0.134875 8.1485C0.241875 9.1505 1.06788 9.9225 2.07488 9.9615C3.70238 10.1125 11.0474 10.1115 12.6749 9.9615C13.6819 9.923 14.5084 9.151 14.6149 8.1485C14.7939 6.393 14.7939 3.6895 14.6149 1.935Z"
				fill="black"
			/>
			<path
				d="M6.99988 5.34498V6.53198C6.56938 6.54048 6.12538 5.91198 5.75738 6.30848C5.37088 6.95548 6.56088 7.20498 6.99988 7.29348C6.99888 7.60348 6.93088 8.06748 7.37488 8.08298C7.82438 8.06648 7.74888 7.59448 7.74988 7.28198C9.55138 6.92298 9.49788 4.97948 7.74988 4.73948V3.55248C8.18588 3.54448 8.64638 4.19048 9.00788 3.77398C9.37038 3.12598 8.19038 2.88048 7.74988 2.79098C7.75088 2.47948 7.81888 2.01698 7.37488 2.00098C6.92488 2.01798 7.00088 2.48948 6.99988 2.80248C5.19788 3.16148 5.25188 5.10448 6.99988 5.34498ZM7.74988 5.51348C8.59538 5.68098 8.45488 6.31098 7.74988 6.51548V5.51348ZM6.99988 3.56898V4.57098C6.15388 4.40348 6.29488 3.77398 6.99988 3.56898Z"
				fill="black"
			/>
			<path
				d="M4.07875 12.0412C4.06475 11.2297 2.85725 11.2297 2.84375 12.0412C2.85725 12.8527 4.06475 12.8527 4.07875 12.0412Z"
				fill="black"
			/>
			<path
				d="M11.9044 5.04124C11.8904 4.22974 10.6829 4.22974 10.6694 5.04124C10.6829 5.85274 11.8904 5.85274 11.9044 5.04124Z"
				fill="black"
			/>
		</svg>
	),
	car: (
		<svg
			width="16"
			viewBox="0 0 16 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M15.0059 7.32687C14.9134 3.27062 11.5859 0 7.50773 0C3.4296 0 0.102101 3.27062 0.00960095 7.32687C0.00522595 7.34062 -0.00852405 7.47812 0.00772595 7.5275C0.022726 11.6506 3.38148 15 7.5071 15C11.6327 15 14.9915 11.6506 15.0065 7.5275C15.0227 7.47812 15.0096 7.34 15.0046 7.32687H15.0059ZM7.50773 0.625C10.2227 0.625 12.5746 2.20688 13.6915 4.49688L8.62835 5.50937C7.85585 5.66312 7.07148 5.66312 6.2996 5.50937L1.31648 4.51312C2.4296 2.21438 4.78648 0.625 7.50773 0.625ZM0.640226 7.81563L3.48398 8.38437C4.12273 8.51188 4.66773 8.91438 4.97835 9.48812L5.36835 10.2087C5.54085 10.5281 5.6321 10.8881 5.6321 11.25V14.115C2.84648 13.3244 0.776476 10.8175 0.640226 7.81563ZM6.25773 14.2606V11.25C6.25773 10.7844 6.14023 10.3212 5.91835 9.91063L5.52773 9.19C5.12835 8.4525 4.42773 7.935 3.60648 7.77125L0.640226 7.17812C0.673976 6.45062 0.821476 5.75187 1.06523 5.1L6.17648 6.12187C6.60335 6.2075 7.03335 6.25 7.46335 6.25C7.89335 6.25 8.32335 6.2075 8.75085 6.12187L13.944 5.08313C14.1915 5.74 14.3409 6.44375 14.3752 7.1775L11.4096 7.77062C10.5877 7.93437 9.8871 8.45187 9.48773 9.18937L9.0971 9.91C8.87523 10.32 8.75835 10.7831 8.75835 11.2494V14.26C8.35273 14.335 7.93523 14.3744 7.50835 14.3744C7.08148 14.3744 6.66398 14.335 6.25835 14.26L6.25773 14.2606ZM9.38273 14.115V11.25C9.38273 10.8881 9.47398 10.5281 9.64648 10.2087L10.0371 9.48812C10.3484 8.91438 10.8927 8.51188 11.5321 8.38437L14.3759 7.81563C14.2396 10.8181 12.169 13.3244 9.38335 14.115H9.38273Z"
				fill="black"
			/>
		</svg>
	),
	arrow1: (
		<svg
			width="18"
			viewBox="0 0 18 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="absolute right-5 top-1/2 transform -translate-y-1/2"
		>
			<path
				d="M17.7246 2.36129C17.767 1.84805 17.327 1.3928 16.7418 1.34445L7.20499 0.556611C6.61977 0.508265 6.11098 0.885136 6.06858 1.39838C6.02618 1.91162 6.46623 2.36687 7.05145 2.41522L15.5286 3.11552L14.9144 10.5499C14.872 11.0632 15.3121 11.5184 15.8973 11.5668C16.4825 11.6151 16.9913 11.2383 17.0337 10.725L17.7246 2.36129ZM1.88249 14.4573L17.36 2.99277L15.97 1.55474L0.492506 13.0193L1.88249 14.4573Z"
				fill="white"
			/>
		</svg>
	),
	arrow2: (
		<svg
			width="18"
			viewBox="0 0 18 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M17.8145 2.21383C17.8569 1.70059 17.4168 1.24534 16.8316 1.19699L7.29484 0.40915C6.70962 0.360804 6.20083 0.737676 6.15843 1.25092C6.11603 1.76416 6.55607 2.21941 7.1413 2.26776L15.6184 2.96806L15.0043 10.4025C14.9619 10.9157 15.4019 11.371 15.9871 11.4193C16.5724 11.4677 17.0811 11.0908 17.1235 10.5776L17.8145 2.21383ZM1.97234 14.3098L17.4498 2.84531L16.0598 1.40728L0.58235 12.8718L1.97234 14.3098Z"
				fill="#1865D9"
			/>
		</svg>
	),
};
export default SightseeingTours;
