import React, {useEffect, useRef, useState} from 'react';
import Image from "next/image";
import cards1 from "../image/Ogoxe Logo 1.png";
import cards2 from "../image/Extra-Logo-nobg.png";
import cards3 from "../image/Irit Logo.png";
import Link from "next/link";
import styles from '../styles/cards.module.css'

const images = [
    [cards1, "Ogoxe", "/OgoxePage"],
    [cards2, "Karacal", "/KaracalPage"],
    [cards3, "HMKL", "/HmklPage"],
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
        <div className="flex flex-wrap items-center justify-center hiddenElem">
            {images.map((image, index) => {
                return (
                    <div className="card relative flex flex-col items-center justify-center" key={image[0]}>
                        <Link className="card-zoom" href={image[2]}>
                            <Image src={image[0]} className="card-zoom-image" data-mdb-ripple="true"
                                   data-mdb-ripple-color="light" alt=""/>
                        </Link>
                        <h1 className="card-zoom-text">{image[1]}</h1>
                    </div>
                );
            })}
        </div>
    );
}

export default Cards;