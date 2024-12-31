"use client";

import Navbar from "../landing/components/Navbar/Navbar";
import Faqs from "./components/Faq/Faqs";
import { GettingAroundBanner } from "./components/GettingAroundBanner/GettingAroundBanner";
import { GettingAroundServices } from "./components/GettingAroundServices/GettingAroundServices";
import SightseeingTours from "./components/SightseeingTours/SightseeingTours";
const MykonosGettingAround = () => {
	return (
		<main className="font-sfPro">
			<Navbar />
			<GettingAroundServices />
			<GettingAroundBanner />
			<SightseeingTours />
			<Faqs />
		</main>
	);
};

export default MykonosGettingAround;
