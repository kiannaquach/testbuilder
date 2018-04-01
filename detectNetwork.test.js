/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  // DON'T WANT IT TO FAIL
  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    // DON'T WANT TO THROW ERROR SINCE 10 IS EVEN
    if(even(10) === true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    // throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  // missing 1 num in cardNumber
  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  // var expect = chai.expect;
  
  // it('has a prefix of 54 and a length of 16', function() {
  //   expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  // });
 
  // it('has a prefix of 55 and a length of 16', function() {
  //   expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  // })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect;



  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6511345678901234')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6511345678901234567')).to.equal('Discover');
  });

  for (var prefix = 644; prefix < 650; prefix++) {
    (function(prefix) {
      it ('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + '1345678901234')).to.equal('Discover')
      }); 

      it ('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '1345678901234567')).to.equal('Discover')
      });
    })(prefix)
  }
  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011345678901234')).to.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011345678901234567')).to.equal('Discover');
  });
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card

  var expect = chai.expect;
  var lengthCardNumber = function(length) {
    var cardNumber = '';
    for (var i = 4; i < length; i++) {
      // start at 4 => Maestro prefix is four and add num to what every length is
      cardNumber += '8';
    }
    return cardNumber;
  }

  for (var length = 12; length < 20; length++) {
    (function(length) {
      it ('has a prefix of 5018 and a length of ' + length, function() {
        expect(detectNetwork('5018' + lengthCardNumber(length))).to.equal('Maestro')
      }); 

      it ('has a prefix of 5020 and a length of ' + length, function() {
        expect(detectNetwork('5020' + lengthCardNumber(length))).to.equal('Maestro')
      });

      it ('has a prefix of 5038 and a length of ' + length, function() {
        expect(detectNetwork('5038' + lengthCardNumber(length))).to.equal('Maestro')
      });      

      it ('has a prefix of 6304 and a length of ' + length, function() {
        expect(detectNetwork('6304' + lengthCardNumber(length))).to.equal('Maestro')
      });
    })(length)
  }
});

