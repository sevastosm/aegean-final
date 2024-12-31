import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import report1 from "./assets/img/reports/1.png";
import report2 from "./assets/img/reports/2.png";
import report3 from "./assets/img/reports/3.png";
function cn(...inputs) {
	return twMerge(clsx(...inputs));
}
const MykonosStatistics = () => {
	const [swiper, setSwiper] = React.useState(null);
	const [activeCount, setActiveCount] = React.useState(1);

	return (
		<section className="book-ride-section py-[60px] overflow-hidden">
			<div className="container max-sm:px-6">
				<h2 className="text-[#2B2B6E] text-2xl leading-[36px] font-semibold mb-8">
					Mykonos statistics (2024)
				</h2>
			</div>
			<div className="container max-sm:px-3">
				<div className="grid grid-cols-3 gap-y-10">
					{data.map((item, index) => (
						<div
							className={cn("px-4", {
								"border-r border-black": index % 3 !== 2,
							})}
							key={index}
						>
							<div className="mb-4 flex">{item.icon}</div>
							<h5 className="text-xl font-bold mb-4 text-[#2A56F6]">
								{item.count}
							</h5>
							<p
								className="text-sm font-semibold text-[#000] leading-[20px]"
								dangerouslySetInnerHTML={{
									__html: item.text,
								}}
							></p>
						</div>
					))}
				</div>
			</div>
			<div className="px-3">
				<div className="relative mt-12 flex justify-end">
					<button
						className="btn flex items-center gap-2 justify-center bg-[#2B2B6E] text-white h-9 rounded-full text-sm px-4"
						type="button"
					>
						<span>Download Mykonos Statistics</span>
						{arrowdown}
					</button>
				</div>
			</div>
			<div className="pt-12 pb-11 font-sfPro">
				{reportData.map((item, index) => (
					<div
						className={cn("flex", {
							"flex-row-reverse": index % 2 == 1,
						})}
						key={index}
					>
						<div className="w-1/2 py-10 px-[25px]">
							<div
								className="leading-[20px]"
								dangerouslySetInnerHTML={{
									__html: item.html,
								}}
							></div>
						</div>
						<Image
							src={item.img}
							className="w-1/2 object-cover"
							width={600}
							height={600}
							alt=""
						/>
					</div>
				))}
			</div>
			<div className="px-3">
				<div className="relative flex justify-end">
					<button
						className="btn flex items-center gap-2 justify-center bg-[#2B2B6E] text-white h-9 rounded-full text-sm px-4"
						type="button"
					>
						<span>Download Our Mykonos Report</span>
						{arrowdown}
					</button>
				</div>
			</div>
		</section>
	);
};
const reportData = [
	{
		img: report1,
		html: `Our in depth and up to date <strong>knowledge of Mykonos</strong>, puts us in a unique position of <strong>authority</strong>, when it comes to travel itineraries and <strong>travel advice</strong>. `,
	},
	{
		img: report2,
		html: `<strong>Every year</strong>, we compile a <strong>list</strong> of all the <strong>popular places</strong> per category in <strong>Mykonos</strong>, and we are happy to <strong>share</strong> these in the sections below. `,
	},
	{
		img: report3,
		html: `Our <strong>Mykonos travel blog</strong> is the product of <strong>data</strong> gathering and <strong>analysis</strong> of thousands of <strong>rides</strong> from our <strong>Mykonos Taxi fleet</strong>. we hope you find these useful `,
	},
];
const icons = {
	passenger: (
		<svg
			width="35"
			height="30"
			viewBox="0 0 35 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M15.9814 13.1591L17.2034 12.9677V6.72461H14.8306V13.7694C15.1153 13.4497 15.5249 13.2325 15.9814 13.1591Z"
				fill="black"
			/>
			<path
				d="M29.501 0.253448C29.3931 0.0972708 29.1999 0.00126056 28.9908 0H27.9586C27.7495 0.00126056 27.5563 0.0972708 27.4484 0.253448L26.5586 1.55172H30.3908L29.501 0.253448Z"
				fill="black"
			/>
			<path
				d="M21.7891 0.253448C21.6812 0.0972708 21.488 0.00126056 21.2789 0H20.2467C20.0376 0.00126056 19.8443 0.0972708 19.7365 0.253448L18.8467 1.55172H22.6789L21.7891 0.253448Z"
				fill="black"
			/>
			<path
				d="M34.4068 3.6214C34.4049 3.05078 33.8748 2.58862 33.2204 2.58691H16.017C15.3626 2.58862 14.8325 3.05078 14.8306 3.6214V5.69036H34.4068V3.6214ZM29.0679 4.65588H27.8814C27.5538 4.65588 27.2882 4.4243 27.2882 4.13864C27.2882 3.85297 27.5538 3.6214 27.8814 3.6214H29.0679C29.3955 3.6214 29.6611 3.85297 29.6611 4.13864C29.6611 4.4243 29.3955 4.65588 29.0679 4.65588ZM32.6272 4.65588H31.4407C31.1131 4.65588 30.8475 4.4243 30.8475 4.13864C30.8475 3.85297 31.1131 3.6214 31.4407 3.6214H32.6272C32.9548 3.6214 33.2204 3.85297 33.2204 4.13864C33.2204 4.4243 32.9548 4.65588 32.6272 4.65588Z"
				fill="black"
			/>
			<path
				d="M3.55953 13.9651H11.8646C12.1922 13.9651 12.4578 13.7336 12.4578 13.4479C12.4578 13.1622 12.1922 12.9307 11.8646 12.9307H3.55953C3.2319 12.9307 2.96631 13.1622 2.96631 13.4479C2.96631 13.7336 3.2319 13.9651 3.55953 13.9651Z"
				fill="black"
			/>
			<path
				d="M2.37301 16.5521H10.6781C11.0057 16.5521 11.2713 16.3205 11.2713 16.0348C11.2713 15.7492 11.0057 15.5176 10.6781 15.5176H2.37301C2.04538 15.5176 1.77979 15.7492 1.77979 16.0348C1.77979 16.3205 2.04538 16.5521 2.37301 16.5521Z"
				fill="black"
			/>
			<path
				d="M0.59322 19.138H8.8983C9.22593 19.138 9.49153 18.9064 9.49153 18.6208C9.49153 18.3351 9.22593 18.1035 8.8983 18.1035H0.59322C0.265594 18.1035 0 18.3351 0 18.6208C0 18.9064 0.265594 19.138 0.59322 19.138Z"
				fill="black"
			/>
			<path
				d="M4.1523 28.966C3.82468 28.966 3.55908 29.1976 3.55908 29.4832C3.55908 29.7689 3.82468 30.0005 4.1523 30.0005H34.4065C34.7342 30.0005 34.9998 29.7689 34.9998 29.4832C34.9998 29.1976 34.7342 28.966 34.4065 28.966V6.72461H32.0337V28.966H4.1523Z"
				fill="black"
			/>
			<path
				d="M1.77966 28.9658H0.59322C0.265594 28.9658 0 29.1974 0 29.4831C0 29.7687 0.265594 30.0003 0.59322 30.0003H1.77966C2.10729 30.0003 2.37288 29.7687 2.37288 29.4831C2.37288 29.1974 2.10729 28.9658 1.77966 28.9658Z"
				fill="black"
			/>
			<path
				d="M22.839 12.9275C22.9968 12.9282 23.1541 12.9126 23.3076 12.8809C24.2457 12.6964 24.9175 11.9765 24.934 11.1381C24.9505 10.2997 24.3074 9.56014 23.3771 9.34764C22.4468 9.13513 21.4705 9.50477 21.0134 10.2425C20.5563 10.9803 20.737 11.8949 21.4508 12.4568C21.8289 12.7607 22.3247 12.9288 22.839 12.9275Z"
				fill="black"
			/>
			<path
				d="M10.649 26.1016C9.74312 26.103 9.01008 26.7445 9.01172 27.5343C9.01336 28.3242 9.74905 28.9633 10.6549 28.9619C11.5608 28.9605 12.2939 28.319 12.2922 27.5291C12.2903 26.7394 11.5548 26.1004 10.649 26.1016Z"
				fill="black"
			/>
			<path
				d="M28.4746 17.0642C28.476 17.2039 28.4091 17.3374 28.2907 17.4315C28.1844 17.5294 28.0359 17.5838 27.8813 17.5815H25.7695C25.5634 17.5942 25.3609 17.5303 25.2118 17.4056L23.2661 15.6729C23.1178 15.5384 22.8973 15.4849 22.6907 15.5332C22.4859 15.5824 22.3259 15.7219 22.2695 15.9004L21.0356 19.9711C20.9747 20.1679 21.054 20.3774 21.2373 20.5039L24.4644 22.8056C24.6054 22.906 24.7002 23.0475 24.7313 23.2039L25.6093 28.2211C25.6438 28.3863 25.5988 28.5566 25.4847 28.6918C25.3698 28.8297 25.1971 28.9226 25.0042 28.9504C24.9669 28.9559 24.9293 28.9594 24.8915 28.9608C24.5288 28.9644 24.2181 28.7353 24.1618 28.4229L23.3491 23.8401C23.3266 23.7136 23.2504 23.5991 23.1356 23.5194L20.0686 21.3315C19.9175 21.2203 19.7121 21.1833 19.5229 21.2332C19.3331 21.2848 19.1846 21.4143 19.1254 21.5797L16.7347 28.5004C16.6865 28.6673 16.56 28.8088 16.3863 28.8904C16.2126 28.9721 16.0075 28.9863 15.8212 28.9297C15.6354 28.8803 15.4797 28.7687 15.3881 28.6194C15.297 28.4718 15.2777 28.2985 15.3347 28.1384L19.6178 15.6925C19.6773 15.5198 19.6293 15.3325 19.4913 15.1983C19.3532 15.0641 19.1449 15.0022 18.9415 15.0351L17.0669 15.3366C16.8956 15.3636 16.7462 15.4542 16.6576 15.5849L15.1923 17.8194C15.1154 17.9421 14.9916 18.0372 14.8423 18.0884C14.6311 18.1698 14.3875 18.1563 14.1898 18.0522C14.0299 17.9707 13.9113 17.8395 13.8576 17.6849C13.8576 17.6746 13.8517 17.6642 13.8517 17.6539C13.8024 17.495 13.828 17.3255 13.9229 17.1832L15.6907 14.478C15.7996 14.316 15.9834 14.2029 16.1949 14.1677L20.3712 13.516L20.9525 13.4229C21.5019 13.7688 22.1613 13.9568 22.839 13.9608C23.0303 13.9597 23.221 13.9424 23.4084 13.9091L25.9118 16.3711C26.0234 16.4838 26.186 16.5481 26.3568 16.547H27.8813C28.0387 16.547 28.1895 16.6015 28.3008 16.6985C28.4121 16.7955 28.4746 16.9271 28.4746 17.0642Z"
				fill="black"
			/>
			<path
				d="M13.5202 18.9014L12.7217 21.2853C12.5457 21.2092 12.3623 21.1471 12.1735 21.0996C10.4139 20.6447 8.5615 21.5064 8.01507 23.0341L6.54389 27.0893C6.47733 27.2707 6.59132 27.4648 6.79897 27.5238L7.86084 27.8341C7.83987 27.7334 7.82797 27.6313 7.82524 27.529C7.82292 26.6302 8.38375 25.8021 9.2875 25.3698C10.1913 24.9375 11.2936 24.9701 12.1617 25.4548L13.2212 22.2805L14.2652 19.144C14.0323 19.1156 13.8072 19.0508 13.6008 18.9526C13.5735 18.9376 13.5498 18.9169 13.5202 18.9014Z"
				fill="black"
			/>
		</svg>
	),
	trip: (
		<svg
			width="35"
			height="30"
			viewBox="0 0 35 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4.33243 4.60915C5.36312 4.53104 6.13921 3.57762 6.06588 2.47963C5.99256 1.38164 5.09758 0.554864 4.0669 0.632977C3.03622 0.711091 2.26013 1.66451 2.33345 2.7625C2.40678 3.86049 3.30175 4.68726 4.33243 4.60915Z"
				fill="black"
			/>
			<path
				d="M12.8168 4.58522C13.9163 4.39535 14.6631 3.29194 14.4849 2.12068C14.3067 0.949415 13.2709 0.153839 12.1714 0.34371C11.072 0.53358 10.3251 1.637 10.5034 2.80826C10.6816 3.97952 11.7174 4.77509 12.8168 4.58522Z"
				fill="black"
			/>
			<path
				d="M24.4595 9.15926H34.9998V5.21973H24.6226C22.6594 5.21973 21.0679 7.16261 21.0679 9.55939V24.4098C21.0679 26.8065 22.6594 28.7495 24.6226 28.7495H27.9538V27.4641C27.9538 26.9719 28.2807 26.5728 28.6839 26.5728H32.966C33.3692 26.5728 33.6961 26.9719 33.6961 27.4641V28.7495H34.9999V18.6434H24.4595C23.8405 18.6434 23.3387 18.0308 23.3387 17.2751V10.5276C23.3387 9.77188 23.8405 9.15926 24.4595 9.15926ZM24.9944 22.3449C25.9087 22.3449 26.65 23.2499 26.65 24.3662C26.65 25.4825 25.9087 26.3873 24.9944 26.3873C24.08 26.3873 23.3387 25.4824 23.3387 24.3662C23.3387 23.2499 24.08 22.3449 24.9944 22.3449Z"
				fill="black"
			/>
			<path
				d="M19.2127 24.5289H18.6145H18.3001H16.5648H16.2504H13.8911C14.2151 24.3692 14.5223 24.0485 14.5233 23.6551C14.5341 19.2552 14.5233 12.1194 14.5233 12.1194L16.0522 13.1282V14.8754C15.6852 14.9705 15.4123 15.3219 15.4123 15.7422V22.7622C15.4123 23.1961 15.7028 23.5574 16.0879 23.6381C16.0389 23.7261 16.0104 23.8285 16.0104 23.9382C16.0104 24.2644 16.2586 24.529 16.5649 24.529C16.8712 24.529 17.1193 24.2645 17.1193 23.9382C17.1193 23.8356 17.0947 23.7392 17.0515 23.6552H17.8135C17.7703 23.7393 17.7457 23.8357 17.7457 23.9382C17.7457 24.2644 17.9939 24.529 18.3002 24.529C18.6065 24.529 18.8547 24.2645 18.8547 23.9382C18.8547 23.8285 18.8261 23.7261 18.7772 23.6381C19.1623 23.5574 19.4528 23.1961 19.4528 22.7622V15.7422C19.4528 15.249 19.0775 14.8493 18.6146 14.8493H17.0775C17.0775 14.6383 17.0775 13.3754 17.0775 13.2086C17.2091 13.1303 17.3249 13.0171 17.4103 12.8712C17.6803 12.4102 17.5484 11.8033 17.1156 11.5157L14.5346 9.79992V6.62982C14.5346 5.88386 13.9669 5.27908 13.2667 5.27908H10.9449C10.2447 5.27908 9.67696 5.88378 9.67696 6.62982V6.80959L10.2432 6.48689L8.32591 8.30129C8.20849 8.41241 8.11957 8.55366 8.06769 8.71159L6.91512 12.2162C6.74651 12.729 7.00001 13.2904 7.48139 13.4701C7.96018 13.6488 8.48886 13.3824 8.65843 12.8668L9.73185 9.60303L11.47 7.95813L10.373 9.63245L9.70936 11.7487C9.72993 24.3235 9.68927 23.5114 9.70936 23.6552C9.7637 24.0445 10.0003 24.3694 10.3241 24.529H6.07067C6.55493 24.3846 6.88136 23.8999 6.86017 23.3702L6.66558 18.5048C6.66223 18.4215 6.65048 18.339 6.63045 18.2585L6.20546 16.5495H6.93734C7.22946 16.5495 7.44859 16.2415 7.39186 15.9113L7.06125 13.9864C7.06125 13.9864 4.53884 11.4148 4.29278 11.1563C4.18746 11.0253 4.01686 10.9312 3.97558 10.6703L3.52318 7.82802L4.60439 10.3664C4.6469 10.4662 4.70616 10.5569 4.77922 10.6342L6.27907 12.2196L6.88792 10.3198L6.08339 9.46935L5.06649 7.08198L6.1095 8.44488L5.72558 6.20962C5.62456 5.62144 5.17688 5.19629 4.65654 5.19629C3.98645 5.19629 3.51511 5.19629 2.77141 5.19629C2.24997 5.19629 1.80359 5.62028 1.70236 6.20962L0.0359515 15.9112C-0.0211881 16.2437 0.201356 16.5494 0.490471 16.5494H1.38823V18.7641L0.412827 23.1535C0.282281 23.7411 0.605571 24.3597 1.17594 24.5289H0V30.0004H18.8414V26.2707H19.2127C19.6642 26.2707 20.0302 25.8808 20.0302 25.3998C20.0302 24.9188 19.6642 24.5289 19.2127 24.5289ZM1.75985 24.5289C2.12565 24.4187 2.42631 24.1069 2.52009 23.6849L2.52672 23.6551L3.52461 19.1644C3.54396 19.0773 3.55373 18.9882 3.55373 18.8987V16.5494H3.96546L4.50726 18.7282L4.69679 23.4684C4.71634 23.9573 5.03013 24.3924 5.48492 24.529H1.75985V24.5289ZM11.2293 24.5289C11.5533 24.3691 11.7896 24.044 11.8438 23.6551C11.8663 23.4941 11.831 14.2404 11.8254 14.1778H12.3574C12.3637 24.0817 12.3459 23.4742 12.3712 23.6551C12.4255 24.0443 12.662 24.3692 12.9859 24.5289H11.2293Z"
				fill="black"
			/>
		</svg>
	),
	days: (
		<svg
			width="31"
			height="32"
			viewBox="0 0 31 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M29.9099 2.60125H26.9205C26.7677 1.14011 25.5297 0 24.0289 0C22.528 0 21.2931 1.14017 21.1403 2.60125H17.998C17.8451 1.14011 16.6072 0 15.1063 0C13.6085 0 12.3706 1.14017 12.2177 2.60125H9.07544C8.9226 1.14011 7.68464 0 6.18378 0C4.68598 0 3.44802 1.14017 3.29518 2.60125H0.305685C0.137564 2.60125 0 2.73881 0 2.90693V30.8728C0 31.0409 0.137564 31.1785 0.305685 31.1785H29.9099C30.0781 31.1785 30.2156 31.0409 30.2156 30.8728V2.90693C30.2156 2.73881 30.0781 2.60125 29.9099 2.60125ZM24.0289 0.611307C25.1904 0.611307 26.1532 1.47941 26.303 2.60125H21.7577C21.9075 1.47941 22.8673 0.611307 24.0289 0.611307ZM15.1063 0.611307C16.2678 0.611307 17.2306 1.47941 17.3804 2.60125H12.8351C12.9849 1.47941 13.9448 0.611307 15.1063 0.611307ZM6.18372 0.611307C7.34834 0.611307 8.30811 1.47941 8.4579 2.60125H3.91254C4.06239 1.47941 5.02222 0.611307 6.18372 0.611307ZM29.6043 30.5671H0.611369V29.3781H25.976C26.1441 29.3781 26.2816 29.2405 26.2816 29.0724C26.2816 28.9012 26.1441 28.7667 25.976 28.7667H0.611369V27.5777H29.6043V30.5671ZM29.6043 26.9663H0.611369V9.60418H29.6043V26.9663ZM29.6043 8.99281H0.611369V3.21262H3.29512C3.45102 4.67064 4.68592 5.81387 6.18372 5.81387C6.35184 5.81387 6.48941 5.6763 6.48941 5.50818C6.48941 5.33701 6.35184 5.2025 6.18372 5.2025C5.02521 5.2025 4.06544 4.3344 3.9126 3.21262H12.2177C12.3705 4.67064 13.6085 5.81387 15.1063 5.81387C15.2744 5.81387 15.4119 5.6763 15.4119 5.50818C15.4119 5.33701 15.2744 5.2025 15.1063 5.2025C13.9447 5.2025 12.988 4.3344 12.8351 3.21262H21.1402C21.293 4.67064 22.531 5.81387 24.0288 5.81387C24.1969 5.81387 24.3345 5.6763 24.3345 5.50818C24.3345 5.33701 24.1969 5.2025 24.0288 5.2025C22.8672 5.2025 21.9075 4.3344 21.7577 3.21262H29.6043V8.99281Z"
				fill="black"
			/>
			<path
				d="M22.2591 18.0558L20.5382 16.8514L21.4277 14.9471C21.4704 14.8554 21.4643 14.7515 21.4154 14.6628C21.3666 14.5773 21.2748 14.5222 21.177 14.513L19.0831 14.3327L18.8997 12.2388C18.8936 12.1379 18.8356 12.0493 18.75 12.0004C18.6644 11.9484 18.5574 11.9454 18.4687 11.9882L16.5644 12.8777L15.357 11.1537C15.2439 10.9917 14.9719 10.9917 14.8557 11.1537L13.6513 12.8777L11.747 11.9882C11.6584 11.9454 11.5514 11.9485 11.4658 12.0004C11.3771 12.0493 11.3221 12.138 11.3129 12.2388L11.1326 14.3327L9.03877 14.513C8.94093 14.5222 8.84926 14.5772 8.80031 14.6628C8.75142 14.7515 8.74531 14.8554 8.78808 14.9471L9.67757 16.8514L7.95665 18.0558C7.87415 18.1138 7.8252 18.2056 7.8252 18.3065C7.8252 18.4073 7.87409 18.499 7.95665 18.5571L9.67757 19.7614L8.78808 21.6657C8.74531 21.7574 8.75142 21.8614 8.80031 21.95C8.8492 22.0356 8.93787 22.0907 9.03877 22.0998L11.1326 22.2802L11.3129 24.374C11.3221 24.4749 11.3771 24.5635 11.4658 24.6124C11.5513 24.6644 11.6553 24.6675 11.747 24.6277L13.6513 23.7382L14.8557 25.4591C14.9137 25.5417 15.0085 25.5906 15.1064 25.5906C15.2073 25.5906 15.2989 25.5417 15.3571 25.4591L16.5645 23.7382L18.4688 24.6277C18.5574 24.6674 18.6644 24.6643 18.75 24.6155C18.8356 24.5635 18.8937 24.4748 18.9029 24.3771L19.0832 22.2802L21.177 22.0998C21.2749 22.0937 21.3665 22.0357 21.4155 21.95C21.4644 21.8644 21.4705 21.7575 21.4277 21.6657L20.5382 19.7614L22.2592 18.5571C22.3417 18.499 22.3906 18.4073 22.3906 18.3065C22.3906 18.2056 22.3417 18.1139 22.2591 18.0558ZM18.4963 18.3065C18.4963 20.1741 16.9771 21.6964 15.1094 21.6964C13.2387 21.6964 11.7195 20.1741 11.7195 18.3065C11.7195 16.4388 13.2387 14.9196 15.1094 14.9196C16.9771 14.9196 18.4963 16.4388 18.4963 18.3065Z"
				fill="black"
			/>
		</svg>
	),
	clients: (
		<svg
			width="31"
			height="35"
			viewBox="0 0 31 35"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M5.12748 20.6435H3.07644C1.38 20.6435 0 22.0235 0 23.7199C0 25.4163 1.38 26.7963 3.07644 26.7963H11.2804C11.8459 26.7963 12.3057 27.2559 12.3057 27.8217C12.3057 28.3876 11.8459 28.8471 11.2804 28.8471H7.17826C5.48183 28.8471 4.10183 30.2271 4.10183 31.9236C4.10183 33.62 5.48183 35 7.17826 35H21.5351C23.2315 35 24.6115 33.62 24.6115 31.9236V30.214L29.3312 23.922C30.2685 22.6724 30.7644 21.1842 30.7644 19.6181C30.7644 15.6434 27.5467 12.4454 23.5858 12.4414C19.5809 12.4374 16.4084 15.6922 16.407 19.6181C16.4068 21.1714 16.8997 22.6678 17.8407 23.9212L22.5604 30.2138V31.9236C22.5604 32.4894 22.1006 32.949 21.5351 32.949H7.17826C6.61243 32.949 6.15287 32.4894 6.15287 31.9236C6.15287 31.3577 6.61243 30.8982 7.17826 30.8982H11.2804C12.9765 30.8982 14.3565 29.5182 14.3565 27.8217C14.3565 26.1253 12.9765 24.7453 11.2804 24.7453H3.07644C2.5106 24.7453 2.05105 24.2855 2.05105 23.7199C2.05105 23.1541 2.5106 22.6943 3.07644 22.6943H5.12748C6.82392 22.6943 8.20392 21.3142 8.20392 19.6178V17.9086L12.9237 11.5479C13.9026 10.2427 14.3528 8.70863 14.3651 7.27228C14.3984 3.38889 11.3167 -0.0111875 7.17826 2.76668e-05C3.16696 0.0109758 0 3.24362 0 7.17562C0 8.74174 0.495605 10.2983 1.43314 11.5471L6.15287 17.9086V19.6178C6.15287 20.1836 5.69332 20.6435 5.12748 20.6435ZM20.5094 19.6178C20.5094 17.9214 21.8894 16.5414 23.5858 16.5414C25.2823 16.5414 26.6623 17.9214 26.6623 19.6178C26.6623 21.3142 25.2823 22.6943 23.5858 22.6943C21.8894 22.6943 20.5094 21.3145 20.5094 19.6178ZM4.10183 7.17562C4.10183 5.47919 5.48183 4.09918 7.17826 4.09918C8.8747 4.09918 10.2547 5.47919 10.2547 7.17562C10.2547 8.87179 8.8747 10.2521 7.17826 10.2521C5.48183 10.2521 4.10183 8.87205 4.10183 7.17562Z"
				fill="black"
			/>
		</svg>
	),
	places: (
		<svg
			width="34"
			height="35"
			viewBox="0 0 34 35"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M30 15H29.1667C28.6667 16.3333 28.1667 17.6667 27.3333 19L29.8333 31.6667H4L6.5 19C5.83333 17.6667 5.33333 16.3333 4.83333 15H4L0 35H34L30 15Z"
				fill="black"
			/>
			<path
				d="M17 0C11.5 0 7 4.5 7 10C7 15.5 17 30 17 30C17 30 27 15.5 27 10C27 4.5 22.5 0 17 0ZM17 15C14.1667 15 12 12.8333 12 10C12 7.16667 14.1667 5 17 5C19.8333 5 22 7.16667 22 10C22 12.8333 19.8333 15 17 15Z"
				fill="black"
			/>
		</svg>
	),
	surveys: (
		<svg
			width="35"
			height="35"
			viewBox="0 0 35 35"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_27_7708)">
				<path
					d="M17.5002 3.1498C17.6626 3.1498 17.8184 3.08527 17.9333 2.97041C18.0482 2.85554 18.1127 2.69975 18.1127 2.5373C18.1127 2.37486 18.0482 2.21907 17.9333 2.1042C17.8184 1.98934 17.6626 1.9248 17.5002 1.9248C17.3378 1.9248 17.182 1.98934 17.0671 2.1042C16.9522 2.21907 16.8877 2.37486 16.8877 2.5373C16.8877 2.69975 16.9522 2.85554 17.0671 2.97041C17.182 3.08527 17.3378 3.1498 17.5002 3.1498Z"
					fill="black"
				/>
				<path
					d="M28.8149 3.85506H24.4781C24.3532 3.50522 24.1233 3.20246 23.8199 2.98811C23.5165 2.77377 23.1543 2.65828 22.7828 2.65741H20.4149C20.3516 1.92793 20.0171 1.24869 19.4775 0.753807C18.9378 0.258924 18.2322 -0.015625 17.5 -0.015625C16.7678 -0.015625 16.0622 0.258924 15.5225 0.753807C14.9829 1.24869 14.6484 1.92793 14.5852 2.65741H12.3539C11.9824 2.65828 11.6203 2.77377 11.3168 2.98811C11.0134 3.20246 10.7836 3.50522 10.6586 3.85506H6.18517C6.01907 3.85434 5.85447 3.88652 5.70088 3.94975C5.54728 4.01298 5.40773 4.10601 5.29028 4.22346C5.17283 4.34091 5.0798 4.48046 5.01657 4.63405C4.95334 4.78765 4.92116 4.95225 4.92189 5.11834V33.7363C4.92116 33.9024 4.95334 34.067 5.01657 34.2206C5.0798 34.3742 5.17283 34.5138 5.29028 34.6312C5.40773 34.7487 5.54728 34.8417 5.70088 34.9049C5.85447 34.9681 6.01907 35.0003 6.18517 34.9996H28.8149C28.9805 35.0003 29.1446 34.9683 29.2979 34.9054C29.4511 34.8425 29.5904 34.75 29.7078 34.6331C29.8252 34.5163 29.9183 34.3774 29.9819 34.2244C30.0454 34.0714 30.0781 33.9074 30.0781 33.7418V5.11834C30.0789 4.95225 30.0467 4.78765 29.9834 4.63405C29.9202 4.48046 29.8272 4.34091 29.7097 4.22346C29.5923 4.10601 29.4527 4.01298 29.2991 3.94975C29.1456 3.88652 28.981 3.85434 28.8149 3.85506ZM17.5 1.38866C17.7267 1.38974 17.948 1.45788 18.136 1.58448C18.324 1.71109 18.4704 1.8905 18.5566 2.10013C18.6428 2.30975 18.6651 2.54021 18.6206 2.76248C18.5761 2.98474 18.4669 3.18887 18.3066 3.34915C18.1463 3.50943 17.9422 3.6187 17.7199 3.66318C17.4977 3.70767 17.2672 3.68539 17.0576 3.59915C16.8479 3.5129 16.6685 3.36655 16.5419 3.17853C16.4153 2.99051 16.3472 2.76923 16.3461 2.54256C16.3461 2.23653 16.4677 1.94303 16.6841 1.72663C16.9005 1.51023 17.194 1.38866 17.5 1.38866ZM27.8524 32.4512C27.8568 32.6142 27.7966 32.7723 27.685 32.8911C27.5733 33.0099 27.4192 33.0798 27.2563 33.0855H7.73829C7.65713 33.0835 7.57721 33.0651 7.50325 33.0316C7.4293 32.9981 7.36282 32.9501 7.30775 32.8904C7.25268 32.8308 7.21014 32.7607 7.18264 32.6843C7.15515 32.6079 7.14325 32.5268 7.14767 32.4457V6.40897C7.14174 6.24596 7.2005 6.08721 7.31114 5.96735C7.42178 5.84749 7.57533 5.77624 7.73829 5.76913H10.5492V6.491C10.5492 6.70566 10.6345 6.91153 10.7863 7.06332C10.9381 7.2151 11.1439 7.30038 11.3586 7.30038H23.7727C23.881 7.30329 23.9889 7.28455 24.09 7.24524C24.191 7.20594 24.2832 7.14687 24.3611 7.0715C24.439 6.99612 24.5011 6.90595 24.5437 6.80628C24.5864 6.7066 24.6087 6.59941 24.6094 6.491V5.7746H27.2781C27.3591 5.77671 27.4388 5.79484 27.5126 5.82795C27.5865 5.86105 27.6531 5.90847 27.7085 5.96746C27.7639 6.02645 27.8071 6.09584 27.8356 6.17162C27.864 6.24741 27.8771 6.32808 27.8742 6.40897L27.8524 32.4512Z"
					fill="black"
				/>
				<path
					d="M26.5834 10.1934H16.0615C15.989 10.1934 15.9195 10.2222 15.8682 10.2734C15.8169 10.3247 15.7881 10.3943 15.7881 10.4668C15.7881 10.5393 15.8169 10.6089 15.8682 10.6601C15.9195 10.7114 15.989 10.7402 16.0615 10.7402H26.5834C26.6559 10.7402 26.7255 10.7114 26.7767 10.6601C26.828 10.6089 26.8568 10.5393 26.8568 10.4668C26.8568 10.3943 26.828 10.3247 26.7767 10.2734C26.7255 10.2222 26.6559 10.1934 26.5834 10.1934Z"
					fill="black"
				/>
				<path
					d="M16.0615 13.2402H22.0771C22.1497 13.2402 22.2192 13.2114 22.2705 13.1601C22.3218 13.1089 22.3506 13.0393 22.3506 12.9668C22.3506 12.8943 22.3218 12.8247 22.2705 12.7734C22.2192 12.7222 22.1497 12.6934 22.0771 12.6934H16.0615C15.989 12.6934 15.9195 12.7222 15.8682 12.7734C15.8169 12.8247 15.7881 12.8943 15.7881 12.9668C15.7881 13.0393 15.8169 13.1089 15.8682 13.1601C15.9195 13.2114 15.989 13.2402 16.0615 13.2402Z"
					fill="black"
				/>
				<path
					d="M16.0615 16.625H21.1967C21.2692 16.625 21.3387 16.5962 21.39 16.5449C21.4413 16.4936 21.4701 16.4241 21.4701 16.3516C21.4701 16.279 21.4413 16.2095 21.39 16.1582C21.3387 16.1069 21.2692 16.0781 21.1967 16.0781H16.0615C15.989 16.0781 15.9195 16.1069 15.8682 16.1582C15.8169 16.2095 15.7881 16.279 15.7881 16.3516C15.7881 16.4241 15.8169 16.4936 15.8682 16.5449C15.9195 16.5962 15.989 16.625 16.0615 16.625Z"
					fill="black"
				/>
				<path
					d="M16.0615 19.1406H24.4779C24.5504 19.1406 24.62 19.1118 24.6713 19.0605C24.7226 19.0093 24.7514 18.9397 24.7514 18.8672C24.7514 18.7947 24.7226 18.7251 24.6713 18.6738C24.62 18.6226 24.5504 18.5938 24.4779 18.5938H16.0615C15.989 18.5938 15.9195 18.6226 15.8682 18.6738C15.8169 18.7251 15.7881 18.7947 15.7881 18.8672C15.7881 18.9397 15.8169 19.0093 15.8682 19.0605C15.9195 19.1118 15.989 19.1406 16.0615 19.1406Z"
					fill="black"
				/>
				<path
					d="M26.5837 16.0889H22.6079C22.5354 16.0889 22.4658 16.1177 22.4146 16.169C22.3633 16.2202 22.3345 16.2898 22.3345 16.3623C22.3345 16.4348 22.3633 16.5044 22.4146 16.5557C22.4658 16.6069 22.5354 16.6357 22.6079 16.6357H26.5837C26.6562 16.6357 26.7258 16.6069 26.777 16.5557C26.8283 16.5044 26.8571 16.4348 26.8571 16.3623C26.8571 16.2898 26.8283 16.2202 26.777 16.169C26.7258 16.1177 26.6562 16.0889 26.5837 16.0889Z"
					fill="black"
				/>
				<path
					d="M16.0615 22.2793H21.1967C21.2692 22.2793 21.3387 22.2505 21.39 22.1992C21.4413 22.1479 21.4701 22.0784 21.4701 22.0059C21.4701 21.9333 21.4413 21.8638 21.39 21.8125C21.3387 21.7612 21.2692 21.7324 21.1967 21.7324H16.0615C15.989 21.7324 15.9195 21.7612 15.8682 21.8125C15.8169 21.8638 15.7881 21.9333 15.7881 22.0059C15.7881 22.0784 15.8169 22.1479 15.8682 22.1992C15.9195 22.2505 15.989 22.2793 16.0615 22.2793Z"
					fill="black"
				/>
				<path
					d="M16.0615 24.7842H24.4779C24.5504 24.7842 24.62 24.7554 24.6713 24.7041C24.7226 24.6528 24.7514 24.5833 24.7514 24.5107C24.7514 24.4382 24.7226 24.3687 24.6713 24.3174C24.62 24.2661 24.5504 24.2373 24.4779 24.2373H16.0615C15.989 24.2373 15.9195 24.2661 15.8682 24.3174C15.8169 24.3687 15.7881 24.4382 15.7881 24.5107C15.7881 24.5833 15.8169 24.6528 15.8682 24.7041C15.9195 24.7554 15.989 24.7842 16.0615 24.7842Z"
					fill="black"
				/>
				<path
					d="M26.5837 21.7441H22.6079C22.5354 21.7441 22.4658 21.773 22.4146 21.8242C22.3633 21.8755 22.3345 21.9451 22.3345 22.0176C22.3345 22.0901 22.3633 22.1596 22.4146 22.2109C22.4658 22.2622 22.5354 22.291 22.6079 22.291H26.5837C26.6562 22.291 26.7258 22.2622 26.777 22.2109C26.8283 22.1596 26.8571 22.0901 26.8571 22.0176C26.8571 21.9451 26.8283 21.8755 26.777 21.8242C26.7258 21.773 26.6562 21.7441 26.5837 21.7441Z"
					fill="black"
				/>
				<path
					d="M16.0615 27.9346H21.1967C21.2692 27.9346 21.3387 27.9058 21.39 27.8545C21.4413 27.8032 21.4701 27.7337 21.4701 27.6611C21.4701 27.5886 21.4413 27.5191 21.39 27.4678C21.3387 27.4165 21.2692 27.3877 21.1967 27.3877H16.0615C15.989 27.3877 15.9195 27.4165 15.8682 27.4678C15.8169 27.5191 15.7881 27.5886 15.7881 27.6611C15.7881 27.7337 15.8169 27.8032 15.8682 27.8545C15.9195 27.9058 15.989 27.9346 16.0615 27.9346Z"
					fill="black"
				/>
				<path
					d="M24.4779 29.9033H16.0615C15.989 29.9033 15.9195 29.9321 15.8682 29.9834C15.8169 30.0347 15.7881 30.1042 15.7881 30.1768C15.7881 30.2493 15.8169 30.3188 15.8682 30.3701C15.9195 30.4214 15.989 30.4502 16.0615 30.4502H24.4779C24.5504 30.4502 24.62 30.4214 24.6713 30.3701C24.7226 30.3188 24.7514 30.2493 24.7514 30.1768C24.7514 30.1042 24.7226 30.0347 24.6713 29.9834C24.62 29.9321 24.5504 29.9033 24.4779 29.9033Z"
					fill="black"
				/>
				<path
					d="M26.5837 27.3984H22.6079C22.5354 27.3984 22.4658 27.4272 22.4146 27.4785C22.3633 27.5298 22.3345 27.5994 22.3345 27.6719C22.3345 27.7444 22.3633 27.8139 22.4146 27.8652C22.4658 27.9165 22.5354 27.9453 22.6079 27.9453H26.5837C26.6562 27.9453 26.7258 27.9165 26.777 27.8652C26.8283 27.8139 26.8571 27.7444 26.8571 27.6719C26.8571 27.5994 26.8283 27.5298 26.777 27.4785C26.7258 27.4272 26.6562 27.3984 26.5837 27.3984Z"
					fill="black"
				/>
				<path
					d="M11.375 12.2715C10.6828 12.2715 10.0061 12.4768 9.43051 12.8613C8.85493 13.2459 8.40633 13.7926 8.14142 14.4321C7.87652 15.0716 7.8072 15.7754 7.94225 16.4543C8.0773 17.1332 8.41064 17.7569 8.90013 18.2464C9.38961 18.7358 10.0133 19.0692 10.6922 19.2042C11.3711 19.3393 12.0749 19.27 12.7144 19.0051C13.3539 18.7402 13.9006 18.2916 14.2851 17.716C14.6697 17.1404 14.875 16.4637 14.875 15.7715C14.875 14.8432 14.5063 13.953 13.8499 13.2966C13.1935 12.6402 12.3033 12.2715 11.375 12.2715ZM9.14375 15.4051C9.14382 15.2719 9.1831 15.1417 9.25669 15.0307C9.33028 14.9197 9.43493 14.8328 9.55757 14.7809C9.68021 14.729 9.81542 14.7144 9.94633 14.7388C10.0772 14.7633 10.1981 14.8257 10.2937 14.9184C10.3894 15.011 10.4556 15.1298 10.4842 15.2599C10.5128 15.39 10.5024 15.5256 10.4544 15.6498C10.4065 15.774 10.323 15.8814 10.2144 15.9584C10.1057 16.0355 9.97686 16.0789 9.84375 16.0832C9.75268 16.0869 9.66181 16.0721 9.57665 16.0396C9.49148 16.0071 9.41381 15.9577 9.34835 15.8942C9.28288 15.8308 9.23099 15.7548 9.19582 15.6707C9.16065 15.5866 9.14293 15.4962 9.14375 15.4051ZM12.425 16.7504C12.3752 16.9892 12.2469 17.2046 12.0606 17.3621C11.8743 17.5197 11.6407 17.6104 11.3969 17.6199H11.3586C11.1045 17.6141 10.8585 17.5294 10.6547 17.3775C10.4508 17.2256 10.2993 17.0141 10.2211 16.7723C10.2055 16.7373 10.1976 16.6995 10.1978 16.6612C10.1981 16.623 10.2065 16.5853 10.2226 16.5505C10.2387 16.5158 10.262 16.485 10.2909 16.46C10.3199 16.4351 10.3539 16.4166 10.3906 16.4059C10.4239 16.393 10.4595 16.387 10.4952 16.3883C10.5309 16.3897 10.566 16.3983 10.5982 16.4137C10.6305 16.429 10.6593 16.4508 10.6828 16.4777C10.7064 16.5045 10.7242 16.5359 10.7352 16.5699C10.7819 16.7083 10.8698 16.829 10.9871 16.916C11.1044 17.003 11.2455 17.0521 11.3914 17.0566C11.5226 17.0525 11.6484 17.0036 11.7479 16.9181C11.8474 16.8325 11.9146 16.7154 11.9383 16.5863C11.9471 16.5523 11.9627 16.5203 11.9841 16.4924C12.0055 16.4645 12.0324 16.4412 12.063 16.4239C12.0936 16.4065 12.1274 16.3955 12.1623 16.3915C12.1973 16.3874 12.2327 16.3905 12.2664 16.4004C12.3336 16.4261 12.3879 16.4773 12.4175 16.5428C12.4472 16.6083 12.4499 16.6829 12.425 16.7504ZM12.9336 16.0832C12.7995 16.0832 12.6684 16.0434 12.5568 15.9689C12.4453 15.8944 12.3584 15.7885 12.3071 15.6646C12.2558 15.5407 12.2423 15.4043 12.2685 15.2728C12.2947 15.1412 12.3593 15.0204 12.4541 14.9256C12.5489 14.8307 12.6698 14.7661 12.8013 14.74C12.9328 14.7138 13.0692 14.7272 13.1931 14.7786C13.317 14.8299 13.4229 14.9168 13.4974 15.0283C13.5719 15.1398 13.6117 15.271 13.6117 15.4051C13.6124 15.4943 13.5954 15.5828 13.5616 15.6654C13.5278 15.748 13.4778 15.8231 13.4147 15.8862C13.3516 15.9493 13.2766 15.9992 13.194 16.0331C13.1114 16.0669 13.0229 16.0839 12.9336 16.0832Z"
					fill="black"
				/>
				<path
					d="M11.375 23.1934C10.6828 23.1934 10.0061 23.3986 9.43051 23.7832C8.85493 24.1678 8.40633 24.7144 8.14142 25.354C7.87652 25.9935 7.8072 26.6972 7.94225 27.3762C8.0773 28.0551 8.41064 28.6787 8.90013 29.1682C9.38961 29.6577 10.0133 29.9911 10.6922 30.1261C11.3711 30.2612 12.0749 30.1918 12.7144 29.9269C13.3539 29.662 13.9006 29.2134 14.2851 28.6379C14.6697 28.0623 14.875 27.3856 14.875 26.6934C14.8736 25.7655 14.5043 24.8761 13.8483 24.2201C13.1922 23.564 12.3028 23.1948 11.375 23.1934ZM9.14375 26.3324C9.14382 26.1992 9.1831 26.069 9.25669 25.958C9.33028 25.8471 9.43493 25.7602 9.55757 25.7083C9.68021 25.6564 9.81542 25.6417 9.94633 25.6662C10.0772 25.6906 10.1981 25.7531 10.2937 25.8457C10.3894 25.9384 10.4556 26.0572 10.4842 26.1872C10.5128 26.3173 10.5024 26.4529 10.4544 26.5771C10.4065 26.7014 10.323 26.8087 10.2144 26.8858C10.1057 26.9629 9.97686 27.0063 9.84375 27.0105C9.75288 27.0135 9.66234 26.9981 9.57752 26.9653C9.49271 26.9326 9.41535 26.8831 9.35004 26.8198C9.28474 26.7566 9.23282 26.6808 9.19738 26.5971C9.16194 26.5134 9.1437 26.4233 9.14375 26.3324ZM12.2336 28.3996C12.1995 28.4087 12.1639 28.4109 12.1289 28.4062C12.094 28.4015 12.0602 28.3899 12.0298 28.3721C11.9993 28.3543 11.9726 28.3307 11.9513 28.3025C11.9299 28.2744 11.9144 28.2424 11.9055 28.2082C11.8857 28.0778 11.8195 27.9589 11.719 27.8735C11.6185 27.7881 11.4905 27.7419 11.3586 27.7434C11.2118 27.7447 11.0692 27.7926 10.9513 27.88C10.8334 27.9675 10.7463 28.09 10.7023 28.2301C10.684 28.2819 10.6499 28.3267 10.6048 28.3581C10.5596 28.3895 10.5058 28.4059 10.4508 28.4051C10.42 28.4103 10.3886 28.4103 10.3578 28.4051C10.292 28.3793 10.2386 28.329 10.2091 28.2648C10.1795 28.2005 10.176 28.1273 10.1992 28.0605C10.2826 27.8149 10.4409 27.6016 10.6518 27.4505C10.8627 27.2995 11.1156 27.2183 11.375 27.2184C11.6181 27.2276 11.8511 27.3175 12.0373 27.474C12.2235 27.6305 12.3522 27.8446 12.4031 28.0824C12.4168 28.1468 12.4073 28.2139 12.3763 28.272C12.3453 28.33 12.2947 28.3752 12.2336 28.3996ZM12.9336 27.0105C12.7995 27.0105 12.6684 26.9708 12.5568 26.8963C12.4453 26.8217 12.3584 26.7158 12.3071 26.5919C12.2558 26.468 12.2423 26.3317 12.2685 26.2001C12.2947 26.0686 12.3593 25.9478 12.4541 25.8529C12.5489 25.7581 12.6698 25.6935 12.8013 25.6673C12.9328 25.6412 13.0692 25.6546 13.1931 25.7059C13.317 25.7572 13.4229 25.8442 13.4974 25.9557C13.5719 26.0672 13.6117 26.1983 13.6117 26.3324C13.6117 26.5123 13.5403 26.6848 13.4131 26.8119C13.2859 26.9391 13.1134 27.0105 12.9336 27.0105Z"
					fill="black"
				/>
			</g>
			<defs>
				<clipPath id="clip0_27_7708">
					<rect width="35" height="35" fill="white" />
				</clipPath>
			</defs>
		</svg>
	),
};

