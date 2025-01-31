// Numbers
const myNumber = 10;
console.log(myNumber);
const myFloat = 10.05;
console.log(myFloat);
const myStr = "10";
console.log(myStr);

console.log(myFloat === myNumber);
console.log(myStr === myNumber);

// To convert Str to Num
console.log(myStr+2); // 102
console.log(Number(myStr)+2); // 12
console.log(Number("myStr")+2); // NaN

// In JavaScript, true has value as 1 and false has value as 0.
console.log(Number(true)+2); // 3

// Methods
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.05)); // false
console.log(Number.parseFloat("1234.56")); // 1234.56
console.log(Number.parseFloat("1234.56asd")); // 1234.56
console.log(Number.parseInt("1234.56")); // 1234 
console.log(Number.parseInt("1234.56asd")); // 1234
console.log(Number.parseInt("1234aa.56asd")); // 1234
console.log(Number.parseInt("aa1234aa.56asd")); //NaN
console.log(Number.parseFloat("1234.098asd")); // 1234.098
console.log(Number.parseFloat("1234.098asd").toFixed(2)); // 1234.09
console.log(typeof myFloat.toString());
console.log(Number.isNaN(10));
console.log(Number.isNaN("Hello"));
console.log(isNaN("Hai"));