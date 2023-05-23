// function calculator(number1, number2, operator) {
//     var total;
//     switch(operator){
//         case 'Addition':
//             total = number1 + number2;
//             break;
//         case 'Subtraction':
//             total = number1 - number2;
//             break;
//         case 'Multiplicatioin':
//             total = number1 * number2;
//             break;
//         case 'Division':
//             total = number1 / number2;
//             break;
//         default:
//             'calculator';
//     }

// }

// console.log("Result is " calculator(5, 4, ''));

function calculator(number1, number2, operator){
    let output;
    
      switch(operator) {
        case '+':
          output = number1 + number2;
          break;
        case '-':
          output = number1  - number2;
          break; 
       case '/':
          output = number1  / number2;
          break; 
      }
      
      return output;
     
    }
    
    
    console.log(calculator(7, 8, '-'));