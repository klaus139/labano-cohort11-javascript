//includes return a boolean if the item is found in the value

const searchValue = "nicklausdev@gmail.com"
const isValidEmail = searchValue.includes("z")

//console.log(isValidEmail)

//replace method relaces a part of a given string with another string
const stringToReplace = "Mind, Osadolor, Soul"
let partToReplace = stringToReplace.replace("Osadolor", "Osadolore")
//console.log(partToReplace)

const longString = "banana, red, green, blue, purple, black"



let findaValue = longString.includes("red")

// if(findaValue === true){
//     const replaceValue = longString.replace("red", "yellow")
//     return console.log(replaceValue)
   
// }else{
//     console.log("red is not in the string")
// }
//console.log(findaValue)


const mondayBreakfast = "tea and bread, toast, rice, rice, rice, pounded-yam"
let updatedMondayBreakfast = mondayBreakfast.replaceAll("rice","pancake")

console.log(updatedMondayBreakfast)



const customerEmail = 'product@gmail.com'

const newEmail = customerEmail.replace("product@gmail.com", "newhamsphire@hamspire.com")

//console.log(newEmail);








