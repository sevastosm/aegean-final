"use client";
import { ContactForm } from "@/shared-components/ContactForm/ContactForm";

import Navbar3 from "../landing/components/Navbar3/Navbar3";
import Benefits from "./components/Benefits/Benefits";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import Faqs from "./components/Faq/Faqs";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Banner from "./components/PartnerBanner/Banner";
import Solutions from "./components/Solutions/Solutions";
import WhoCanPartner from "./components/WhoCanPartner/WhoCanPartner";
const PartnerPage = () => {
	return (
		<>
			<main className="font-sfPro">
				<Navbar3 />
				<Banner />
				<WhoCanPartner />
				<HowItWorks />
				<Solutions />
				<ContactForm />
				<Benefits />
				<Faqs />
				<CaseStudies />
			</main>
		</>
	);
};

export default PartnerPage;
