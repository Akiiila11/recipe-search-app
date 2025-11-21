import * as React from 'react'
import './App.css'
import { RecipeProvider } from './context/RecipeContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './services/components/Header'
import SearchPage from './pages/SearchPage'
import RecipeDetails from './pages/RecipeDetails'
import FavoritePage from './pages/FavoritePage'

function App() {
  
  return (
    <RecipeProvider> 
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/recipe/:id" element={<RecipeDetails />}/>
          <Route path='/favorites' element={<FavoritePage />}/>
        </Routes>
      </Router>
      
    </RecipeProvider>
  )
}

export default App
