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
                            className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            href="https://www.channelmanche.com/fr/projets/projets/building-resilience-in-flood-disadvantaged-communities/">
                            https://www.channelmanche.com/fr/projets/projets/building-resilience-in-flood-disadvantaged-communities/
                        </Link>
                        <br />
                        <br />
                        Site web :
                        <br />
                        <Link target="_blank" passHref={true}
                            className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            href="https://platform.bric-network.com/">
                            https://platform.bric-network.com/
                        </Link>
                        <br />
                        <br />
                        <p className={"text-justify mt-5"}>
                            UX and UI design work on an internal Smart Device project<br />
                            UX and UI design work on the European project (Interreg France-Channel-England) called Building Resilience
                            in Flood Disadvantaged Communities (BRIC)<br />
                            <br />
                            Application of user-centred design :<br />
                        </p>
                        <ol className={"list-disc ml-5 text-justify"}>
                            <li>Analysis, understanding and definition of customers (persona, userflow...)</li>
                            <li>Mock-up and prototyping (low-fidelity and high-fidelity), choice of design / graphic charter (colour palette,
                                typography, components...)</li>
                            <li>Preparation and execution of co-design workshops (English / French), execution of user tests
                                (Maze, live tests...), analysis of results</li>
                            <li>Front End Development (Vue.Js, HTML/JS/CSS)</li>
                            <li>Design of StoryMaps (from ArcGis) for partners</li>
                        </ol>

                        <div className={"flex my-4"}>
                            <div className={"w-1/2 h-48 flex flex-col justify-between p-2 m-2 rounded-md bg-slate-300"}>
                                <h3 className={"mx-2"}>Developpement Web</h3>
                                <div className={"w-fit h-fit flex flex-row flex-wrap rounded-md"}>
                                    <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                        <h4>Vue.Js</h4>
                                    </div>
                                    <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                        <h4>Javascript Vanilla</h4>
                                    </div>
                                    <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                        <h4>StoryBook</h4>
                                    </div>
                                    <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                        <h4>PhpMyAdmin</h4>
                                    </div>
                                    <div className={"bg-slate-200 w-fit h-fit p-1 m-1 rounded-md"}>
                                        <h4>ArcGIS</h4>
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
                                        <h4>Adobe XD</h4>
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
        </div>
    );
}

export default Ogoxe;