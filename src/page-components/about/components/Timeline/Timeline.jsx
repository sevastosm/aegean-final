import Image from "next/image";
import img from "./img/shape.png";

const Timeline = () => {
	return (
		<section className="pt-[31px] font-sfPro relative">
			<div className="container px-5 max-w-[550px]">
				<div className="relative">{shape1}</div>
				<div className="pl-5 border-l border-black border-b pb-[84px] pt-5">
					<div className="">
						<h2 className="text-[32px] mb-[31px] leading-[39px] font-semibold">
							Timeline
						</h2>
					</div>
					<div className="">
						<div className="timeline-wrap">
							<span className="item">
								<span>2015</span>
							</span>
							<span className="item"></span>
							<span className="item">
								<span>2018</span>
							</span>
							<span className="item"></span>
							<span className="item">
								<span>2022</span>
							</span>
							<span className="item"></span>
						</div>
						<Image
							src={img}
							className="w-full mt-[-10px] mb-[-12px] object-contain"
							width={500}
							height={5}
							alt=""
						/>
						<div className="timeline-wrap style-2">
							<span className="item"></span>
							<span className="item">
								<span>2016</span>
							</span>
							<span className="item"></span>
							<span className="item">
								<span>2021</span>
							</span>
							<span className="item"></span>
							<span className="item">
								<span>2024</span>
							</span>
						</div>
					</div>
				</div>
				<div className="pt-12 border-r border-black px-11 relative pb-20">
					{icon1}
					{icon2}
					<p className="">
						Our story started in the island of Mykonos, when in 2015 our
						founder had to pay € 30 to another tourist to ride in the back
						of a scooter in order to get to his destination, due the lack
						of available drivers. After this experience and realising that
						the same situation was prevalent in other islands around
						Greece, we started working towards creating the first taxi
						application that would be dedicated to visiting tourists. By
						the end of 2015 we were the first taxi app in Mykonos island,
						bringing together a fleet of drivers and tourists who were
						looking for quality and affordable rides.
					</p>
				</div>
				<div className="ml-3 border-t border-l border-black pt-[65px] pb-[60px] px-[35px]">
					In 2016 we expanded our service to the island of Santorini, but
					realised the difficulties in finding and training good quality
					drivers, who could offer a premium service to our clients. We
					then decided to invest in our own fleet of cars and opened our
					offices in both Mykonos and Santorini, which we used as a base
					for further expansion. <br /> <br /> In 2018 we expanded our
					services to the islands of Corfu and Rhodes as well as to the
					capital, Athens.
				</div>
			</div>
		</section>
	);
};
const shape1 = (
	<svg
		width="40"
		height="31"
		viewBox="0 0 40 31"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="absolute left-0 bottom-0"
	>
		<line x1="4.37114e-08" y1="30.5" x2="39" y2="30.5" stroke="black" />
		<line x1="39.5" x2="39.5" y2="31" stroke="black" />
	</svg>
);
const icon1 = (
	<svg
		width="66"
		height="66"
		viewBox="0 0 66 66"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="absolute left-1/2 -translate-x-1/2 translate-y-[-60%] top-0 z-10 bg-white"
	>
		<path
			d="M62.6461 30.6827C62.0866 30.4466 61.4411 30.7079 61.2045 31.2672C60.9677 31.8267 61.2295 32.4723 61.789 32.7089C63.0136 33.227 63.8049 34.4207 63.8049 35.75V60.5C63.8049 62.3195 62.3245 63.8 60.5049 63.8C58.6852 63.8 57.2049 62.3195 57.2049 60.5V5.5C57.2049 2.4673 54.7376 0 51.7049 0H14.0299C12.2929 0 10.6943 0.794887 9.64408 2.18075C9.27723 2.66489 9.37224 3.355 9.85638 3.72185C10.3404 4.08897 11.0305 3.99383 11.3975 3.50955C12.0282 2.67726 12.9877 2.2 14.0299 2.2H51.7049C53.5245 2.2 55.0049 3.68046 55.0049 5.5V60.5C55.0049 61.7372 55.4158 62.8801 56.1079 63.8H14.0298C12.2101 63.8 10.7298 62.3195 10.7298 60.5V35.9725C15.55 39.5962 21.5072 41.3465 28.2905 40.7527C29.3262 43.4624 30.1497 46.2615 30.7561 49.1455C30.8807 49.738 31.4618 50.1207 32.0589 49.9957C32.6535 49.8707 33.0341 49.2874 32.9091 48.6927C32.2236 45.4332 31.1902 42.2698 30.0186 39.1596C29.6007 38.0502 28.5483 35.6964 27.4543 33.6339C24.856 28.735 21.5138 24.1504 17.5208 20.0072C17.0993 19.57 16.403 19.557 15.9654 19.9786C15.528 20.4 15.5152 21.0965 15.9368 21.534C20.898 26.6817 24.7373 32.399 27.4199 38.6137C7.58364 39.8888 -2.04755 18.5936 3.95378 5.97988C4.35033 5.14635 5.51399 5.12889 5.91618 5.91938C9.55938 13.0791 22.9403 15.1722 28.8534 21.5988C31.748 24.7449 32.3404 28.4525 30.7179 33.2663C30.5239 33.8422 30.8332 34.4662 31.409 34.6602C31.9848 34.8542 32.6088 34.5448 32.8027 33.9692C39.3087 14.6667 12.5297 14.0649 7.87693 4.9214C6.63984 2.49054 3.14088 2.5674 1.96718 5.03456C-2.18202 13.7556 0.337941 26.3513 8.52978 34.1124V60.5C8.52978 63.5327 10.9971 66 14.0298 66H60.5048C63.5375 66 66.0048 63.5327 66.0048 60.5V35.75C66.0048 33.5349 64.6864 31.5458 62.6461 30.6827Z"
			fill="black"
		/>
		<path
			d="M45.9296 30.1123H39.0546C38.4471 30.1123 37.9546 30.6048 37.9546 31.2123C37.9546 31.8198 38.4471 32.3123 39.0546 32.3123H45.9296C46.5371 32.3123 47.0296 31.8198 47.0296 31.2123C47.0296 30.6048 46.5371 30.1123 45.9296 30.1123Z"
			fill="black"
		/>
		<path
			d="M45.9303 38.3623H36.4428C35.8353 38.3623 35.3428 38.8548 35.3428 39.4623C35.3428 40.0698 35.8353 40.5623 36.4428 40.5623H45.9303C46.5377 40.5623 47.0303 40.0698 47.0303 39.4623C47.0303 38.8548 46.5377 38.3623 45.9303 38.3623Z"
			fill="black"
		/>
		<path
			d="M28.3301 47.7123C28.3301 47.1048 27.8376 46.6123 27.2301 46.6123H19.8051C19.1976 46.6123 18.7051 47.1048 18.7051 47.7123C18.7051 48.3198 19.1976 48.8123 19.8051 48.8123H27.2301C27.8376 48.8123 28.3301 48.3198 28.3301 47.7123Z"
			fill="black"
		/>
		<path
			d="M45.9303 46.6123H36.4428C35.8353 46.6123 35.3428 47.1048 35.3428 47.7123C35.3428 48.3198 35.8353 48.8123 36.4428 48.8123H45.9303C46.5377 48.8123 47.0303 48.3198 47.0303 47.7123C47.0303 47.1048 46.5377 46.6123 45.9303 46.6123Z"
			fill="black"
		/>
		<path
			d="M19.8051 54.8623C19.1976 54.8623 18.7051 55.3548 18.7051 55.9623C18.7051 56.5698 19.1976 57.0623 19.8051 57.0623H21.7922C22.3997 57.0623 22.8922 56.5698 22.8922 55.9623C22.8922 55.3548 22.3997 54.8623 21.7922 54.8623H19.8051Z"
			fill="black"
		/>
		<path
			d="M26.6533 55.9623C26.6533 56.5698 27.1458 57.0623 27.7533 57.0623H41.8049C42.4123 57.0623 42.9049 56.5698 42.9049 55.9623C42.9049 55.3548 42.4123 54.8623 41.8049 54.8623H27.7533C27.1457 54.8623 26.6533 55.3548 26.6533 55.9623Z"
			fill="black"
		/>
		<path
			d="M44.1674 10.14C38.4842 4.60396 29.3028 13.2438 38.9223 22.3471C39.6187 23.0061 40.6064 23.3216 41.5725 23.1703C54.6575 21.1199 51.9796 8.80005 44.1674 10.14ZM41.2318 20.997C40.9447 21.0419 40.646 20.9494 40.4345 20.7492C32.9151 13.6334 39.3228 7.82586 42.9577 12.0631C43.2325 12.3834 43.6667 12.5186 44.0746 12.41C49.4636 10.9811 51.4655 19.3932 41.2318 20.997Z"
			fill="black"
		/>
	</svg>
);
const icon2 = (
	<svg
		width="91"
		height="91"
		viewBox="0 0 91 91"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-full z-10 bg-white"
	>
		<path
			d="M45.4999 60.4021C53.7296 60.4021 60.4011 53.7306 60.4011 45.5009C60.4011 37.2711 53.7296 30.5996 45.4999 30.5996C37.2702 30.5996 30.5986 37.2711 30.5986 45.5009C30.5986 53.7306 37.2702 60.4021 45.4999 60.4021Z"
			fill="black"
		/>
		<path
			d="M46.9217 27.8313V5.80172L55.0169 13.8969L57.0265 11.8873L46.5046 1.36547C45.9548 0.815677 45.0448 0.815677 44.495 1.36547L33.9731 11.8873L35.9827 13.8969L44.0779 5.80172V27.8313C44.5519 27.7934 45.0259 27.7555 45.4998 27.7555C45.9738 27.7555 46.4477 27.7934 46.9217 27.8313Z"
			fill="black"
		/>
		<path
			d="M44.0779 63.1699V85.1995L35.9827 77.1043L33.9731 79.1139L44.495 89.6358C44.7794 89.9201 45.1396 90.0528 45.4998 90.0528C45.86 90.0528 46.2202 89.9201 46.5046 89.6358L57.0265 79.1139L55.0169 77.1043L46.9217 85.1995V63.1699C46.4477 63.2078 45.9738 63.2458 45.4998 63.2458C45.0259 63.2458 44.5519 63.2078 44.0779 63.1699Z"
			fill="black"
		/>
		<path
			d="M89.5239 44.4975L77.3885 34L75.0707 36.0049L84.4074 44.0814H58.9995C59.0432 44.5543 59.087 45.0271 59.087 45.5C59.087 45.9729 59.0432 46.4457 58.9995 46.9186H84.4074L75.0707 54.9951L77.3885 57L89.5239 46.5025C90.158 45.9539 90.158 45.0461 89.5239 44.4975Z"
			fill="black"
		/>
		<path
			d="M30.9995 44.0814H6.41125L15.4467 36.0049L13.2037 34L1.45975 44.4975C0.8461 45.0461 0.8461 45.9539 1.45975 46.5025L13.2037 57L15.4467 54.9951L6.41125 46.9186H30.9995C30.9572 46.4457 30.9149 45.9729 30.9149 45.5C30.9149 45.0271 30.9572 44.5543 30.9995 44.0814Z"
			fill="black"
		/>
		<path
			d="M58.9984 34.0113L74.5631 18.4465V29.8973H77.4069V14.9961C77.4069 14.2188 76.7623 13.5742 75.985 13.5742H61.1027V16.418H72.5536L56.9888 31.9828C57.7092 32.6084 58.3917 33.2909 58.9984 34.0113Z"
			fill="black"
		/>
		<path
			d="M32.0018 56.9893L16.437 72.5541V61.1032H13.5933V75.9855C13.5933 76.7628 14.2378 77.4074 15.0151 77.4074H29.8974V74.5636H18.4276L33.9924 58.9988C33.291 58.3922 32.6085 57.7097 32.0018 56.9893Z"
			fill="black"
		/>
		<path
			d="M56.9888 58.9988L72.5536 74.5636H61.1027V77.4074H75.985C76.7623 77.4074 77.4069 76.7628 77.4069 75.9855V61.1032H74.5631V72.5541L58.9984 56.9893C58.3917 57.7097 57.7092 58.3922 56.9888 58.9988Z"
			fill="black"
		/>
		<path
			d="M34.0113 32.0017L18.4276 16.418H29.8784V13.5742H14.9961C14.2188 13.5742 13.5742 14.2188 13.5742 14.9961V29.8784H16.418V18.4276L31.9828 33.9923C32.6084 33.2909 33.2909 32.6084 34.0113 32.0017Z"
			fill="black"
		/>
	</svg>
);

export default Timeline;
