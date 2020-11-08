import React from 'react'
import styled from 'styled-components'

const FavRecipes = ({ recipes }) => {

  return (
    <div>
      <RecipeList>
        {recipes.filter((r) => r.fav).map((r) => <li>{r.title}</li>)}
      </RecipeList>
    </div>
  )
}

export default FavRecipes

const RecipeList = styled.ul`
display:flex;
`