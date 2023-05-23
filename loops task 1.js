//-----------------------------------------------------------------------------

// pretask: Write a loop that console.log 1 - 12

/* for (var input = 1; input <= 12; input++) {
    console.log(input);
   } */

//---------------------------------------------------------------------------   

// task 1
/* Write a loop that outputs the 7 times table
from 7 x 1 = 7 to 7 x 12 = 84 */

var num = 7
for (var i = 1; i <= 12; i++) {
    console.log(`${num} x ${i} = ` + num * i);
}