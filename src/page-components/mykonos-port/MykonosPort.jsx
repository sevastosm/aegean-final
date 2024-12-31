"use client";

import Image from "next/image";
import Navbar from "../landing/components/Navbar/Navbar";
import promo from "./assets/promo.png";
import AboutMykonosPort from "./components/AboutMykonosPort/AboutMykonosPort";
import Faqs from "./components/Faq/Faqs";
import MykonosPortBanner from "./components/MykonosPortBanner/MykonosPortBanner";
import NewPort from "./components/NewPort/NewPort";
import PortMaps from "./components/PortMaps/PortMaps";
import { PortScheduleCta } from "./components/PortScheduleCta/PortScheduleCta";
import PortStreamingInfo from "./components/PortStreamingInfo/PortStreamingInfo";
const MykonosPort = () => {
	return (
		<main className="font-sfPro">
			<Navbar />
			<MykonosPortBanner />
			<AboutMykonosPort />
			<NewPort />
			<PortStreamingInfo />
			<PortMaps />
			<Faqs />
			<PortScheduleCta />
			<Image
				src={promo}
				width={600}
				height={600}
				alt=""
				className="w-full h-auto"
			/>
		</main>
	);
};

export default MykonosPort;
