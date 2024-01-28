const double_map = (numbers) => {
    return numbers.map(numbers => numbers * 2)
}

console.log(double_map([1, 2, 3, 4, 5]))

const filter_number = (numbers, greaterThan) => {
    return numbers.filter(numbers => numbers > greaterThan)
}

console.log(filter_number([1, 2, 3, 4, 5], 3))

const cars = [
    { brand: 'Audi', price: 2000000 },
    { brand: 'BMW', price: 3000000 },
    { brand: 'Ford', price: 10000 }

]

let result = cars.filter(cars => cars.price > 10000)
console.log(result)

let cars_brand = result.map(result => result.brand).join(', ')
console.log(cars_brand)

let cars_price = result.map(result => result.price)
console.log(cars_price)

let total_cars_price = cars_price.reduce((prev, curr) => prev + curr)
console.log(total_cars_price)
// To print the Json Object on HTML, <h1>${JSON.stringify(result)}</h1>

const numbers = [1, 2, 3, 4, 5]
let value = numbers.reduce((prev, curr) => prev + curr)
console.log(value)

function sum(a, b) {
    return a + b
}

function product(a, b) {
    return a * b
}

let value_of_sum = numbers.reduce(sum)
console.log(value_of_sum)

let value_of_product = numbers.reduce(product)
console.log(value_of_product)
