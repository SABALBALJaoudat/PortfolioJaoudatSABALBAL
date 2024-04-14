/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import TopPage from "@/components/TopPage";

import Carousel from '../components/Carousel.js';

import ogoxe1 from '../image/Ogoxe1.png'
import ogoxe2 from '../image/Ogoxe2.png'
import ogoxe3 from '../image/Ogoxe3.png'
import ogoxe4 from '../image/Ogoxe4.png'
import Link from "next/link";


const images = [ogoxe1, ogoxe2, ogoxe3, ogoxe4];

function Ogoxe() {
    return (
        <div className="min-h-screen flex flex-col justify-between overflow-hidden">
            <TopPage />
            <div className="flex items-center justify-center mt-24">
                <div className={"max-w-5xl"}>
                    <div className={"p-5"}>
                        <h2 className={"text-2xl font-semibold mb-8"}>
                            Ogoxe
                        </h2>
                        Présentation du projet :
                        <br />
                        <Link target="_blank" passHref={true}
                            className="text-sm font-medium text-blue-600 hover:underline"
                            href="https://www.channelmanche.com/fr/projets/projets/building-resilience-in-flood-disadvantaged-communities/">
                            https://www.channelmanche.com/fr/projets/projets/building-resilience-in-flood-disadvantaged-communities/
                        </Link>
                        <br />
                        <br />
                        Site web :
                        <br />
                        <Link target="_blank" passHref={true}
                            className="text-sm font-medium text-blue-600 hover:underline"
                            href="https://platform.bric-network.com/">
                            https://platform.bric-network.com/
                        </Link>
                        <br />
                        <br />
                        <p className={"text-justify"}>
                            Projet de design UX/UI et de développement front-end sur un projet interne Smart Device et sur un
                            projet européen (Interreg France-Channel-England) appelé Building Resilience in Flood Disadvantaged Communities (BRIC)<br />
                            <br />
                            Application de la méthode centrée sur l'utilisateur :<br />
                            <ol className={"list-disc ml-5 text-justify"}>
                                <li>Analyse, compréhension et définition des clients (persona, userflow...)</li>
                                <li>Maquettage et prototypage (basse et haute fidélité), choix de la charte design/graphique (palette de couleurs,
                                    typographie, composants...)</li>
                                <li>Préparation et exécution d'ateliers de co-design (Anglais/Français), exécution de tests utilisateurs
                                    (Maze, tests en live...), analyse des résultats</li>
                                <li>Développement Front End (Vue.Js, HTML/JS/CSS)</li>
                                <li>Design de StoryMaps (à partir d'ArcGis) pour les partenaires</li>
                            </ol>
                        </p>

                        <div className={"flex my-4"}>
                            <div className={"w-1/2 h-48 flex flex-col justify-between p-2 m-2 rounded-md bg-slate-300"}>
                                <h4 className={"mx-2"}>Developpement Web</h4>
                                <div className={"w-fit h-fit flex flex-row flex-wrap rounded-md"}>
                                    <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                        Vue.Js
                                    </div>
                                    <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                        Javascript Vanilla
                                    </div>
                                    <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                        StoryBook
                                    </div>
                                    <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                        PhpMyAdmin
                                    </div>
                                    <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                        ArcGIS
                                    </div>
                                </div>
                            </div>

                            <div className={"w-1/2 h-48 flex flex-col justify-between p-2 m-2 rounded-md bg-slate-300"}>
                                <h4 className={"mx-2"}>UI/UX Design</h4>
                                <div className={"w-fit h-fit flex flex-row flex-wrap rounded-md"}>
                                    <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                        User interface
                                    </div>
                                    <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                        User experience
                                    </div>
                                    <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                        Adobe XD
                                    </div>
                                    <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                        Maze
                                    </div>
                                    <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                        User-centred design
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Carousel images={images} />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ogoxe;