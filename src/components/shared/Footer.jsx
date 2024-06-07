import logo from '../../assets/logo-trans.png'
import fbLogo from '../../assets/facebook.png'
import twitterLogo from '../../assets/twitter.png'
import linkedinLogo from '../../assets/linkedin.png'
import instaLogo from '../../assets/instagram.png'
const Footer = () => {
  return (
    <div className="bg-[#010851] md:px-14 p-4 w-full  mx-auto text-white">
      <div className="my-12 flex flex-col lg:flex-row gap-10 items-start justify-between">
        <div className="md:w-1/2 space-y-8">
          <a
            href="/"
            className="text-2xl font-semibold flex items-center space-x-3 text-primary"
          >
            <img
              src={logo}
              alt="logo"
              className="w-[100px] inline-block items-center"
            />
          </a>
          <p className="md:w-1/2">
            A simple paragraph is comprised of three major components. The first
            sentence, which is often a declarative sentence.
          </p>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none"
            />
            <input
              type="submit"
              name="Subscribe"
              id="subscribe"
              value="Subscribe"
              className="bg-secondary px-4 py-2 rounded-md -ml-2 hover:bg-white hover:text-primary transition-all duration-300"
            />
          </div>
        </div>
        {/* navigation */}
        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap gap-8 md:justify-between">
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Platform</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="block hover:text-secondary">
                  Overview
                </a>
              </li>
              <li>
                <a href="/" className="block hover:text-secondary">
                  Features
                </a>
              </li>
              <li>
                <a href="/" className="block hover:text-secondary">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="block hover:text-secondary">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Help</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="block hover:text-secondary">
                  How does it works?
                </a>
              </li>
              <li>
                <a href="/" className="block hover:text-secondary">
                  Where to ask questions?
                </a>
              </li>
              <li>
                <a href="/" className="block hover:text-secondary">
                  How to Play
                </a>
              </li>
              <li>
                <a href="/" className="block hover:text-secondary">
                  What is needed for this?
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Contact</h4>
            <ul className="space-y-3">
              <p className="hover:text-secondary">(012) 345 6789</p>
              <p className="hover:text-secondary">123 xyz xyz</p>
              <p className="hover:text-secondary">qwertdfgyk, qiwu - hrebck</p>
              <p className="hover:text-secondary">095467</p>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
        <p className="text-start text-sm py-5">
          Made By MBB © 2024 - All rights reserved
        </p>
        <div className="flex space-x-4">
          <img
            src={fbLogo}
            alt="facebook"
            className="w-10 cursor-pointer hover:translate-y-4 transition-all duration-300"
          />
          <img
            src={instaLogo}
            alt="instagram"
            className="w-10 cursor-pointer hover:translate-y-4 transition-all duration-300"
          />
          <img
            src={linkedinLogo}
            alt="linkedin"
            className="w-10 cursor-pointer hover:translate-y-4 transition-all duration-300"
          />
          <img
            src={twitterLogo}
            alt="twitter"
            className="w-10 cursor-pointer hover:translate-y-4 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
