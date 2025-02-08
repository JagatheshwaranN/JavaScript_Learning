// ************ First Type of Declaration - Functions with exports *****************
// export default function earnMoney() {
//     return "Earn money by learning high demand skills";
// }

// export const growMoney = () => {
//     return "Grow money by investing";
// }

// export const giveMoney = () => {
//     return "Give money back to Community";
// }

// ************ Another Type of Declaration - Functions with exports *****************
const earnMoney = () => {
    return "Earn money by learning high demand skills";
}

const growMoney = () => {
    return "Grow money by investing";
}

const giveMoney = () => {
    return "Give money back to Community";
}

// export default earnMoney;
// export {growMoney, giveMoney};

// ************ Class *****************
export default class Student {
    constructor (name){
        this._name = name;
    }

    greeting() {
        return `Hello! Have a good day ${this._name}`;
    }
}