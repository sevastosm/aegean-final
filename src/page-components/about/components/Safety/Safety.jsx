const Safety = () => {
	return (
		<section className="py-[70px] font-inter">
			<div className="container px-12">
				<div className="mb-12">
					<h2 className="text-[32px] mb-5 font-semibold leading-[39px] text-center">
						Safety at <br /> Aegean Taxi
					</h2>
					<div className="flex justify-center mb-5">{icons.safety}</div>
					<p className="font-light max-sm:max-w-[300px]">
						The Aegean Taxi platform is designed with rider safety as our
						top priority. We deploy advanced preventive measures,
						insurance coverage, and cutting-edge technology to keep you
						safe. We see ourselves as the guardians of Greek hospitality
						and tourism, and are committed to ensuring you travel securely
						so you can relax and enjoy your time in Greece.
						<br /> <br /> <strong>Here is how we make it happen:</strong>
					</p>
				</div>
				<div className="flex flex-col gap-10">
					{data.map((item, index) => (
						<div className="" key={index}>
							<div className="flex justify-center mb-[10px]">
								{item.icon}
							</div>
							<h5 className="font-medium text-lg mb-3 text-center">
								{item.title}
							</h5>
							<div className="font-light max-sm:max-w-[300px]">
								{item.text}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

const icons = {
	safety: (
		<svg
			width="88"
			height="100"
			viewBox="0 0 88 100"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M21.8399 2.00024L2 15.8567V46.8364C2 60.2571 14.1133 82.1038 43.9947 97.0156C73.8758 82.1038 85.9893 60.2571 85.9893 46.8364V15.8567L66.1483 2.00024H21.8399Z"
				stroke="black"
				strokeWidth="4"
				strokeMiterlimit="10"
			/>
			<path
				d="M74.1618 22.0229V46.8363C74.1618 48.8174 73.6034 51.3607 72.59 53.9976C71.2944 57.3673 69.3265 60.8211 66.7411 64.2627C62.8095 69.4964 55.7918 76.8203 43.9947 83.6025C32.1976 76.8203 25.18 69.4964 21.2483 64.2627C18.6627 60.8211 16.6948 57.3673 15.3996 53.9976C14.3858 51.3605 13.8276 48.8174 13.8276 46.8363V22.0229L25.5614 13.828H62.4272L74.1618 22.0229Z"
				stroke="black"
				strokeWidth="4"
				strokeMiterlimit="10"
			/>
			<path
				d="M55.6012 30.1932L40.6028 45.1915L33.1934 37.7819L24.7988 46.176L40.6028 61.98L63.9956 38.5876L55.6012 30.1932Z"
				stroke="black"
				strokeWidth="4"
				strokeMiterlimit="10"
			/>
		</svg>
	),
	gps: (
		<svg
			width="53"
			height="66"
			viewBox="0 0 53 66"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M40.9233 39.8543V3.37591C40.9233 1.51287 39.4041 0 37.5474 0H3.37591C1.513 0 0 1.51287 0 3.37591V61.8413C0 63.698 1.51287 65.2172 3.37591 65.2172H39.6292C46.6435 65.2172 52.3451 59.5095 52.3451 52.5013C52.3451 45.9309 47.3249 40.5044 40.9233 39.8543ZM3.25722 39.3166C3.25722 39.6666 2.97587 39.9417 2.63211 39.9417C2.28834 39.9417 2.00699 39.6666 2.00699 39.3166V28.7262C2.00699 28.3824 2.28834 28.1011 2.63211 28.1011C2.97587 28.1011 3.25722 28.3825 3.25722 28.7262V39.3166ZM3.25722 22.8248C3.25722 23.1685 2.97587 23.4499 2.63211 23.4499C2.28834 23.4499 2.00699 23.1685 2.00699 22.8248V19.5802C2.00699 19.2365 2.28834 18.9551 2.63211 18.9551C2.97587 18.9551 3.25722 19.2365 3.25722 19.5802V22.8248ZM3.25722 15.5291C3.25722 15.873 2.97587 16.1542 2.63211 16.1542C2.28834 16.1542 2.00699 15.8729 2.00699 15.5291V12.2907C2.00699 11.9407 2.28834 11.6656 2.63211 11.6656C2.97587 11.6656 3.25722 11.9407 3.25722 12.2907V15.5291ZM7.52075 63.9668C6.3455 63.9668 5.38892 63.0102 5.38892 61.8413V3.37591C5.38892 2.20681 6.3455 1.25036 7.52075 1.25036H37.5474C38.7164 1.25036 39.6729 2.20681 39.6729 3.37591V39.7917H39.6292C38.929 39.7917 38.2413 39.8604 37.5725 39.973V7.88336C37.5725 6.48304 36.4284 5.33893 35.028 5.33893H10.0339C8.63345 5.33893 7.48947 6.48304 7.48947 7.88336V57.3275C7.48947 58.7341 8.63345 59.872 10.0339 59.872H29.2952C30.5456 61.6162 32.221 63.0291 34.1714 63.9668H7.52075ZM36.3221 7.88336V40.2419C30.9145 41.7048 26.9196 46.6435 26.9196 52.5013C26.9196 54.7207 27.4947 56.8087 28.495 58.6217H10.0339C9.32124 58.6217 8.73983 58.0403 8.73983 57.3277V7.88336C8.73983 7.1707 9.32124 6.58929 10.0339 6.58929H35.0279C35.7407 6.58929 36.3221 7.1707 36.3221 7.88336ZM39.6292 63.9668C33.3088 63.9668 28.17 58.8217 28.17 52.5013C28.17 46.1809 33.3088 41.0421 39.6292 41.0421C45.9496 41.0421 51.0947 46.1809 51.0947 52.5013C51.0947 58.8217 45.9496 63.9668 39.6292 63.9668Z"
				fill="black"
			/>
			<path
				d="M20.6993 3.95873H24.3623C24.7079 3.95873 24.9875 3.67882 24.9875 3.33361C24.9875 2.9884 24.7078 2.7085 24.3623 2.7085H20.6993C20.3537 2.7085 20.0742 2.9884 20.0742 3.33361C20.0742 3.67882 20.3537 3.95873 20.6993 3.95873Z"
				fill="black"
			/>
			<path
				d="M39.6291 44.1738C35.8532 44.1738 32.7773 47.2497 32.7773 51.0256C32.7773 54.614 38.4225 59.7842 39.1353 60.6219C39.2665 60.7532 39.4479 60.8344 39.6291 60.8344C39.798 60.8344 40.0105 60.7406 40.1293 60.6219C40.9795 59.6279 46.4872 54.5766 46.4872 51.0256C46.4872 47.2497 43.4114 44.1738 39.6291 44.1738ZM39.6291 54.4704C37.7912 54.4704 36.2971 52.9762 36.2971 51.132C36.2971 49.2941 37.7912 47.7999 39.6291 47.7999C41.4733 47.7999 42.9675 49.2941 42.9675 51.132C42.9675 52.9762 41.4733 54.4704 39.6291 54.4704Z"
				fill="black"
			/>
			<path
				d="M41.7173 51.132C41.7173 52.2823 40.7796 53.2201 39.6292 53.2201C38.4851 53.2201 37.5474 52.2824 37.5474 51.132C37.5474 49.988 38.4851 49.0503 39.6292 49.0503C40.7796 49.0503 41.7173 49.988 41.7173 51.132Z"
				fill="black"
			/>
			<path
				d="M22.8437 29.5078C20.9119 29.5078 19.3428 31.0769 19.3428 33.0024C19.3428 34.9342 20.9119 36.5033 22.8437 36.5033C24.7691 36.5033 26.3383 34.9342 26.3383 33.0024C26.3383 31.0771 24.7691 29.5078 22.8437 29.5078ZM22.8437 35.2531C21.5996 35.2531 20.593 34.2403 20.593 33.0024C20.593 31.7646 21.5996 30.758 22.8437 30.758C24.0815 30.758 25.088 31.7645 25.088 33.0024C25.0879 34.2403 24.0815 35.2531 22.8437 35.2531Z"
				fill="black"
			/>
			<path
				d="M33.0588 32.3771H31.8897C31.5833 27.8696 27.9762 24.2625 23.4624 23.9498V22.7809C23.4624 22.4371 23.1874 22.1558 22.8373 22.1558C22.4934 22.1558 22.2122 22.4371 22.2122 22.7809V23.95C17.7048 24.2626 14.0976 27.8697 13.7913 32.3772H12.6222C12.2721 32.3772 11.9971 32.6585 11.9971 33.0023C11.9971 33.3461 12.2721 33.6274 12.6222 33.6274H13.7913C14.0976 38.1349 17.7048 41.742 22.2122 42.0546V43.2237C22.2122 43.5676 22.4936 43.8488 22.8373 43.8488C23.1874 43.8488 23.4624 43.5675 23.4624 43.2237V42.0546C27.976 41.7483 31.5833 38.1349 31.8897 33.6274H33.0588C33.4088 33.6274 33.6839 33.3461 33.6839 33.0023C33.6839 32.6585 33.4088 32.3771 33.0588 32.3771ZM29.5328 33.6274H30.6393C30.3392 37.4472 27.2884 40.4979 23.4624 40.8043V39.6977C23.4624 39.3538 23.1874 39.0726 22.8373 39.0726C22.4934 39.0726 22.2122 39.354 22.2122 39.6977V40.8043C18.3987 40.4979 15.3417 37.4472 15.0415 33.6274H16.1481C16.492 33.6274 16.7732 33.3461 16.7732 33.0023C16.7732 32.6585 16.4918 32.3772 16.1481 32.3772H15.0415C15.3416 28.5574 18.3924 25.5067 22.2122 25.2003V26.3069C22.2122 26.6569 22.4936 26.932 22.8373 26.932C23.1874 26.932 23.4624 26.6569 23.4624 26.3069V25.2003C27.2884 25.5067 30.3392 28.5574 30.6393 32.3772H29.5328C29.1889 32.3772 28.9076 32.6585 28.9076 33.0023C28.9076 33.3461 29.189 33.6274 29.5328 33.6274Z"
				fill="black"
			/>
		</svg>
	),
	trip: (
		<svg
			width="63"
			height="63"
			viewBox="0 0 63 63"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<mask
				id="mask0_27_9385"
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="63"
				height="63"
			>
				<path d="M0 1.14441e-05H63V63H0V1.14441e-05Z" fill="white" />
			</mask>
			<g mask="url(#mask0_27_9385)">
				<path
					d="M39.9085 24.6275L37.5836 29.1618H39.9085V24.6275ZM39.8562 31.5405H36.0535C35.7608 31.5405 35.5204 31.5196 35.3356 31.4812C35.1474 31.4394 34.9627 31.2964 34.7814 31.0453C34.6246 30.7976 34.5444 30.55 34.5444 30.2989C34.5444 30.1175 34.6699 29.8139 34.9173 29.3815L38.6677 22.7754C39.0405 22.0988 39.6365 21.7569 40.4488 21.7569C41.0935 21.7569 41.6058 21.9662 41.9857 22.3847C42.3657 22.8068 42.5539 23.3613 42.5539 24.052V29.1268H42.8431C43.1813 29.1268 43.474 29.249 43.718 29.4931C43.9584 29.7373 44.0804 30.0233 44.0804 30.3511C44.0804 30.6685 43.9584 30.9511 43.7075 31.1987C43.46 31.4255 43.1533 31.5405 42.7908 31.5405H42.5539V32.9985C42.5539 33.3612 42.4249 33.6751 42.1634 33.9436C41.9055 34.2088 41.5883 34.3413 41.2155 34.3413C40.853 34.3413 40.5359 34.2088 40.264 33.9436C39.9921 33.6751 39.8562 33.3612 39.8562 32.9985V31.5405ZM29.2327 31.7079H32.3208C32.6518 31.7079 32.9516 31.8265 33.22 32.0672C33.4709 32.3149 33.5964 32.5974 33.5964 32.9148C33.5964 33.2426 33.4743 33.5426 33.2374 33.8147C33.0004 34.0518 32.7076 34.1704 32.3556 34.1704H26.4339C26.0365 34.1704 25.7124 34.0588 25.4581 33.8321C25.2035 33.6054 25.0781 33.3124 25.0781 32.9496C25.0781 32.6881 25.2453 32.3532 25.5869 31.9451L27.6886 29.5002C28.7064 28.3142 29.3686 27.5155 29.6753 27.1074C30.1737 26.4168 30.4211 25.8517 30.4211 25.4088C30.4211 25.0914 30.3061 24.8158 30.0726 24.5857C29.8426 24.3519 29.5568 24.2368 29.2153 24.2368C28.5496 24.2368 28.0755 24.617 27.7932 25.3739L27.5527 26.0017C27.3262 26.5911 26.9532 26.8876 26.4339 26.8876C25.5974 26.8876 25.1791 26.4272 25.1791 25.5099C25.1791 24.4915 25.5905 23.602 26.4165 22.8452C27.2424 22.0847 28.2218 21.7081 29.3512 21.7081C30.4839 21.7081 31.4214 22.0499 32.1603 22.7336C32.9027 23.4207 33.2722 24.2648 33.2722 25.2728C33.2722 26.1796 32.9342 27.1178 32.2545 28.0909L31.1846 29.4513C30.8464 29.8802 30.1947 30.6337 29.2327 31.7079Z"
					fill="black"
				/>
				<path
					d="M17.7471 10.7455C20.6505 8.28292 24.1742 6.4622 28.1406 5.55547C33.6649 4.29977 39.1752 5.01123 43.9364 7.23309M54.7828 17.1214C56.0063 19.2211 56.9369 21.5405 57.5086 24.0378C60.5164 37.2536 52.2489 50.4134 39.0393 53.4235C38.8651 53.4654 38.6874 53.5002 38.5131 53.5386"
					stroke="black"
					strokeWidth="2"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M18.9053 17.1985C21.4984 14.0908 25.0918 11.7783 29.3371 10.8087C33.3453 9.89485 37.3466 10.3133 40.8807 11.7713M46.4294 43.7137C44.0767 45.8447 41.1595 47.4177 37.8449 48.1712C36.6006 48.4572 35.3563 48.6107 34.1295 48.6455M50.8349 21.1503C51.4485 22.4269 51.9329 23.7942 52.2604 25.2347C53.0831 28.8517 52.8251 32.4651 51.6958 35.7298"
					stroke="black"
					strokeWidth="2"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M48.9964 1.23095H52.6665C53.8307 1.23095 54.7822 2.18308 54.7822 3.34809V7.23367H58.665C59.829 7.23367 60.7841 8.18937 60.7841 9.35426V13.0271C60.7841 14.192 59.829 15.1442 58.665 15.1442H54.7822V19.0332C54.7822 20.1981 53.8307 21.1504 52.6665 21.1504H48.9964C47.8323 21.1504 46.8773 20.1981 46.8773 19.0332V15.1442H42.9947C41.8306 15.1442 40.8789 14.192 40.8789 13.0271V9.35426C40.8789 8.18937 41.8306 7.23367 42.9947 7.23367H46.8773V3.34809C46.8773 2.18308 47.8323 1.23095 48.9964 1.23095Z"
					stroke="black"
					strokeWidth="2"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M17.7405 37.4489C20.6612 43.0645 25.2654 47.8882 28.3918 46.507C29.549 45.9908 31.0233 45.1816 33.4213 47.8604L40.1202 55.3314C42.4694 57.9508 36.9067 60.9714 32.888 61.5609C20.3231 63.399 11.9617 52.7608 6.9671 42.7156C2.11549 32.6007 -1.12938 19.4618 8.04069 10.6721C10.9754 7.86102 16.775 5.32871 17.3954 8.79223L19.1695 18.6699C19.804 22.2102 18.2633 22.8764 17.1444 23.4728C14.1331 25.0913 15.109 31.6904 17.7405 37.4489Z"
					stroke="black"
					strokeWidth="2"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M49.4502 40.229L49.461 40.2075"
					stroke="black"
					strokeWidth="2"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
		</svg>
	),
	support: (
		<svg
			width="52"
			height="64"
			viewBox="0 0 52 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M42 43V58C42 60.8 39.8 63 37 63H13C10.2 63 8 60.8 8 58V41"
				stroke="#232323"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8 17V6C8 3.2 10.2 1 13 1H37C39.8 1 42 3.2 42 6V18"
				stroke="#232323"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M42 9H8"
				stroke="#232323"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M42 55H8"
				stroke="#232323"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M21 59H29"
				stroke="#232323"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M38 43C45.1797 43 51 37.1797 51 30C51 22.8203 45.1797 17 38 17C30.8203 17 25 22.8203 25 30C25 37.1797 30.8203 43 38 43Z"
				stroke="#232323"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M40 32L32 36L36 28L44 24L40 32Z"
				stroke="#232323"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M38 20V23"
				stroke="#232323"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M28 30H31"
				stroke="#232323"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M48 30H45"
				stroke="#232323"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M38 40V37"
				stroke="#232323"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M42 34L43 35"
				stroke="#232323"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M34 26L33 25"
				stroke="#232323"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M38 31C38.5523 31 39 30.5523 39 30C39 29.4477 38.5523 29 38 29C37.4477 29 37 29.4477 37 30C37 30.5523 37.4477 31 38 31Z"
				fill="#232323"
			/>
			<path
				d="M21 43L11 40V16L21 19V43Z"
				stroke="#232323"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M11 40L1 43V19L11 16V40Z"
				stroke="#232323"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M30 40.3L21 43V19L31 16V19"
				stroke="#232323"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M1 35L7 31"
				stroke="#232323"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7 31H11"
				stroke="#232323"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7 31L1 23"
				stroke="#232323"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M11 31L21 21"
				stroke="#232323"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16 26V18"
				stroke="#232323"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14 28L21 37"
				stroke="#232323"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M21 28.9998L25.3 27.2998"
				stroke="#232323"
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	),
	emergency: (
		<svg
			width="65"
			height="65"
			viewBox="0 0 65 65"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<mask
				id="mask0_27_9428"
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="65"
				height="65"
			>
				<path
					d="M0 0.000366211H64.6666V64.667H0V0.000366211Z"
					fill="white"
				/>
			</mask>
			<g mask="url(#mask0_27_9428)">
				<path
					d="M29.5547 39.302V22.8607C29.5547 21.3261 30.7988 20.0821 32.3333 20.0821C33.8679 20.0821 35.112 21.3261 35.112 22.8607V42.251"
					stroke="black"
					strokeWidth="2"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M35.1123 40.3496V33.4864C35.1123 31.9518 36.3564 30.7077 37.8909 30.7077C39.4255 30.7077 40.6696 31.9518 40.6696 33.4864V40.3496"
					stroke="black"
					strokeWidth="2"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M40.6709 42.564V33.4866C40.6709 31.9521 41.915 30.708 43.4495 30.708C44.9841 30.708 46.2282 31.9521 46.2282 33.4866V42.564"
					stroke="black"
					strokeWidth="2"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M46.2266 40.3499V36.1358C46.2266 34.6011 47.4706 33.3572 49.0052 33.3572C50.5398 33.3572 51.7839 34.6011 51.7839 36.1358V42.564"
					stroke="black"
					strokeWidth="2"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M29.5555 32.6092V42.5447C29.5555 43.3511 28.4884 43.638 28.084 42.9404L26.5286 40.2567C25.7512 38.9156 24.1459 38.2956 22.6689 38.7661C20.7648 39.3726 19.8313 41.5178 20.6855 43.3244L22.5813 47.3345C23.9826 50.2987 25.8862 52.9982 28.2079 55.3133L30.6583 57.7567V63.4038"
					stroke="black"
					strokeWidth="2"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M51.785 42.2511V47.3003C51.785 50.1713 50.6418 52.9239 48.608 54.9502L45.8223 57.7256V63.4038"
					stroke="black"
					strokeWidth="2"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M56.2627 16.6733H61.5102"
					stroke="black"
					strokeWidth="2"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M55.2041 23.4568L57.3175 25.5723"
					stroke="black"
					strokeWidth="2"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M57.316 7.77159L55.2148 9.87061"
					stroke="black"
					strokeWidth="2"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M8.40567 16.6733H3.1582"
					stroke="black"
					strokeWidth="2"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M9.46107 23.4568L7.34766 25.5723"
					stroke="black"
					strokeWidth="2"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M7.35059 7.77159L9.45175 9.87061"
					stroke="black"
					strokeWidth="2"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M35.4944 32.0811H35.1123"
					stroke="black"
					strokeWidth="2"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M41.0521 32.0811H40.2881"
					stroke="black"
					strokeWidth="2"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M38.0176 1.26366H42.6908C45.481 1.26366 47.7428 3.5256 47.7428 6.31574V27.0293C47.7428 28.8815 46.7462 30.5008 45.2599 31.3804"
					stroke="black"
					strokeWidth="2"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M29.5547 32.0811H21.9759C19.1858 32.0811 16.9238 29.8191 16.9238 27.029V6.31545C16.9238 3.52531 19.1858 1.26337 21.9759 1.26337H26.6491"
					stroke="black"
					strokeWidth="2"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M35.1133 23.1096C37.602 22.0335 39.3437 19.5563 39.3437 16.6724C39.3437 12.8011 36.2053 9.6626 32.334 9.6626C28.4626 9.6626 25.3242 12.8011 25.3242 16.6724C25.3242 19.5571 27.0666 22.0348 29.5563 23.1104"
					stroke="black"
					strokeWidth="2"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
		</svg>
	),
};

const data = [
	{
		icon: icons.gps,
		title: "GPS Tracking",
		text: "All our cars and rides are tracked by GPS from start to finish so there’s a record of your trip if something happens.",
	},
	{
		icon: icons.trip,
		title: "24/7 support line",
		text: "All our customer support agents are ready to respond to emergency situations. Feel free to call us anytime.",
	},
	{
		icon: icons.support,
		title: "Trip sharing",
		text: "You can easily share your trip status with friends and family in your contacts list in advance or during the ride.",
	},
	{
		icon: icons.emergency,
		title: "Emergency button",
		text: "We have designed an in-app emergency button to request help if you need it. It connects to our call center.",
	},
];

export default Safety;
