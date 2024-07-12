// src/components/CenterMode.js

import foto2 from '../../images/foto2.jpg'; // Pas dit aan naar het juiste pad
import foto1 from '../../images/foto3.jpg'; // Pas dit aan naar het juiste pad
import foto3 from '../../images/foto4.jpg'; // Pas dit aan naar het juiste pad
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Vergeet niet de CSS van AOS te importeren
import Slider from 'react-slick';

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "none", color: "black", zIndex: 100 }}
            onClick={onClick}
        />
    );
}

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "none", color: "black", zIndex: 100 }}
            onClick={onClick}
        />
    );
}

function CenterMode() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "1px",
        slidesToShow: 3,
        speed: 300,
        dots: true,
        arrows:false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 1,
                    nextArrow: false, // Verberg de nextArrow op schermen kleiner dan 1024px
                    prevArrow: false, // Verberg de prevArrow op schermen kleiner dan 1024px
                },
            },
            {
                breakpoint: 1800, // Op desktops
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    const cards = [
        {
            image: foto1,
            title: "Woning Schoonmaak",
            description: "Woning schoonmaak biedt professionele reiniging voor huizen en appartementen, inclusief stofzuigen, dweilen, afstoffen, badkamer- en keukenreiniging, en het reinigen van ramen en spiegels."
        },
        {
            image: foto2,
            title: "Kantoor Schoonmaak",
            description: "Kantoor schoonmaak omvat professionele reinigingsservices voor kantoren, inclusief stofzuigen, dweilen, afstoffen, sanitaire voorzieningen, het schoonmaken van gemeenschappelijke ruimtes en het onderhouden van een schone werkomgeving."
        },
        {
            image: foto3,
            title: "Spiegel Schoonmaak",
            description: "Spiegel schoonmaak richt zich op het professioneel reinigen van spiegels in woningen en commerciële ruimtes. Dit omvat streeploos schoonmaken voor een heldere reflectie en verzorgde uitstraling."
        },
        {
            image: foto1,
            title: "Onderhoud Magazijnen",
            description: "Diensten gericht op het onderhouden en schoonhouden van magazijnen, inclusief opruimen, stofvrij houden en algemeen onderhoud om een veilige en georganiseerde werkomgeving te behouden."
        },
        {
            image: foto2,
            title: "Industriele Schoonmaak",
            description: "Gespecialiseerde reinigingsdiensten voor industriële omgevingen, zoals fabrieken, productiefaciliteiten en industriële machines, met aandacht voor veiligheid, hygiëne en naleving van regelgeving."
        },
        {
            image: foto3,
            title: "Trapzalen Schoonmaak",
            description: "Schoonmaakdiensten gericht op het schoonhouden van trappenhuizen in gebouwen, inclusief stofzuigen, dweilen, het reinigen van leuningen en glazen oppervlakken, om een nette en gastvrije entree te bieden."
        }
        // Voeg meer kaarten toe zoals nodig
    ];
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
        <div id='servicesContent' className='mx-auto bg-green-400 w-full'>
            <div class='pt-6 lg:pb-8'>
                <h1 className="text-3xl text-white font-bold ">
                    Waarom zou je voor onze diensten kiezen?
                </h1>
            </div>

            <div className="slider-container md:w-5/6 xl:w-4/6 mx-auto">
                <Slider {...settings}>
                    {cards.map((card, index) => (
                        <div key={index} data-aos="fade-left" className="my-12 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto flex flex-col overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src={card.image} alt="" />
                            </a>
                            <div className="p-5 flex-grow">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>

    );
}

export default CenterMode;
