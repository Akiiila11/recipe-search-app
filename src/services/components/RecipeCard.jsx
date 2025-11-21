import React from 'react'
import { Link } from 'react-router-dom'
import { useRecipeContext } from '../../context/RecipeContext'

function RecipeCard({recipe}) {
  const { state, dispatch } = useRecipeContext()

  const isFavorite = state.favorites.some(fav => fav.id === recipe.id) 

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: recipe })
    } else {
      dispatch({ type: 'ADD_TO_FAVORITES', payload: recipe})
    }
  }

  return (
    <div className='p-4 shadow-lg rounded-xl cursor-pointer bg-white main text-center flex flex-col h-full'>
      <img src={recipe.image} alt={recipe.title} className='w-full h-40 mt-3 object-cover'/>
      <h2 className='text-lg font-bold mb-5'>{recipe.title.slice(0,20)}</h2>
      <div className='mt-auto flex flex-col'>
        <Link to={`/recipe/${recipe.id}`} className='bg-red-600 rounded px-2 py-2 mt-4 text-white cursor-pointer shadow-lg hover:bg-red-200'>View Details</Link>
        <button onClick={handleFavorite} type='button' className={`px-2 py-2 mt-3 rounded shadow transition ${ isFavorite ? 
        'bg-yellow-200 text-black hover:bg-yellow-500' : 'bg-gray-200 text-gray-800 hover:bg-red-200' }`}> 
        ❤️ { isFavorite ? 'Added' : 'Add Favorite'}</button>
      </div>
      
    </div>
  )
}

export default RecipeCard
