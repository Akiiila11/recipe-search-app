const recipeReducer = (state, action) => {
    switch (action.type) {
        case "SET_RECIPES":
            return{
                ...state, 
                // payload is a list of recipes fetched from an API
                recipes: action.payload,   
            }
        case "ADD_TO_FAVORITES":
            return{
                ...state,
                // because we want to add to the list, not make a list inside a list.
                favorites: [...state.favorites, action.payload], 
            } 
        case "REMOVE_FROM_FAVORITES":
            return{
                ...state,
                favorites: state.favorites.filter(recipe => recipe.id!== action.payload.id),
            }
        case "SET_FILTER":
            return{
                ...state,                   
                filter: action.payload,
            }
        default:
            return state
    }
}


export default recipeReducer