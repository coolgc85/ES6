
//Desctucturing by Object
const shapeObj = {
    x: 12,
    y: 10,
    shape: 't',
}




//old way
function getArea(x, y, shape = 'r') {
    if (shape === 'r') {
        return x * y
    } else if (shape === 't') {
        return (x * y) / 2
    }

}

//const rectArea = getArea(2, 3);
//console.log(rectArea);

//Destructurin by assign 
const{x,y,shape} = shapeObj;
//console.log(x);



//new way
function getAreaDesctructuring({x,y,shape}) {
    if (shape === 'r') {
        return x * y
    } else if (shape === 't') {
        return (x * y) / 2
    }

}

const areaUsingDestructuring = getAreaDesctructuring(shapeObj)
console.log(areaUsingDestructuring);

//destructuring inner object, swapping attributes
console.log(getAreaDesctructuring({y:2, x:6, shape:'t'})); 