module.exports = function () {
	return {
		plugins: [
			require('postcss-flexbugs-fixes'),
			require('autoprefixer'),
			// config docs: https://github.com/cuth/postcss-pxtorem
			require('postcss-pxtorem')({
				propList: [
					'font',
					'font-size',
					'line-height',
					'letter-spacing',
					'width',
					'height',
					'max-width',
					'max-height',
					'min-width',
					'min-height',
					'padding',
					'margin',
					'margin-top',
					'margin-left',
					'margin-bottom',
					'margin-right',
					'padding-top',
					'padding-left',
					'padding-bottom',
					'padding-right',
					'top',
					'left',
					'bottom',
					'right',
				],
			})
		]
	};
};