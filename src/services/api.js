// const BASE_URL = "https://api.spoonacular.com/recipes";
// const API_KEY = "47aa35317746410e90ccc1518af9c1c1";

// export const getRecipes = async (query) => {
//     const response = await fetch(
//         `${BASE_URL}/complexSearch?query=${query}&apiKey=${API_KEY}` 
//     );
//     return response.json();
// }; 



// export const getRecipeDetails = async (id) => {
//     const response = await fetch(
//         `${BASE_URL}/${id}/information?apiKey=${API_KEY}`
//     );
//     return response.json();
// };
 


const BASE_URL = "https://api.spoonacular.com/recipes";   
const API_KEY = "2169bd6d86a24c32a2bb07d3697c4a01";

export const getRecipes = async(query)=> {
    try {
        const response = await fetch(`${BASE_URL}/complexSearch?query=${query}&apiKey=${API_KEY}`); 
        if (!response.ok) {
            console.log("Recipes Not Found") 
        }
        return await response.json(); 
    } catch (error) {
        console.log("Error fetching API!"); 
    }; 
};

export const getRecipeDetails = async(id)=> {
    try {
        const response = await fetch(`${BASE_URL}/${id}/information?apiKey=${API_KEY}`);
        return await response.json(); 
    } catch (error) {
        console.log("Error fetching API!");
    };
};









