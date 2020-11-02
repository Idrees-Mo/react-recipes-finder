import React from 'react'
import styled from 'styled-components'
import Recipe from './Recipe'


const Recipes = ({ recipes, getRecipe }) => {
  return (
    <RecipesContainer>
      {recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.id} getRecipe={getRecipe} />)}
    </RecipesContainer>
  )
}

export default Recipes

const RecipesContainer = styled.div`
display:flex;`