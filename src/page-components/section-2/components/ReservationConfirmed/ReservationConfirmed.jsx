import { NabnarMenus } from "@/page-components/landing/components/Navbar/Navbar";
import Image from "next/image";
import { useState } from "react";
import car from "./assets/img/car.png";
import user from "./assets/img/user.png";
const ReservationConfirmed = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<>
			<div className="bg-black py-3 relative">
				<div className="absolute left-6 top-6 z-[999]">
					<NabnarMenus
						className="text-white"
						{...{ menuOpen, setMenuOpen }}
					/>
				</div>
				<div className="container flex justify-center items-center flex-col gap-2">
					{checkIcon}
					<span className="text-2xl font-bold text-white">
						Reservation Confirmed!
					</span>
				</div>
			</div>
			<section className="pb-[60px]">
				<div className="py-7">
					<div className="grid grid-cols-3 relative before:absolute before:content-[''] before:top-[60px] before:w-[calc(70%)] before:bg-black before:h-[1px] before:left-1/2 before:-translate-x-1/2">
						<div className="flex flex-col items-center gap-5 relative">
							<h5 className="font-semibold">Pick up</h5>
							{pickup}
							<div className="max-w-[95px]">
								Mykonos International Airport
							</div>
						</div>
						<div className="flex flex-col items-center gap-5 relative">
							<h5 className="font-semibold">Drop Off</h5>
							{dropoff}
							<div className="max-w-[95px]">
								Mykonos International Airport
							</div>
						</div>
						<div className="flex flex-col items-center gap-5 relative">
							<h5 className="font-semibold">Date/Time</h5>
							{datetime}
							<div>
								<div className="flex items-center gap-1">
									{calendar}Tue 21th Jan
								</div>
								<div className="flex items-center gap-1 font-light">
									{clock}At 21:00
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="py-6 flex justify-center gap-2 items-center font-uberMove border-t-[4px] border-b-[4px] border-black border-opacity-20 mb-7">
					<Image
						src={user}
						width={60}
						height={60}
						alt=""
						className="w-[18px]"
					/>
					<span>Passenger: </span>
					<span>John Stamatiadis</span>
				</div>
				<div className="container">
					<div className="flex gap-3 items-center justify-between mb-7">
						<div className="max-w-[calc(100%-92px)] pr-6">
							<h5 className="text-xl font-bold">
								Driver & Car Details:
							</h5>
						</div>
						<Image
							src={car}
							width={92}
							className="w-[92px]"
							height={57}
							alt=""
						/>
					</div>
					<div className="flex flex-col gap-[6px] tracking-[0.15px]">
						<div className="flex">
							<span className="w-[135px]">Car Model: </span>
							<span className="font--italic w-0 flex-grow">
								Black Mercedes V Class
							</span>
						</div>
						<div className="flex">
							<span className="w-[135px]">Number Plate: </span>
							<span className="font--italic w-0 flex-grow">
								T755479C
							</span>
						</div>
						<div className="flex">
							<span className="w-[135px]">Driver name: </span>
							<span className="font--italic w-0 flex-grow">
								Dimitris
							</span>
						</div>
						<div className="flex">
							<span className="w-[135px]">Driver Phone: </span>
							<span className="font--italic w-0 flex-grow">
								+30 215 215 4000
							</span>
						</div>
					</div>
					<div className="text-xl font-bold mb-7 font-uberMove tracking-[0.46px]"></div>
					<div className="flex justify-between items-center">
						<button
							className="h-[45px] rounded-xl font-bold text-white bg-[#FF0000] flex px-5 items-center gap-1"
							type="button"
						>
							Cancel Ride
						</button>
						<button
							className="h-[45px] rounded-xl font-bold text-white bg-black flex px-6 items-center gap-3"
							type="button"
						>
							Share {share}
						</button>
					</div>
				</div>
			</section>
		</>
	);
};
const share = (
	<svg
		width="25"
		height="25"
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M4.7893 17.3386C5.47227 17.3367 6.14697 17.1889 6.76811 16.9049C7.38925 16.6209 7.94248 16.2074 8.39069 15.6921L15.2173 19.4865C15.0555 20.6598 15.3335 21.8514 15.9976 22.832C16.6618 23.8127 17.6652 24.5129 18.8148 24.798C19.9643 25.0832 21.1787 24.933 22.2241 24.3764C23.2696 23.8198 24.0722 22.8962 24.4774 21.7833C24.8827 20.6705 24.862 19.447 24.4193 18.3485C23.9765 17.25 23.1431 16.3541 22.0794 15.8332C21.0157 15.3124 19.797 15.2034 18.6577 15.5273C17.5185 15.8512 16.5394 16.585 15.9088 17.5875L9.36263 13.9487C9.653 13.0378 9.653 12.0591 9.36263 11.1482L15.9083 7.51084C16.55 8.54358 17.5517 9.30187 18.7199 9.63922C19.8881 9.97657 21.1398 9.86906 22.2333 9.33744C23.3268 8.80583 24.1846 7.88784 24.6408 6.76079C25.097 5.63373 25.1194 4.37759 24.7036 3.235C24.2878 2.09241 23.4634 1.14443 22.3895 0.574192C21.3156 0.00395 20.0685 -0.1481 18.8891 0.147414C17.7096 0.442927 16.6815 1.16504 16.0034 2.17426C15.3253 3.18347 15.0452 4.4082 15.2173 5.61185L8.38969 9.40384C7.86289 8.80066 7.19315 8.33933 6.44182 8.06213C5.69049 7.78492 4.8816 7.70071 4.08928 7.8172C3.29697 7.9337 2.54655 8.24717 1.90681 8.7289C1.26706 9.21063 0.758447 9.84521 0.427563 10.5745C0.0966795 11.3038 -0.0458889 12.1044 0.0129226 12.9031C0.071734 13.7018 0.330044 14.4729 0.764184 15.1459C1.19832 15.8188 1.79441 16.3721 2.49781 16.7549C3.20122 17.1377 3.98946 17.3379 4.79029 17.3371L4.7893 17.3386ZM19.9572 17.3386C20.5099 17.3386 21.0501 17.5024 21.5096 17.8095C21.969 18.1165 22.3272 18.5529 22.5386 19.0634C22.7501 19.574 22.8055 20.1358 22.6976 20.6778C22.5898 21.2198 22.3237 21.7176 21.933 22.1084C21.5422 22.4991 21.0443 22.7653 20.5023 22.8731C19.9603 22.9809 19.3985 22.9255 18.888 22.7141C18.3774 22.5026 17.9411 22.1445 17.634 21.685C17.327 21.2255 17.1631 20.6853 17.1631 20.1327C17.1646 19.3922 17.4595 18.6825 17.9832 18.1591C18.5069 17.6356 19.2168 17.3411 19.9572 17.3401V17.3386ZM19.9572 2.16564C20.5099 2.16564 21.0501 2.32951 21.5096 2.63653C21.969 2.94355 22.3272 3.37992 22.5386 3.89048C22.7501 4.40103 22.8055 4.96283 22.6976 5.50483C22.5898 6.04683 22.3237 6.54469 21.933 6.93546C21.5422 7.32622 21.0443 7.59233 20.5023 7.70014C19.9603 7.80795 19.3985 7.75262 18.888 7.54114C18.3774 7.32966 17.9411 6.97153 17.634 6.51205C17.327 6.05256 17.1631 5.51235 17.1631 4.95973C17.1646 4.21927 17.4595 3.50958 17.9832 2.98614C18.5069 2.4627 19.2168 2.16819 19.9572 2.16713V2.16564ZM4.7893 9.7531C5.28896 9.75365 5.77933 9.88817 6.20933 10.1427C6.63933 10.3972 6.99322 10.7623 7.23413 11.2C7.46461 11.6115 7.58491 12.0756 7.58339 12.5472C7.58414 13.0222 7.46395 13.4896 7.23413 13.9053C6.99466 14.3353 6.64588 14.6943 6.22308 14.9462C5.80029 15.198 5.31847 15.3337 4.82638 15.3396C4.33428 15.3454 3.84938 15.2212 3.42071 14.9795C2.99204 14.7378 2.63483 14.3871 2.3852 13.963C2.13557 13.5389 2.00238 13.0564 1.99912 12.5642C1.99585 12.0721 2.12262 11.5879 2.3666 11.1605C2.61058 10.7331 2.96311 10.3777 3.38853 10.1303C3.81395 9.88293 4.29717 9.75228 4.7893 9.7516V9.7531Z"
			fill="white"
		/>
	</svg>
);
const checkIcon = (
	<svg
		width="48"
		height="48"
		viewBox="0 0 48 48"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M20.64 28.32L15.42 23.1C14.98 22.66 14.4304 22.4504 13.7712 22.4712C13.1104 22.4904 12.56 22.72 12.12 23.16C11.68 23.6 11.46 24.16 11.46 24.84C11.46 25.52 11.68 26.08 12.12 26.52L18.96 33.36C19.4 33.8 19.96 34.02 20.64 34.02C21.32 34.02 21.88 33.8 22.32 33.36L35.94 19.74C36.38 19.3 36.5904 18.7496 36.5712 18.0888C36.5504 17.4296 36.32 16.88 35.88 16.44C35.44 16 34.88 15.78 34.2 15.78C33.52 15.78 32.96 16 32.52 16.44L20.64 28.32ZM24 48C20.68 48 17.56 47.3696 14.64 46.1088C11.72 44.8496 9.18 43.14 7.02 40.98C4.86 38.82 3.1504 36.28 1.8912 33.36C0.6304 30.44 0 27.32 0 24C0 20.68 0.6304 17.56 1.8912 14.64C3.1504 11.72 4.86 9.18 7.02 7.02C9.18 4.86 11.72 3.1496 14.64 1.8888C17.56 0.6296 20.68 0 24 0C27.32 0 30.44 0.6296 33.36 1.8888C36.28 3.1496 38.82 4.86 40.98 7.02C43.14 9.18 44.8496 11.72 46.1088 14.64C47.3696 17.56 48 20.68 48 24C48 27.32 47.3696 30.44 46.1088 33.36C44.8496 36.28 43.14 38.82 40.98 40.98C38.82 43.14 36.28 44.8496 33.36 46.1088C30.44 47.3696 27.32 48 24 48ZM24 43.2C29.32 43.2 33.8504 41.3304 37.5912 37.5912C41.3304 33.8504 43.2 29.32 43.2 24C43.2 18.68 41.3304 14.1496 37.5912 10.4088C33.8504 6.6696 29.32 4.8 24 4.8C18.68 4.8 14.1504 6.6696 10.4112 10.4088C6.6704 14.1496 4.8 18.68 4.8 24C4.8 29.32 6.6704 33.8504 10.4112 37.5912C14.1504 41.3304 18.68 43.2 24 43.2Z"
			fill="#47C69C"
		/>
	</svg>
);
const pickup = (
	<svg
		width="30"
		height="28"
		viewBox="0 0 30 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<ellipse
			cx="15"
			cy="14"
			rx="14"
			ry="15"
			transform="rotate(-90 15 14)"
			fill="black"
		/>
		<circle
			cx="15.5"
			cy="14.5"
			r="5.5"
			transform="rotate(-90 15.5 14.5)"
			fill="#48E744"
		/>
	</svg>
);
const dropoff = (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M0 28L3.33897e-07 0L28 3.33897e-07L28 28L0 28Z" fill="black" />
		<path d="M9 18L9 10L19 10L19 18L9 18Z" fill="#FF0404" />
	</svg>
);
const datetime = (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M0.00256348 7.66016V21.5432C0.00256348 23.1387 0.873764 24.0664 1.70592 24.4825C2.53808 24.8986 3.35599 24.892 3.35599 24.892H24.4152C24.4152 24.892 25.2331 24.8985 26.0653 24.4825C26.8974 24.0664 27.7649 23.1519 27.7649 21.5432V7.66016H0.00256348ZM13.8837 9.09614C17.8434 9.09614 21.0636 12.3164 21.0636 16.2761C21.0636 20.2357 17.8434 23.456 13.8837 23.456C9.92404 23.456 6.70382 20.2357 6.70382 16.2761C6.70382 12.3164 9.92404 9.09614 13.8837 9.09614Z"
			fill="black"
		/>
		<path
			d="M13.8835 10.0532C10.4412 10.0532 7.66187 12.8335 7.66187 16.2758C7.66187 19.7181 10.4412 22.4984 13.8835 22.4984C17.3258 22.4984 20.1061 19.7181 20.1061 16.2758C20.1061 12.8335 17.3258 10.0532 13.8835 10.0532ZM13.8835 10.5328C14.0105 10.5328 14.1322 10.5832 14.222 10.673C14.3118 10.7628 14.3622 10.8845 14.3622 11.0115C14.3622 11.1384 14.3118 11.2602 14.222 11.3499C14.1322 11.4397 14.0105 11.4901 13.8835 11.4901C13.7566 11.4901 13.6348 11.4397 13.5451 11.3499C13.4553 11.2602 13.4049 11.1384 13.4049 11.0115C13.4049 10.8845 13.4553 10.7628 13.5451 10.673C13.6348 10.5832 13.7566 10.5328 13.8835 10.5328ZM13.8751 12.439C13.8757 12.439 13.8764 12.439 13.877 12.439C13.9409 12.4384 14.0044 12.4506 14.0636 12.4749C14.1227 12.4992 14.1764 12.5351 14.2215 12.5805C14.2665 12.6259 14.302 12.6799 14.3259 12.7393C14.3497 12.7986 14.3614 12.8622 14.3603 12.9261V16.0776L16.6153 18.3326C16.6611 18.3768 16.6976 18.4297 16.7227 18.4883C16.7478 18.5468 16.7609 18.6097 16.7614 18.6734C16.7619 18.7371 16.7496 18.8002 16.7254 18.8591C16.7011 18.918 16.6654 18.9714 16.6203 19.0163C16.5751 19.0612 16.5215 19.0967 16.4624 19.1206C16.4034 19.1445 16.3402 19.1564 16.2765 19.1556C16.2129 19.1547 16.15 19.1412 16.0916 19.1158C16.0332 19.0904 15.9805 19.0536 15.9365 19.0075L13.5442 16.6152C13.4994 16.5707 13.4639 16.5178 13.4397 16.4596C13.4155 16.4013 13.403 16.3389 13.403 16.2758V12.9261C13.4008 12.8071 13.4431 12.6915 13.5216 12.602C13.6001 12.5124 13.7091 12.4553 13.8274 12.4419C13.8433 12.4401 13.8592 12.4392 13.8751 12.439ZM8.61825 15.7981C8.7452 15.7981 8.86695 15.8485 8.95672 15.9383C9.04648 16.0281 9.09691 16.1498 9.09691 16.2767C9.09691 16.4037 9.04648 16.5254 8.95672 16.6152C8.86695 16.705 8.7452 16.7554 8.61825 16.7554C8.4913 16.7554 8.36955 16.705 8.27979 16.6152C8.19002 16.5254 8.13959 16.4037 8.13959 16.2767C8.13959 16.1498 8.19002 16.0281 8.27979 15.9383C8.36955 15.8485 8.4913 15.7981 8.61825 15.7981ZM19.1488 15.7981C19.2757 15.7981 19.3975 15.8485 19.4873 15.9383C19.577 16.0281 19.6275 16.1498 19.6275 16.2767C19.6275 16.4037 19.577 16.5254 19.4873 16.6152C19.3975 16.705 19.2757 16.7554 19.1488 16.7554C19.0218 16.7554 18.9001 16.705 18.8103 16.6152C18.7206 16.5254 18.6701 16.4037 18.6701 16.2767C18.6701 16.1498 18.7206 16.0281 18.8103 15.9383C18.9001 15.8485 19.0218 15.7981 19.1488 15.7981ZM13.8835 21.0634C14.0105 21.0634 14.1322 21.1138 14.222 21.2036C14.3118 21.2933 14.3622 21.4151 14.3622 21.542C14.3622 21.669 14.3118 21.7907 14.222 21.8805C14.1322 21.9703 14.0105 22.0207 13.8835 22.0207C13.7566 22.0207 13.6348 21.9703 13.5451 21.8805C13.4553 21.7907 13.4049 21.669 13.4049 21.542C13.4049 21.4151 13.4553 21.2933 13.5451 21.2036C13.6348 21.1138 13.7566 21.0634 13.8835 21.0634Z"
			fill="black"
		/>
		<path
			d="M3.34629 1.91163C3.34087 1.91159 2.52879 1.90641 1.70068 2.32046C0.869832 2.73589 0 3.59966 0 5.25605V6.68791H27.7187V5.25605C27.7187 3.57854 26.8526 2.73589 26.0217 2.32046C25.1909 1.90504 24.3743 1.91163 24.3743 1.91163V3.82419C24.3743 3.82419 24.3818 4.27959 24.1456 4.75201C23.9094 5.22443 23.4196 5.73044 22.4626 5.73209C21.508 5.73372 21.0196 5.22443 20.7834 4.75201C20.5471 4.27959 20.5501 3.82419 20.5501 3.82419V1.91163H15.7738V3.82419C15.7738 3.82419 15.7805 4.27959 15.5442 4.75201C15.3079 5.22443 14.8182 5.73044 13.8612 5.73209C12.9066 5.73372 12.4182 5.22443 12.182 4.75201C11.9457 4.27959 11.9486 3.82419 11.9486 3.82419V1.91163H7.17142V3.82419C7.17142 3.82419 7.17811 4.27959 6.9418 4.75201C6.7056 5.22443 6.21585 5.73044 5.25886 5.73209C4.30422 5.73374 3.81585 5.22443 3.57964 4.75201C3.34337 4.27959 3.34629 3.82419 3.34629 3.82419V1.91163Z"
			fill="black"
		/>
		<path
			d="M22.4628 7.98322e-07C22.9418 0.000473499 23.1696 0.207124 23.2918 0.451568C23.414 0.696011 23.4188 0.956052 23.4188 0.956052V3.82421C23.4188 3.82421 23.4141 4.08072 23.2918 4.32516C23.1696 4.56961 22.9418 4.78191 22.4628 4.78026C21.986 4.77861 21.7595 4.56961 21.6372 4.32516C21.515 4.08072 21.5067 3.82421 21.5067 3.82421V0.956052C21.5067 0.956052 21.515 0.696011 21.6372 0.451568C21.7595 0.207124 21.986 -0.000469734 22.4628 7.98322e-07Z"
			fill="black"
		/>
		<path
			d="M0 24.2573V24.374C0 26.0329 0.869832 26.8942 1.70068 27.3096C2.53153 27.725 3.34816 27.7184 3.34816 27.7184H24.3743C24.3743 27.7184 25.1909 27.7249 26.0217 27.3096C26.8526 26.8942 27.7187 26.0592 27.7187 24.374V24.2601C27.3403 24.7227 26.8939 25.0739 26.4492 25.2962C25.3907 25.8254 24.3668 25.8059 24.3668 25.8059H3.35563C3.35563 25.8059 2.33172 25.8255 1.27318 25.2962C0.826369 25.0728 0.37865 24.7204 0 24.2573Z"
			fill="black"
		/>
		<path
			d="M13.8613 7.98322e-07C14.3404 0.000473499 14.5681 0.207124 14.6904 0.451568C14.8126 0.696011 14.8174 0.956052 14.8174 0.956052V3.82421C14.8174 3.82421 14.8127 4.08072 14.6904 4.32516C14.5682 4.56961 14.3404 4.78191 13.8613 4.78026C13.3846 4.77861 13.158 4.56961 13.0358 4.32516C12.9136 4.08072 12.9053 3.82421 12.9053 3.82421V0.956052C12.9053 0.956052 12.9136 0.696011 13.0358 0.451568C13.158 0.207124 13.3846 -0.000469734 13.8613 7.98322e-07Z"
			fill="black"
		/>
		<path
			d="M5.2589 7.98322e-07C5.73798 0.000473499 5.96573 0.207124 6.08795 0.451568C6.21016 0.696011 6.21495 0.956052 6.21495 0.956052V3.82421C6.21495 3.82421 6.21025 4.08072 6.08795 4.32516C5.96574 4.56961 5.73798 4.78191 5.2589 4.78026C4.78217 4.77861 4.5556 4.56961 4.43338 4.32516C4.31117 4.08072 4.30286 3.82421 4.30286 3.82421V0.956052C4.30286 0.956052 4.31117 0.696011 4.43338 0.451568C4.55561 0.207124 4.78217 -0.000469734 5.2589 7.98322e-07Z"
			fill="black"
		/>
	</svg>
);
const calendar = (
	<svg
		width="23"
		height="22"
		viewBox="0 0 23 22"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M6.70833 10.0835H8.625V11.9168H6.70833V10.0835ZM20.125 5.50016V18.3335C20.125 19.3418 19.2625 20.1668 18.2083 20.1668H4.79167C4.28333 20.1668 3.79582 19.9737 3.43638 19.6299C3.07693 19.286 2.875 18.8197 2.875 18.3335L2.88458 5.50016C2.88458 4.49183 3.72792 3.66683 4.79167 3.66683H5.75V1.8335H7.66667V3.66683H15.3333V1.8335H17.25V3.66683H18.2083C19.2625 3.66683 20.125 4.49183 20.125 5.50016ZM4.79167 7.3335H18.2083V5.50016H4.79167V7.3335ZM18.2083 18.3335V9.16683H4.79167V18.3335H18.2083ZM14.375 11.9168H16.2917V10.0835H14.375V11.9168ZM10.5417 11.9168H12.4583V10.0835H10.5417V11.9168Z"
			fill="black"
		/>
	</svg>
);
const clock = (
	<svg
		width="18"
		height="18"
		viewBox="0 0 18 18"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g clipPath="url(#clip0_25_2263)">
			<path
				d="M9 18C4.03725 18 0 13.9628 0 9C0 4.03725 4.03725 0 9 0C13.9628 0 18 4.03725 18 9C18 13.9628 13.9628 18 9 18ZM9 0.75C4.45125 0.75 0.75 4.45125 0.75 9C0.75 13.5487 4.45125 17.25 9 17.25C13.5487 17.25 17.25 13.5487 17.25 9C17.25 4.45125 13.5487 0.75 9 0.75ZM9 8.75325L11.5463 5.48025L10.9545 5.01975L8.25075 8.49675V14.25H9.00075V8.75325H9Z"
				fill="black"
			/>
		</g>
		<defs>
			<clipPath id="clip0_25_2263">
				<rect width="18" height="18" fill="white" />
			</clipPath>
		</defs>
	</svg>
);

export default ReservationConfirmed;
