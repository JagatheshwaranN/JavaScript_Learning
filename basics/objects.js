const person = {
    user_name: 'Johny Deep',
    user_shirt: 'white'
}

console.log(person.user_name)
console.log(person.user_shirt)

console.log(person['user_name'])
console.log(person['user_shirt'])

console.log(person)

const introduce = (user_name, age) => {

    const person = {
        user_name: user_name,
        age: age,
        assets: 100000,
        debt: 50000,
        networth: function() {
            return this.assets - this.debt
        }
    }

    const intro = `Hey!, I'm ${person.user_name}, and ${person.age} years old. I have a net worth of $${person.networth()} USD`

    return intro
}

console.log(introduce('Johny', 29))
