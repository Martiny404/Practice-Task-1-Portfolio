const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
	theme: {
		extend: {
			zIndex: {
				1: 1,
				2: 2,
				3: 3,
				4: 4,
				5: 5,
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		plugin(({ addComponents, addUtilities, theme }) => {
			addUtilities({
				'.main-shadow': {
					boxShadow: '0 1px 2px 0 rgb(0 0 0 / 16%)',
				},
				'.modal-shadow': {
					boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
				},
			});
		}),
	],
};
