// function mySelf() {
//     console.log('My name is Abdul Manor')
//     console.log("I am learning functions")
// }

// mySelf()

/* Write a simple program to combine a first name
and a last name inside a functin. Then update the
function to accept a first and and last name as arguments.*/

function nameCombination(firstName, lastName) {
    // console.log(`my first name is ${firstName}`);
    //console.log('My first name is '+ firstName)
    //console.log(`my last name is ${lastName}`);

   return `${firstName}  ${lastName}`
}

const namee = nameCombination('Abdul', 'Manor');
console.log(namee);