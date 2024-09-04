import { Link, useNavigate } from "react-router-dom";
import Logo from '../assets/Logo.jpg'
import {MapPinIcon} from '@heroicons/react/24/solid';


const Navbar = () => {
  const nav = useNavigate()
  const goTo= ()=>{
    nav('/history')
  }
  return (
<nav className="bg-gray-200 shadow-md className='fixed z-30' ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-4">
            <img
              className="h-14 w-auto"
              src={Logo}
              alt="Logo"
            />
            <span className="font-bold text-xl hidden sm:block">WeatherWise</span>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <div className="block sm:hidden">
              <button
                type="button"
                className="text-black hover:text-gray-700 focus:outline-none"
                onClick={() => document.getElementById('mobile-menu').classList.toggle('hidden')}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden sm:flex space-x-4">
              <Link
                to="/"
                className="text-black hover:scale-110 transition-all duration-300 inline-flex items-center px-3 py-2 text-sm font-medium hover:text-gray-700"
              >
                Home
              </Link>
              <Link
                to='/myLocation'
                className="text-white bg-black hover:scale-110 transition-all duration-300 inline-flex items-center px-3 py-2 text-sm font-medium hover:bg-gray-700 rounded-md"
              >
                <MapPinIcon className="h-5 w-5 text-white" />
                My Location
              </Link>
              <button
                className="text-white bg-blue-500 hover:scale-110 transition-all duration-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600"
                onClick={goTo}
              >
                Search History
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" className="sm:hidden hidden bg-gray-200">
        <div className="flex flex-col items-center py-4 space-y-4">
          <Link
            to="/"
            className="text-black hover:text-gray-700 block px-3 py-2 text-sm font-medium"
          >
            Home
          </Link>
          <Link
            to='/myLocation'
            className="text-white bg-black hover:bg-gray-700 block px-3 py-2 text-sm font-medium rounded-md"
          >
            <MapPinIcon className="h-5 w-5 text-white inline" />
            My Location
          </Link>
          <button
            className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium"
            onClick={goTo}
          >
            Search History
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;