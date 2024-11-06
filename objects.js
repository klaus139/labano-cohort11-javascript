//an object is an unordered collection of key-value pairs

const student = {
    firstName: "Kelly",
    lastName:"smith",
    age:16,
    isPassed:true,
    class:"ss1B",
}

const userData = {
    name:"ji smith",
    email:"user@example.com",
    address:"123 Main St",
    bio:{
        occupation:"student",
        hobbies:["reading","swimming"],
    }
}//payload


//dot(.) notation
const userName = userData.name;
const userEmail = userData.email;
const userOccupation = userData.bio.occupation;
console.log(userName)
//console.log(userOccupation)

//array notation
let person = {
    name:"mike",
    age:25,
}

let empty = {}

empty.name = "kelly"
console.log(empty)

const personName = person["name"]


//modifyimg an object
person.name = "matthew"//changing the name value
person.age = 30//changing the age value
person.class = "jss1B"//adding the class value
delete person.name; // deleting the name value

console.log(person)