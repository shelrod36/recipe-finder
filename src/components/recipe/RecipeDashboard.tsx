import { MouseEvent, useState } from 'react';
import { IRecipe } from '../../interface/recipe';
import { SearchRecipeByIngredient } from '../../service/recipe';
import Recipes from './Recipes';
import './RecipeDashboard.scss';

function RecipeDashboard() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [initialSearchQuery, setInitialSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<IRecipe[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>('');

  const searchErrorMessage = `Sorry, no recipes found for ${searchQuery}. Time to try a different ingredient!`;

  const handleSearch = async (event: MouseEvent) => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      setErrorMessage('Please enter an ingredient to search for recipe(s)');
      setSearchResults([]);
      setSearchQuery('');
      return;
    }

    setIsLoading(true);
    try {
      const response = await SearchRecipeByIngredient(searchQuery);
      if (response.data.meals === null) {
        setErrorMessage(searchErrorMessage);
        setSearchResults([]);
      } else {
        setSearchResults(response.data.meals);
        setInitialSearchQuery(searchQuery);
        setErrorMessage(null);
      }
    } catch (error) {
      setSearchResults([]);
      setErrorMessage('An error occurred while searching for recipes.');
    }
    setIsLoading(false);
    setSearchQuery('');
  };

  return (
    <>
      <div className='hero-section text-center'>
        <h1 className='hero-text text font-bold'>
          Find Recipes with an Ingredient you have!
        </h1>
      </div>
      <form className='search-bar mx-auto mb-8 max-w-4xl'>
        <label className='sr-only mb-2 text-sm font-medium text-white'>
          Search
        </label>
        <div className='relative'>
          <input
            type='search'
            className='block w-full rounded-lg border border-gray-600 bg-gray-700 p-4 text-sm text-white placeholder-gray-400 outline-none'
            placeholder='Enter an ingredient to search recipes'
            required
            autoComplete='off'
            onChange={(event) => setSearchQuery(event.target.value)}
            value={searchQuery}
          />
          <button
            type='submit'
            className='search-btn absolute right-2.5 bottom-2.5 rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900'
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </form>

      {isLoading && (
        <div className='loading mb-4 text-center'> Loading ...</div>
      )}

      {errorMessage && (
        <div className='error text-clamp-10-12 mb-8 text-center font-normal text-white sm:text-red-500'>
          {errorMessage}
        </div>
      )}

      {searchResults && searchResults.length > 0 && (
        <Recipes
          recipes={searchResults}
          searchQuery={initialSearchQuery}
        />
      )}
    </>
  );
}

export default RecipeDashboard;
