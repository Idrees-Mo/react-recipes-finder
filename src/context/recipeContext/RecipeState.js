import React, { useReducer } from 'react'
import axio from 'axios'
import RecipeContext from './index'
import RecipeReducer from './RecipeReducer'
import data from '../../data/data.json'


import {
  GET_RECIPES,
  GET_RECIPE,
  ADD_FAV_RECIPE,
  SET_ERROR,
  TOGGLE_MODAL,
  SET_LOADING
}
  from '../Types'

let base_url = process.env.REACT_APP_BASE_URL
let api_key = process.env.REACT_APP_API_KEY


const RecipeState = ({ children }) => {
  const initialState = {
    recipes: data.recipes.results,
    recipe: {},
    favouriteRecipes: [],
    serchTitle: '',
    showModal: false,
    loading: false,
    error: null,
  }

  const [state, dispatch] = useReducer(RecipeReducer, initialState)

  // get recipes 
  const getRecipes = async (searchValue) => {
    toggleLoading()
    let url = `${base_url}complexSearch?apiKey=${api_key}&query=${searchValue}&number=30`
    try {
      const response = await axio.get(url)
      dispatch({
        type: GET_RECIPES,
        payload: response.data.results
      })
      toggleLoading()
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.message
      })
    }
    addFavRecipe()
  }

  // get single recipe
  const getRecipe = async (recipe_id, recipe_img) => {
    if (recipe_id === state.recipe.recipe_id) {
      toggleModal()
      return
    }
    try {
      toggleLoading()
      const res_1 = await axio.get(`${base_url}${recipe_id}/ingredientWidget.json?apiKey=${api_key}`)
      const res_2 = await axio.get(`${base_url}${recipe_id}/analyzedInstructions?apiKey=${api_key}`)
      dispatch({
        type: GET_RECIPE,
        payload: {
          recipe_img,
          recipe_id,
          recipe_ing: res_1.data.ingredients,
          recipe_ins: res_2.data[0].steps,
        }
      })
      toggleLoading()
      toggleModal()
      console.log(res_1)
      console.log(res_2)

    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.message
      })
    }
  }

  // add faviroute recipe 
  const addFavRecipe = (recipe_id, recipe_img) => {
    const res1 = state.favouriteRecipes.find(r => r.recipe_id === recipe_id)
    if (!res1) {
      dispatch({
        type: ADD_FAV_RECIPE,
        payload: { recipe_id, recipe_img }
      })
    }
  }

  // toggle recipe modal 
  const toggleModal = () => {
    dispatch({ type: TOGGLE_MODAL })
  }
  // toggle loading 
  const toggleLoading = () => {
    dispatch({ type: SET_LOADING })
  }

  return (
    <RecipeContext.Provider value={{
      recipes: state.recipes,
      recipe: state.recipe,
      error: state.error,
      showModal: state.showModal,
      loading: state.loading,
      favouriteRecipes: state.favouriteRecipes,
      getRecipes,
      getRecipe,
      addFavRecipe,
      toggleModal,
    }}>
      {children}
    </RecipeContext.Provider>
  )
}

export default RecipeState