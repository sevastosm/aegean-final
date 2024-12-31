"use client";

import AdditionalAirportService from "./components/AdditionalAirportService/AdditionalAirportService";
import AirportJmk from "./components/AirportJmk/AirportJmk";
import Banner from "./components/Banner/Banner";
import BannerTwo from "./components/BannerTwo/BannerTwo";
import Blog from "./components/Blog/Blog";
import BookOnlineRide from "./components/BookOnlineRide/BookOnlineRide";
import CarCategories from "./components/CarCategories/CarCategories";
import Faqs from "./components/Faq/Faqs";
import Faq2 from "./components/Faq2/Faq2";
import FerryPorts from "./components/FerryPorts/FerryPorts";
import FindUs from "./components/FindUs/FindUs";
import Hero3 from "./components/Hero-3/Hero3";
import Hero4 from "./components/Hero-4/Hero4";
import Hero5 from "./components/Hero-5/Hero5";
import Hero6 from "./components/Hero-6/Hero6";
import HowToBook from "./components/HowToBook/HowToBook";
import Partner from "./components/Partner/Partner";
import SightseeingTours from "./components/SightseeingTours/SightseeingTours";
import { default as SomeTaxiDrivers } from "./components/SomeTaxiDrivers/SomeTaxiDrivers";
import TaxiBookingSteps from "./components/TaxiBookingSteps/TaxiBookingSteps";
import TaxiCounts from "./components/TaxiCounts/TaxiCounts";
import TaxiInteligence from "./components/TaxiInteligence/TaxiInteligence";
import TaxiPrices from "./components/TaxiPrices/TaxiPrices";
import Testimonials from "./components/Testimonials/Testimonials";
import WhereToFind from "./components/WhereToFind/WhereToFind";
import WhyBookYourRideInGreece from "./components/WhyBookYourRideInGreece/WhyBookYourRideInGreece";
const LandingPage = () => {
	return (
		<main className="font-sfPro">
			<Testimonials />
			<Banner />
			<BannerTwo />
			<Hero3 />
			<Hero4 />
			<Hero5 />
			<Hero6 />
			<TaxiBookingSteps />
			<BookOnlineRide />
			<HowToBook />
			<Partner />
			<CarCategories />
			<TaxiInteligence />
			<Faq2 />
			<Faqs />
			<TaxiPrices />
			<FerryPorts />
			<SightseeingTours />
			<AirportJmk />
			<FindUs />
			<WhereToFind />
			<AdditionalAirportService />
			<SomeTaxiDrivers />
			<Blog />
			<TaxiCounts />
			<WhyBookYourRideInGreece />
		</main>
	);
};

export default LandingPage;
