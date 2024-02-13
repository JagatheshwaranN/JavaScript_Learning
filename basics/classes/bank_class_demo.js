class Bank {

    constructor(balance) {
        this.balance = balance
    }

    balanceCheck() {
        console.log("Balance availabe : " + this.balance)
    }

    deposit(amount) {
        console.log("Deposit amount : " + amount)
        this.balance += amount
    }

    withdraw(amount) {
        if(this.balance > amount){
            this.balance -= amount
            console.log("Withdraw amount : " + amount)
        } else {
            console.log("You don't have sufficient balance to withdraw")
        }
        
        
    }

}

const john = new Bank(100)
john.balanceCheck()
john.deposit(500)
john.balanceCheck()
john.withdraw(100)
john.balanceCheck()
john.withdraw(600)