import Image from "next/image";
import bannerBg from "./img/banner-bg.png";
const MykonosBeachesBanner = () => {
	return (
		<section className="relative py-[91px] min-h-[489px] font-sfPro">
			<Image
				className="absolute top-0 left-0 w-full h-full object-cover"
				src={bannerBg}
				width={900}
				height={900}
				alt=""
			/>
			<div className="container relative px-[52px]">
				<h2 className="text-[40px] leading-[1.24] font-semibold mb-11">
					Mykonos Beach Guide
				</h2>
				<div className="font-bold text-xl mb-[99px]">
					Explore Mykonos best <br /> beaches with Aegean Taxi
				</div>
			</div>
		</section>
	);
};

export default MykonosBeachesBanner;
