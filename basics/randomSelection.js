let fruits = ['apple', 'orange', 'mango', 'grapes']

const randomFruit = (fruits) => {
    const random_number = Math.floor(Math.random() *fruits.length)
    return fruits[random_number]
}

console.log(randomFruit(fruits))