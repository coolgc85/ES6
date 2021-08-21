


function sum(...numbers) { 
    return(numbers[0]+numbers[1]);
}
console.log(sum(2,4));

//packaging into an array
function sum2(...[a,b]) { 
    return(a+b);
}
console.log(sum2(4,4));

function discount(price, discount = 0.0, tax = 0.07) {
    return (price * discount) *(1+tax)
    
}

const customerOne = [90, 0.3]
console.log(discount(...customerOne));

// Spread syntax with constructur
function Customer(name, age, isMember) {
    this.name = name;
    this.age = age;
    this.isMember = isMember;
}

const customerTwoArgs = ['Jhonny',89,false];

//old way
 let customerTwoOldWay = new Customer(customerTwoArgs[0],customerTwoArgs[1],customerTwoArgs[2]);
console.log(customerTwoOldWay);

//spreadSyntax way
let customerSSWay = new Customer(...customerTwoArgs)
console.log(customerSSWay);
