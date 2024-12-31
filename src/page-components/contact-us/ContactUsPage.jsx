"use client";
import { ContactFormTwo } from "@/shared-components/ContactForm/ContactFormTwo";

import Navbar from "../landing/components/Navbar/Navbar";
import { ContactBanner } from "./components/ContactBanner/ContactBanner";
import { ContactCtas } from "./components/ContactCtas/ContactCtas";
import Faqs from "./components/Faq/Faqs";
import FindContactLocation from "./components/FindContactLocation/FindContactLocation";
import PresenceGreece from "./components/PresenceGreece/PresenceGreece";

const ContactUsPage = () => {
	return (
		<main className="font-sfPro">
			<Navbar />
			<ContactBanner />
			<ContactCtas />
			<ContactFormTwo />
			<FindContactLocation />
			<Faqs />
			<PresenceGreece />
		</main>
	);
};

export default ContactUsPage;
