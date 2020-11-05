import React from 'react'
import styled from 'styled-components'
import Recipe from './Recipe'


const Recipes = ({ recipes, getRecipe, toggleFavRecipe }) => {
  return (
    <RecipesContainer>
      {recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.id} getRecipe={getRecipe} toggleFavRecipe={toggleFavRecipe} />)}
    </RecipesContainer>
  )
}

export default Recipes

const RecipesContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
margin-top:1rem;
`