const data = [
	{
		count: "545k",
		icon: icons.passenger,
		text: `Passenger <span class="block text-[#737171] font-normal">arrivals</span>`,
	},
	{
		count: "350k",
		icon: icons.trip,
		text: `Passenger <span class="block text-[#737171] font-normal">trips</span>`,
	},
	{
		count: "210",
		icon: icons.days,
		text: `Operational <span class="block text-[#737171] font-normal">days</span>`,
	},
	{
		count: "2.5M km",
		icon: icons.clients,
		text: `Distance  <span class="block text-[#737171] font-normal">covered</span>`,
	},
	{
		count: "215",
		icon: icons.places,
		text: `Places <span class="block text-[#737171] font-normal">visited</span>`,
	},
	{
		count: "220",
		icon: icons.surveys,
		text: `Drivers<span class="block text-[#737171] font-normal">surveyed</span>`,
	},
];
const arrowdown = (
	<svg
		width="12"
		height="16"
		viewBox="0 0 12 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M5.45893 15.5584C5.75182 15.8513 6.22669 15.8513 6.51959 15.5584L11.2926 10.7855C11.5855 10.4926 11.5855 10.0177 11.2926 9.72482C10.9997 9.43193 10.5248 9.43193 10.2319 9.72482L5.98926 13.9675L1.74662 9.72482C1.45372 9.43193 0.97885 9.43192 0.685957 9.72482C0.393063 10.0177 0.393063 10.4926 0.685957 10.7855L5.45893 15.5584ZM5.23926 0.970703L5.23926 15.0281L6.73926 15.0281L6.73926 0.970703L5.23926 0.970703Z"
			fill="white"
		/>
	</svg>
);

export default MykonosStatistics;
