import Image from "next/image";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";
import img from "./img/benifits.png";
const Benefits = () => {
	return (
		<section className="mb-[-72px] relative z-10">
			<div className="container">
				<div className="bg-black text-white rounded-[22px] py-7 px-8">
					<h2 className="text-[32px] leading-[44px] text-center">
						Benefits
					</h2>
					<Image
						src={img}
						className="w-full my-8"
						width={600}
						height={600}
						alt=""
					/>
					<div className="flex flex-wrap gap-6 mb-8">
						<Image
							src={img1}
							className="w-[48px]"
							width={48}
							height={48}
							alt=""
						/>
						<Image
							src={img2}
							className="w-[48px]"
							width={48}
							height={48}
							alt=""
						/>
						<Image
							src={img3}
							className="w-[48px]"
							width={48}
							height={48}
							alt=""
						/>
						<Image
							src={img4}
							className="w-[48px]"
							width={48}
							height={48}
							alt=""
						/>
					</div>
					<h5 className="text-xl mb-8">Earn new revenue</h5>
					<div className="text-[15px] font-medium">
						We made it easy for partners to monetise on their potential by
						opening a revenue stream that was previously seen as too
						complex to capture.
					</div>
				</div>
			</div>
		</section>
	);
};

export default Benefits;
