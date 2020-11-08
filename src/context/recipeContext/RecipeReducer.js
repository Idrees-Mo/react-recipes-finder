import {
  GET_RECIPES,
  GET_RECIPE,
  ADD_FAV_RECIPE,
  SET_ERROR,
  TOGGLE_MODAL,
  SET_LOADING,
} from "../Types"

const reduer = (state, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case GET_RECIPE:
      return {
        ...state,
        recipe: action.payload,
      }
    case ADD_FAV_RECIPE:
      let recipeIds = JSON.parse(localStorage.getItem('recipesIds')) || []
      localStorage.setItem('recipesIds', JSON.stringify([...recipeIds.filter(id => id.recipe_id !== action.payload.recipe_id), action.payload]))
      recipeIds = JSON.parse(localStorage.getItem('recipesIds'))
      let ids = [...recipeIds.map((r) => r.recipe_id)]
      console.log(ids)
      return {
        ...state,
        // favouriteRecipes: [...state.favouriteRecipes.filter(id => id.recipe_id !== action.payload.recipe_id), action.payload]
        recipes: [...state.recipes.map((r) => r.id === ids.find((id) => id === r.id) ? { ...r, "fav": true } : r)]
      }
    case TOGGLE_MODAL:
      return {
        ...state,
        showModal: !state.showModal,
      }
    case SET_LOADING:
      return {
        ...state,
        loading: !state.loading
      }

    default: return state
  }
}
export default reduer;