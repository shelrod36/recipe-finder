import './App.scss';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import RecipeDashboard from './components/recipe/RecipeDashboard';

function App() {
  return (
    <div className='relative flex min-h-screen flex-col font-sans bg-slate-800 text-white'>
      <div className='container mx-auto px-4'>
        <Header />
        <main className='mb-72 flex-grow'>
          <RecipeDashboard />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
