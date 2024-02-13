let fruits = ['apple', 'orange', 'banana']
console.log(fruits)
console.log(fruits[0])
fruits.push('grapes')
console.log(fruits)
console.log(fruits.slice(0, 2))
console.log(fruits.indexOf('orange'))
console.log(fruits.length)
console.log(fruits.pop())
console.log(fruits)

Array.prototype.myPush = function(item) {
    this[this.length] = item
    return this
}
fruits.myPush('mango')
console.log(fruits)