// Arrow function with Implicit return
const sum = (a, b) => a + b

function calculateTotalAmount(food_amount, tip_percent) {
    let tip_percentage = tip_percent / 100
    let tip_amount = food_amount * tip_percentage
    let total_amount = sum(food_amount, tip_amount)
    console.log(total_amount)
}

calculateTotalAmount(100, 30)

// Arrow function with Explicit return
const add = (a, b) => {
    return a + b
}

const sub = (a, b) => a - b

const mul = (a, b) => a * b

const div = (a, b) => a / b

console.log(add(10, 5))
console.log(sub(10, 5))
console.log(mul(10, 5))
console.log(div(10, 5))

