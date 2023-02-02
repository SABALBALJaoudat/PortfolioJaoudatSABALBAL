import React from 'react';
import {BsLinkedin} from "react-icons/bs";
import Link from "next/link";

function BotPage() {
    return (
        <div className="relative w-full bottom-0
        bg-violet-700
        z-30 mt-10 p-4
        text-white">
            <div className="flex flex-wrap items-center
                py-2">
                <p>
                    Pour voir mon Linkedin :
                </p>
                <Link target="_blank" href="https://www.linkedin.com/in/jaoudat-sabalbal-214723195/"
                      passHref={true} className="contents">
                    <BsLinkedin className="mx-4 h-6 w-6"/>
                </Link>
            </div>
            <div className="flex flex-wrap items-center
                py-2">
                <p>
                    Pour m écrire un message :
                </p>
                <p className="mx-2">
                    jaoudat.sabalbal@outlook.fr
                </p>
            </div>
            <div className="flex flex-wrap items-center py-2">
                <p>
                    Pour écouter ma voix :
                </p>
                <p className="mx-2">
                    06 18 17 64 83
                </p>
            </div>
            <div className="flex flex-wrap items-center
                py-2">
                <p>
                    Ou bien encore pour voir mon CV :
                </p>
            </div>
        </div>
    );
}

export default BotPage;