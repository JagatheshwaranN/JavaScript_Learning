// Closure Scope Chain

// Anonymous Function

const e = 5;
function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4));

// Named Function
// Global scope
const f = 10;
function sum1(a) {
  return function sum2(b) {
    return function sum3(c) {
        // Outer function scope
      return function sum4(d) {
        // Local scope
        return a + b + c + d + f;
      };
    };
  };
}

const sum2 = sum1(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);
console.log(result);

// Closure over Blocked Scope
function outer (){
    let getY;
    {
        const y = 6;
        getY = () => y;
    }
    console.log(typeof y);
    console.log(getY());
}

outer()
