import React from 'react';

import Carousel from '../components/Carousel.js';

import extra1 from '../image/Extra1.png';
import extra2 from '../image/Extra2.png';
import extra3 from '../image/Extra3.png';
import extra4 from '../image/Extra4.png';


const images = [extra1, extra2, extra3, extra4];

function Extra() {
    return (
        <div className="flex items-center justify-center mt-24">
            <div className={"max-w-5xl"}>
                <div className={"p-5"}>
                    <h2 className={"text-2xl font-semibold mb-8"}>
                        Extra
                    </h2>
                    <p className={"text-justify"}>
                        Projet Chef d œuvre de Design Ux/Ui pour l application Karacal dans une équipe de 4 étudiants,
                        afin de créer de nouvelles interfaces devant être ajouté en tant que couche à la nouvelle application
                        Extra<br/>
                        <br/>
                        Application de la conception centrée utilisateur :<br/>
                    </p>
                    <ol className={"list-disc ml-5 text-justify"}>
                        <li>Création d une grille d entretien et réalisation d interview</li>
                        <li>Réalisation de Cycle itératif centré sur les utilisateurs</li>
                        <li>Réalisation de maquettes via Figma</li>
                        <li>Réalisation de prototypes papier (storyboard, sketch, prototype video)</li>
                    </ol>
                </div>

                <Carousel images={images}/>
            </div>
        </div>
    );
};

export default Extra;
