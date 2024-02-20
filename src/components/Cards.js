import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import cards1 from "../image/Ogoxe Logo 1.png";
import cards2 from "../image/Extra-Logo-nobg.png";
import cards3 from "../image/Irit Logo.png";
import Link from "next/link";
import styles from '../styles/cards.module.css'
import { FiArrowUpRight } from "react-icons/fi";

const images = [
    [cards1, "Ogoxe", "/OgoxePage", "Texte description rapide"],
    [cards2, "Karacal", "/KaracalPage", "Texte description rapide"],
    [cards3, "HMKL", "/HmklPage", "Texte description rapide"],
    [cards3, "Noveltis", "/HmklPage", "Texte description rapide"],
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
        <div className="flex justify-start items-center flex-wrap gap-4 hiddenElem">
            {/* <div className="flex justify-center items-center"> */}
            {images.map((image, index) => {
                return (
                    <div className="card p-4" key={image[0]}>
                        <Link className="card-zoom" href={image[2]}>
                            <Image src={image[0]} className="card-zoom-image" data-mdb-ripple="true"
                                data-mdb-ripple-color="light" alt="" />
                        </Link>
                        <h1 className="card-zoom-text self-start mt-4">{image[1]}</h1>
                        <h1 className="card-zoom-text-description self-start mt-2">{image[3]}</h1>
                        <div className="absolute bottom-0 right-0 w-12 h-12">
                            <FiArrowUpRight className="h-6 w-6 absolute svg-transition bottom-0 left-0 opacity-0 transition-all duration-500 ease-in-out transform" />
                        </div>
                    </div>
                );
            })}
            {/* </div> */}
        </div>
    );
}

export default Cards;