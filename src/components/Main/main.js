import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Vergeet niet de CSS van AOS te importeren
import foto3 from '../../images/foto3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
    useEffect(() => {
        AOS.init({
            offset: 200, // De animatie begint 200px voor het element in het zicht komt
            delay: 100, // De animatie start 100ms na het triggeren
            duration: 1000, // De animatie duurt 1000ms (1 seconde)
            easing: 'ease-in-out', // De animatie heeft een 'ease-in-out' easing
            once: true, // De animatie wordt slechts één keer afgespeeld
            mirror: false, // De animatie wordt niet opnieuw afgespeeld bij naar boven scrollen
            anchorPlacement: 'top-bottom', // De animatie begint wanneer de bovenkant van het element de onderkant van het scherm bereikt
        });
    }, []);

    return (
        <div id='overOnsContent' className="py-12 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center w-6/6 xl:w-4/6 mx-auto" data-aos="fade-up-left">
            <div className="md:w-1/2 mt-6 lg:mt-0 mx-4">
                <img className="w-full rounded-full shadow-lg" src={foto3} alt="Team" />
            </div>
            <div className="md:w-1/2 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-black text-left py-2">Over ons</h2>
                <p className="text-gray-600 mb-4 text-left py-2">
                    Welkom bij EEA, uw betrouwbare partner voor algemene reiniging van gebouwen, kantoren, sanitair, magazijnen, trappenhallen, vloeren, bureaus, werkplaatsen en meer. Of het nu gaat om een grondige schoonmaak na renovaties, een opkuis of een dagelijkse reinigingsbeurt, wij staan voor u klaar.

                    Onze diensten zijn beschikbaar ongeacht de grootte, locatie of afstand van uw pand. Met een ervaren team dat meer dan 10 jaar expertise in de schoonmaaksector heeft, garanderen wij een hoge kwaliteit en professionele aanpak.

                </p>
                <p className="text-gray-600 mb-4 text-left py-2">
                    <b>
                        Wij zijn zeer flexibel en passen ons aan uw specifieke behoeften en schema aan. Dankzij het gebruik van hoogwaardige reinigingsproducten en -toestellen zorgen we voor een diepgaande en nauwkeurige hygiëne, waarbij we oog hebben voor elk detail.

                        Bovendien staan wij 24/7, 7 dagen per week, voor u klaar. Of het nu dag of nacht is, u kunt altijd op ons rekenen voor een brandschone omgeving.</b>
                </p>
                <div className="flex items-center text-gray-700 text-sm">
                    <FontAwesomeIcon icon={faPhoneAlt} className="mr-2 text-green-600 text-lg xl:text-2xl" />
                    <label className='text-lg xl:text-2xl'>Bel voor meer:</label>
                    <a href="tel:+12354623257" className="ml-1 text-blue-500 text-lg xl:text-2xl">(+32) 484 18 37 29</a>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
