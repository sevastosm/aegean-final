"use client";

import Navbar from "../landing/components/Navbar/Navbar";
import AboutMykonosAirPort from "./components/AboutMykonosAirPort/AboutMykonosAirPort";
import AirPortPractical from "./components/AirPortPractical/AirPortPractical";
import AirPortStreamingInfo from "./components/AirPortStreamingInfo/AirPortStreamingInfo";
import Faqs from "./components/Faq/Faqs";
import MykonosAirPortBanner from "./components/MykonosAirPortBanner/MykonosAirPortBanner";
import NewAirPort from "./components/NewAirPort/NewAirPort";
import { PortScheduleCta } from "./components/PortScheduleCta/PortScheduleCta";
const MykonosAirPort = () => {
	return (
		<main className="font-sfPro">
			<Navbar />
			<MykonosAirPortBanner />
			<AboutMykonosAirPort />
			<NewAirPort />
			<AirPortStreamingInfo />
			<AirPortPractical />
			<Faqs />
			<PortScheduleCta />
		</main>
	);
};

export default MykonosAirPort;
