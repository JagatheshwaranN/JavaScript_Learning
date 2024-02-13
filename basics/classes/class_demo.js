class Bike {

    constructor(name, color, topSpeed) {
        this.name = name
        this.color = color
        this.topSpeed = topSpeed
        this.currentSpeed = 0;
    }

    start() {
        console.log(this.name + " bike started");
        console.log(this.name + " bike current speed is " + this.currentSpeed)
    }

    move() {
        console.log(this.name + " bike moving on");
        this.currentSpeed += 10
        console.log(this.name + " bike current speed is " + this.currentSpeed)
    }

    brake() {
        console.log(this.name + " bike brake apply");
        this.currentSpeed -= 10
        console.log(this.name + " bike current speed is " + this.currentSpeed)
    }

    stop() {
        console.log(this.name + " bike stopped");
        this.currentSpeed = 0
        console.log(this.name + " bike current speed is " + this.currentSpeed)
    }

}

const honda = new Bike('Hero Honda', 'Black', 100)
console.log(honda.name)
console.log(honda.color)
console.log(honda.topSpeed)
honda.start()
const nums = [1, 2]
nums.forEach(_ => honda.move())
honda.brake()
honda.move()
honda.stop()