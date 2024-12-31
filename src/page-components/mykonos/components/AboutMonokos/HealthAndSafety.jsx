export const HealthAndSafety = () => {
	return (
		<div className="pt-16">
			<div className="container px-11">
				<h3 className="text-2xl font-semibold mb-10 flex gap-4 text-[#2B2B6E]">
					{icons.title1}
					<span className="w-0 flex-grow">Mykonos health and safety</span>
				</h3>
				<p className="text-sm mb-[25px]">
					Mykonos is a safe and welcoming destination, but like any popular
					tourist hotspot, it’s important to take basic precautions to
					ensure a smooth trip. The island experiences a high volume of
					visitors during the summer, so be mindful of crowds, especially
					in Mykonos Town and at popular beaches. Stay hydrated, use
					sunscreen, and avoid excessive alcohol consumption during
					late-night outings. When exploring the narrow, cobblestone
					streets, wear comfortable shoes to prevent slips or falls. It’s
					also a good idea to secure valuables, as pickpocketing can
					occasionally occur in crowded areas
					<br />
					<br />
					For medical assistance, Mykonos offers several healthcare
					facilities to address both minor and emergency situations. The
					Mykonos Medical Center, located near Ano Mera, provides general
					medical services, while private clinics such as Mykonos Health in
					Mykonos Town cater to more specific needs, including
					travel-related illnesses. Pharmacies are conveniently located
					throughout the island and are well-stocked with over-the-counter
					medications. For emergencies, dial 112 (the European emergency
					number), and rest assured that ambulance services and medical
					professionals are readily available to assist.
					<br />
					<br />
					Pharmacies in Mykonos are conveniently located across the island,
					with several in Mykonos Town and others near popular areas such
					as Ano Mera and Ornos. They are well-stocked with essential
					medications, over-the-counter remedies, and first-aid supplies,
					as well as sunscreen and skincare products tailored for the
					Mediterranean climate. Many pharmacies also offer basic medical
					advice and assistance for minor ailments
				</p>

				<h5 className="font-semibold mb-11 text-[#FF0000]">
					In case of an emergency please <br />
					contact us to assist
				</h5>
				<div className="flex pb-[54px] border-b border-[#999999] gap-5 mb-[51px] justify-center">
					<button
						className="btn flex items-center gap-2 justify-center bg-[#FF0000] text-white h-[41px] rounded-full text-sm px-3 font-bold"
						type="button"
					>
						{phone}
						<span>Call +30 215 215 4000</span>
					</button>
				</div>

				<h3 className="text-2xl font-semibold mb-10 flex gap-4 text-[#2B2B6E]">
					{icons.title2}
					<span className="w-0 flex-grow">
						Mykonos practical information
					</span>
				</h3>
				<p className="text-sm">
					When visiting Mykonos, it’s helpful to know some practical
					information to make your trip smoother. The local currency is the
					Euro (€), and ATMs are widely available, although it’s a good
					idea to carry some cash for smaller establishments. Greek is the
					official language, but English is commonly spoken in tourist
					areas. Electrical outlets use the European standard (Type C or
					F), so bring an adapter if needed. The island’s tap water is not
					recommended for drinking, so opt for bottled water. Finally,
					public Wi-Fi is available in many areas, but having a local SIM
					card or roaming plan can be useful for staying connected
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
			<path
				d="M22.9289 0H7.07109C5.19572 0 3.39716 0.744988 2.07108 2.07108C0.744988 3.39716 0 5.19572 0 7.07109L0 22.9289C0 24.8043 0.744988 26.6028 2.07108 27.9289C3.39716 29.255 5.19572 30 7.07109 30H22.9289C24.8043 30 26.6028 29.255 27.9289 27.9289C29.255 26.6028 30 24.8043 30 22.9289V7.07109C30 5.19572 29.255 3.39716 27.9289 2.07108C26.6028 0.744988 24.8043 0 22.9289 0ZM23.8354 15.3938C22.7736 20.0561 19.9834 23.2418 15.767 24.6094C15.2682 24.7695 14.7318 24.7695 14.233 24.6094C10.0143 23.2447 7.22637 20.059 6.16465 15.3967C5.38711 11.9836 5.8166 8.99004 5.83535 8.86465C5.88005 8.56318 6.04004 8.29085 6.2816 8.10503C6.52316 7.91921 6.82743 7.83443 7.13027 7.86855C9.08555 8.0877 10.8475 7.79531 12.3686 6.99902C13.4689 6.42246 14.0455 5.77324 14.0912 5.72051C14.199 5.58254 14.3368 5.47095 14.4942 5.3942C14.6515 5.31745 14.8243 5.27756 14.9994 5.27756C15.1745 5.27756 15.3473 5.31745 15.5046 5.3942C15.662 5.47095 15.7998 5.58254 15.9076 5.72051C15.9533 5.77324 16.5299 6.42363 17.6303 6.99902C19.1537 7.79531 20.9115 8.0877 22.8686 7.86855C23.1714 7.83443 23.4757 7.91921 23.7172 8.10503C23.9588 8.29085 24.1188 8.56318 24.1635 8.86465C24.1834 8.98711 24.6129 11.9807 23.8354 15.3938Z"
				fill="#2B2B6E"
			/>
			<path
				d="M21.6412 10.289C18.3324 10.289 16.1334 8.98882 15.0002 8.07593C13.833 9.01343 11.5432 10.3611 8.07501 10.2855C8.02579 11.3531 8.04571 13.0916 8.47462 14.9355C9.36466 18.7623 11.5461 21.2636 14.958 22.3669C14.9856 22.3746 15.0148 22.3746 15.0424 22.3669C18.4572 21.2625 20.6357 18.7623 21.5258 14.9355C21.9547 13.0916 21.9746 11.3537 21.9254 10.2855C21.8299 10.2878 21.735 10.289 21.6412 10.289ZM17.3129 15.8789H16.1768V17.0144C16.1768 17.3264 16.0528 17.6257 15.8322 17.8464C15.6115 18.067 15.3122 18.191 15.0002 18.191C14.6882 18.191 14.3889 18.067 14.1682 17.8464C13.9476 17.6257 13.8236 17.3264 13.8236 17.0144V15.8789H12.6875C12.3799 15.872 12.0873 15.745 11.8722 15.525C11.6571 15.3051 11.5366 15.0097 11.5366 14.702C11.5366 14.3944 11.6571 14.0989 11.8722 13.879C12.0873 13.659 12.3799 13.532 12.6875 13.5251H13.8236V12.3896C13.8236 12.2351 13.8541 12.0821 13.9132 11.9393C13.9723 11.7966 14.059 11.6669 14.1682 11.5576C14.2775 11.4484 14.4072 11.3617 14.55 11.3026C14.6927 11.2435 14.8457 11.213 15.0002 11.213C15.1547 11.213 15.3077 11.2435 15.4505 11.3026C15.5932 11.3617 15.7229 11.4484 15.8322 11.5576C15.9414 11.6669 16.0281 11.7966 16.0872 11.9393C16.1463 12.0821 16.1768 12.2351 16.1768 12.3896V13.5257H17.3129C17.6205 13.5326 17.9131 13.6596 18.1282 13.8796C18.3433 14.0995 18.4638 14.3949 18.4638 14.7026C18.4638 15.0102 18.3433 15.3057 18.1282 15.5256C17.9131 15.7456 17.6205 15.8726 17.3129 15.8794V15.8789Z"
				fill="#2B2B6E"
			/>
		</svg>
	),
	title2: (
		<svg
			width="29"
			height="29"
			viewBox="0 0 29 29"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M20.6752 0.819363C20.1466 0.293088 19.4305 -0.00164311 18.6846 6.89075e-06L9.37478 0.0206038C8.62886 0.0222538 7.91416 0.320154 7.38784 0.848763L0.819363 7.44639C0.293088 7.975 -0.00164311 8.69102 6.89075e-06 9.43694L0.0206038 18.7468C0.0222538 19.4927 0.320154 20.2075 0.848763 20.7337L7.44639 27.3022C7.975 27.8285 8.69102 28.1232 9.43694 28.1215L18.7468 28.101C19.4927 28.0993 20.2075 27.8014 20.7337 27.2728L27.3022 20.6752C27.8285 20.1466 28.1232 19.4305 28.1215 18.6846L28.101 9.37478C28.0993 8.62886 27.8014 7.91416 27.2728 7.38784L20.6752 0.819363ZM14.0608 8.43578C13.543 8.43578 13.1233 8.01606 13.1233 7.49828C13.1233 6.9805 13.543 6.56078 14.0608 6.56078C14.5786 6.56078 14.9983 6.9805 14.9983 7.49828C14.9983 8.01606 14.5786 8.43578 14.0608 8.43578ZM14.9983 20.1545C14.9983 20.4134 15.2081 20.6233 15.467 20.6233H15.9358C16.4536 20.6233 16.8733 21.043 16.8733 21.5608C16.8733 22.0786 16.4536 22.4983 15.9358 22.4983H15.467C14.1726 22.4983 13.1233 21.4489 13.1233 20.1545V11.717C13.1233 11.4581 12.9134 11.2483 12.6545 11.2483H12.1858C11.668 11.2483 11.2483 10.8286 11.2483 10.3108C11.2483 9.793 11.668 9.37328 12.1858 9.37328H12.6545C13.9489 9.37328 14.9983 10.4226 14.9983 11.717V20.1545Z"
				fill="#2B2B6E"
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
const phone = (
	<svg
		width="22"
		viewBox="0 0 22 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="translate-y-[3px]"
	>
		<g filter="url(#filter0_d_27_8047)">
			<path
				d="M6.81556 7.79C7.93556 10.62 9.74 12.94 11.9411 14.38L13.6522 12.18C13.87 11.9 14.1733 11.82 14.4456 11.93C15.3167 12.3 16.25 12.5 17.2222 12.5C17.4285 12.5 17.6263 12.6054 17.7722 12.7929C17.9181 12.9804 18 13.2348 18 13.5V17C18 17.2652 17.9181 17.5196 17.7722 17.7071C17.6263 17.8946 17.4285 18 17.2222 18C13.7155 18 10.3523 16.2089 7.8727 13.0208C5.39305 9.8327 4 5.50868 4 1C4 0.734784 4.08194 0.48043 4.22781 0.292893C4.37367 0.105357 4.5715 0 4.77778 0H7.5C7.70628 0 7.90411 0.105357 8.04997 0.292893C8.19583 0.48043 8.27778 0.734784 8.27778 1C8.27778 2.25 8.43333 3.45 8.72111 4.57C8.80667 4.92 8.74444 5.31 8.52667 5.59L6.81556 7.79Z"
				fill="white"
			/>
		</g>
		<defs>
			<filter
				id="filter0_d_27_8047"
				x="0"
				y="0"
				width="22"
				height="26"
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB"
			>
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset dy="4" />
				<feGaussianBlur stdDeviation="2" />
				<feComposite in2="hardAlpha" operator="out" />
				<feColorMatrix
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
				/>
				<feBlend
					mode="normal"
					in2="BackgroundImageFix"
					result="effect1_dropShadow_27_8047"
				/>
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="effect1_dropShadow_27_8047"
					result="shape"
				/>
			</filter>
		</defs>
	</svg>
);
