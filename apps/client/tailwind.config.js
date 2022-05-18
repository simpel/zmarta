module.exports = {
	content: ['src/**/*', 'index.html'],
	theme: {
		extend: {
			fontFamily: {
				sharp: ['"SharpSansNo1-Book"', 'arial', 'sans-serif'],
			},
			colors: {
				primary: {
					50: '#b3ffdc',
					100: '#a9fad2',
					200: '#9ff0c8',
					300: '#95e6be',
					400: '#8bdcb4',
					500: '#81d2aa',
					600: '#77c8a0',
					700: '#6dbe96',
					800: '#63b48c',
					900: '#59aa82',
				},
			},
		},
	},
	plugins: [],
};
