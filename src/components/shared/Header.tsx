import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header className='navbar fixed top-0 left-0 z-10 mt-0.5 w-full px-4'>
      <div className='flex items-center space-x-2'>
        RecipeFinder 
        <img src={logo} alt='' width='32' height='32'/>
      </div>
    </header>
  );
};

export default Header;
