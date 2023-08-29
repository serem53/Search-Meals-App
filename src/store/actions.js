
import axiosClient from '../axiosClient'
// Search meals by name
export async function searchMeals({ commit }, keyword) {
    try {
      await new Promise(resolve => setTimeout(resolve, 300)); // Delay for 1000 ms
  
      const response = await axiosClient.get(`/search.php?s=${keyword}`);
      const data = response.data;
          
      commit('setSearchedMeals', data.meals);
      console.log(data.meals);
    } catch (e) {
      console.log(e);
    }
  }
//  search meals by letter
export async function searchMealsByLetter({ commit }, letter) {
    try{
   const response =  await axiosClient.get(`/search.php?f=${letter}`);
      const  data = response.data;
        
        commit('setmealsByLetter', data.meals)
     console.log(data.meals);
}catch(error){
    console.error("An error occurred:", error);
    }
}


// search meals by ingredients
export function searchMealsByIngredients({ commit }, ing) {
     axiosClient.get(`/filter.php?i=${ing}`)
    .then(({ data }) => {
        
        commit('setmealsByIngredients', data.meals)
    
    })
}

