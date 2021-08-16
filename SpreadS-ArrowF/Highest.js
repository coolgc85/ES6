function findHighest(upperLimit, ...numList) {
    let max=0;
    numList.filter(function(n){
        if((n<=upperLimit) && (n > max)){
            max = n;
        }
    })
    return max;
   // console.log(numList);
    //console.log(upperLimit);
}

//spread syntax - rest operator
function sum(...numberItem) {
    return numberItem.reduce(function(total, num){
        return total + num
    })
}



const highest = findHighest(80,8,0,5,4,3,56,78,32,80);
console.log(highest);

const restWay = sum(1,2,3,4,5)
const numbersArray = [1,2,3,4,5]
const restway2 = sum(...numbersArray)
console.log(restway2);
console.log(restWay);