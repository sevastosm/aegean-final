import Image from "next/image";
import car from "./assets/img/car.png";
import img from "./assets/img/img.png";
const DriverOnTheWay = () => {
	return (
		<section className="pb-[60px]">
			<Image src={img} width={600} height={600} className="w-full" alt="" />
			<div className="container py-7">
				<div className="text-center mb-8">
					<h5 className="text-2xl font-semibold">Driver is on the Way!</h5>
					<span>(Pick-up in 3 min)</span>
				</div>
				<div className="flex gap-3 items-center justify-between border-b border-black pb-5 mb-7">
					<Image
						src={car}
						width={123}
						className="w-[123px]"
						height={79}
						alt=""
					/>
					<div className="max-w-[calc(100%-123px)] pl-6">
						<h5 className="text-xl font-bold">EMK 4053</h5>
						<div className="font-medium">Black Mercedes V Class</div>
						<h5 className="text-xl font-bold">Dimitris</h5>
					</div>
				</div>
				<div className="text-xl font-bold mb-7 font-uberMove tracking-[0.46px]">
					Call Driver <span className="mx-2">{phone}</span> +30 690 987
					3040
				</div>
				<div className="flex justify-between items-center">
					<button
						className="h-[45px] rounded-xl font-bold text-white bg-[#FF0000] flex px-5 items-center gap-1"
						type="button"
					>
						Cancel Ride
					</button>
					<button
						className="h-[45px] rounded-xl font-bold text-white bg-black flex px-5 items-center gap-1"
						type="button"
					>
						Track Live {track}
					</button>
				</div>
			</div>
		</section>
	);
};
const phone = (
	<svg
		width="22"
		viewBox="0 0 22 22"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="inline-block"
	>
		<path
			d="M4.42444 9.52111C6.18444 12.98 9.02 15.8156 12.4789 17.5756L15.1678 14.8867C15.51 14.5444 15.9867 14.4467 16.4144 14.5811C17.7833 15.0333 19.25 15.2778 20.7778 15.2778C21.1019 15.2778 21.4128 15.4065 21.642 15.6358C21.8712 15.865 22 16.1758 22 16.5V20.7778C22 21.1019 21.8712 21.4128 21.642 21.642C21.4128 21.8712 21.1019 22 20.7778 22C15.2672 22 9.98226 19.8109 6.08567 15.9143C2.18908 12.0177 0 6.73283 0 1.22222C0 0.898069 0.128769 0.587192 0.357981 0.357981C0.587192 0.128769 0.898069 0 1.22222 0H5.5C5.82415 0 6.13503 0.128769 6.36424 0.357981C6.59345 0.587192 6.72222 0.898069 6.72222 1.22222C6.72222 2.75 6.96667 4.21667 7.41889 5.58556C7.55333 6.01333 7.45556 6.49 7.11333 6.83222L4.42444 9.52111Z"
			fill="black"
		/>
	</svg>
);
const track = (
	<svg
		width="24"
		height="25"
		viewBox="0 0 24 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="11.7128" cy="12.2839" r="8.6418" stroke="white" />
		<path d="M11.8557 0V6.57067" stroke="white" />
		<path d="M11.8557 17.9976V24.2825" stroke="white" />
		<line
			x1="23.7112"
			y1="12.7852"
			x2="17.7119"
			y2="12.7852"
			stroke="white"
		/>
		<line
			x1="5.99927"
			y1="12.7852"
			x2="-4.1008e-05"
			y2="12.7852"
			stroke="white"
		/>
		<path
			d="M8.56543 14.7481L11.9429 9.63085L15.2105 14.7367L12.1496 13.3976L11.9523 13.3112L11.7539 13.3954L8.56543 14.7481Z"
			stroke="white"
		/>
	</svg>
);

export default DriverOnTheWay;
