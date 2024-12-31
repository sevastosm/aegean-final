import Image from "next/image";
import Link from "next/link";
import img from "./img/blog.png";
export const Ilands = () => {
	return (
		<div className="bg-[#F0F0F0] py-16">
			<div className="container px-11">
				<h3 className="text-2xl font-semibold mb-10 flex gap-4 text-[#2B2B6E]">
					{icons.title1}
					<span className="w-0 flex-grow">About Mykonos Island</span>
				</h3>
				<p className="text-sm mb-[60px]">
					Mykonos, called by most "The island of the Winds," is a slice of
					paradise in the Cyclades island complex. With its
					postcard-perfect whitewashed houses, stunning blue-domed
					churches, and golden beaches, Mykonos offers a rare mix of
					tranquility, high end entertainment and world class cuisine,
					unmatched by any other island. Whether you want to relax by the
					crystal-clear waters, stroll through quaint cobblestone streets,
					or dance the night away at world-famous beach clubs, this island
					has something for all age groups and demographics. <br /> <br />{" "}
					Mykonos has a rich history that dates back to ancient times. It
					was named after the hero Mykons, a descendant of the god Apollo.
					The island played a significant role in Greek mythology, said to
					be the site where Hercules defeated the Giants, whose petrified
					remains formed the island's rocky landscape. In later centuries,
					Mykonos became an important maritime hub during the Byzantine and
					Venetian eras, with nearby Delos acting as a significant trading
					post.
				</p>
				<Link
					href=""
					className="flex py-5 border-b border-t border-[#999999] gap-5 mb-[60px]"
				>
					<Image src={img} width={122} height={106} alt="" />
					<div className="w-0 flex-grow">
						<h5 className="font-semibold mb-3">
							Mykonos: A journey through time and the transformation from
							rags to riches
						</h5>
						<div className="text-xs flex items-center gap-2 font-medium">
							Read the blog post{" "}
							<span className="text-[#0066FF]"> {icons.arrow}</span>
						</div>
					</div>
				</Link>
				<h3 className="text-2xl font-semibold mb-10 flex gap-4 text-[#2B2B6E]">
					{icons.title2}
					<span className="w-0 flex-grow">Getting to Mykonos</span>
				</h3>
				<p className="text-sm">
					<strong className="block">By Air:</strong> Mykonos International
					Airport (JMK) operates a number of international and domestic
					flights Flights are frequent during the summer season, but it’s
					wise to book early as they fill up quickly. By Sea: Ferries are
					available from Athens (Piraeus and Rafina ports) and neighboring
					islands like Santorini and Paros. There is frequent service
					during the summer months and a mix of fast and slower ferries
					which stop in other islands. Most ferries can take cars.
				</p>
				<br />
				<p className="text-sm">
					<strong className="block">By Air:</strong> Mykonos International
					Airport (JMK) operates a number of international and domestic
					flights Flights are frequent during the summer season, but it’s
					wise to book early as they fill up quickly. By Sea: Ferries are
					available from Athens (Piraeus and Rafina ports) and neighboring
					islands like Santorini and Paros. There is frequent service
					during the summer months and a mix of fast and slower ferries
					which stop in other islands. Most ferries can take cars.
				</p>
			</div>
		</div>
	);
};

