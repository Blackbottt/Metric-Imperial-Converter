function numberStringSplitter(input) {
  let number = input.match(/[.\d\/]+/g) || ["1"];
  let string = input.match(/[a-zA-Z]+/g)[0];
  return [number[0], string];
}
function checkDiv(possibleFraction) {
  let nums = possibleFraction.split("/");
  if (nums.length > 2) {
    return false;
  }
  return nums;
}
function ConvertHandler() {
  this.getNum = function (input) {
    let result = numberStringSplitter(input)[0];
    let nums = checkDiv(result);
    if (!nums) {
      return undefined;
    }
    let num1 = nums[0];
    let num2 = nums[1] || "1";
    result = parseFloat(num1) / parseFloat(num2);
    if (isNaN(num1) || isNaN(num2)) {
      return undefined;
    }
    return result;
  };

  this.getUnit = function (input) {
    let result = numberStringSplitter(input)[1].toLowerCase();
    switch (result) {
      case "km":
        return "km";
      case "gal":
        return "gal";
      case "lbs":
        return "lbs";
      case "mi":
        return "mi";
      case "l":
        return "L";
      case "kg":
        return "kg";
      default:
        return undefined;
    }
  };

  this.getReturnUnit = function (initUnit) {
    let unit = initUnit.toLowerCase();

    switch (unit) {
      case "km":
        return "mi";
      case "gal":
        return "L";
      case "lbs":
        return "kg";
      case "mi":
        return "km";
      case "l":
        return "gal";
      case "kg":
        return "lbs";
      default:
        return undefined;
    }
  };

  this.spellOutUnit = function (initUnit) {
    let unit = initUnit.toLowerCase();

    switch (unit) {
      case "km":
        return "kilometers";
      case "gal":
        return "gallons";
      case "lbs":
        return "pounds";
      case "mi":
        return "miles";
      case "l":
        return "liters";
      case "kg":
        return "kilograms";
      default:
        return "don't know";
    }
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let unit = initUnit.toLowerCase();
    let result;

    switch (unit) {
      case "km":
        result = initNum / miToKm;
        break;
      case "gal":
        result = initNum * galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      default:
        result = undefined;
    }
    return parseFloat(result.toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    // let preciseInitNum = parseFloat(initNum.toFixed(5));
    // let preciseReturnNum = parseFloat(returnNum.toFixed(5));

    return `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
// // const { init } = require("../server");

// function numberStringSplitter(input) {
//   let num = input.match(/[.\d\/]+/g) || ['1'];
//   let string = input.match(/[a-zA-Z]+/g) || [0];
//   return [num, string];
// }

// function isDiv(input) {
//   let div = input[0].split('/');
//   if(div.length > 2){
//     return false;
//   }
//   return div;
// }

// function ConvertHandler() {
  
//   this.getNum = function(input) {
//     let result = numberStringSplitter(input)[0];
//     console.log('INPUT: ', result);
//     let num = isDiv(result);
//     if(!num) {
//       return undefined;
//     }
//     let num1 = num[0];
//     let num2 = num[1] || '1';

//     result = parseFloat(num1) / parseFloat(num2);
//     if(isNaN(num1) || isNaN(num2)) {
//       return undefined;
//     }
//     return result;
//   };
  
//   this.getUnit = function(input) {
//     let result = numberStringSplitter(input)[1];
//     if(result[0]){
//       (result[0] == 'L') ? result = result[0] : 
//       result = result[0].toLowerCase();
//     } else {
//       return undefined;
//     }
//     console.log('zzzz',result);
//     switch(result) {
//       case 'mi': 
//         return 'mi'
//       case 'gal': 
//         return'gal'
//       case 'lbs': 
//         return 'lbs'
//        case 'km': 
//         return 'km'
//       case 'L': 
//         return 'L'
//       case 'kg': 
//         return 'kg'
//       default:
//         return undefined;
//     }
//   };
  
//   this.getReturnUnit = function(initUnit) {
//     let result;
//     (initUnit == 'L') ? result = initUnit :
//     result = initUnit.toLowerCase();
//     switch(result) {
//       case 'mi': 
//         return 'km'
//         break;
//       case 'gal': 
//         return 'L'
//         break;
//       case 'lbs': 
//         return 'kg'
//         break;
//       case 'km': 
//         return 'mi'
//         break;
//       case 'L': 
//         return 'gal'
//         break;
//       case 'kg': 
//         return 'lbs'
//         break;
//       default:
//         return undefined;
//     }
//   };

//   this.spellOutUnit = function(initUnit) {
//     let result;
//     (initUnit == 'L') ? result = initUnit :
//     result = initUnit.toLowerCase();
//     switch(result) {
//       case 'mi': 
//         result = 'miles'
//         break;
//       case 'gal': 
//         result = 'gallons'
//         break;
//       case 'lbs': 
//         result = 'pounds'
//         break;
//       case 'km': 
//         result = 'kilometers'
//         break;
//       case 'L': 
//         result = 'litres'
//         break;
//       case 'kg': 
//         result = 'kilograms'
//         break;
//     }
//     return result;
//   };
  
//   this.convert = function(initNum, initUnit) {
//     const galToL = 3.78541;
//     const lbsToKg = 0.453592;
//     const miToKm = 1.60934;
//     // let result2 = initUnit;
//     switch(initUnit) {
//       case 'mi': 
//         result = initNum * miToKm;
//         break;
//       case 'gal': 
//         result = initNum * galToL;
//         break;
//       case 'lbs': 
//         result = initNum * lbsToKg;
//         break;
//       case 'km': 
//         result = initNum / miToKm;
//         break;
//       case 'L': 
//         result = initNum / galToL;
//         break;
//       case 'kg': 
//         result = initNum / lbsToKg;
//         break;
//     }
//     return parseFloat(result.toFixed(5));
//   };
  
//   this.getString = function(initNum, initUnit, returnNum, returnUnit) {
//     return ` ${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)} `;
//   };
  
// }

// module.exports = ConvertHandler;
