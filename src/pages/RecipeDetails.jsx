import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRecipeDetails } from '../services/api'

function RecipeDetails() {
    const {id} = useParams()
    // get the recipe id from the URL using useParams()
    const [recipe, setRecipe] = useState(null)

    useEffect(() => {
        const fetchDetails = async () => {
          const data = await getRecipeDetails(id)
          setRecipe(data)
        }
        fetchDetails()
    }, [id])

    if (!recipe) {
        return <p>Loading...</p>
    }

  return (
    <div className='p-4'>
      <div className='container mx-auto'>
        <img src={recipe.image} alt={recipe.title} className='w-full h-60 object-cover' />
        <h1 className='text-2xl font-bold'>{recipe.title}</h1>
        <p>{recipe.instructions}</p>

      </div>
    </div>
  )
}

export default RecipeDetails
