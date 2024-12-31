import Image from "next/image";
import Link from "next/link";
import img from "./img/img.png";
const OurService = () => {
	return (
		<section className="pb-20 pt-[120px] bg-[#E3E3E3]">
			<div className="container">
				<div className="max-w-[294px] mx-auto">
					<div className="flex justify-center mb-6">{icons.service}</div>
					<h5 className="text-[#2B2B6E] text-center text-[32px] font-semibold mb-12">
						Our Services
					</h5>
					<p className="mb-9">
						We offer 4 main services, but we are happy to discuss any
						individual transportations needs you may have
					</p>
				</div>
				<div className="flex flex-col gap-[128px]">
					{data.map((item, i) => (
						<div className="" key={i}>
							<div className="max-w-[294px] mx-auto mb-7">
								<h5 className="text-[#2B2B6E] text-[32px] font-semibold mb-8">
									{item.title}
								</h5>
								<div className="">{item.text}</div>
							</div>
							<Image
								src={item.img}
								width={500}
								height={500}
								className="max-w-full"
								alt=""
							/>
							<Link
								href={item.buttonUrl}
								className="btn flex items-center gap-3 justify-center bg-[#2B2B6E] text-white rounded-full text-sm px-12 font-semibold h-10 relative mt-11"
							>
								<span>{item.buttonText}</span>
								<span className="absolute right-4 top-1/2 -translate-y-1/2">
									{icons.arrow}
								</span>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
const data = [
	{
		img: img,
		title: "Taxi",
		text: "Our most popular service, the “on demand” requests for ride is how Aegean Taxi started and is the core of our service offering. Get a ride wherever you are, using one of our 4 booking methods.",
		buttonText: "Go to Taxi Section",
		buttonUrl: "",
	},
	{
		img: img,
		title: "Airport Transfers",
		text: "For those who don’t like surprises and want to plan ahead, we offer a convenient airport transfer service. Simply book in advance by using one of the available methods and we will take care of the rest. We operate in all main airports",
		buttonText: "Go to Airport Transfers Section",
		buttonUrl: "",
	},
	{
		img: img,
		title: "Port Transfers",
		text: "For tourists with complex logistics who explore Greek islands with ferries, our port transfer service is ideal. Book in advance or last minute by using one of the available methods. We operate in all main ports",
		buttonText: "Go to Port Transfers Section",
		buttonUrl: "",
	},
	{
		img: img,
		title: "Tours",
		text: "For travellers who want to explore what each location has to offer, we have created a tailored selection of tours that last from 4 to 8 hours, to help show you the best of every location. Call us to inquire about our unique packages.",
		buttonText: "Go to Tours Section",
		buttonUrl: "",
	},
];
const icons = {
	service: (
		<svg
			width="121"
			height="121"
			viewBox="0 0 121 121"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="1.03418"
				width="118.932"
				height="121"
				rx="57.5"
				fill="black"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M60.4993 0C93.9117 0 121 27.0817 121 60.4948C121 93.9079 93.9117 121 60.4993 121C27.0869 121 0 93.9081 0 60.4948C0 27.0815 27.0886 0 60.4993 0ZM93.1498 66.6581C93.4166 66.3375 93.6027 65.9576 93.6924 65.5503C93.7821 65.1429 93.7729 64.72 93.6654 64.3169C93.3936 63.2134 92.9408 62.5562 92.2928 62.3123C91.4915 62.0138 89.8611 62.1277 86.6005 64.3831C86.3153 64.576 86.0733 64.8259 85.8898 65.1172L83.277 69.0835C83.1997 69.1924 83.1028 69.2861 82.9913 69.3597L75.8361 73.6997C75.8839 73.9797 75.9071 74.2634 75.9056 74.5474C75.9044 75.9812 75.3344 77.3559 74.3207 78.3697C73.3071 79.3836 71.9325 79.9538 70.4989 79.9552H57.0033C56.8829 79.9571 56.7633 79.9351 56.6515 79.8904C56.5397 79.8456 56.4379 79.7791 56.352 79.6946C56.2662 79.6101 56.198 79.5094 56.1515 79.3983C56.1049 79.2872 56.081 79.168 56.081 79.0475C56.081 78.9271 56.1049 78.8078 56.1515 78.6968C56.198 78.5857 56.2662 78.4849 56.352 78.4005C56.4379 78.316 56.5397 78.2494 56.6515 78.2047C56.7633 78.16 56.8829 78.1379 57.0033 78.1399H70.4989C71.438 78.1197 72.3319 77.7324 72.989 77.0611C73.646 76.3897 74.014 75.4877 74.014 74.5483C74.014 73.6089 73.646 72.7068 72.989 72.0355C72.3319 71.3641 71.438 70.9769 70.4989 70.9567H59.658C59.5358 70.9561 59.415 70.9312 59.3025 70.8835C59.1901 70.8358 59.0882 70.7662 59.0029 70.6788C57.9491 69.5826 56.6848 68.7105 55.2858 68.1147C53.8868 67.519 52.382 67.212 50.8615 67.212C49.341 67.212 47.8361 67.519 46.4371 68.1147C45.0381 68.7105 43.7738 69.5826 42.7201 70.6788C42.7203 70.6819 42.7198 70.685 42.7186 70.6878C42.7173 70.6907 42.7154 70.6932 42.713 70.6951L35.9756 77.3304L49.0602 89.1813L50.3633 87.8077C50.6152 87.5397 50.9197 87.3267 51.2578 87.182C51.596 87.0374 51.9604 86.9643 52.3281 86.9672H75.0484C75.5981 86.9788 76.1428 86.8613 76.6389 86.6243C77.135 86.3873 77.5687 86.0373 77.9051 85.6024L93.1498 66.6581ZM64.8132 40.907V33.9822C64.8108 33.8555 64.7831 33.7307 64.7316 33.6149C64.6802 33.4992 64.606 33.3949 64.5135 33.3084L60.3962 29.582C60.5855 28.9643 60.5504 28.2995 60.297 27.7052C60.0437 27.1109 59.5884 26.6253 59.0117 26.3342C58.4349 26.0431 57.7739 25.9653 57.1453 26.1144C56.5167 26.2636 55.9611 26.6302 55.5767 27.1494C55.1922 27.6686 55.0037 28.3071 55.0443 28.9518C55.085 29.5966 55.3523 30.2063 55.799 30.6731C56.2456 31.1398 56.8429 31.4337 57.4852 31.5027C58.1275 31.5717 58.7736 31.4114 59.3092 31.0501L62.9958 34.384V40.907H64.8132ZM67.4468 40.907V33.9822C67.4468 33.7411 67.351 33.5098 67.1805 33.3393C67.01 33.1688 66.7788 33.073 66.5376 33.073C66.2965 33.073 66.0653 33.1688 65.8948 33.3393C65.7243 33.5098 65.6285 33.7411 65.6285 33.9822V40.907H67.4468ZM70.0806 40.907V27.985C70.6869 27.7713 71.198 27.35 71.5236 26.7957C71.8492 26.2414 71.9683 25.5898 71.8599 24.9562C71.7514 24.3225 71.4225 23.7477 70.9311 23.3332C70.4397 22.9187 69.8176 22.6914 69.1748 22.6914C68.532 22.6914 67.9099 22.9187 67.4185 23.3332C66.9271 23.7477 66.5981 24.3225 66.4897 24.9562C66.3813 25.5898 66.5004 26.2414 66.826 26.7957C67.1516 27.35 67.6627 27.7713 68.269 27.985V40.907H70.0806ZM72.7211 40.907V33.9822C72.723 33.862 72.701 33.7426 72.6564 33.6311C72.6117 33.5195 72.5453 33.4179 72.461 33.3322C72.3767 33.2465 72.2762 33.1785 72.1654 33.132C72.0545 33.0856 71.9356 33.0617 71.8154 33.0617C71.6952 33.0617 71.5762 33.0856 71.4653 33.132C71.3545 33.1785 71.254 33.2465 71.1697 33.3322C71.0854 33.4179 71.019 33.5195 70.9744 33.6311C70.9297 33.7426 70.9077 33.862 70.9097 33.9822V40.907H72.7211ZM75.3618 40.907V34.384L79.0485 31.0501C79.4983 31.3564 80.0302 31.5197 80.5744 31.5186C81.1139 31.518 81.641 31.3574 82.0892 31.0573C82.5375 30.7571 82.8867 30.3308 83.0927 29.8322C83.2987 29.3336 83.3523 28.7851 83.2467 28.2561C83.1411 27.727 82.881 27.2412 82.4993 26.8599C82.1177 26.4787 81.6316 26.2191 81.1024 26.1141C80.5733 26.0091 80.0249 26.0633 79.5266 26.2699C79.0283 26.4765 78.6024 26.8262 78.3028 27.2748C78.0031 27.7234 77.8432 28.2508 77.8432 28.7902C77.8431 29.0585 77.8829 29.3254 77.9614 29.582L73.8436 33.3086C73.7499 33.3942 73.6749 33.4982 73.6234 33.6142C73.5718 33.7301 73.5448 33.8555 73.544 33.9824V40.9072L75.3618 40.907ZM78.4413 40.907V39.2881L84.9975 35.5052C85.2497 35.7635 85.5511 35.9687 85.884 36.1085C86.2168 36.2484 86.5743 36.3201 86.9353 36.3194C87.4749 36.3189 88.0022 36.1585 88.4507 35.8584C88.8991 35.5583 89.2485 35.132 89.4547 34.6333C89.6609 34.1347 89.7147 33.5861 89.6092 33.0569C89.5037 32.5277 89.2438 32.0417 88.8622 31.6602C88.4805 31.2787 87.9944 31.0189 87.4652 30.9137C86.936 30.8085 86.3875 30.8625 85.889 31.0689C85.3905 31.2754 84.9643 31.625 84.6644 32.0735C84.3646 32.5221 84.2044 33.0495 84.2041 33.5892C84.2041 33.6794 84.2112 33.7695 84.2181 33.8553L77.0766 37.9794C76.9397 38.0593 76.8263 38.1739 76.7478 38.3115C76.6693 38.4492 76.6285 38.6051 76.6294 38.7636V40.907H78.4413ZM59.9156 42.7195H59.3304C59.0903 42.7206 58.8604 42.8165 58.6907 42.9864C58.5211 43.1562 58.4254 43.3863 58.4246 43.6264C58.4379 46.47 59.5768 49.1926 61.5922 51.1987C63.6075 53.2047 66.3352 54.3309 69.1787 54.3309C72.0222 54.3309 74.7499 53.2047 76.7652 51.1987C78.7806 49.1926 79.9195 46.47 79.9328 43.6264C79.932 43.3863 79.8363 43.1562 79.6666 42.9864C79.497 42.8165 79.267 42.7206 79.027 42.7195H59.9156ZM51.4225 30.8613C50.9728 30.8612 50.5301 30.9722 50.1337 31.1845C49.7373 31.3968 49.3995 31.7038 49.1503 32.0782C48.9011 32.4525 48.7483 32.8826 48.7055 33.3303C48.6626 33.778 48.7311 34.2293 48.9047 34.6441C49.0784 35.0589 49.3518 35.4244 49.7007 35.7081C50.0497 35.9917 50.4633 36.1847 50.9048 36.2699C51.3464 36.3551 51.8021 36.3299 52.2315 36.1965C52.661 36.0631 53.0508 35.8256 53.3663 35.5052L59.9156 39.2881V40.907H61.727V38.7636C61.7281 38.6053 61.6875 38.4494 61.6093 38.3118C61.531 38.1741 61.4179 38.0595 61.2813 37.9794L54.1398 33.8553C54.1466 33.7695 54.1537 33.6794 54.1537 33.5892C54.1521 32.8656 53.8637 32.1721 53.3517 31.6608C52.8398 31.1495 52.146 30.862 51.4225 30.8613ZM45.5073 43.6264V47.3341C45.5062 47.547 45.5805 47.7535 45.7169 47.917C45.8532 48.0805 46.043 48.1905 46.2527 48.2277L50.886 49.0372C51.264 50.3212 51.7778 51.5612 52.4188 52.7362L49.7155 56.5838C49.5925 56.7581 49.5348 56.9702 49.5526 57.1829C49.5705 57.3955 49.6627 57.595 49.8131 57.7464L55.0595 62.9901C55.2107 63.1411 55.4102 63.234 55.623 63.2524C55.8359 63.2708 56.0484 63.2136 56.2232 63.0908L60.0692 60.3889C61.2447 61.0294 62.4849 61.5435 63.7688 61.9225L64.5768 66.5518C64.6138 66.7616 64.7234 66.9518 64.8865 67.089C65.0496 67.2262 65.2557 67.3016 65.4687 67.3022H72.8894C73.1021 67.3005 73.3076 67.2246 73.4704 67.0876C73.6332 66.9506 73.743 66.7611 73.781 66.5518L74.5892 61.9225C75.8727 61.5422 77.1127 61.0282 78.2889 60.3889L82.1349 63.0908C82.3097 63.2136 82.5222 63.2708 82.735 63.2524C82.9479 63.234 83.1474 63.1411 83.2985 62.9901L88.5379 57.7464C88.6921 57.5975 88.7876 57.3981 88.8068 57.1846C88.826 56.9711 88.7676 56.7578 88.6423 56.5838L85.939 52.7362C86.58 51.5612 87.0939 50.3212 87.4718 49.0372L92.1052 48.2294C92.3149 48.1916 92.5045 48.0812 92.6409 47.9174C92.7772 47.7537 92.8514 47.5471 92.8506 47.3341V43.6264C92.8508 43.5073 92.8275 43.3894 92.7821 43.2793C92.7367 43.1693 92.67 43.0693 92.5859 42.9851C92.5018 42.9008 92.4018 42.834 92.2919 42.7884C92.1819 42.7429 92.064 42.7195 91.945 42.7195H82.0926C81.9735 42.7195 81.8557 42.7429 81.7457 42.7885C81.6357 42.8341 81.5358 42.9009 81.4517 42.9851C81.3676 43.0694 81.3009 43.1693 81.2555 43.2794C81.2101 43.3894 81.1868 43.5073 81.187 43.6264C81.1729 46.8022 79.9015 49.8431 77.6511 52.0837C75.4006 54.3244 72.3543 55.5823 69.1787 55.5823C66.0031 55.5823 62.9568 54.3244 60.7063 52.0837C58.4559 49.8431 57.1845 46.8022 57.1704 43.6264C57.1706 43.5073 57.1474 43.3894 57.1019 43.2793C57.0565 43.1693 56.9898 43.0693 56.9057 42.9851C56.8216 42.9008 56.7217 42.834 56.6117 42.7884C56.5017 42.7429 56.3839 42.7195 56.2648 42.7195H46.4129C46.2938 42.7195 46.176 42.7429 46.066 42.7884C45.956 42.834 45.8561 42.9008 45.772 42.9851C45.6878 43.0693 45.6212 43.1693 45.5757 43.2793C45.5303 43.3894 45.5071 43.5073 45.5073 43.6264ZM48.7194 92.5286C48.7989 92.442 48.8604 92.3405 48.9003 92.23C48.9402 92.1194 48.9578 92.0021 48.952 91.8847C48.9461 91.7673 48.917 91.6523 48.8664 91.5462C48.8157 91.4402 48.7445 91.3453 48.6568 91.267L33.7187 77.7319C33.5547 77.5831 33.341 77.501 33.1196 77.5017C33.1056 77.5017 33.0917 77.5032 33.0777 77.5032C32.9602 77.508 32.8449 77.5362 32.7384 77.5862C32.6319 77.6362 32.5365 77.7068 32.4576 77.7941L27.483 83.289C27.4035 83.3754 27.342 83.4768 27.3021 83.5872C27.2622 83.6976 27.2446 83.8149 27.2505 83.9321C27.2563 84.0494 27.2854 84.1643 27.3361 84.2702C27.3867 84.3761 27.458 84.4709 27.5456 84.549L42.4837 98.084C42.6595 98.2425 42.8907 98.3249 43.127 98.3133C43.3633 98.3017 43.5854 98.197 43.7448 98.0221L48.7194 92.5286Z"
				fill="#E3E3E3"
			/>
		</svg>
	),
	arrow: (
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
	),
};

export default OurService;
