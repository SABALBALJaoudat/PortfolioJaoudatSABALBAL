import Link from 'next/link.js';
import React from 'react';

import Carousel from '../components/Carousel.js';

import hmkl1 from '../image/HMKL1.png';
import hmkl2 from '../image/HMKL2.png';
import hmkl3 from '../image/HMKL3.png';


const images = [hmkl1, hmkl2, hmkl3];

function Extra() {
    return (
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
                    <p className={"text-justify"}>
                        The aim of this internship was to create a website with exercises for the learning of mathematics in primary schools
                        and add integration of various interaction techniques to include students with disabilities<br/>
                        <br/>
                        Via the implementation of a user-centred method :<br/>
                        <br/>
                        - Development of a website (HTML/CSS, Javascript) <br/>
                        - Creation of mock-up and prototyping (low-fidelity and high-fidelity) via Figma<br/>
                        - Recovery and analysis of user needs<br/>
                    </p>
                </div>

                <Carousel images={images}/>
            </div>
        </div>
    );
};

export default Extra;
