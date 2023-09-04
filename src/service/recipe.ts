import axios from 'axios';

const APIURL = 'https://www.themealdb.com/api/json/v1/1';

export function getRecipeByID(mealId: string){
    return axios.get(
      `${APIURL}/lookup.php?i=${mealId}`
    );
}

export function SearchRecipeByIngredient(ingredient: string){
  return axios.get(
    `${APIURL}/filter.php?i=${ingredient}`
  );
}

