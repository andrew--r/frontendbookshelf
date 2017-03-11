import path from 'path';

export default {
	source: {
		base: path.resolve(__dirname, '../source'),
		templates: {
			blocks: path.resolve(__dirname, '../source/blocks'),
			layouts: path.resolve(__dirname, '../source/layouts'),
			pages: path.resolve(__dirname, '../source/pages'),
		},
		scripts: path.resolve(__dirname, '../source/scripts'),
		styles: {
			common: path.resolve(__dirname, '../source/styles'),
			blocks: path.resolve(__dirname, '../source/blocks'),
		},
		images: {
			site: path.resolve(__dirname, '../source/images'),
			booksCovers: path.resolve(__dirname, '../node_modules/frontendbookshelf-data/data/covers'),
		},
		data: path.resolve(__dirname, '../source/data'),
	},
	build: {
		templates: path.resolve(__dirname, '../build'),
		scripts: path.resolve(__dirname, '../build'),
		styles: path.resolve(__dirname, '../build'),
		images: path.resolve(__dirname, '../build/images'),
	},
};
