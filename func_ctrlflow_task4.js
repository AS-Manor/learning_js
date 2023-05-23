// var temperature = 40;
// if (temperature >= 10) {
//     console.log('wear a coat')
// }
// else if (temperature <= 30 || temperature != 40) {
//     console.log('wear a coat and a hat.')
// }
// else if (temperature <= 0 || temperature == 0) {
//     console.log('stay inside')
// }
// else {
//     console.log('Just pants and vest is fine')
// }



var temperature = 55;
var normalTemperature = 50;
if (temperature <= 50 && temperature >30) {
  console.log('Put on a coat')
} else if(temperature <=30 && temperature > 0){
 console.log('Put on a coat and hat')
} else if(temperature < 0) {console.log('Stay inside')}
else {console.log(`No need for a coat it is ${temperature - normalTemperature} degrees above average`)}