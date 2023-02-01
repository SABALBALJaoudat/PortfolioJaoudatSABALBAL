import React from 'react';
import TopPage from '../components/TopPage'
import {BsLinkedin} from "react-icons/bs";
import Link from "next/link";

function Contact() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <TopPage/>
            <div className={"p-4"}>
                <div className={"flex flex-wrap items-center py-2"}>
                    <p>Pour voir mon Linkedin : </p>
                    <Link target="_blank" href={"https://www.linkedin.com/in/jaoudat-sabalbal-214723195/"} passHref={true} className={"contents"}>
                        <BsLinkedin className={"mx-4 h-6 w-6"}/>
                    </Link>
                </div>
                <div className={"flex flex-wrap items-center py-2"}>
                    <p>Pour m écrire un message :</p>
                    <p className={"mx-2"}>jaoudat.sabalbal@outlook.fr</p>
                </div>
                <div className={"flex flex-wrap items-center py-2"}>
                    <p>Pour écouter ma voix : </p>
                    <p className={"mx-2"}>06 18 17 64 83</p>
                </div>
                <div className={"flex flex-wrap items-center py-2"}>
                    <p>Ou bien encore pour voir mon CV : </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;