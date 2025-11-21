import React, { createContext, useContext, useReducer } from "react";
import recipeReducer from "./recipeReducer";


const RecipeContext = createContext()

export const RecipeProvider = ({children}) => {
    const initialState = { 
        recipes: [],
        favorites: [],
        filter: "all",
    } 

    const [state, dispatch] = useReducer(recipeReducer, initialState)
    // dispatch({ type: "SET_RECIPES", payload: newRecipes })

    return (
        <RecipeContext.Provider value={{state, dispatch}}>
            {children}
        </RecipeContext.Provider>
    )
}

export const useRecipeContext = () => useContext(RecipeContext)