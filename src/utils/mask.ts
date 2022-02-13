/** @format */
import IMask from 'imask';

export function currencyBRL(value: any ) {
	var numberMask = IMask(value, {
		mask: Number, // enable number mask
		// other options are optional with defaults below
		// scale: 2, // digits after point, 0 for integers
		// signed: false, // disallow negative
		// thousandsSeparator: '', // any single char
		// padFractionalZeros: true, // if true, then pads zeros at end to the length of scale
		// normalizeZeros: true, // appends or removes zeros at ends
		// radix: ',', // fractional delimiter
		// mapToRadix: ['.'], // symbols to process as radix
	});
	return numberMask;
}
