/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  suite("Function convertHandler.getNum(input)", function () {
    test("Whole number input", function (done) {
      let input = "32L";
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });

    test("Decimal Input", function (done) {
      let input = "32.2L";
      assert.equal(convertHandler.getNum(input), 32.2);
      done();
    });

    test("Fractional Input", function (done) {
      let input = "32/3L";
      assert.equal(convertHandler.getNum(input), 32 / 3);
      done();
    });

    test("Fractional Input w/ Decimal", function (done) {
      let input = "9/3.3L";
      assert.equal(convertHandler.getNum(input), 9 / 3.3);
      done();
      //done();
    });

    test("Invalid Input (double fraction)", function (done) {
      let input = "32/3/3L";
      assert.equal(convertHandler.getNum(input), undefined);
      done();
    });

    test("No Numerical Input", function (done) {
      let input = "L";
      assert.equal(convertHandler.getNum(input), 1);
      done();
    });
  });

  suite("Function convertHandler.getUnit(input)", function () {
    test("For Each Valid Unit Inputs", function (done) {
      let input = [
        "gal",
        "l",
        "mi",
        "km",
        "lbs",
        "kg",
        "GAL",
        "L",
        "MI",
        "KM",
        "LBS",
        "KG",
      ];
      let output = [
        "gal",
        "L",
        "mi",
        "km",
        "lbs",
        "kg",
        "gal",
        "L",
        "mi",
        "km",
        "lbs",
        "kg",
      ];
      input.forEach(function (ele, index) {
        assert.equal(convertHandler.getUnit(ele), output[index]);
      });
      done();
    });

    test("Unknown Unit Input", function (done) {
      assert.equal(convertHandler.getUnit("34kilograms"), undefined);
      done();
    });
  });

  suite("Function convertHandler.getReturnUnit(initUnit)", function () {
    test("For Each Valid Unit Inputs", function (done) {
      let input = ["gal", "l", "mi", "km", "lbs", "kg"];
      let expect = ["L", "gal", "km", "mi", "kg", "lbs"];
      input.forEach(function (ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
  });

  suite("Function convertHandler.spellOutUnit(unit)", function () {
    test("For Each Valid Unit Inputs", function (done) {
      //see above example for hint
      let input = ["gal", "l", "mi", "km", "lbs", "kg"];
      let expect = [
        "gallons",
        "liters",
        "miles",
        "kilometers",
        "pounds",
        "kilograms",
      ];
      input.forEach(function (ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
  });

  suite("Function convertHandler.convert(num, unit)", function () {
    test("Gal to L", function (done) {
      let input = [5, "gal"];
      let expected = 18.9271;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test("L to Gal", function (done) {
      let input = [5, "l"];
      let expected = 1.32086;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test("Mi to Km", function (done) {
      let input = [5, "mi"];
      let expected = 8.0467;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test("Km to Mi", function (done) {
      let input = [5, "km"];
      let expected = 3.10686;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test("Lbs to Kg", function (done) {
      let input = [5, "lbs"];
      let expected = 2.26796;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test("Kg to Lbs", function (done) {
      let input = [5, "kg"];
      let expected = 11.02312;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });
  });
});
// const chai = require('chai');
// let assert = chai.assert;
// const ConvertHandler = require('../controllers/convertHandler.js');

// let convertHandler = new ConvertHandler();

// suite('Unit Tests', function(){
//     test('whole number', function (done) {
//         let input = '32L';
//         assert.equal(convertHandler.getNum(input), '32');
//         done();
//     });
//     test('decimal number', function (done) {
//         let input = '3.1mi';
//         assert.equal(convertHandler.getNum(input), '3.1');
//         done();
//     });
//     test('fractional input', function (done) {
//         let input = '1/4L';
//         assert.equal(convertHandler.getNum(input), '0.25');
//         done();
//     });
//     test('fractional input with decimal', function (done) {
//         let input = '3.2/5L';
//         assert.equal(convertHandler.getNum(input), '0.64');
//         done();
//     });
//     test('double-fraction error', function (done) {
//         let input = '32/3/5L';
//         assert.equal(convertHandler.getNum(input), undefined);
//         done();
//     });
//     test('no numerical input', function (done) {
//         let input = 'L';
//         assert.equal(convertHandler.getNum(input), '1');
//         done();
//     });
//     test('input unit', function (done) {
//         let input = '32mi';
//         assert.equal(convertHandler.getUnit(input), 'mi');
//         done();
//     });
//     test('invalid input unit', function (done) {
//         let input = '22';
//         assert.equal(convertHandler.getUnit(input), undefined);
//         done();
//     });
//     test('return unit', function (done) {
//         let initUnit = 'L';
//         assert.equal(convertHandler.getReturnUnit(initUnit), 'gal');
//         done();
//     });
//     test('return spelled-out unit', function (done) {
//         let input = 'L';
//         assert.equal(convertHandler.spellOutUnit(input), 'litres');
//         done();
//     });
//     // test('gal to L', function (done) {
//     //     let initNum = '1';
//     //     let initUnit = 'gal';
//     //     assert.approximately(convertHandler.convert(initNum, initUnit), 3.78541, 0.1);
//     //     done();
//     // });
//      test("Gal to L", function (done) {
//       let input = [5, "gal"];
//       let expected = 18.9271;
//       assert.approximately(
//         convertHandler.convert(input[0], input[1]),
//         expected,
//         0.1
//       ); //0.1 tolerance
//       done();
//     });
//     test('L to gal', function (done) {
//         let initNum = '32';
//         let initUnit = 'L';
//         assert.equal(convertHandler.convert(initNum, initUnit), '8.45351');
//         done();
//     });
//     test('mi to km', function (done) {
//         let initNum = '32';
//         let initUnit = 'mi';
//         assert.equal(convertHandler.convert(initNum, initUnit), '51.49888');
//         done();
//     });
//     test('km to mi', function (done) {
//         let initNum = '32';
//         let initUnit = 'km';
//         assert.equal(convertHandler.convert(initNum, initUnit), '19.88393');
//         done();
//     });
//     test('lbs to kg', function (done) {
//         let initNum = '32';
//         let initUnit = 'lbs';
//         assert.equal(convertHandler.convert(initNum, initUnit), '14.51494');
//         done();
//     });
//     test('kg to lbs', function (done) {
//         let initNum = '32';
//         let initUnit = 'kg';
//         assert.equal(convertHandler.convert(initNum, initUnit), '70.54798');
//         done();
//     });
// });