/* Create an object to hold information on your favourite recipe.
Then display the properties on screen. */

// Create a loop to list all the ingredients and directions.

var favRecipe = {
    title: "Jollof rice",
    servings: 5,
    ingredients: ["Basmati rice", "Red pepper", "Onion", "Garlic", "Ginger", "seasonings", "Tomato sauce", "Chicken stock", "Sunflower oil"],
    directions: ["leave the sunflower oil to heat up", "add onion and garlic", "add tomato sauce", "stir for couple of minutes", "add seasonings and ginger", "add chicken stock and basmati rice", "stir until evenly mixed and cover"]
}

console.log(favRecipe.title)
console.log(favRecipe.servings)
console.log(favRecipe.ingredients)
console.log(favRecipe.directions)



for(const ingredients of favRecipe.ingredients){
    console.log(ingredients)
}

for(var directions of favRecipe.directions){
    console.log(directions)
}

// Task 5
/* 
Add a function called letsCook
Have it say: "I'm hungry! Let's cook..." with the name of your recipe title.
Call your new method.
*/
function letsCook(food) {
    console.log(`I'm hungry, lets cook ${food.title}`)
}

letsCook(favRecipe);