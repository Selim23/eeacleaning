import React, { Component } from 'react';
import Eealogo from '../../images/eealogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <nav className="fixed top-0 w-full bg-white shadow z-20">
        <div id="ct-topbar" className="bg-gray-100 py-2 hidden lg:block">
          <div className="container mx-auto 2xl:w-4/6 xl:w-5/6 px-4 ">
            <div className="flex justify-between items-center">
              <div className="text-gray-700 text-sm">
                Welcome op onze <b>EEA Cleaning Service!</b>
              </div>
              <div className="flex space-x-6">
                <div className="flex items-center text-gray-700 text-sm">
                  <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                  <label>Bel voor hulp:</label>
                  <a href="tel:+12354623257" className="ml-1 text-green-500">(+32) 488 418 37 29</a>
                </div>
                <div className="flex items-center text-gray-700 text-sm">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  <label>Mail naar ons:</label>
                  <a href="mailto:envato@gmail.com" className="ml-1 text-green-500">eeaservices@outlook.com</a>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <a href="https://tr-tr.facebook.com/EmreAltiner42" target="_blank" className="text-gray-700 hover:text-blue-500"><FontAwesomeIcon icon={faFacebookF} /></a>
                  {/**<a href="#" target="_blank" className="text-gray-700"><FontAwesomeIcon icon={faTwitter} /></a>
                  <a href="#" target="_blank" className="text-gray-700"><FontAwesomeIcon icon={faLinkedinIn} /></a> */}
                  <a href="https://www.instagram.com/emrrrr42" target="_blank" className="text-gray-700 hover:text-blue-500"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 sm:p-3">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Eealogo} className="h-12 sm:h-16" alt="EEA Cleaning logo" />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-green-300 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-sm md:text-lg"
            >
              Maak Afspraak
            </button>
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isOpen}
              onClick={this.toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className={`items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#homeContent" className="block py-2 px-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-500 md:p-0 md:dark:text-green-300 text-2xl relative group" aria-current="page">
                  Home
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#overOnsContent" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent text-2xl md:hover:text-green-500 md:p-0 md:dark:hover:text-green-300 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 relative group">
                  Over ons
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#servicesContent" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent text-2xl md:hover:text-green-500 md:p-0 md:dark:hover:text-green-300 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 relative group">
                  Services
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#contactContent" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent text-2xl md:hover:text-green-500 md:p-0 md:dark:hover:text-green-300 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 relative group">
                  Contact
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
