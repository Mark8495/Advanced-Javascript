/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a,b){
//     // code block
//     return a+b;
// }
// Arrow Function With Parameters
// const addTwoNumbers = (a,b) => {
//     return a+b
// }

// Single Line Arrow Function With Parameters
// const addTwoNumbers = (a,b) => a + b;
// const addTwoNumbers = (a,b) => (a + b); also valid
// Implicit Returns
const saySomething = message => console.log(message)
saySomething('Hello there')

const sayHello = () => console.log(hello)
sayHello()
// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
    This is a multline string
    </p>`
)


// -------------------------Spread Operator

// No spread operator
let arr1 =[1,2,3]
let arr2 = arr1
arr2.push(4)
console.log("second array", arr2)
console.log('first array', arr1)
// They would both be the same

// Copying an array
let arr3 = [4,5,6]
let arr4 = [...arr3]
arr4.push(7);
console.log('third array', arr3)
console.log('fourth array', arr4)

// Copying an object
let obj1 = {a:1, b:2, c:3}
let obj2 ={...obj1, d:4}
console.log('first object',obj1)
console.log('second object',obj2)
let obj3 ={...obj1, b:5}
console.log('third object', obj3)
// Copying only part of an array/object
let arr5 =[...arr1, {...obj1}, ...arr3, 'x','y','z']



// -------------------------Spread Operator

// Regular function call
const sumAll = (a,b,c) => a+b+c;
let sum = sumAll(1,2,3)
console.log("sum", sum)
// extra arguements are ignored
let sum2 = sumAll(1,2,3,4,5,6);
console.log('sum2', sum1)
// function using ...rest
const sumRest = (a,b,c, ...rest)=>{
    let sum = a + b + c;
    for(let i of rest){
        sum+=i
    }
    return sum
}
let sum3 = sumRest(1,2,3,4,5,6)
console.log('sum3', sum3)



// -------------------------Spread Operator