const Team = () => {
	return (
		<section className="pt-[70px] pb-10 font-inter bg-black">
			<div className="container px-12">
				<div className="mb-12 text-white">
					<h2 className="text-[30px] leading-[38px] font-semibold mb-5 ">
						The team
					</h2>
					<div className="font-light mb-[30px]">
						Aegean Taxi is structured in 4 main operating divisions:
					</div>
				</div>
				<div className="flex flex-col gap-[45px] text-white">
					{data.map((item, index) => (
						<div className="bg-[#007EFF] rounded-xl p-3" key={index}>
							<div className="flex items-center mb-2">
								<span className="font-extrabold">{item.title}</span>
								<div className="mx-auto">{item.icon}</div>
							</div>
							<div className="text-sm leading-[17px] max-sm:max-w-[255px]">
								{item.text}
							</div>
						</div>
					))}
					<button
						type="button"
						className="bg-white font-medium h-12 rounded-lg flex items-center justify-center gap-2 text-black"
					>
						{icons.envelop}
						<span>Contact Us</span>
					</button>
				</div>
			</div>
		</section>
	);
};

const icons = {
	operations: (
		<svg
			width="141"
			height="49"
			viewBox="0 0 141 49"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M31.5879 12.8454H81.2729L88.8408 19.9198M118.783 26.9941H96.4087L92.6248 23.4569M31.5879 18.11H69.7565L81.2729 7.02019M116.48 12.8454H95.4216L87.5247 0.999979L81.2729 7.02019M81.2729 7.02019H101.015V16.1358M88.8408 19.9198H105.293M88.8408 19.9198L92.6248 23.4569M92.6248 23.4569H102.331M120.758 35.5492H140.5M120.758 35.5492L114.506 29.6264H31.5879M120.758 35.5492L131.287 47.7236H137.539M125.035 40.8138H140.5M76.8309 32.5878H84.7278M31.5879 25.3489H69.7565L83.9052 39.8267H99.6991V34.233H109.57V46.0784"
				stroke="white"
			/>
			<rect
				x="1"
				y="-1"
				width="29.5878"
				height="29.5878"
				rx="9"
				transform="matrix(1 0 0 -1 0 34.8652)"
				stroke="white"
				strokeWidth="2"
			/>
		</svg>
	),
	development: (
		<svg
			width="74"
			height="31"
			viewBox="0 0 74 31"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M13.0607 16.6622C13.6464 16.0764 13.6464 15.1267 13.0607 14.5409L3.51472 4.99496C2.92893 4.40917 1.97918 4.40917 1.3934 4.99496C0.807612 5.58075 0.807612 6.53049 1.3934 7.11628L9.87868 15.6016L1.3934 24.0868C0.807611 24.6726 0.807611 25.6224 1.3934 26.2082C1.97918 26.794 2.92893 26.794 3.51472 26.2082L13.0607 16.6622ZM9 17.1016L12 17.1016L12 14.1016L9 14.1016L9 17.1016Z"
				fill="white"
			/>
			<path
				d="M21.9262 14.7401C21.3404 15.3259 21.3404 16.2757 21.9262 16.8614L31.4721 26.4074C32.0579 26.9932 33.0076 26.9932 33.5934 26.4074C34.1792 25.8216 34.1792 24.8718 33.5934 24.2861L25.1081 15.8008L33.5934 7.3155C34.1792 6.72971 34.1792 5.77997 33.5934 5.19418C33.0076 4.60839 32.0579 4.60839 31.4721 5.19418L21.9262 14.7401ZM22.9868 17.3008H26.0132V14.3008H22.9868V17.3008Z"
				fill="white"
			/>
			<rect
				x="21.4189"
				width="3.97964"
				height="31.1347"
				rx="1"
				transform="rotate(21.1068 21.4189 0)"
				fill="white"
			/>
			<rect
				x="21.4189"
				width="3.97964"
				height="31.1347"
				rx="1"
				transform="rotate(21.1068 21.4189 0)"
				fill="white"
			/>
			<rect
				x="21.4189"
				width="3.97964"
				height="31.1347"
				rx="1"
				transform="rotate(21.1068 21.4189 0)"
				fill="white"
			/>
			<path
				d="M43.94 23V8.72H45.46L54.56 18.52V8.72H55.62V23H54.08L45 13.18V23H43.94ZM54.56 21.94V19.98L45 9.78V11.76L54.56 21.94Z"
				fill="white"
			/>
			<path
				d="M70.3892 11.0398H67.7756V17.6023H66.9233C65.8485 17.6023 64.9394 17.4058 64.196 17.0128C63.4574 16.6151 62.8963 16.0729 62.5128 15.3864C62.134 14.6951 61.9446 13.9091 61.9446 13.0284C61.9446 12.1572 62.134 11.3783 62.5128 10.6918C62.8963 10.0005 63.4574 9.45597 64.196 9.05824C64.9394 8.65578 65.8485 8.45455 66.9233 8.45455H70.3892V11.0398ZM69.5369 23V8.45455H72.1577V23H69.5369Z"
				fill="white"
			/>
		</svg>
	),
	marketing: (
		<svg
			width="158"
			height="45"
			viewBox="0 0 158 45"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M148.069 4.30769H124.143L101.12 23.3269H46.0457L19.8629 41.5192M0 27.875H158M9.48 44L49.2057 1L74.9371 39.0385L148.069 17.9519"
				stroke="white"
			/>
			<ellipse
				cx="23.9256"
				cy="27.8749"
				rx="2.25714"
				ry="2.06731"
				fill="black"
			/>
			<ellipse
				cx="113.308"
				cy="27.8749"
				rx="2.25714"
				ry="2.06731"
				fill="black"
			/>
			<ellipse
				cx="64.5545"
				cy="22.9135"
				rx="2.25714"
				ry="2.06731"
				fill="black"
			/>
			<ellipse
				cx="39.2742"
				cy="27.8749"
				rx="2.25714"
				ry="2.06731"
				fill="black"
			/>
		</svg>
	),
	finance: (
		<svg
			width="116"
			height="41"
			viewBox="0 0 116 41"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="53.5" cy="24.5" r="3.5" fill="white" />
			<rect
				x="1"
				y="-1"
				width="29.5878"
				height="29.5878"
				rx="9"
				transform="matrix(1 0 0 -1 38 38.5879)"
				stroke="white"
				strokeWidth="2"
			/>
			<path
				d="M38.7071 25.7071C39.0976 25.3166 39.0976 24.6834 38.7071 24.2929L32.3431 17.9289C31.9526 17.5384 31.3195 17.5384 30.9289 17.9289C30.5384 18.3195 30.5384 18.9526 30.9289 19.3431L36.5858 25L30.9289 30.6569C30.5384 31.0474 30.5384 31.6805 30.9289 32.0711C31.3195 32.4616 31.9526 32.4616 32.3431 32.0711L38.7071 25.7071ZM0 26L38 26V24L0 24L0 26Z"
				fill="white"
			/>
			<path
				d="M104.667 25C104.667 27.9455 107.054 30.3333 110 30.3333C112.946 30.3333 115.333 27.9455 115.333 25C115.333 22.0545 112.946 19.6667 110 19.6667C107.054 19.6667 104.667 22.0545 104.667 25ZM54 26H110V24H54V26Z"
				fill="white"
			/>
			<path
				d="M113 2L101.586 0.252862L105.78 11.0113L113 2ZM54.3632 25.9317L104.978 6.20058L104.251 4.33716L53.6368 24.0683L54.3632 25.9317Z"
				fill="white"
			/>
			<path
				d="M92.5701 35.5191L88.5191 28.4299L81.4299 32.4809L85.4809 39.5701L92.5701 35.5191ZM53.7369 25.9648L86.7369 34.9648L87.2631 33.0352L54.2631 24.0352L53.7369 25.9648Z"
				fill="white"
			/>
		</svg>
	),
	envelop: (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M20 8L12 13L4 8V6L12 11L20 6M20 4H4C2.89 4 2 4.89 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 4.89 21.1 4 20 4Z"
				fill="black"
			/>
		</svg>
	),
};
const data = [
	{
		icon: icons.operations,
		title: "Operations",
		text: "Our operations division encompasses the call centre and customer support divisions, the driver recruitment and training and fleet as well as partners management division.",
	},
	{
		icon: icons.development,
		title: "Development",
		text: "The development division is comprised by a team of front end, back end and applications developers, responsible for building our suite of products and releasing them to the market.",
	},
	{
		icon: icons.marketing,
		title: "Marketing",
		text: "The marketing division is comprised of our digital marketing team which helps promote our products and services across different platforms.",
	},
	{
		icon: icons.finance,
		title: "Admin & Finance",
		text: "Our admin and finance team is responsible for all transactions with partner venues and handling payments for our services.",
	},
];
export default Team;
