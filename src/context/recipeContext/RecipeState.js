import React, { useReducer } from 'react'
import axio from 'axios'
import RecipeContext from './index'
import RecipeReducer from './RecipeReducer'
import data from '../../data/data.json'
import {
  SET_RECIPES,
  SET_RECIPE,
  SET_ERROR,
  SET_MODAL,
  SET_LOADING
}
  from '../Types'

let base_url = process.env.REACT_APP_BASE_URL
let api_key = process.env.REACT_APP_API_KEY
const RecipeState = ({ children }) => {
  const initialState = {
    showModal: false,
    loading: false,
    serchTitle: '',
    recipes: data.recipes.results,
    recipe: {},
    error: null,
  }

  const [state, dispatch] = useReducer(RecipeReducer, initialState)

  const GET_RECIPES = async (searchValue) => {
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

    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.message

      })
    }
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

    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.message
      })
    }
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
      GET_RECIPES,
      GET_RECIPE,
      TOGGLE_MODAL,
    }}>
      {children}
    </RecipeContext.Provider>
  )
}

export default RecipeState