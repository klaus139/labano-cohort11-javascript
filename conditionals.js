let num = -1;

if(num > 0){
    console.log(`${num} is a positive number`)
}else {
    console.log(`${num} is not a positive number`)
}

// let isRaining = false;
// if(isRaining){
//     console.log('Bring an umbrella')
// }else{
//     console.log('Enjoy a sunny day')
// }

//weather application
let weather = 'rainy';

if(weather === "rainy"){
    console.log('Bring an umbrella')
}else if (weather === "cloudy"){
    console.log("it might be cold, you need a jacket")
}else {
    console.log('Enjoy a sunny day')
}


//grading API = Application Programming Interface
// creditscore 90> access loans 
// 60 > cannnot access loans 
// 40 > user is in debbt
let grade;
let testScore = prompt("Input test score")
let studentName = prompt("Enter student name")
let subjectName = prompt("Enter subject name")

if(testScore >=90){
    grade = 'A'
}else if(testScore >= 80){
    grade = 'B'
}else if(testScore >= 70){
    grade = 'C'
}else if (testScore >=50){
    grade = 'D'
}else{
    grade = 'F'
}
const result = `${studentName} got a grade of ${grade} in ${subjectName}`
alert(result);



