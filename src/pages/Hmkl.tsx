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
        <div className="min-h-screen flex flex-col justify-between bg-site dark:bg-site_dark bg-no-repeat bg-cover overflow-hidden">
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
                    </div>

                    <Carousel images={images} />
                </div>
            </div>
        </div>
    );
}

export default Hmkl;