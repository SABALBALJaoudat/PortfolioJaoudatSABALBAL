/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import TopPage from "@/components/TopPage";

import Carousel from '../components/Carousel.js';

import hmkl1 from '../image/HMKL1.png';
import hmkl2 from '../image/HMKL2.png';
import hmkl3 from '../image/HMKL3.png';
import Link from "next/link";


const images = [hmkl1, hmkl2, hmkl3];

function Hmkl() {
    return (
        <div className="min-h-screen flex flex-col justify-between overflow-hidden">
            <TopPage />
            <div className="flex items-center justify-center mt-24">
                <div className={"max-w-5xl"}>
                    <div className={"p-5"}>
                        <h2 className={"text-2xl font-semibold mb-8"}>
                            HMKL
                        </h2>
                        <Link target="_blank" passHref={true}
                            className="text-sm font-medium text-blue-600 hover:underline"
                            href="https://www.irit.fr/HandiMathKey-Learning/Test/HMKL/Vue/pageConnexion.php">
                            https://www.irit.fr/HandiMathKey-Learning/Test/HMKL/Vue/pageConnexion.php
                        </Link>
                        <p className={"text-justify mt-5"}>
                            L'objectif de ce stage était de créer un site web avec des exercices pour l'apprentissage des mathématiques dans les écoles primaires
                            et ajouter l'intégration de diverses techniques d'interaction pour inclure les élèves en situation de handicap<br />
                            <br />
                            Via la mise en place d'une méthode centrée sur l'utilisateur :<br />
                            <br />
                            <ol className={"list-disc ml-5 text-justify"}>
                                <li>Développement d'un site web (HTML/CSS, Javascript)</li>
                                <li>Création de maquettes et prototypage (basse et haute fidélité) via Figma</li>
                                <li>Récupération et analyse des besoins des utilisateurs</li>
                            </ol>
                        </p>
                    </div>

                    <div className={"flex my-4"}>
                        <div className={"w-1/2 h-48 flex flex-col justify-between p-2 m-2 rounded-md bg-slate-300"}>
                            <h4 className={"mx-2"}>Developpement Web</h4>
                            <div className={"w-fit h-fit flex flex-row flex-wrap rounded-md"}>
                                <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                    Php
                                </div>
                                <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                    React Js
                                </div>
                                <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                    Javascript
                                </div>
                                <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                    MySql
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
                                    Figma
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
    );
}

export default Hmkl;