const icons = {
	title1: (
		<svg
			width="30"
			height="30"
			viewBox="0 0 30 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="30" height="30" rx="7" fill="#2B2B6E" />
			<path
				d="M20.2227 11.8149C20.2227 12.1266 20.4777 12.3817 20.7895 12.3817H22.4389C22.7506 12.3817 23.0057 12.1266 23.0057 11.8149C23.0057 11.5031 22.7506 11.248 22.4389 11.248H20.7895C20.4777 11.248 20.2227 11.5031 20.2227 11.8149Z"
				fill="white"
			/>
			<path
				d="M20.3871 15.3345C20.5005 15.4479 20.6422 15.4989 20.7895 15.4989C20.9369 15.4989 21.0786 15.4422 21.192 15.3345C21.413 15.1135 21.413 14.7564 21.192 14.5353L20.6252 13.9685C20.4041 13.7475 20.047 13.7475 19.8259 13.9685C19.6049 14.1896 19.6049 14.5467 19.8259 14.7677L20.3928 15.3345H20.3871Z"
				fill="white"
			/>
			<path
				d="M20.2227 9.83192C20.3701 9.83192 20.5118 9.77524 20.6252 9.66755L21.192 9.10074C21.413 8.87968 21.413 8.52259 21.192 8.30153C20.9709 8.08048 20.6138 8.08048 20.3928 8.30153L19.8259 8.86835C19.6049 9.0894 19.6049 9.44649 19.8259 9.66755C19.9393 9.78091 20.081 9.83192 20.2284 9.83192H20.2227Z"
				fill="white"
			/>
			<path
				d="M8.38592 13.9627L7.81911 14.5295C7.59806 14.7505 7.59806 15.1076 7.81911 15.3287C7.93247 15.442 8.07418 15.4931 8.22155 15.4931C8.36892 15.4931 8.51062 15.4364 8.62398 15.3287L9.1908 14.7619C9.41185 14.5408 9.41185 14.1837 9.1908 13.9627C8.96974 13.7416 8.61265 13.7416 8.39159 13.9627H8.38592Z"
				fill="white"
			/>
			<path
				d="M8.38563 9.66755C8.49899 9.78091 8.64069 9.83192 8.78806 9.83192C8.93543 9.83192 9.07714 9.77524 9.1905 9.66755C9.41155 9.44649 9.41155 9.0894 9.1905 8.86835L8.62369 8.30153C8.40263 8.08048 8.04554 8.08048 7.82448 8.30153C7.60343 8.52259 7.60343 8.87968 7.82448 9.10074L8.39129 9.66755H8.38563Z"
				fill="white"
			/>
			<path
				d="M17.9332 18.0137L15.9954 21.5891C15.695 22.1387 15.1228 22.4787 14.4995 22.4787C13.8762 22.4787 13.3039 22.1387 13.0036 21.5891L11.0657 18.0137C8.23252 18.4386 6 19.4019 6 20.8808C6 22.9264 10.2781 23.9973 14.4995 23.9973C18.7209 23.9973 22.9989 22.9264 22.9989 20.8808C22.9989 19.4019 20.7607 18.4386 17.9276 18.0137H17.9332Z"
				fill="white"
			/>
			<path
				d="M10.4196 14.4271L14.0063 21.0454C14.1027 21.2267 14.2953 21.34 14.505 21.34C14.7146 21.34 14.9016 21.2267 15.0036 21.0454L18.5791 14.4498C18.8454 14.0078 19.021 13.6225 19.1287 13.2485C19.5367 11.8206 19.2873 10.2964 18.4431 9.06112C17.6385 7.88819 16.3749 7.14591 14.9753 7.02125C14.6636 6.99292 14.3407 6.99292 14.0347 7.02125C12.6351 7.14591 11.3658 7.88819 10.5669 9.06112C9.72262 10.2964 9.4733 11.8206 9.88128 13.2485C9.98894 13.6282 10.1646 14.0078 10.4196 14.4271ZM13.9384 9.20278C13.9384 8.89113 14.1933 8.63615 14.505 8.63615C14.8166 8.63615 15.0716 8.89113 15.0716 9.20278V9.84874C15.0716 10.1604 14.8166 10.4154 14.505 10.4154C14.1933 10.4154 13.9384 10.1604 13.9384 9.84874V9.20278ZM13.9384 11.7809C13.9384 11.4693 14.1933 11.2143 14.505 11.2143C14.8166 11.2143 15.0716 11.4693 15.0716 11.7809V15.4357C15.0716 15.7474 14.8166 16.0023 14.505 16.0023C14.1933 16.0023 13.9384 15.7474 13.9384 15.4357V11.7809Z"
				fill="white"
			/>
		</svg>
	),
	title2: (
		<svg
			width="30"
			height="30"
			viewBox="0 0 30 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="30" height="30" rx="7" fill="#2B2B6E" />
			<path
				d="M5.6121 21.5683C5.09703 21.0547 4.76193 20.3883 4.65685 19.6686C4.55177 18.9489 4.68235 18.2145 5.02909 17.5751L5.41244 16.8563L4.02278 16.0576L3.63144 16.7524C3.20727 17.5128 2.98969 18.371 3.00038 19.2416C3.01106 20.1122 3.24964 20.9648 3.69235 21.7145C4.13506 22.4642 4.76645 23.0848 5.52365 23.5146C6.28084 23.9443 7.13741 24.1682 8.00806 24.1639H14.3973V22.5666H8.00806C7.56233 22.5682 7.12079 22.4807 6.70934 22.3092C6.2979 22.1378 5.92485 21.8859 5.6121 21.5683Z"
				fill="white"
			/>
			<path
				d="M25.3789 12.3845C25.3789 12.8611 25.1896 13.3182 24.8526 13.6552C24.5156 13.9921 24.0585 14.1815 23.582 14.1815H16.5938V15.7788H23.6059C24.5061 15.7788 25.3695 15.4212 26.006 14.7846C26.6426 14.1481 27.0002 13.2847 27.0002 12.3845C27.0002 11.4843 26.6426 10.6209 26.006 9.98439C25.3695 9.34784 24.5061 8.99023 23.6059 8.99023H22.1843V10.5875H23.582C24.0585 10.5875 24.5156 10.7769 24.8526 11.1139C25.1896 11.4509 25.3789 11.9079 25.3789 12.3845Z"
				fill="white"
			/>
			<path
				d="M9.80515 3C8.4625 3 7.15 3.39814 6.03363 4.14408C4.91726 4.89001 4.04716 5.95024 3.53335 7.19068C3.01954 8.43112 2.88511 9.79607 3.14704 11.1129C3.40898 12.4298 4.05553 13.6394 5.00492 14.5888C5.95432 15.5382 7.16392 16.1847 8.48077 16.4466C9.79762 16.7086 11.1626 16.5741 12.403 16.0603C13.6435 15.5465 14.7037 14.6764 15.4496 13.5601C16.1955 12.4437 16.5937 11.1312 16.5937 9.78854C16.5916 7.98876 15.8757 6.26329 14.603 4.99065C13.3304 3.71801 11.6049 3.00211 9.80515 3ZM6.84215 12.3043C6.76535 12.3155 6.68733 12.3155 6.61054 12.3043C6.43773 12.3043 6.26959 12.2482 6.13135 12.1446C6.03216 12.0702 5.95165 11.9737 5.8962 11.8628C5.84075 11.7519 5.81189 11.6296 5.81189 11.5056V9.74062H7.40919V10.4674L9.75723 9.7566L8.95857 8.95794C8.912 8.91398 8.85652 8.88053 8.79589 8.85986C8.73526 8.83919 8.6709 8.83179 8.60717 8.83815H7.08973V7.24084H8.60717C8.8808 7.23979 9.15186 7.29368 9.40428 7.39931C9.65671 7.50495 9.88536 7.66018 10.0767 7.8558L11.4584 9.23747L13.5349 8.59056L13.9981 10.1879L6.84215 12.3043Z"
				fill="white"
			/>
			<path
				d="M22.9825 16.5771C21.9234 16.5771 20.9077 16.9979 20.1589 17.7467C19.41 18.4956 18.9893 19.5113 18.9893 20.5704C18.9893 23.3337 22.08 26.3926 22.4314 26.736C22.58 26.8776 22.7773 26.9566 22.9825 26.9566C23.1877 26.9566 23.3851 26.8776 23.5336 26.736C23.885 26.3926 26.9758 23.3337 26.9758 20.5704C26.9758 19.5113 26.5551 18.4956 25.8062 17.7467C25.0573 16.9979 24.0416 16.5771 22.9825 16.5771ZM23.893 21.3691H22.0721V19.7718H23.893V21.3691Z"
				fill="white"
			/>
			<path
				d="M16.0024 22.5674H18.3984V24.1647H16.0024V22.5674Z"
				fill="white"
			/>
			<path
				d="M18.167 8.99023H20.5629V10.5875H18.167V8.99023Z"
				fill="white"
			/>
		</svg>
	),
	arrow: (
		<svg
			width="15"
			height="12"
			viewBox="0 0 15 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M14.5877 6.53033C14.8806 6.23744 14.8806 5.76256 14.5877 5.46967L9.81478 0.696699C9.52188 0.403806 9.04701 0.403806 8.75412 0.696699C8.46122 0.989593 8.46122 1.46447 8.75412 1.75736L12.9968 6L8.75412 10.2426C8.46122 10.5355 8.46122 11.0104 8.75412 11.3033C9.04701 11.5962 9.52188 11.5962 9.81478 11.3033L14.5877 6.53033ZM-3.82199e-09 6.75L14.0574 6.75L14.0574 5.25L3.82199e-09 5.25L-3.82199e-09 6.75Z"
				fill="currentColor"
			/>
		</svg>
	),
};
