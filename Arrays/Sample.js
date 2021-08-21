const arr = [2,4,7,9,88]

//Includes Function 
console.log(arr.includes(2)); 


function handMadeExist(n) {
    return (arr.indexOf(n) > -1)
}

//Exist
console.log(handMadeExist(7));

// Doesn't Exist
console.log(handMadeExist(34));