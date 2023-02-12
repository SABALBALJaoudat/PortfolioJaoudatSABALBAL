import React from 'react';

import Carousel from '../components/Carousel.js';

import ogoxe1 from '../image/Ogoxe1.png'
import ogoxe2 from '../image/Ogoxe2.png'
import ogoxe3 from '../image/Ogoxe3.png'
import ogoxe4 from '../image/Ogoxe4.png'


const images = [ogoxe1, ogoxe2, ogoxe3, ogoxe4];

function Ogoxe() {
    return (
        <div className="flex items-center justify-center mt-24">
            <div className={"max-w-5xl"}>
                <div className={"p-5"}>
                    <h2 className={"text-2xl font-semibold mb-8"}>
                        Ogoxe
                    </h2>
                    <p className={"text-justify"}>
                        Travail de conception UX et UI sur un projet interne Smart Device<br/>
                        Travail de conception UX et UI sur le projet Européen (Interreg France-Manche-Angleterre) nommé Building Resilience
                        in Flood Disadvantaged Communities (BRIC)<br/>
                        <br/>
                        Application de la conception centrée utilisateur :<br/>
                    </p>
                    <ol className={"list-disc ml-5 text-justify"}>
                        <li>Analyse, compréhension et définition des clients (persona, userflow…)</li>
                        <li>Maquettage et prototypage (basse-fidélité et haute-fidélité), choix du design / charte graphique (palette de couleurs,
                            typographie, composants…)</li>
                        <li>Préparation et réalisation d atelier de co-conception (anglais / français), réalisation de tests utilisateurs
                            (Maze, tests en direct…), analyse des résultats</li>
                        <li>Développement Front End (Vue.Js, HTML/JS/CSS)</li>
                        <li>Réalisation du Design de StoryMap pour des partenaires</li>
                    </ol>

                    <Carousel images={images}/>

                </div>
            </div>
        </div>
    );
}

export default Ogoxe;