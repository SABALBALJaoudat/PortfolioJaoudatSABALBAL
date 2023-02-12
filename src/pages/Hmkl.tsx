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
                    <a className=" text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://www.irit.fr/HandiMathKey-Learning/Test/HMKL/Vue/pageConnexion.php">
                        https://www.irit.fr/HandiMathKey-Learning/Test/HMKL/Vue/pageConnexion.php
                    </a>
                    <p className={"text-justify"}>
                        Via la mise en œuvre d une méthode centrée utilisateur :<br/>
                        <br/>
                        - Développement d un site Web (HTML/CSS, Javascript) pour l apprentissage des mathématiques au primaire
                        et intégration de divers techniques d interactions pour inclure des élèves en difficultés de handicap<br/>
                        - Réalisation de maquettes via Figma<br/>
                        - Récupération et analyse des besoins utilisateurs<br/>
                    </p>
                </div>

                <Carousel images={images}/>
            </div>
        </div>
    );
};

export default Extra;
