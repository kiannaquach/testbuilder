// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var onePrefix = cardNumber.substring(0,1);
  var twoPrefix = cardNumber.substring(0,2);
  var threePrefix = cardNumber.substring(0,3);
  var fourPrefix = cardNumber.substring(0,4);
  var fivePrefix = cardNumber.substring(0,5);
  var sixPrefix = cardNumber.substring(0,6);

  if (twoPrefix === '38' || twoPrefix === '39' && cardNumber.length === 14) {
  	return "Diner's Club";
  }

  if (twoPrefix === '34' || twoPrefix === '37' && cardNumber.length === 15) {
  	return "American Express"
  }

  // use string.indexOf to make sure cardNumber doesn't have prefix '4905', '4911', '4936' in Switch 
  // if cardNumber does not have prefix '4905', '4911', '4936'
    // indexOf returns -1
  if (onePrefix === '4' && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) && (cardNumber.indexOf('4903') === -1 && cardNumber.indexOf('4905') === -1 && cardNumber.indexOf('4911') === -1 && cardNumber.indexOf('4936') === -1)) {
  	return "Visa"
  }

  if (twoPrefix === '51' || twoPrefix === '52' || twoPrefix === '53' || twoPrefix === '54' || twoPrefix === '55' && cardNumber.length === 16) {
  	return "MasterCard";
  }

  if ((twoPrefix === '65' || threePrefix === '644' || threePrefix === '645' || threePrefix === '646' || threePrefix === '647' || threePrefix === '648' || threePrefix === '649' || fourPrefix === '6011') && (cardNumber.length === 16 || cardNumber.length === 19)) {
		return "Discover"
  }

  if ((fourPrefix === '5018' || fourPrefix === '5020' || fourPrefix === '5038' || fourPrefix === '6304') && (cardNumber.length >= 12 && cardNumber.length <= 19)) {
		return "Maestro"
  }

  // China UnionPay
  // change prefix to numbers so you can create a range 624-626, 6282-6288, 622126-622925
  // length 16-19 make sure length is > 16, < 20 
  if (((parseInt(threePrefix) >= 624 && parseInt(threePrefix) <= 626) || (parseInt(fourPrefix) >= 6282 && parseInt(fourPrefix) <= 6288) || (parseInt(sixPrefix) >= 622126 && parseInt(sixPrefix) <= 622925)) && (cardNumber.length >= 16 && cardNumber.length < 20)) {
      return "China UnionPay";
  }

  // Switch
  // 4903, 4905, 4911, 4936, 6333, 6759, 564182, or 633110
  // length 16, 18, or 19
  if ((fourPrefix === '4903' || fourPrefix === '4905' || fourPrefix === '4911' || fourPrefix === '4936' || fourPrefix === '6333' || fourPrefix === '6759' || sixPrefix === '564182' || sixPrefix === '633110') &&
    (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {
      return "Switch"
  }

};

// console.log(detectNetwork('38345678901234')) // (Diner's Club)
// console.log(detectNetwork('39345678901234')) // (Diner's Club)
// console.log(detectNetwork('343456789012345')) // (American Express)
// console.log(detectNetwork('373456789012345')) //(American Express)
// console.log(detectNetwork('4123456789012')) //(Visa)
console.log(detectNetwork('4123456789012345')) // (Visa) same length as Switch
// console.log(detectNetwork('4123456789012345678')) // (Visa)
// console.log(detectNetwork('5112345678901234')) // (MasterCard)
// console.log(detectNetwork('5212345678901234')) // (MasterCard)
// console.log(detectNetwork('5312345678901234')) // (MasterCard)
// console.log(detectNetwork('5412345678901234')) // (MasterCard)
// console.log(detectNetwork('5512345678901234')) // (MasterCard)
// console.log(detectNetwork('6011234567892345')) // (Discover)
// console.log(detectNetwork('6011234567892345876')) // (Discover)
// console.log(detectNetwork('6011234567892345876')) // (Discover)
// console.log(detectNetwork('6304123456789123456')) // (Maestro)
// console.log(detectNetwork('5018123456789123456')) // (Maestro)
console.log(detectNetwork('4903123456789123')) //(Switch) // compare with Visa

