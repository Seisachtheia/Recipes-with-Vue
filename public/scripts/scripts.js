//state
var recipeList = []

//definitions
function gibRecipe(name, instructions){
  return {
    name : name,
    instructions : instructions 
  }
}

//code
recipeList.push(
  gibRecipe("lolpie", "bake it lol")
)


console.log(JSON.stringify(recipeList, null, 2))