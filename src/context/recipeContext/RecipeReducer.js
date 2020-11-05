import { SET_ERROR, SET_RECIPES, SET_RECIPE, SET_MODAL, SET_LOADING, ADD_FAV_RECIPES } from "../Types"

const reduer = (state, action) => {
  switch (action.type) {
    case SET_RECIPES:
      return {
        ...state,
        recipes: action.payload
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case SET_RECIPE:
      return {
        ...state,
        recipe: action.payload,
      }
    case ADD_FAV_RECIPES:
      const recipeIds = JSON.parse(localStorage.getItem('recipesIds')) || []
      localStorage.setItem('recipesIds', JSON.stringify([...recipeIds.filter(id => id !== action.payload.recipe_id), action.payload.recipe_id]))
      return {
        ...state,
        // favouriteRecipes: [...state.favouriteRecipes.filter(id => id.recipe_id !== action.payload.recipe_id), action.payload]
        recipes: [...state.recipes.map((r) => r.id === recipeIds.find((id) => id === r.id) ? { ...r, "fav": true } : r)]
      }
    case SET_MODAL:
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