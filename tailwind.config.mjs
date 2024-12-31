module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "2rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
			},
		},
		extend: {
			colors: {
				primary: "#000000",
			},
			fontFamily: {
				sfPro: ['"SF Pro Display"', "sans-serif"],
				uberMove: ['"Uber Move"', "sans-serif"],
				inter: ['"Inter"', "sans-serif"],
			},
			backgroundImage: {
				"gradient-radial":
					"linear-gradient(180deg, #10014C 0%, #43659C 27%, #5078B1 67%, #298ED1 100%)",
				"partner-gradient":
					"linear-gradient(0deg, #F2F2F2 1.34%, #2A54EF 17.62%, #234BD4 43.74%, #113286 66.79%, #0B2146 87.79%)",
				"about-banner":
					"linear-gradient(180deg, #0F054A 44.39%, #001CBC 59.89%, #005170 72.39%, #00686F 92.89%)",
				"mykonos-gradient":
					" linear-gradient(196.68deg, #2A54EF 1.99%, #234BD4 27.41%, #113286 55.99%, #0B2146 83.08%)",
			},
			boxShadow: {
				card: "4px 4px 4px rgba(0, 0, 0, 0.56)",
				btn: "4px 4px 4px rgba(0, 0, 0, 0.25)",
				text: "0 2px 4px rgba(0, 0, 0, 0.4)",
				"text-lg": "0 4px 6px rgba(0, 0, 0, 0.5)",
			},
		},
	},
	darkMode: "selector",
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				".text-shadow": {
					textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
				},
				".text-shadow-lg": {
					textShadow: "4px 4px 6px rgba(0, 0, 0, 0.5)",
				},
			});
		},
	],
};
