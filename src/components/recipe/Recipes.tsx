import { useState, useEffect } from 'react';
import { IRecipe } from '../../interface/recipe';
import { getRecipeByID } from '../../service/recipe';
import Recipe from './Recipe';
import RecipeDetailsModal from '../modal/RecipeDetailsModal';

interface ISearchResultsProps {
  recipes: IRecipe[];
  searchQuery: string;
}

const Recipes = ({ recipes, searchQuery }: ISearchResultsProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [recipeDetails, setRecipeDetails] = useState<IRecipe| null>(null);

  const handleOpenModal = async (mealId: string): Promise<void> => {
    try {
      const response = await getRecipeByID(mealId);
      setRecipeDetails(response.data.meals[0]);
      setIsModalOpen(true);
    } catch (error) {
    }
  };

  useEffect(() => {
  }, [recipeDetails]);

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <>
      <h2 className='mb-8 text-center text-2xl font-semibold'>
        Recipe Ideas for{' '}
        <span>
          {searchQuery.charAt(0).toUpperCase()}
          {searchQuery.slice(1)}
        </span>
      </h2>
      <div className='search-results flex flex-row flex-wrap justify-evenly gap-6'>
        {/* Search Results */}
        {recipes.map((recipe) => (
          <div className='card w-sm mx-auto mb-4 border-spacing-4 rounded-lg border border-gray-700 bg-gray-800 shadow'
          >
            <Recipe recipe={recipe}/>
            <div className='flex w-full items-center justify-center p-2'>
              <button
                className='recipe-btn inline-flex items-center rounded-lg bg-amber-500 px-3 py-2 text-center text-sm font-medium'
                type='button'
                onClick={() => handleOpenModal(recipe.idMeal)}
              >
                Recipe Details 
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      {isModalOpen && (
        <RecipeDetailsModal
          recipeDetails={recipeDetails}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};

export default Recipes;
