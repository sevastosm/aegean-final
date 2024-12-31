import MykonosBeach from "../MykonosBeach/MykonosBeach";
import { Airport } from "./Airport";
import { BestTimeToVisitMykonos } from "./BestTimeToVisitMykonos";
import { HealthAndSafety } from "./HealthAndSafety";
import { Ilands } from "./Ilands";
import { PortTourlos } from "./PortTourlos";

export const AboutMonokos = () => {
	return (
		<>
			<Ilands />
			<Airport />
			<PortTourlos />
			<MykonosBeach />
			<BestTimeToVisitMykonos />
			<HealthAndSafety />
		</>
	);
};
