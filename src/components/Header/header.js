import React, { Component } from 'react';
import AOS from 'aos';

// Definieer de class component
class Header extends Component {
  componentDidMount() {
    AOS.init({
      offset: 200, // De animatie begint 200px voor het element in het zicht komt
      delay: 100, // De animatie start 100ms na het triggeren
      duration: 1000, // De animatie duurt 1000ms (1 seconde)
      easing: 'ease-in-out', // De animatie heeft een 'ease-in-out' easing
      once: true, // De animatie wordt slechts één keer afgespeeld
      mirror: false, // De animatie wordt niet opnieuw afgespeeld bij naar boven scrollen
      anchorPlacement: 'top-bottom', // De animatie begint wanneer de bovenkant van het element de onderkant van het scherm bereikt
    });
  }


  render() {

    return (

      <div id='homeContent' className="relative bg-cover bg-center background-image mt-12 md:mt-26"  >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay om tekst leesbaar te maken */}
        <div className="relative flex flex-col justify-center items-center h-full">
          <h1 class="pt-16 sm:pt-32 mb-4 text-xl font-extrabold leading-none tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl dark:text-white" data-aos="fade-up" data-aos-anchor-placement="top-center">Beste schoonmaakservice in de<span class="underline underline-offset-3 decoration-8 decoration-green-400 dark:decoration-green-600"> Stad!</span></h1>
          <p className="text-white text-center mb-8 text-sm italic " data-aos="fade-up" data-aos-anchor-placement="top-center" >"Vertrouwd en Professioneel"</p>
          <button className="text-md md:text-2xl bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" data-aos="fade-up">
            Over Ons
          </button>
        </div>
      </div>
    );
  }
}

export default Header;