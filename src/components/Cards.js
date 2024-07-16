import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import cards_Ogoxe from "../image/Ogoxe Logo 1.png";
import cards_Karacal from "../image/Extra_Logo.png";
import cards_Irit from "../image/Irit Logo.png";
import cards_Noveltis from "../image/Noveltis_logo.png";
import cards_MasterIhm from "../image/Logo_Master_IHM.png";
import cards_PersonalProject from "../image/Personal_Project.png";
import Link from "next/link";
import styles from '../styles/cards.module.css'
import { FiArrowUpRight } from "react-icons/fi";

const images = [
    [cards_Noveltis, "Noveltis", "/Noveltis", "Ingénieur Web Front-End", "non_visible", "Mai 2023 - ... (> 1 an)"],
    [cards_Ogoxe, "Ogoxe", "/Ogoxe", "Stage de fin d'études en tant qu'Ingénieur Intéractions Homme-Machine", "visible", "Mars 2022 - Juillet 2022 (5 mois)"],
    [cards_Karacal, "Karacal", "/Karacal", "Projet de fin d'étude alliant Ux/Ui Design et développement web Front-End", "visible", "Septembre 2021 - Mars 2022 (7 mois)"],
    [cards_Irit, "HMKL", "/Hmkl", "Stage Master 1 en tant que développeur web", "visible", "Juin 2021 - Aout 2021 (3 mois)"],
    [cards_MasterIhm, "Projet Master", "/Hmkl", "Vous trouverez ici un apercu des différents projets au cours de mon master", "non_visible", "Septembre 2021 - Aout 2022 (1 an)"],
    [cards_PersonalProject, "Projet perso", "/Hmkl", "Voici les projets perso sur lesquels j'ai plus ou moins récemment travaillé", "non_visible", "Beaucoup de temps..."],
]

function Cards() {

    // const observer = useRef();
    //
    // useEffect(() => {
    //     observer.current = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if (entry.isIntersecting)
    //                 entry.target.classList.add('showElem')
    //             else
    //                 entry.target.classList.remove('showElem')
    //         })
    //     })
    // })
    //
    // const hiddenElements = useState();
    // useEffect(() => {
    //     hiddenElements.current = document.querySelectorAll('.hiddenElem');
    //     hiddenElements.forEach((el) => {observer.observe(el)})
    // })

    return (
        <div className="flex justify-center items-center flex-wrap gap-4 hiddenElem">
            {images.map((image, index) => {
                return (
                    <div className={`${image[4] === 'non_visible' ? 'card-notAllowed' : ''}`} key={index}>
                        <Link className={`card relative p-4 ${image[4] === 'non_visible' ? 'card-nonVisible' : ''}`} href={image[2]}>
                            <div className="card-zoom">
                                <Image src={image[0]} className="card-zoom-image" data-mdb-ripple="true"
                                    data-mdb-ripple-color="light" alt="" />
                            </div>
                            <h1 className="card-zoom-text self-start mt-4">{image[1]}</h1>
                            <p className="card-zoom-text-description self-start mt-2">{image[3]}</p>
                            <p className="card-zoom-text-description-date self-start mt-2">{image[5]}</p>
                            <div className="absolute bottom-0 right-4 w-12 h-12">
                                <FiArrowUpRight className="h-6 w-6 svg-transition bottom-0 left-0 opacity-0 transition-all duration-500 ease-in-out transform" />
                            </div>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default Cards;