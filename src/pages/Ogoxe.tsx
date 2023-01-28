import React from 'react';

// import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import Carousel from '../components/Carousel.js';

import extra1 from '../image/Extra1.png'
import extra2 from '../image/Extra2.png'
import extra3 from '../image/Extra3.png'


const images = [extra1, extra2, extra3];

function Ogoxe() {
    return (
        <section>
            <div className={"py-10"}>
                <h2 className={"text-2xl font-semibold"}>
                    Ogoxe
                </h2>
                <p id="content">
                    Travail de conception UX et UI sur un projet interne Smart Device<br/>
                    Travail de conception UX et UI sur le projet Européen (Interreg France-Manche-Angleterre) nommé Building Resilience
                    in Flood Disadvantaged Communities (BRIC)<br/>
                    <br/>
                    Application de la conception centrée utilisateur :<br/>
                </p>
                <ol className={"list-disc ml-5"}>
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
        </section>
    );
}

export default Ogoxe;