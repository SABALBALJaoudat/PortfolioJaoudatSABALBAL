/* eslint-disable react/no-unescaped-entities */
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
        <div className="min-h-screen flex flex-col justify-between overflow-hidden bg-neutral-50">
            <TopPage />
            <div className="flex items-center justify-center mt-24">
                <div className={"max-w-5xl"}>
                    <div className={"p-5"}>
                        <h2 className={"text-2xl font-semibold mb-8"}>
                            Karacal / Extra
                        </h2>
                        Site web Extra:
                        <Link target="_blank" passHref={true}
                            className="text-sm font-medium text-blue-600 hover:underline ml-2"
                            href="https://www.extralabs.xyz/">
                            https://www.extralabs.xyz/
                        </Link>
                        <br />
                        <br />
                        Site web Karacal:
                        <Link target="_blank" passHref={true}
                            className="text-sm font-medium text-blue-600 hover:underline ml-2"
                            href="https://karacal.fr/">
                            https://karacal.fr/
                        </Link>
                        <br />
                        <br />
                        <p className={"text-justify"}>
                            Projet d'UX/Ui et de développement web pour Karacal (qui deviendra Extra) en équipe de 4 étudiants,
                            pour créer de nouvelles interfaces à ajouter en tant que couche à la nouvelle application Extra<br />
                            <br />
                            Application de la méthode centrée sur l'utilisateur :<br />
                            <ol className={"list-disc ml-5 text-justify"}>
                                <li>Creating interviews grid and conducting interviews</li>
                                <li>Realisation of a user-centred iterative cycle</li>
                                <li>Production of mock-up and prototyping (low-fidelity and high-fidelity) via Figma</li>
                                <li>Production of paper prototypes (storyboard, sketch, video prototype)</li>
                            </ol>
                        </p>
                    </div>

                    <div className={"flex my-4"}>
                        <div className={"w-1/2 h-48 flex flex-col justify-between p-2 m-2 rounded-md bg-slate-300"}>
                            <h4 className={"mx-2"}>Developpement Web</h4>
                            <div className={"w-fit h-fit flex flex-row flex-wrap rounded-md"}>
                                <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                    React Js
                                </div>
                                <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                    TypeScript
                                </div>
                                <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                    Unity
                                </div>
                                <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                    C#
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
    );
}

export default Karacal;