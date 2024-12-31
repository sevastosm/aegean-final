"use client";

import Navbar3 from "../landing/components/Navbar3/Navbar3";
import { AboutMonokos } from "./components/AboutMonokos/AboutMonokos";
import Faqs from "./components/Faq/Faqs";
import { MykonosBanner } from "./components/MykonosBanner/MykonosBanner";
import MykonosStatistics from "./components/MykonosStatistics/MykonosStatistics";
import PresenceGreece from "./components/PresenceGreece/PresenceGreece";
import { Services } from "./components/Services/Services";

const MykonosPage = () => {
	return (
		<main className="font-sfPro">
			<Navbar3 />
			<MykonosBanner />
			<PresenceGreece />
			<Services />
			<MykonosStatistics />
			<AboutMonokos />

			<Faqs />
		</main>
	);
};

export default MykonosPage;
