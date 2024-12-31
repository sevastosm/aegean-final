"use client";

import Image from "next/image";
import Navbar3 from "../landing/components/Navbar3/Navbar3";
import img from "./assets/img/promo-img.png";
import Faqs from "./components/Faq/Faqs";
import { MykonosBeachService } from "./components/MykonosBeachService/MykonosBeachService";
import MykonosBeachesBanner from "./components/MykonosBeachesBanner/MykonosBeachesBanner";
const MykonosBeaches = () => {
	return (
		<main className="font-sfPro">
			<Navbar3 />
			<MykonosBeachesBanner />
			<MykonosBeachService />
			<Image
				src={img}
				width={600}
				height={600}
				alt=""
				className="w-full h-auto object-contain"
			/>
			<Faqs />
		</main>
	);
};

export default MykonosBeaches;
