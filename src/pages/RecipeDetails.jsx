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
      <div className='container mx-auto bg-white p-8 rounded-2xl'>
        <img src={recipe.image} alt={recipe.title} className='h-50 shadow-2xl mt' />
        <h1 className='text-2xl font-bold mt-5'>{recipe.title}</h1>
        <p className='mt-3'>{recipe.instructions}</p>

      </div>
    </div>
  )
}

export default RecipeDetails
