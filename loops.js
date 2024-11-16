//loop structure
// for(initializer, condition, increment/decrement){
//     //the code goes here
// }


//for loop 0 - 5 and we will stop at 9
// for (let i = 0; i <= 5; i++){
    
//     console.log(i);
// }
// //loop that will increase the number by 2 if the numbber is lowr than 50
// for (let i = 0; i < 50; i+=2){
//     console.log(i)
// }
// //loop that will decrease the number by 2 if the number is higher than 50
// for (let i = 100; i >=50; i-=2){
//     console.log(i)
// }

///write a loop function that multiplies the number by itself if the number is less than 5


// for (let i=0; i <=5; i++){
//     console.log(`${i}*${i} = ${i * i}`);
    
// }

// const countries = ['Nigeria','Ghana','United States','China','Poland']

// const newArr = [];

// for (let i = 0; i <countries.length; i++){
//     //console.log(countries[i]);
//     newArr.push(countries[i])
// }
// console.log(newArr);

const countries = ['Nigeria','Ghana','United States','China','Poland'];

const newArr = [];

for (let i = 0; i < countries.length; i++){
    newArr.push(countries[i]);
}

const upperCaseArr = newArr.map(country => country.toUpperCase());
console.log(upperCaseArr);


// //add all elements in an array
// const numbers = [1,2,3,4,5]
// let sum = 0;//initializing a sum variable
// for(let i = 0; i <numbers.length; i++){
//     sum = sum + numbers[i];
// }
// console.log(sum)

// write a loop that increaes a number b 3
// if the number is less than or equal to 20







