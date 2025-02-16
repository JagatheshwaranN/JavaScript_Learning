// Each function instance manages its own scope and closure. Therefore, it is
// unwise to unnecessarily create functions within other functions if closures
// are not needed for a particular task, as it will negatively affect script
// performance both in terms of processing speed and memory consumption.

// For instance, when creating a new object/class, methods should normally be
// associated to the object's prototype rather than defined into the object
// constructor. The reason is that whenever the constructor is called, the methods
// would get reassigned (that is, for every object creation).

function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
  this.getName = function () {
    return this.name;
  };
  this.getMessage = function () {
    return this.message;
  };
}

// Because the previous code does not take advantage of the benefits of using closures
// in this particular instance, we could instead rewrite it to avoid using closures as
// follows:

function MyObject1(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}

MyObject1.prototype = {
  getName() {
    return this.name;
  },
  getMessage() {
    return this.message;
  },
};

// Redefining the prototype is not recommended. The following example instead
// appends to the existing prototype:

function MyObject2(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}

MyObject2.prototype.getName = function () {
  return this.name;
};

MyObject2.prototype.getMessage = function () {
  return this.message;
};
