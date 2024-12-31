"use client";

import Banner from "./components/Banner/Banner";
import DriverOnTheWay from "./components/DriverOnTheWay/DriverOnTheWay";
import ExperienceFastestWay from "./components/ExperienceFastestWay/ExperienceFastestWay";
import FirstLocation from "./components/FromLocation/FirstLocation";
import HowtoBookTaxi from "./components/HowtoBookTaxi/HowtoBookTaxi";
import SearchingWithMap from "./components/MapSearching/SearchingWithMap";
import Navbar4 from "./components/Navbar4/Navbar4";
import OtpVerification from "./components/OtpVerification/OtpVerification";
import Registration from "./components/Registration/Registration";
import ReservationConfirmed from "./components/ReservationConfirmed/ReservationConfirmed";
import SelectCarPage from "./components/SelectCar/SelectCarPage";
import SelectedLocation from "./components/SelectedLocation/SelectedLocation";
const SectionTwo = () => {
	return (
		<main className="font-sfPro">
			<Banner />
			{/* SearchingWithMap Section Start */}
			<SharedNavbar />
			<SearchingWithMap />
			{/* SearchingWithMap Section End */}

			{/* From Location Section Start */}
			<SharedNavbar />
			<FirstLocation />
			{/* From Location Section End */}

			{/* Selected Location Section Start */}
			<SharedNavbar />
			<SelectedLocation />
			{/* Selected Location Section End */}

			{/* Selected Car Section Start */}
			<SharedNavbar />
			<SelectCarPage />
			{/* Selected Car Section End */}

			{/* Registration Section Start */}
			<SharedNavbar />
			<Registration />
			{/* Registration Section End */}

			{/* Registration Section Start */}
			<SharedNavbar />
			<OtpVerification />
			{/* Registration Section End */}

			{/* DriverOnTheWay Section Start */}
			<SharedNavbar />
			<DriverOnTheWay />
			{/* DriverOnTheWay Section End */}

			{/* Reservation Confirmed Start */}
			<ReservationConfirmed />
			{/* Reservation Confirmed End */}

			<ExperienceFastestWay />
			<HowtoBookTaxi />
		</main>
	);
};

const SharedNavbar = () => {
	return (
		<div className="h-[60px] relative">
			<Navbar4 />
		</div>
	);
};

export default SectionTwo;
