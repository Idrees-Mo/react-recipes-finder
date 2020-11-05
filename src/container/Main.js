import React, { useContext } from 'react'
import RecipeModal from '../components/RecipeModal'
import RecipeSearch from '../components/RecipeSearch'
import RecipeContext from '../context/recipeContext'

import Recipes from '../components/Recipes'
import styled from 'styled-components'

const Main = () => {
  const { recipes,
    recipe,
    showModal,
    loading,
    GET_RECIPES,
    GET_RECIPE,
    TOGGLE_FAV_RECIPE,
    TOGGLE_MODAL
  } = useContext(RecipeContext)

  return (
    <MainStyle>
      <RecipeSearch getRecipes={GET_RECIPES} />
      <Recipes recipes={recipes}
        getRecipe={GET_RECIPE}
        toggleFavRecipe={TOGGLE_FAV_RECIPE} />
      {loading && <h1>Loading</h1>}
      {showModal && <RecipeModal recipe={recipe} toggleModal={TOGGLE_MODAL} />}
    </MainStyle>
  )
}

const MainStyle = styled.div`
width:90%;
margin:0 auto;
max-width:1360px;
`

export default Main

// width to 80% as main app wrapper 