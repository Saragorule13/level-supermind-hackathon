import { FaGithub, FaYoutube } from 'react-icons/fa';
import { useAuth, SignInButton, SignOutButton } from '@clerk/clerk-react';
import assets from '../../assets/assets.js'


const Navbar = () => {
    const { isSignedIn } = useAuth();
    const toggleMobileMenu = () => {
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
      }
    };
  
    return (
      <nav className="fixed w-full z-50 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <img src={assets.logo}  className='w-8' alt="" />
              <div className="flex-shrink-0">
                <span className="text-xl font-bold">SoulBuddy</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 gap-5">
               <a href="/">Home</a>
               <a href="#features">Features</a>
               <a className='flex items-center gap-2' href="https://github.com/Saragorule13/level-supermind-hackathon"><FaGithub/>Github</a>
               <a className='flex items-center gap-2' href="#"><FaYoutube/>Youtube</a>
              </div>
            </div>
            <div className="md:hidden">
              <button
                type="button"
                id="mobile-menu-button"
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <div className="flex items-center">
              {isSignedIn ? (
                <SignOutButton>
                  <button className="bg-neutral-700 text-white px-4 py-2 rounded-lg hover:bg-neutral-600 transition-colors">
                    Sign Out
                  </button>
                </SignOutButton>
              ) : (
                <SignInButton mode="modal">
                  <button className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition-colors">
                    Sign In
                  </button>
                </SignInButton>
              )}
            </div>
          </div>
        </div>
        <div className="md:hidden hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-neutral-900">
            {['Home', 'Features', ].map((item) => (
              <a
                href={`#${item.toLowerCase().replace(/ /g, '')}`}
                key={item}
                className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar;