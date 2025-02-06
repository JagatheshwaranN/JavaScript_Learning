// JSON

const student = {
    studentName: "John",
    rollNo: 1001,
    sports: {
      indoor: "chess",
      outdoor: "basket ball",
    },
    hobbies: ["craft Work", "painting"],
    greeting: function() {
      return "Thank You!"
    }
  };

console.log(student);
console.log(student.studentName);

// To convert Object -> JSON use stringify function
const sendJSON = JSON.stringify(student);
console.log(sendJSON);
  
console.log(typeof student); // object
console.log(typeof sendJSON); // string

// To convert JSON -> Object use parse function
const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(receiveJSON.studentName);
console.log(typeof receiveJSON);