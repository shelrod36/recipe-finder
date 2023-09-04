import { IRecipe } from '../../interface/recipe';

interface IRecipeDetailsModalProps {
  recipeDetails: IRecipe | null;
  handleCloseModal: () => void;
}

const RecipeDetailsModal = ({
  recipeDetails,
  handleCloseModal,
}: IRecipeDetailsModalProps) => {
  return (
    <>
      <div
        className='fixed top-0 left-0 right-0 z-50 flex h-full w-full justify-center overflow-y-auto overflow-x-hidden p-4 md:inset-0'
        role='dialog'
      >
        <div className='relative h-full w-full max-w-4xl md:h-auto'>
          <div className='relative mx-auto max-w-4xl rounded-lg bg-gray-700'>
            <div className='flex items-center justify-between rounded-t border-b border-gray-600 p-5'>
              <h3
                className='text-clamp-12-17 font-medium capitalize text-white'
              >
                {recipeDetails?.strMeal} 
              </h3>
              <button
                type='button'
                className='ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-600 hover:text-white'
                onClick={handleCloseModal}
              >
                <svg
                  aria-hidden='true'
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
                <span className='sr-only'>Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className='space-y-6 p-6'>
              <div className='flex flex-wrap items-center justify-between gap-4'>
                <h3 className='text-clamp-12-17'>Recipe Preparation</h3>
                <div className='rounded border px-4 py-0.5 md:px-8'>
                  <span className='text-center text-sm font-semibold text-white'>
                    {recipeDetails?.strCategory}
                  </span>
                </div>
              </div>
              <p className='text-sm leading-relaxed text-gray-400 md:text-base'>
                {recipeDetails?.strInstructions
                  .split('\n')
                  .map((instruction, index) => (
                    <>
                      <p key={index} className='mb-4'>
                        {instruction}
                      </p>
                    </>
                  ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetailsModal;
