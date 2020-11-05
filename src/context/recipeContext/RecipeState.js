import React, { useReducer } from 'react'
import axio from 'axios'
import RecipeContext from './index'
import RecipeReducer from './RecipeReducer'
import data from '../../data/data.json'
import {
  SET_RECIPES,
  SET_RECIPE,
  ADD_FAV_RECIPES,
  REMOVE_FAV_RECIPES,
  SET_ERROR,
  SET_MODAL,
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

  const GET_RECIPES = async (searchValue) => {
    TOGGLE_LOADING()
    let url;
    if (!searchValue) {
      url = `${base_url}complexSearch?apiKey=${api_key}`
    } else {
      url = `${base_url}complexSearch?apiKey=${api_key}&query=${searchValue}&number=30`
    }
    try {
      const response = await axio.get(url)
      dispatch({
        type: SET_RECIPES,
        payload: response.data.results
      })
      TOGGLE_LOADING()

      console.log(response)
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.message

      })
    }
    TOGGLE_FAV_RECIPE()
  }

  const GET_RECIPE = async (recipe_id, recipe_img) => {
    if (recipe_id === state.recipe.recipe_id) {
      TOGGLE_MODAL()
      return
    }
    try {
      TOGGLE_LOADING()
      const res_1 = await axio.get(`${base_url}${recipe_id}/ingredientWidget.json?apiKey=${api_key}`)
      const res_2 = await axio.get(`${base_url}${recipe_id}/analyzedInstructions?apiKey=${api_key}`)
      dispatch({
        type: SET_RECIPE,
        payload: {
          recipe_img,
          recipe_id,
          recipe_ing: res_1.data.ingredients,
          recipe_ins: res_2.data[0].steps,
        }
      })
      TOGGLE_LOADING()
      TOGGLE_MODAL()
      console.log(res_1)
      console.log(res_2)

    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.message
      })
    }
  }

  const TOGGLE_FAV_RECIPE = (recipe_id, recipe_img) => {
    const res1 = state.favouriteRecipes.find(r => r.recipe_id === recipe_id)
    if (!res1) {
      dispatch({
        type: ADD_FAV_RECIPES,
        payload: { recipe_id, recipe_img }
      })
    }
    console.log(state.recipes)
  }

  const TOGGLE_MODAL = () => {
    dispatch({ type: SET_MODAL })
  }
  const TOGGLE_LOADING = () => {
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
      GET_RECIPES,
      GET_RECIPE,
      TOGGLE_FAV_RECIPE,
      TOGGLE_MODAL,
    }}>
      {children}
    </RecipeContext.Provider>
  )
}

export default RecipeState