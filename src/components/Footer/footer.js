import React from 'react';
import Eealogo from '../../images/eealogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer class="bg-white dark:bg-gray-900">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" class="flex items-center">
                            <img src={Eealogo} class="h-20" alt="FlowBite Logo" />

                        </a>
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white text-left">Menu</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium text-left">
                                <li class="mb-4">
                                    <a href="#homeContent" class="hover:underline">Home</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#overOnsContent" class="hover:underline">Over Ons</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#servicesContent" class="hover:underline">Diensten</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#contactContent" class="hover:underline">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white text-left">DIENSTEN</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium text-left">
                                <li class="mb-4">
                                    <a href="#servicesContent" class="hover:underline ">Woning Schoonmaak</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#servicesContent" class="hover:underline">Kantoor Schoonmaak</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#servicesContent" class="hover:underline">Spiegel Schoonmaak</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#servicesContent" class="hover:underline">Onderhoud Magazijnen</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#servicesContent" class="hover:underline">Industriele Schoonmaak</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#servicesContent" class="hover:underline">Trapzalen Schoonmaak</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white text-left">Legal</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium text-left">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">EEA Cleaning™</a>. All Rights Reserved.
                    </span>
                    <div className="flex items-center justify-center space-x-4 text-sm flex-wrap">
                        <a href="https://tr-tr.facebook.com/EmreAltiner42" target="_blank" className="text-gray-700 hover:text-blue-500 text-2xl">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        {/**<a href="#" target="_blank" className="text-gray-700"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" target="_blank" className="text-gray-700"><FontAwesomeIcon icon={faLinkedinIn} /></a> */}
                        <a href="https://www.instagram.com/emrrrr42" target="_blank" className="text-gray-700 hover:text-blue-500 text-2xl">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;



