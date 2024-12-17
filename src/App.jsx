import { useState } from "react"
import IngredientsList from "./components/IngredientsList"
import Header from "./components/Header"
import ClaudeRecipe from "./components/ClaudeRecipe"
import { getRecipeFromMistral } from "./api/ai"

export default function App() {

  const [ingredients, setIngredients] = useState([])

  const [recipe, setRecipe] = useState("")

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients)
    setRecipe(recipeMarkdown)
    console.log(recipe)
  }

  return (
    <>
      <Header />
      <main>
        <form action={addIngredient} className="add-ingredient-form">
          <input
            type="text"
            aria-label="Add ingredient"
            placeholder="e.g oregano"
            name="ingredient"
          />
          <button>Add Ingredient</button>
        </form>
        {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />}
        {recipe && <ClaudeRecipe recipe={recipe} />}
      </main>
    </>
  )
}