function drinkOrder(size, drink)
{
  let drinkable;
  
  switch(drink) {
    case 'lemon':
      drinkable= "Lemonade";
      break;
    case 'Orange':
      drinkable= "Orangeade";
      break;   
   case 'cola':
      drinkable= "Cola";
      break; 
    default:
      drinkable = "drink";
  }
  return `You have ordered a ${size} ${drinkable}`;
}

console.log(drinkOrder('medium', 'Orange'))