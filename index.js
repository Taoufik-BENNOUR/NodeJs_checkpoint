
const fs = require('fs')
let rect = require('./rectange')
let sum = require('./sum')
let say = require('./message')

const messages=(name)=> console.log(say.hello(name))
function add(l,b){
    console.log(`Sum is ${sum.sum(l,b)}`)
}

function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    if (l <= 0 || b <= 0) {
        console.log("Rectangle dimensions should be greater than zero:  l = "
               + l + ",  and b = " + b);
    }
    else {
	    console.log("The area of the rectangle is " + rect.area(l,b));
	    console.log("The perimeter of the rectangle is " + rect.perimeter(l,b));
    }
}

messages('taoufik')
add(3,5)
solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);