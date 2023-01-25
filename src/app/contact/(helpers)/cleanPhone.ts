const illegalChars = {
	letters: /[a-zA-Z]/,
	// TODO: update punctuation as needed
	punctuations: /[@:!]/,
};
function toNumeric(phoneNumber: string): string {
	return phoneNumber.replace(/\D/g, "");
}
function toTenDigit(phoneNumber: string): string {
	return phoneNumber.length === 10 ? phoneNumber : phoneNumber.slice(1);
}
export function clean(phoneNumber: string): string {
	if (illegalChars.punctuations.test(phoneNumber))
		throw new Error("Punctuations not permitted");
	if (illegalChars.letters.test(phoneNumber))
		throw new Error("Letters not permitted");
	const numericPhoneNumber = toNumeric(phoneNumber);
	if (numericPhoneNumber.length > 11) throw new Error("More than 11 digits");
	if (numericPhoneNumber.length < 10)
		throw new Error("Incorrect number of digits");
	if (numericPhoneNumber.length === 11 && numericPhoneNumber[0] !== "1")
		throw new Error("11 digits must start with 1");
	const tenDigitPhoneNumber = toTenDigit(numericPhoneNumber);
	if (tenDigitPhoneNumber[0] === "0")
		throw new Error("Area code cannot start with zero");
	if (tenDigitPhoneNumber[0] === "1")
		throw new Error("Area code cannot start with one");
	if (tenDigitPhoneNumber[3] === "0")
		throw new Error("Exchange code cannot start with zero");
	if (tenDigitPhoneNumber[3] === "1")
		throw new Error("Exchange code cannot start with one");
	return tenDigitPhoneNumber;
}
