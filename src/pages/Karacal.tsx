import React from 'react';
import TopPage from "@/components/TopPage";

import Carousel from '../components/Carousel.js';

import extra1 from '../image/Extra1.png';
import extra2 from '../image/Extra2.png';
import extra3 from '../image/Extra3.png';
import extra4 from '../image/Extra4.png';
import Link from 'next/link.js';


const images = [extra1, extra2, extra3, extra4];

function Karacal() {
    return (
        <div className="min-h-screen flex flex-col justify-between overflow-hidden">
            <TopPage />
            <div className="flex items-center justify-center mt-24">
                <div className={"max-w-5xl"}>
                    <div className={"p-5"}>
                        <h2 className={"text-2xl font-semibold mb-8"}>
                            Karacal / Extra
                        </h2>
                        Site web Extra:
                        <Link target="_blank" passHref={true}
                            className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline ml-2"
                            href="https://www.extralabs.xyz/">
                            https://www.extralabs.xyz/
                        </Link>
                        <br />
                        <br />
                        Site web Karacal:
                        <Link target="_blank" passHref={true}
                            className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline ml-2"
                            href="https://karacal.fr/">
                            https://karacal.fr/
                        </Link>
                        <br />
                        <br />
                        <p className={"text-justify"}>
                            Ux/Ui Design Lead project for Karacal (which will become Extra) in a team of 4 students,
                            to create new interfaces to be added as a layer to the new application Extra<br />
                            <br />
                            Application of user-centred design :<br />
                        </p>
                        <ol className={"list-disc ml-5 text-justify"}>
                            <li>Creating interviews grid and conducting interviews</li>
                            <li>Realisation of a user-centred iterative cycle</li>
                            <li>Production of mock-up and prototyping (low-fidelity and high-fidelity) via Figma</li>
                            <li>Production of paper prototypes (storyboard, sketch, video prototype)</li>
                        </ol>
                        {/* <p className={"text-justify"}>
                            Le projet Karacal était un projet courant sur toute l'année scolaire 2020-2021. Nous étions en contact
                            avec l'entreprise Karacal (qui deviendra Extra) pour laquelle nous devions réaliser de nouvelles interfaces.
                            Celle-ci doit être une application proposant des interactions sur une carte 3D et concentrée sur l'expérience utilisateur
                            autour de la gen Z.
                            Dans une équipe de 4 étudiants, nous avons donc répartis nos taches sur 3 roles, chacun ayant passés un certains temps sur tous :<br />
                            - Designer UX
                            - Designer UI
                            - Developpeur Front-End
                            Nous devions proposer de nouvelles idées sur lesquels pouvaient travailler les developpeurs de l'entreprise par la suite.
                            C'est ainsi que vous pourrez voir sur les images ci-dessous des maquettes de l'application, des prototypes, et des idées d'interactions
                            que nous avons proposé.
                            Nous avons également en parallele travailler sur des versions prototype en React et Unity de certaines de nos idées.
                            <br />
                            Application de la conception centrée sur l'utilisateur :<br />
                        </p>
                        <ol className={"list-disc ml-5 text-justify"}>
                            <li>Création de grille d'entretiens et réalisation d'entretiens</li>
                            <li>Réalisation d'un cycle itératif centré sur l'utilisateur</li>
                            <li>Production de maquettes et prototypage (basse et haute fidélité) via Figma</li>
                            <li>Production de prototypes papier (storyboard, croquis, prototype vidéo)</li>
                            <li>Réalisation de prototype sous React et Unity</li>
                        </ol> */}
                    </div>

                    <div className={"flex my-4"}>
                        <div className={"w-1/2 h-48 flex flex-col justify-between p-2 m-2 rounded-md bg-slate-300"}>
                            <h3 className={"mx-2"}>Developpement Web</h3>
                            <div className={"w-fit h-fit flex flex-row flex-wrap rounded-md"}>
                                <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                    <h4>React Js</h4>
                                </div>
                                <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                    <h4>TypeScript</h4>
                                </div>
                                <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                    <h4>Unity</h4>
                                </div>
                                <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                    <h4>C#</h4>
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
                                    <h4>Maze</h4>
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

export default Karacal;