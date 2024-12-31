import Image from "next/image";
import applyIcon from "./assets/img/apply-icon.png";
import img1 from "./assets/img/step-1.png";
import img2 from "./assets/img/step-2.png";
import img3 from "./assets/img/step-3.png";
import img4 from "./assets/img/step-4.png";

const HowItWorks = () => {
	return (
		<section className="mt-[-118px] relative mb-[-56px]">
			<div className="container">
				<div className="bg-[#F6F6F6] px-5 py-12 rounded-[22px]">
					<div className="how-it-works">
						<h2 className="text-2xl leading-[1.25] font-bold mb-7">
							How it works
						</h2>
						<p className="mb-10">
							Choose one of the mykonos hotspots, or simply type your
							destination
						</p>
						{data.map((item, index) => (
							<div className="step" key={index}>
								<h4 className="title mb-6">{item.title}</h4>
								<Image
									src={item.img}
									width={600}
									height={600}
									className="w-full max-w-[279px] mb-5 pointer-events-none"
									alt="steps"
								/>
								<p className="text-sm font-medium">{item.text}</p>
							</div>
						))}
					</div>
					<button
						className="text-xl font-bold h-12 rounded-xl bg-black text-white w-[195px] mx-auto flex items-center justify-center gap-3 mt-10"
						type="button"
					>
						<Image
							className="w-[26px]"
							src={applyIcon}
							width={52}
							height={52}
							alt=""
						/>{" "}
						Apply now
					</button>
				</div>
			</div>
		</section>
	);
};
const data = [
	{
		title: "Step 1 : Apply online",
		img: img1,
		text: "Choose one of the mykonos hotspots, or simply type your destination",
	},
	{
		title: "Step 2 : Get approved",
		img: img2,
		text: "Choose one of the mykonos hotspots, or simply type your destination",
	},
	{
		title: "Step 3 : Integrate services",
		img: img3,
		text: "Choose one of the mykonos hotspots, or simply type your destination",
	},
	{
		title: "Step 4 : Earn and track revenues",
		img: img4,
		text: "Choose one of the mykonos hotspots, or simply type your destination",
	},
];
export default HowItWorks;