describe('should support China UnionPay', function() {
  // range 624-626, 6282-6288, 622126-622925
  // length 16-19 make sure length is > 16, < 20 
  var expect = chai.expect;

  var lengthCardNumberThreePrefix = function(length) {
    var cardNumber = '';
    for (var i = 3; i < length; i++) {
      cardNumber += '8';
    }
    return cardNumber;
  }

  for (var prefix = 624; prefix < 627; prefix++) {
    for (var length = 16; length < 20; length++) {
      (function(prefix) {
        (function(length) {

          it ('has a prefix of ' + prefix + ' and a length of ' + length, function() {
            expect(detectNetwork(prefix + lengthCardNumberThreePrefix(length))).to.equal('China UnionPay')
          }); 

        })(length)
      })(prefix)
    }
  }

  var lengthCardNumberFourPrefix = function(length) {
    var cardNumber = '';
    for (var i = 4; i < length; i++) {
      cardNumber += '8';
    }
    return cardNumber;
  }

  for (var prefix = 6282; prefix < 6289; prefix++) {
    for (var length = 16; length < 20; length++) {
      (function(prefix) {
        (function(length) {

          it ('has a prefix of ' + prefix + ' and a length of ' + length, function() {
            expect(detectNetwork(prefix + lengthCardNumberFourPrefix(length))).to.equal('China UnionPay')
          }); 

        })(length)
      })(prefix)
    }
  }

  var lengthCardNumberSixPrefix = function(length) {
    var cardNumber = '';
    for (var i = 6; i < length; i++) {
      cardNumber += '8';
    }
    return cardNumber;
  }

  for (var prefix = 622126; prefix < 622926; prefix++) {
    for (var length = 16; length < 20; length++) {
      (function(prefix) {
        (function(length) {

          it ('has a prefix of ' + prefix + ' and a length of ' + length, function() {
            expect(detectNetwork(prefix + lengthCardNumberSixPrefix(length))).to.equal('China UnionPay')
          }); 

        })(length)
      })(prefix)
    }
  }

})
describe('should support Switch', function() {
  // 4903, 4905, 4911, 4936, 6333, 6759, 564182, or 633110
  // length 16, 18, or 19
  var expect = chai.expect;

  var lengthCardNumberFourPrefix = function(length) {
    var cardNumber = '';
    for (var i = 4; i < length; i++) {
      // start at 4 => Maestro prefix is four and add num to what every length is
      cardNumber += '8';
    }
    return cardNumber;
  }
  it ('has a prefix of 4903 and a length of 16', function() {
    expect(detectNetwork('4903' + lengthCardNumberFourPrefix(16))).to.equal('Switch')
  }); 

  for (var length = 18; length < 20; length++) {
    (function(length) {

      it ('has a prefix of 4903 and a length of ' + length, function() {
        expect(detectNetwork('4903' + lengthCardNumberFourPrefix(length))).to.equal('Switch')
      }); 

    })(length)
  }

  it ('has a prefix of 4905 and a length of 16', function() {
    expect(detectNetwork('4905' + lengthCardNumberFourPrefix(16))).to.equal('Switch')
  }); 

 
  for (var length = 18; length < 20; length++) {
    (function(length) {

      it ('has a prefix of 4905 and a length of ' + length, function() {
        expect(detectNetwork('4905' + lengthCardNumberFourPrefix(length))).to.equal('Switch')
      }); 

    })(length)
  }

  it ('has a prefix of 4911 and a length of 16', function() {
    expect(detectNetwork('4911' + lengthCardNumberFourPrefix(16))).to.equal('Switch')
  }); 

  for (var length = 18; length < 20; length++) {
    (function(length) {

      it ('has a prefix of 4911 and a length of ' + length, function() {
        expect(detectNetwork('4911' + lengthCardNumberFourPrefix(length))).to.equal('Switch')
      }); 

    })(length)
  }

  it ('has a prefix of 4936 and a length of 16', function() {
    expect(detectNetwork('4936' + lengthCardNumberFourPrefix(16))).to.equal('Switch')
  }); 

  for (var length = 18; length < 20; length++) {
    (function(length) {

      it ('has a prefix of 4936 and a length of ' + length, function() {
        expect(detectNetwork('4936' + lengthCardNumberFourPrefix(length))).to.equal('Switch')
      }); 

    })(length)
  }

  it ('has a prefix of 6333 and a length of 16', function() {
    expect(detectNetwork('6333' + lengthCardNumberFourPrefix(16))).to.equal('Switch')
  }); 

  for (var length = 18; length < 20; length++) {
    (function(length) {

      it ('has a prefix of 6333 and a length of ' + length, function() {
        expect(detectNetwork('6333' + lengthCardNumberFourPrefix(length))).to.equal('Switch')
      }); 

    })(length)
  }

  it ('has a prefix of 6759 and a length of 16', function() {
    expect(detectNetwork('6759' + lengthCardNumberFourPrefix(16))).to.equal('Switch')
  }); 

  for (var length = 18; length < 20; length++) {
    (function(length) {

      it ('has a prefix of 6759 and a length of ' + length, function() {
        expect(detectNetwork('6759' + lengthCardNumberFourPrefix(length))).to.equal('Switch')
      }); 

    })(length)
  }


  var lengthCardNumberSixPrefix = function(length) {
    var cardNumber = '';
    for (var i = 6; i < length; i++) {
      // start at 4 => Maestro prefix is four and add num to what every length is
      cardNumber += '8';
    }
    return cardNumber;
  }

  it ('has a prefix of 564182 and a length of 16', function() {
    expect(detectNetwork('564182' + lengthCardNumberSixPrefix(16))).to.equal('Switch')
  }); 

  for (var length = 18; length < 20; length++) {
    (function(length) {

      it ('has a prefix of 564182 and a length of ' + length, function() {
        expect(detectNetwork('564182' + lengthCardNumberSixPrefix(length))).to.equal('Switch')
      }); 

    })(length)
  }

  it ('has a prefix of 633110 and a length of 16', function() {
    expect(detectNetwork('633110' + lengthCardNumberSixPrefix(16))).to.equal('Switch')
  });

  for (var length = 18; length < 20; length++) {
    (function(length) {

      it ('has a prefix of 633110 and a length of ' + length, function() {
        expect(detectNetwork('633110' + lengthCardNumberSixPrefix(length))).to.equal('Switch')
      }); 

    })(length)
  }
})