// What happens if you define a property in an object, when a property
// with the same name is defined in the object's prototype?

const myDate = new Date(2025, 2, 25);
console.log(myDate.getTime()); // 1742841000000

myDate.getTime = function () {
  console.log("Dummy Get Time");
};
myDate.getTime(); // Dummy Get Time

// Reason
// This should be predictable, given the description of the prototype chain. When
// we call getTime() the browser first looks in myDate for a property with that name,
// and only checks the prototype if myDate does not define it. So when we add getTime()
// to myDate, then the version in myDate is called.

// This is called "shadowing" the property.