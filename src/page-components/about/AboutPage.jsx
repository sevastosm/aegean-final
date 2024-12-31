"use client";

import Navbar3 from "../landing/components/Navbar3/Navbar3";
import AboutBanner from "./components/AboutBanner/AboutBanner";
import Blog from "./components/Blog/Blog";
import Faqs from "./components/Faq/Faqs";
import Mission from "./components/Mission/Mission";
import OurOperatingAreas from "./components/OurOperatingAreas/OurOperatingAreas";
import OurService from "./components/OurService/OurService";
import Safety from "./components/Safety/Safety";
import Sustainability from "./components/Sustainability/Sustainability";
import Team from "./components/Team/Team";
import Timeline from "./components/Timeline/Timeline";
const AboutPage = () => {
	return (
		<>
			<main className="font-sfPro">
				<Navbar3 />
				<AboutBanner />
				<Timeline />
				<Mission />
				<OurOperatingAreas />
				<OurService />
				<Team />
				<Safety />
				<Sustainability />
				<Blog />
				<Faqs />
			</main>
		</>
	);
};

export default AboutPage;
