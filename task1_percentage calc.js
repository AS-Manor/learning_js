/*create a function that is able to return
a percentage of a number */

// function percentageCalculator() {
//     var num = (30/100) * 135
//     console.log(num);
// }

// percentageCalculator();

function percentageCalculator(num, percentage) {
    return (num/100) * percentage;
}

console.log(percentageCalculator(3, 135));