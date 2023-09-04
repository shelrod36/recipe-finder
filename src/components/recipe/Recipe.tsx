import { IRecipe } from '../../interface/recipe';

interface IRecipeProps {
  recipe:  IRecipe;
}

const Recipe = ({ recipe }: IRecipeProps) => {
  return (
      <>
        <div className='card-img-container rounded'>
          <img
            className='rounded-t-lg object-cover'
            src={recipe?.strMealThumb}
            alt={recipe?.strMeal}
          />
        </div>
        <div className='p-2'>
          <h5 className='text-center text-xl font-medium text-white'>
            {recipe?.strMeal}
          </h5>
        </div>
      </>
  )}

export default Recipe;
