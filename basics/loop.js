for (count = 1; count <= 5; count++) {
    console.log(count)
}

for (count = 1; count <= 5; count = count + 2) {
    console.log(count)
}

for (count = 5; count >= 1; count--) {
    console.log(count)
}

for (count = 1; count <= 10; count++) {
    if (count % 2 == 0) {
        console.log(count)
    }
}

var table = 2
for (count = 1; count <= 10; count++) {
    console.log(count + 'x' + table + '=' + count * table)
}

var fruits = ['Apple', 'Orange', 'Grapes', 'Mango', 'Banana']
for (count = 0; count < fruits.length; count++) {
    console.log(fruits[count])
}

// Enhanced For Loop
for (const fruit of fruits) {
    console.log(fruit)
}

const double = (numbers) => {
    let result = []
    for (const number of numbers) {
        result.push(number * 2)
    }
    return result
}

console.log(double([1, 2, 3, 4, 5]))

const letter_printer = (sentence) => {
    for (const letter of sentence) {
        console.log(letter)
    }
}

letter_printer('Hey! how are you?')

let result = 0
const letter_counter = (sentence) => {
    for (const letter in sentence) {
        // console.log(Number(letter) + 1)
        result = Number(letter) + 1
    }
    return { result }
}

console.log(letter_counter('Hey! how are you?'))

let show = 0
const sumArray = (numbers) => {
    for (const number of numbers) {
        show = show + number
    }
    return { show }
}

console.log(sumArray([1, 2, 3, 4]))

let max = 0
const max_number = (numbers) => {
    max = numbers[0]
    for (let number of numbers) {
        if (number > max) {
            max = number
        }
    }
    return { max }
}

console.log(max_number([1, 2, 3, 4, 2, 10]))

let frequency = {}
const letter_frequency_count = (phrase) => {
    for (let letter of phrase) {
        if (letter in frequency) {
            frequency[letter] += 1
        } else {
            frequency[letter] = 1
        }
    }
    return frequency
}

console.log(letter_frequency_count('haha'))

const word_frequency_count = (phrase) => {
    const words = phrase.split(' ')
    return letter_frequency_count(words)
}

console.log(word_frequency_count('Hey are you coming to party tonight. We are going to party'))
