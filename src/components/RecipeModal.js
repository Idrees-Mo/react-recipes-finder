import React from 'react'

const RecipeModal = ({ recipe, img, toggleModal }) => {
  return < >
    <button onClick={() => toggleModal()}>x</button>
    <img src={recipe.recipe_img} alt={img} />
    <ul>
      <h1>Ingredients</h1>
      {recipe.recipe_ing && recipe.recipe_ing.map(i => <li key={i.name}>{i.name}</li>)}
    </ul>
    <ul>
      <h1>Instructions</h1>
      {recipe.recipe_ins && recipe.recipe_ins.map(s => <li key={s.step}>{s.step}</li>)}
    </ul>
  </>
}

export default RecipeModal