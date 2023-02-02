import React from 'react';
import Image from "next/image";
import cards1 from "../image/Ogoxe1.png";
import cards2 from "../image/Extra1.png";
import cards3 from "../image/Extra2.png";
import cards4 from "../image/Extra3.png";
import Link from "next/link";

const images = [
    [cards1, "Ogoxe", "/OgoxePage"],
    [cards2, "Extra", "/ExtraPage"],
]

function Cards() {
    return (
        <div className="flex flex-wrap items-center min-w-screen">
            {images.map((image, index) => {
                return (
                    <div className="" key={image[0]}>
                        <Link className="card-zoom" href={image[2]}>
                            <Image src={image[0]} className="card-zoom-image" data-mdb-ripple="true"
                                   data-mdb-ripple-color="light" alt=""/>
                            <h1 className="card-zoom-text">{image[1]}</h1>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default Cards;