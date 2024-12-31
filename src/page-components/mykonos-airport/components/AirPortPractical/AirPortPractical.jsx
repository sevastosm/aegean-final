const AirPortPractical = () => {
	return (
		<section className="pt-[58px]">
			<div className="container">
				<h4 className="flex items-center gap-3 text-2xl leading-[28px] font-bold mb-5">
					{icons.title}
					<span className="w-0 flex-grow">
						Mykonos Airport (JMK) practical information
					</span>
				</h4>
				<div className="text-sm mx-auto max-w-[263px]">
					<div>Terminal Operating Hours </div>
					(31/03 until 30/04): 07:00 – 22:30 <br /> Terminal Operating
					Hours <br /> (01/05 until 26/10): 24/7 <br />
					<br /> Exceptions <br />
					Fri 05/04 05:30 – 22:30 <br />
					Fri 12/04 05:30 – 22:30 <br />
					Fri 19/04 05:30 – 22:30 <br />
					Fri 26/04 05:30 – 23:45 <br />
					Sun 28/04 07:00 – 23:30 <br />
					Tue 30/04 07:00 – 23:59 <br /> <br /> When visiting Mykonos, it’s
					helpful to know some practical information to make your trip
					smoother. The local currency is the Euro (€), and ATMs are widely
					available, although it’s a good idea to carry some cash for
					smaller establishments. Greek is the official language, but
					English is commonly spoken in tourist areas. Electrical outlets
					use the European standard (Type C or F), so bring an adapter if
					needed. The island’s tap water is not recommended for drinking,
					so opt for bottled water. Finally, public Wi-Fi is available in
					many areas, but having a local SIM card or roaming plan can be
					useful for staying connected
				</div>
				<div className="mt-14">
					<h4 className="flex items-center gap-3 text-2xl leading-[28px] font-bold mb-4">
						{icons.title2}
						<span className="w-0 flex-grow">
							Mykonos Airport (JMK) parking
						</span>
					</h4>
					<p className="pt-4 text-sm">
						Mykonos Airport offers imited public parking spaces available
						for short stays free of charge. These are opposite the
						terminal at departure’s area.
						<br />
						<br />
						The airport also has paid parking for a fee.
					</p>
				</div>
			</div>
		</section>
	);
};
const icons = {
	title: (
		<svg
			width="45"
			height="45"
			viewBox="0 0 45 45"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M33.0843 1.31114C32.2384 0.468999 31.0927 -0.0026293 29.8991 1.10266e-05L15.0015 0.0329701C13.8079 0.0356104 12.6642 0.512309 11.822 1.35819L1.31114 11.9157C0.468999 12.7616 -0.0026293 13.9073 1.10266e-05 15.101L0.0329701 29.9985C0.0356104 31.1921 0.512309 32.3359 1.35819 33.178L11.9157 43.6889C12.7616 44.531 13.9073 45.0027 15.101 45L29.9985 44.9671C31.1921 44.9644 32.3359 44.4877 33.178 43.6418L43.6889 33.0843C44.531 32.2384 45.0027 31.0927 45 29.8991L44.9671 15.0015C44.9644 13.8079 44.4877 12.6642 43.6418 11.822L33.0843 1.31114ZM22.5 13.4989C21.6715 13.4989 20.9998 12.8273 20.9998 11.9987C20.9998 11.1702 21.6715 10.4985 22.5 10.4985C23.3286 10.4985 24.0002 11.1702 24.0002 11.9987C24.0002 12.8273 23.3286 13.4989 22.5 13.4989ZM24.0002 32.2512C24.0002 32.6655 24.336 33.0013 24.7503 33.0013H25.5004C26.3289 33.0013 27.0006 33.6729 27.0006 34.5015C27.0006 35.33 26.3289 36.0017 25.5004 36.0017H24.7503C22.679 36.0017 20.9998 34.3225 20.9998 32.2512V18.7495C20.9998 18.3353 20.664 17.9995 20.2497 17.9995H19.4996C18.6711 17.9995 17.9995 17.3278 17.9995 16.4993C17.9995 15.6707 18.6711 14.9991 19.4996 14.9991H20.2497C22.321 14.9991 24.0002 16.6782 24.0002 18.7495V32.2512Z"
				fill="black"
			/>
		</svg>
	),
	title2: (
		<svg
			width="44"
			height="50"
			viewBox="0 0 44 50"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M36.6211 0H7.32422C3.28584 0 0 3.28584 0 7.32422V42.6758C0 46.7142 3.28584 50 7.32422 50H36.6211C40.6595 50 43.9453 46.7142 43.9453 42.6758V7.32422C43.9453 3.28584 40.6595 0 36.6211 0ZM31.7974 40.7817L28.8677 43.7114C28.2955 44.2836 27.3685 44.2836 26.7963 43.7114C26.2241 43.1393 26.2241 42.2122 26.7963 41.64L27.2255 41.2108H13.1836C12.3739 41.2108 11.7188 40.5557 11.7188 39.746C11.7188 38.9363 12.3739 38.2812 13.1836 38.2812H27.2255L26.7963 37.852C26.2241 37.2798 26.2241 36.3527 26.7963 35.7806C27.3685 35.2084 28.2955 35.2084 28.8677 35.7806L31.7974 38.7103C32.3066 39.2196 32.3045 40.2747 31.7974 40.7817ZM23.4375 23.4375H17.5781V33.8867C17.5781 34.6957 16.9223 35.3516 16.1133 35.3516H13.1836C12.3746 35.3516 11.7188 34.6957 11.7188 33.8867V23.4375V8.78906V7.32422C11.7188 6.51523 12.3746 5.85938 13.1836 5.85938H23.4375C28.2841 5.85938 32.2266 9.80186 32.2266 14.6484C32.2266 19.495 28.2841 23.4375 23.4375 23.4375Z"
				fill="black"
			/>
			<path
				d="M23.4375 11.7188H17.5781V17.5781H23.4375C25.0525 17.5781 26.3672 16.2635 26.3672 14.6484C26.3672 13.0334 25.0525 11.7188 23.4375 11.7188Z"
				fill="black"
			/>
		</svg>
	),
};

export default AirPortPractical;
