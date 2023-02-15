import React from 'react';
import {BsDownload, BsLinkedin} from "react-icons/bs";
import Link from "next/link";

function BotPage() {
    return (
        <div className="relative w-full bottom-0
        bg-violet-700
        z-10 mt-10
        text-white">
        <div className="flex items-center justify-center">
            <div className="max-w-5xl w-full p-5">
                <div className="flex flex-wrap items-center
                py-2">
                    <p>
                        To see my Linkedin :
                    </p>
                    <Link target="_blank" href="https://www.linkedin.com/in/jaoudat-sabalbal-214723195/"
                          passHref={true} className="contents">
                        <BsLinkedin className="mx-4 h-6 w-6"/>
                    </Link>
                </div>
                <div className="flex flex-wrap items-center
                py-2">
                    <p>
                        To write me a message :
                    </p>
                    <p className="mx-2">
                        jaoudat.sabalbal@outlook.fr
                    </p>
                </div>
                <div className="flex flex-wrap items-center py-2">
                    <p>
                        To hear my voice :
                    </p>
                    <p className="mx-2">
                        06 18 17 64 83
                    </p>
                </div>
                <div className="flex flex-wrap items-center
                py-2">
                    <p>
                        Or to download my CV :
                    </p>
                    {/*<a className="ml-2" href='../../public/documents/Cv Jaoudat SABALBAL Designer Ux Ui Dev Front.pdf' download>*/}
                    {/*    <BsDownload className="mx-4 h-6 w-6"/>*/}
                    {/*</a>*/}
                    <a href='/documents/Cv%20Jaoudat%20SABALBAL%20Designer%20Ux%20Ui%20Dev%20Front.pdf' target="_blank" rel="noopener noreferrer">
                        <BsDownload className="mx-4 h-6 w-6 mx-4"/>
                    </a>
                </div>
            </div>
        </div>
        </div>
    );
}

export default BotPage;