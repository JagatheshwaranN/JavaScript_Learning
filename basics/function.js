function samsung() {
    console.log("Samsung is a mobile phone company")
}

samsung()

var a = 10
var b = 20
function add() {
    console.log(a+b)
}

add()

var food = 'Biryani'
function favourite() {
    console.log('Favourite Food : '+food)
}

favourite()

function calculateArea(length, bredth){
    console.log("Area is : " + length * bredth)
}

var l = 10
var b = 20
calculateArea(l, b)

function returnValue() {
    return "Hey John!"
}

var message = returnValue()
console.log(message)

function sum(num1, num2){
    return num1 + num2
}

var n1 = 10
var n2 = 20
var total = sum(n1, n2)
console.log(total)

const seconds_in_hours = (hour) => {
    let minutes = hour * 60
    let seconds = minutes * 60
    return seconds
}

console.log(seconds_in_hours(2))