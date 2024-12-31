import React from "react";

import clsx from "clsx";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import img from "./assets/img/img.png";
function cn(...inputs) {
	return twMerge(clsx(...inputs));
}
const CaseStudies = () => {
	const [swiper, setSwiper] = React.useState(null);
	const [activeCount, setActiveCount] = React.useState(1);

	return (
		<section className="py-[44px] overflow-hidden">
			<div className="container">
				<div className="mb-[68px]">
					<h2 className="text-2xl leading-[36px] font-bold mb-[30px]">
						Case Studies
					</h2>
					<div className="text-black">
						See how some of our partners have benefited from joining the
						Aegean Taxi partner network
					</div>
				</div>
				<div className="flex flex-col gap-[68px]">
					{["", "", "", ""].map((item, index) => (
						<div
							className="rounded-[22px] border border-black even:bg-black even:text-white group"
							key={index}
						>
							<Image
								src={img}
								width={500}
								height={500}
								alt=""
								className="object-cover w-full rounded-t-[20px]"
							/>
							<div className="px-[22px] py-4">
								<h5 className="underline font-bold text-xl mb-[18px]">
									Hotel in Mykonos
								</h5>
								<ul className="flex flex-col gap-3 text-sm">
									<li className="flex gap-3">
										{icons.solution}
										<strong className="w-[70px]">Solution: </strong>
										<span className="w-0 flex-grow">
											iPad Customisation & Install
										</span>
									</li>
									<li className="flex flex-wrap gap-3">
										{icons.benifit}
										<strong className="w-[70px]">Benefits: </strong>
										<ul className="w-full list-disc pl-11 text-xs flex flex-col gap-1 max-w-[255px]">
											<li>
												Decreased average wait times from 30min to
												15 min
											</li>
											<li>Decreased average ride cost by 25%</li>
											<li>
												Saved on average 2h/day of employee time
											</li>
										</ul>
									</li>
								</ul>
								<div className="border-t border-black pt-[10px] mt-[15px] text-xs leading-[21px] px-3 max-w-[256px]">
									<strong>Description:</strong> This upmarket sandy
									beach with its turquoise waters is very popular among
									celebrities. Many luxury hotels, apartments and
									restaurants are located here. The most notable one is
									Nammos, which is considered one of the
								</div>
								<button
									type="button"
									className="w-full btn text-[15px] h-9 font-bold bg-[#174FCD] rounded-lg text-white mt-[15px] relative group-even:bg-white group-even:text-black"
								>
									Read More {icons.arrow1}
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
const icons = {
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
				fill="currentColor"
			/>
		</svg>
	),
	solution: (
		<svg
			width="15"
			height="16"
			viewBox="0 0 15 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M7.07724 14.9426C7.13659 15.1104 7.04885 15.2949 6.88109 15.3542C6.63979 15.4394 6.38687 15.4833 6.12814 15.4833H5.48294C4.2377 15.4833 3.22473 14.4703 3.22473 13.2251V13.0005C3.22473 11.8992 2.76147 10.8578 1.95433 10.1416C0.495522 8.84995 -0.214201 6.91757 0.0567844 4.97228C0.414872 2.40889 2.5434 0.33392 5.11905 0.038417C8.17085 -0.311928 10.9859 1.77079 11.522 4.7813C11.5537 4.9568 11.4362 5.12455 11.2614 5.15552C11.0839 5.18649 10.9188 5.07035 10.8872 4.89486C10.411 2.2192 7.90826 0.369406 5.1926 0.679749C2.90471 0.942991 1.01297 2.78569 0.695535 5.06197C0.454229 6.7924 1.08459 8.51122 2.38145 9.65968C2.97568 10.1862 3.41055 10.863 3.65185 11.6127H5.48229V6.74659C4.56804 6.59239 3.86929 5.79556 3.86929 4.83808C3.86929 4.66 4.01381 4.51548 4.19189 4.51548C4.36997 4.51548 4.51449 4.66 4.51449 4.83808C4.51449 5.54974 5.09324 6.12849 5.8049 6.12849C6.51655 6.12849 7.0953 5.54974 7.0953 4.83808C7.0953 4.66 7.23983 4.51548 7.4179 4.51548C7.59598 4.51548 7.7405 4.66 7.7405 4.83808C7.7405 5.79556 7.04175 6.59239 6.1275 6.74659V11.9353C6.1275 12.1134 5.98297 12.2579 5.8049 12.2579H3.80799C3.84864 12.5018 3.86929 12.7502 3.86929 13.0012V13.2257C3.86929 14.1148 4.5932 14.8387 5.48229 14.8387H6.1275C6.31267 14.8387 6.49333 14.8078 6.66495 14.7471C6.83141 14.6871 7.01659 14.7748 7.07659 14.9432L7.07724 14.9426ZM12.2576 10.9669C12.2576 11.6785 11.6788 12.2573 10.9672 12.2573C10.2555 12.2573 9.67676 11.6785 9.67676 10.9669C9.67676 10.2552 10.2555 9.67646 10.9672 9.67646C11.6788 9.67646 12.2576 10.2552 12.2576 10.9669ZM11.6124 10.9669C11.6124 10.6114 11.3233 10.3217 10.9672 10.3217C10.611 10.3217 10.322 10.6114 10.322 10.9669C10.322 11.3224 10.611 11.6121 10.9672 11.6121C11.3233 11.6121 11.6124 11.3224 11.6124 10.9669ZM14.9674 12.5102C15.0339 12.7605 14.9977 13.0212 14.8674 13.2438C14.7371 13.467 14.528 13.6264 14.2777 13.6922C14.0287 13.758 13.768 13.7225 13.5435 13.5915L13.1299 13.3502C12.7841 13.6657 12.3776 13.9 11.9343 14.0393V14.5155C11.9343 15.0491 11.5001 15.4833 10.9665 15.4833C10.4329 15.4833 9.99871 15.0491 9.99871 14.5155V14.0393C9.55546 13.9 9.14963 13.6657 8.80315 13.3502L8.38958 13.5915C8.16569 13.7225 7.90568 13.758 7.65534 13.6922C7.405 13.6264 7.19595 13.467 7.06562 13.2438C6.93529 13.0212 6.89981 12.7605 6.96497 12.5102C7.03014 12.2598 7.19015 12.0502 7.41339 11.9198L7.83019 11.6766C7.76954 11.4282 7.73986 11.1946 7.73986 10.9669C7.73986 10.7391 7.76954 10.5055 7.83019 10.2565L7.41339 10.0133C7.19015 9.88292 7.03078 9.67323 6.96497 9.42289C6.89916 9.17255 6.93529 8.91189 7.06562 8.6893C7.19595 8.46606 7.405 8.30734 7.65534 8.24153C7.90568 8.17571 8.16634 8.21185 8.38958 8.34153L8.80315 8.58284C9.14963 8.26798 9.55546 8.03312 9.99871 7.89441V7.41825C9.99871 6.88466 10.4329 6.45044 10.9665 6.45044C11.5001 6.45044 11.9343 6.88466 11.9343 7.41825V7.89441C12.3776 8.03377 12.7828 8.26798 13.1299 8.58284L13.5441 8.34153C13.768 8.2112 14.0287 8.17636 14.2777 8.24153C14.528 8.30734 14.7371 8.4667 14.8674 8.68994C14.9977 8.91318 15.0339 9.17384 14.9674 9.42354C14.9016 9.67388 14.7429 9.88292 14.5197 10.0139L14.1028 10.2565C14.1635 10.5049 14.1932 10.7391 14.1932 10.9669C14.1932 11.1946 14.1635 11.4288 14.1028 11.6766L14.5197 11.9198C14.7435 12.0502 14.9023 12.2598 14.9674 12.5102ZM14.3435 12.6741C14.3216 12.5908 14.2687 12.5212 14.1945 12.4779L13.5628 12.1089C13.4325 12.0327 13.3725 11.8772 13.4176 11.7334C13.5067 11.4508 13.548 11.2069 13.548 10.9675C13.548 10.7281 13.5067 10.4843 13.4176 10.201C13.3725 10.0571 13.4325 9.90163 13.5628 9.8255L14.1945 9.45709C14.2687 9.41386 14.3216 9.34418 14.3435 9.26095C14.3654 9.17771 14.3538 9.09061 14.31 9.01641C14.2667 8.94222 14.1964 8.88866 14.1132 8.86737C14.0274 8.84479 13.9422 8.85769 13.8686 8.90028L13.2415 9.26611C13.1125 9.3416 12.9466 9.31837 12.8441 9.20868C12.4892 8.8306 12.0382 8.57058 11.5401 8.45702C11.393 8.42347 11.2891 8.29314 11.2891 8.14281V7.42018C11.2891 7.24211 11.144 7.09758 10.9665 7.09758C10.7891 7.09758 10.6439 7.24211 10.6439 7.42018V8.14281C10.6439 8.29314 10.54 8.42412 10.3929 8.45702C9.89484 8.57058 9.44319 8.8306 9.08898 9.20868C8.98639 9.31837 8.81993 9.3416 8.69153 9.26611L8.06504 8.90028C7.9902 8.85705 7.9031 8.84479 7.82051 8.86737C7.73728 8.88931 7.6676 8.94222 7.62372 9.01641C7.58049 9.09126 7.56823 9.17771 7.59017 9.26095C7.61211 9.34418 7.66502 9.4145 7.73921 9.45773L8.37087 9.82614C8.5012 9.90163 8.5612 10.0571 8.51604 10.201C8.427 10.4849 8.38571 10.7288 8.38571 10.9675C8.38571 11.2062 8.427 11.4501 8.51604 11.734C8.5612 11.8779 8.5012 12.0334 8.37087 12.1095L7.73921 12.4786C7.66502 12.5218 7.61146 12.5921 7.59017 12.6754C7.56823 12.7586 7.57985 12.845 7.62372 12.9192C7.66695 12.9941 7.73728 13.047 7.82051 13.0689C7.90439 13.0909 7.99084 13.0793 8.06504 13.0354L8.69218 12.6696C8.7425 12.6399 8.79864 12.6257 8.85477 12.6257C8.94187 12.6257 9.02768 12.6605 9.08962 12.7276C9.44448 13.1057 9.89548 13.3657 10.3936 13.4793C10.5407 13.5128 10.6446 13.6432 10.6446 13.7935V14.5161C10.6446 14.6942 10.7897 14.8387 10.9672 14.8387C11.1446 14.8387 11.2898 14.6942 11.2898 14.5161V13.7935C11.2898 13.6432 11.3936 13.5122 11.5407 13.4793C12.0388 13.3657 12.4905 13.1057 12.8447 12.7276C12.9473 12.6173 13.1131 12.5934 13.2421 12.6696L13.8693 13.0354C13.9448 13.0793 14.0312 13.0902 14.1138 13.0689C14.1971 13.047 14.2667 12.9941 14.3106 12.9199C14.3538 12.845 14.3661 12.7586 14.3442 12.6754L14.3435 12.6741Z"
				fill="currentColor"
			/>
		</svg>
	),
	benifit: (
		<svg
			width="15"
			height="17"
			viewBox="0 0 15 17"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M14.8477 0.478157C14.6614 0.178884 14.3396 0 13.9873 0H11.2496C10.3369 0 9.51862 0.508765 9.1146 1.32769L7.75359 4.08712C7.66993 4.08372 7.58559 4.08168 7.50125 4.08168C7.41691 4.08168 7.33256 4.08372 7.2489 4.08712L5.88789 1.32769C5.48387 0.508765 4.66631 0 3.75285 0H1.01382C0.660811 0 0.339772 0.178884 0.153406 0.478157C-0.0322791 0.77743 -0.0506436 1.14472 0.105115 1.461L2.60405 6.53164C1.83478 7.55529 1.37839 8.82652 1.37839 10.2018C1.37839 13.5768 4.1249 16.3233 7.49989 16.3233C10.8749 16.3233 13.6214 13.5768 13.6214 10.2018C13.6214 8.82584 13.165 7.55461 12.3957 6.53164L14.8947 1.461C15.0504 1.14472 15.0327 0.77743 14.8464 0.478157H14.8477ZM0.715224 1.16036C0.641766 1.01073 0.701621 0.884217 0.730868 0.837285C0.760115 0.790354 0.846496 0.680167 1.01382 0.680167H3.75149C4.40309 0.680167 4.98803 1.04338 5.27642 1.62832L6.52521 4.15922C5.18324 4.37483 3.98547 5.02847 3.08424 5.96778L0.715224 1.16036ZM7.50057 15.6438C4.50035 15.6438 2.05923 13.2027 2.05923 10.2025C2.05923 7.36212 4.60578 4.76117 7.50057 4.76117C10.3954 4.76117 12.9419 7.3628 12.9419 10.2025C12.9419 13.2027 10.5008 15.6438 7.50057 15.6438ZM14.2859 1.16036L11.9162 5.96778C11.015 5.02847 9.81721 4.37483 8.47524 4.15922L9.72403 1.62832C10.0124 1.04338 10.5974 0.680167 11.249 0.680167H13.9866C14.154 0.680167 14.2403 0.790354 14.2696 0.837285C14.2988 0.884217 14.36 1.01073 14.2859 1.16036ZM10.1491 8.84217H8.7718L8.40723 7.50836C8.30044 7.09958 7.92975 6.80983 7.49444 6.80167C7.07138 6.80983 6.70069 7.09958 6.59526 7.50496L6.22933 8.84217H4.852C4.31331 8.84217 3.97934 9.27407 3.97934 9.67469C3.97934 10.0454 4.20448 10.4011 4.55272 10.5943L5.45803 11.1581L5.0472 12.2777C4.89621 12.6885 5.0302 13.1415 5.37981 13.4047C5.55461 13.5367 5.76342 13.6027 5.97291 13.6027C6.1858 13.6027 6.3987 13.534 6.57554 13.3972L7.50125 12.6817L8.42695 13.3972C8.77724 13.6679 9.269 13.6707 9.62269 13.4047C9.97229 13.1415 10.1056 12.6885 9.95529 12.2777L9.54447 11.1581L10.4348 10.6031C10.7973 10.4018 11.0225 10.0461 11.0225 9.67469C11.0225 9.27407 10.6885 8.84217 10.1498 8.84217H10.1491ZM10.0893 10.0175L8.94932 10.7276C8.81261 10.8126 8.75411 10.982 8.80989 11.1336L9.31593 12.513C9.3615 12.6382 9.31933 12.7817 9.21255 12.8619C9.10236 12.9443 8.95 12.9429 8.84185 12.8599L7.70802 11.9832C7.58559 11.888 7.41419 11.888 7.29244 11.9832L6.1586 12.8599C6.04909 12.9436 5.89673 12.9449 5.78791 12.8619C5.68112 12.7817 5.63895 12.6382 5.68452 12.513L6.19057 11.1336C6.24634 10.982 6.18784 10.8126 6.05113 10.7276L4.89689 10.0087C4.77854 9.94268 4.65883 9.81412 4.65883 9.67469C4.65883 9.63388 4.7044 9.52233 4.85132 9.52233H6.48848C6.6422 9.52233 6.77619 9.41963 6.81632 9.27203L7.25162 7.68044C7.28155 7.56617 7.3863 7.48387 7.49376 7.48183C7.61347 7.48387 7.7189 7.56617 7.74951 7.68384L8.18345 9.27135C8.22426 9.41895 8.35826 9.52165 8.51129 9.52165H10.1485C10.2954 9.52165 10.3409 9.6332 10.3409 9.67401C10.3409 9.81344 10.2212 9.94199 10.0886 10.0161L10.0893 10.0175Z"
				fill="currentColor"
			/>
		</svg>
	),
};
export default CaseStudies;
