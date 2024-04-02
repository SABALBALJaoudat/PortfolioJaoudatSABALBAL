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
                            className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            href="https://www.irit.fr/HandiMathKey-Learning/Test/HMKL/Vue/pageConnexion.php">
                            https://www.irit.fr/HandiMathKey-Learning/Test/HMKL/Vue/pageConnexion.php
                        </Link>
                        <p className={"text-justify mt-5"}>
                            The aim of this internship was to create a website with exercises for the learning of mathematics in primary schools
                            and add integration of various interaction techniques to include students with disabilities<br />
                            <br />
                            Via the implementation of a user-centred method :<br />
                            <br />
                            <ol className={"list-disc ml-5 text-justify"}>
                                <li>Development of a website (HTML/CSS, Javascript)</li>
                                <li>Creation of mock-up and prototyping (low-fidelity and high-fidelity) via Figma</li>
                                <li>Recovery and analysis of user needs</li>
                            </ol>
                        </p>
                        {/* <p className={"text-justify mt-5"}>
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
                            <br />
                            <br />
                            Ce stage c'est donc déroulé en 3 étapes :<br />
                            Premierement la pise en main du projet, avec la compréhension des besoins et des attentes des utilisateurs.
                            Le cas était assez particulier, car mon stage a commencé à la fin de l'année scolaire, et donc les élèves
                            n'étaient plus facilement joignable. J'ai donc du me baser sur les retours des enseignants et des parents
                            pour comprendre les besoins des élèves sur la premiere version du site. Celui-ci n'ayant pas eu de vrai phase de test
                            lors du précédent stage réalisé par l'éleve avant moi, ce fut donc mon role que de réaliser cette étape.<br />
                            <br />
                            Ensuite, la réalisation de la maquette et du prototype. Avec les elements obtenus par les nombreux retours, j'ai pu
                            faire une roadMap sur les elements manquants/nécéssaires aux eleves. J'ai donc réalisé une brainstorming avec mes tuteurs
                            et certains enseignants pour répondre aux besoins identifiés. Ensuite, j'ai mis au propre 3 solutions pouvant répondre
                            à ces besoins. Puis, j'ai réalisé des maquettes basse fidélité pour présenter une premiere version de ces solutions. Apres
                            les avoir validés, j'ai réalisé des maquettes haute fidélité pour présenter une version plus proche du rendu final.<br />
                            <br />
                            Enfin, la réalisation du site. Une fois les maquettes validées, j'ai pu commencer le développement du site. J'ai utilisé
                            les technologies HTML, CSS et Javascript pour réaliser le site. J'ai pu mettre en place des interactions pour rendre le site
                            plus intuitif et plus facile d'utilisation pour les eleves. J'ai aussi pu mettre en place des interactions pour les eleves
                            en situation de handicap, pour qu'ils puissent aussi utiliser le site sans difficulté.<br />
                            Par exemple, le drag and drop ne pouvait pas forcement être utilisé par des eleves en situation de handicap. L'une des solutions
                            a été par exemple de mettre en place un systeme de "suivi" de l'element à déplacer, pour que l'eleve puisse le déplacer sans
                            avoir à maintenir le clique. Une autre proposition a été un systeme de double clique, plus orienté pour l'utilisation de tablette.
                            Le premier clique doit pouvoir selectionné un élément, tandis que le second doit permettre de le positionner.<br />
                            <br />
                            Dans la réalisation du site, il a aussi été question de pouvoir retravailler l'exercice pour le rendre plus ludique et plus
                            facile à être fait. A partir d'un certain nombre de jeton, il était compliqué pour l'eleve de correctement compter malgre la
                            possibilité de faire du drag and drop sur les elements. J'ai donc proposé de mettre en place un systeme de "constelation à 5 éléments",
                            l'objectif de ce dernier étant de permettre de compter plus facilement les éléments. Pour cela, des que l'eleve rapproche un jeton de la constellation,
                            cela le placera automatiquement dans cette derniere, et ainsi facilitera le comptage.<br />
                        </p> */}
                    </div>

                    <div className={"flex my-4"}>
                        <div className={"w-1/2 h-48 flex flex-col justify-between p-2 m-2 rounded-md bg-slate-300"}>
                            <h3 className={"mx-2"}>Developpement Web</h3>
                            <div className={"w-fit h-fit flex flex-row flex-wrap rounded-md"}>
                                <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                    <h4>Php</h4>
                                </div>
                                <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                    <h4>React Js</h4>
                                </div>
                                <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                    <h4>Javascript</h4>
                                </div>
                                <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                    <h4>MySql</h4>
                                </div>
                            </div>
                        </div>

                        <div className={"w-1/2 h-48 flex flex-col justify-between p-2 m-2 rounded-md bg-slate-300"}>
                            <h3 className={"mx-2"}>UI/UX Design</h3>
                            <div className={"w-fit h-fit flex flex-row flex-wrap rounded-md"}>
                                <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                    <h4>User interface</h4>
                                </div>
                                <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                    <h4>User experience</h4>
                                </div>
                                <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                    <h4>Figma</h4>
                                </div>
                                <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                    <h4>User-centred design</h4>
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