import React from 'react';

import Carousel from '../components/Carousel.js';

import ogoxe1 from '../image/Ogoxe1.png'
import ogoxe2 from '../image/Ogoxe2.png'
import ogoxe3 from '../image/Ogoxe3.png'
import ogoxe4 from '../image/Ogoxe4.png'
import Link from "next/link";


const images = [ogoxe1, ogoxe2, ogoxe3, ogoxe4];

function Ogoxe() {
    return (
        <div className="flex items-center justify-center mt-24">
            <div className={"max-w-5xl"}>
                <div className={"p-5"}>
                    <h2 className={"text-2xl font-semibold mb-8"}>
                        Ogoxe
                    </h2>
                    <Link target="_blank" passHref={true}
                          className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          href="https://www.channelmanche.com/fr/projets/projets/building-resilience-in-flood-disadvantaged-communities/">
                        https://www.channelmanche.com/fr/projets/projets/building-resilience-in-flood-disadvantaged-communities/
                    </Link>
                    <p className={"text-justify mt-5"}>
                        UX and UI design work on an internal Smart Device project<br/>
                        UX and UI design work on the European project (Interreg France-Channel-England) called Building Resilience
                        in Flood Disadvantaged Communities (BRIC)<br/>
                        <br/>
                        Application of user-centred design :<br/>
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

                    <Carousel images={images}/>

                </div>
            </div>
        </div>
    );
}

export default Ogoxe;