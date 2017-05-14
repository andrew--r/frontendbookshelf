import jimp from 'jimp';

/**
 * Converts jimp image to buffer asynchronously
 *
 * @param {JIMPImage} image
 * @param {Object} options
 * @param {JIMPMimeType} options.mimeType
 * @return {Promise} resolve -> Buffer, reject -> error
 */
export default function jimpImageToBuffer(image, options = {}) {
	const { mimeType = jimp.AUTO } = options;

	return new Promise((resolve, reject) => {
		image.getBuffer(mimeType, (error, buffer) => {
			if (error) {
				reject(error);
			} else {
				resolve(buffer);
			}
		});
	});
}
