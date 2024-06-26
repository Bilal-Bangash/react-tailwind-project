import { GrLanguage } from 'react-icons/gr'
import { FaXmark, FaBars } from 'react-icons/fa6'
import logo from '../assets/logo.png'
import { useState } from 'react'
import { Link } from 'react-scroll'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const navItems = [
    { link: 'Overview', path: 'home' },
    { link: 'Feature', path: 'feature' },
    { link: 'About', path: 'about' },
    { link: 'Pricing', path: 'pricing' },
  ]

  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto border-b text-primary fixed top-0 left-0 right-0">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            <Link
              to="/"
              className="text-2xl font-semibold flex items-center space-x-3 text-primary"
            >
              <img
                src={logo}
                alt="logo"
                className="w-[100px] inline-block items-center"
              />
            </Link>
            <ul className="md:flex space-x-12 hidden">
              {navItems.map((item) => (
                <li
                  key={item.path}
                  className="block text-primary hover:text-secondary cursor-pointer"
                >
                  <Link
                    spy
                    smooth
                    to={item.path}
                    offset={-100}
                    activeClass="active"
                  >
                    {item.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:flex space-x-12 hidden md:flex items-center">
            <Link
              to="#"
              className="hidden lg:flex items-center hover:text-secondary"
            >
              <GrLanguage className="mr-2" />
              <span>Language</span>
            </Link>
            <button className="bg-secondary font-semibold px-4 py-2 rounded transition-all duration-300 hover:bg-primary hover:text-white ">
              Sign up
            </button>
          </div>
          {/* menu button for mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300 "
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div
          className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl${
            isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'
          }`}
          id="menu"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              spy
              smooth
              to={item.path}
              offset={-100}
              activeClass="active"
              className="block"
              onClick={toggleMenu}
            >
              {item.link}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export default Navbar
