// Create variables for the pre-tip total and the tip percentage
// Calculate the new total
/*Output a sentence to the page - something like:
“Your total bill, with tip, is £35.45”*/

// var pre_tip_total = 25.23; // declaring and assigning the pre-tip total.
// var tip_percentage = 300/100; // declaring and assigning the tip percentage.
// var total_bill = pre_tip_total + tip_percentage; // declaring and calculating the total bill
// //console.log("Tip amount is: £",tip_percentage)
// console.log("Your total bill before tip is: £",pre_tip_total)
// console.log("Your total bill with tip is: £",total_bill)

function percentageCalculator() {
    var num = (30/100) * 135
    console.log(num);
}

// percentageCalculator();

function tipCalculator(bill, tipPercent) {
    return bill + (bill * tipPercent);
}

console.log(tipCalculator(50, 0.5))
