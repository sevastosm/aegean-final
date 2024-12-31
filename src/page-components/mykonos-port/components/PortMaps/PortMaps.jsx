import Image from "next/image";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
const PortMaps = () => {
	return (
		<section className="py-[58px]">
			<div className="container">
				<h4 className="flex items-center gap-3 text-2xl leading-[28px] font-bold mb-5">
					{icons.title}
					<span className="w-0 flex-grow">Mykonos port maps</span>
				</h4>
				<div className="mb-8">
					<div className="text-center leading-[21px] mb-5">
						Map of New Port
					</div>
					<Image src={img1} width={600} height={600} alt="" />
				</div>
				<div className="text-center leading-[21px] mb-6">
					Map of Old Port
				</div>
				<Image src={img2} width={600} height={600} alt="" />
				<div className="mt-14">
					<h4 className="flex items-center gap-3 text-2xl leading-[28px] font-bold mb-4">
						{icons.title2}
						<span className="w-0 flex-grow">Mykonos port parking</span>
					</h4>
					<p className="pt-4">
						Mykonos Port offers many public parking spaces available free
						of charge. These can be found in the designated parking spots
						around the main port building, and before entering the port.
					</p>
				</div>
			</div>
		</section>
	);
};
const icons = {
	title: (
		<svg
			width="50"
			height="50"
			viewBox="0 0 50 50"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M49.9983 15.8496L34.2852 31.5628L48.9263 46.204C49.603 45.0594 49.9984 43.73 49.9984 42.3074V15.8496H49.9983Z"
				fill="black"
			/>
			<path
				d="M44.9122 47.6255L31.569 34.2822L15.8516 49.9997H42.3093C43.7318 49.9997 45.0609 49.6043 46.2053 48.9281L45.0268 47.7504C44.9863 47.71 44.9479 47.6686 44.9122 47.6255Z"
				fill="black"
			/>
			<path
				d="M42.3077 0H7.69225C3.44224 0 0 3.45192 0 7.69225V42.3076C0 46.5479 3.44234 49.9998 7.69225 49.9998H10.4134L49.9999 10.4133V7.69225C49.9999 3.45192 46.548 0 42.3077 0ZM21.548 30.673C21.1827 31.1442 20.625 31.423 20.0288 31.423C19.4326 31.423 18.8654 31.1441 18.4999 30.673C17.2307 29.0191 10.8845 20.5481 10.8845 16.1249C10.8845 11.0865 14.9806 6.99027 20.0287 6.99027C25.0671 6.99027 29.1728 11.0864 29.1728 16.1249C29.173 20.5481 22.8268 29.0191 21.548 30.673Z"
				fill="black"
			/>
			<path
				d="M25.3265 16.1248C25.3265 18.0287 22.5766 22.6345 20.0286 26.2499C17.4708 22.6345 14.7305 18.0288 14.7305 16.1248C14.7305 13.2114 17.1055 10.8364 20.0286 10.8364C22.9515 10.8364 25.3265 13.2114 25.3265 16.1248Z"
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

export default PortMaps;
