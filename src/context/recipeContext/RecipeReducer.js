import { SET_ERROR, SET_RECIPES, SET_RECIPE, SET_MODAL, SET_LOADING } from "../Types"

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