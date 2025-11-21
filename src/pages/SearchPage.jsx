import React, { useState } from 'react'
import { useRecipeContext } from '../context/RecipeContext'
import { getRecipes } from '../services/api'
import RecipeCard from '../services/components/RecipeCard'
import Pagination from '../services/components/Pagination'


function SearchPage() {
    const {state, dispatch} = useRecipeContext() 
    const [query, setQuery] = useState('')
    const[searched, setSearched] = useState(false)
  
    const handleSearch = async () => { 
        const data = await getRecipes(query)
        dispatch({ type: 'SET_RECIPES', payload: data.results })
        setSearched(true)
    }


  return (
    <div className='p-4'>
      <div className='container mx-auto'>
        {!searched && (
        <div className='mb-4 text-center' >
            <h1 className='font-bold text-red-200 mt-5 mb-2 '>Find your favorite recipes & enjoyy eating ...!!</h1>
            <input type='text' placeholder='eg.bread recipes here!!' value={query} onChange={(e) => setQuery(e.target.value)} className='rounded mr-5 px-4 py-2 mt-5 border-2'></input>
            <button onClick={handleSearch} className='bg-red-400 text-white px-5 py-2 cursor-pointer mt-5 rounded shadow hover:bg-red-600'>Search</button>
            <div className='flex justify-center items-center'>
              <img src="/images/1.png" alt="chef" className='w-100 mt-5'/>
            </div>   
        </div>
        )}
        <div className='grid md:grid-cols-4 sm:grid-cols-1 gap-5 p-2'>
          {state.recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe}/>
          ))}
        </div>
        <Pagination />
      </div>
    </div>
  )
}


export default SearchPage
