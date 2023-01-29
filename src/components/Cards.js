import React from 'react';
import Image from "next/image";
import cards1 from "../image/Ogoxe1.png";
import cards2 from "../image/Extra1.png";
import cards3 from "../image/Extra2.png";
import cards4 from "../image/Extra3.png";

const images = [
    [cards1, "Ogoxe"],
    [cards2, "Extra"],
]

function Cards() {
    return (
        <div className="flex flex-wrap items-center justify-center min-w-screen">
            {images.map((image, index) => {
                return (
                    <div className="" key={image[0]}>
                        <div className="card-zoom">
                            <Image src={image[0]} className="card-zoom-image" data-mdb-ripple="true"
                                   data-mdb-ripple-color="light" alt=""/>
                            <h1 className="card-zoom-text">{image[1]}</h1>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Cards;