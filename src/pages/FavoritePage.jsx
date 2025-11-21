import React from 'react'
import { useRecipeContext } from '../context/RecipeContext'
import RecipeCard from '../services/components/RecipeCard'

function FavoritePage() {

    const { state } = useRecipeContext()

    if (state.favorites.length === 0) {
        return(
            <p className='text-center mt-4'>No favorite recipes added yet!!</p>
        )
    }
  return (
    <div className='p-4'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-4 gap-4'>
                {state.favorites.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default FavoritePage
