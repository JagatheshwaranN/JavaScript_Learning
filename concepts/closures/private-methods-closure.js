// Emulation of Private Method with Closure

// The shared lexical environment is created in the body of an anonymous function,
// which is executed as soon as it has been defined. The lexical environment contains
// two private items: a variable called privateCounter, and a function called changeBy.
// You can't access either of these private members from outside the anonymous function.
// Instead, you indirectly access them using the three public functions that are returned
// from the anonymous wrapper.

// Those three public functions form closures that share the same lexical environment.

const counter = (function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },
    value() {
      return privateCounter;
    },
  };
})();

// console.log(counter.value());
// counter.increment();
// counter.increment();
// console.log(counter.value());
// counter.decrement();
// console.log(counter.value());


// The two counters maintain their independence from one another. Each closure 
// references a different version of the privateCounter variable through its own
// closure. Each time one of the counters is called, its lexical environment changes
// by changing the value of this variable. Changes to the variable value in one 
// closure don't affect the value in the other closure.
const makeCounter = function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      changeBy(1);
    },
    decrement() {
      changeBy(-1);
    },
    value() {
      return privateCounter;
    },
  };
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.value());
console.log(counter2.value());

counter1.increment();
counter1.increment();
console.log(counter1.value());
counter1.decrement();
console.log(counter1.value());
counter2.increment();
console.log(counter2.value());