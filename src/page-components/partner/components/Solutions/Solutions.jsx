import Image from "next/image";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
const Solutions = () => {
	return (
		<section className="solutions pb-[161px] pt-[79px] font-inter bg-[#CCD3E1]">
			<div className="container">
				<div className="text-center max-w-[282px] mx-auto">
					<h2 className="text-[32px] font-semibold mb-7">Solutions</h2>
					<p className="mb-9">
						See some of our technology solutions that we deploy to support
						partners and how they can be implemented in specific cases
					</p>
					<div className="flex flex-col gap-5">
						{data.map((item, index) => (
							<div className="" key={index}>
								<h5 className="text-xl font-bold mb-8">{item.title}</h5>
								<Image
									src={item.img}
									width={500}
									height={500}
									className="w-full"
									alt=""
								/>
								<div className="font-medium text-[15px]">
									{item.text}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
const data = [
	{
		title: "Online booking engine",
		img: img1,
		text: "Book rides for your clients, partners or employees, or integrate to your website or booking steps",
	},
	{
		title: "Reporting dashboard",
		img: img2,
		text: "Book rides for your clients, partners or employees, or integrate to your website or booking steps",
	},
	{
		title: "iPad + custom software",
		img: img3,
		text: "Book rides for your clients, partners or employees, or integrate to your website or booking steps",
	},
];
export default Solutions;
