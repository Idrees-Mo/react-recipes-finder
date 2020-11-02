import React from 'react'
import styled from 'styled-components'

const Recipe = ({ recipe: { title, image, id }, getRecipe }) => {
  return (
    <RecipeCard onClick={() => getRecipe(id, image)} >
      <img src={image} alt={title} />
      {title}
    </RecipeCard >
  )
}

export default Recipe

const RecipeCard = styled.div`
background-color:yellow;
width:300px;

img{
   width:100%;
}
`