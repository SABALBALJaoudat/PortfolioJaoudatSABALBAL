import React from 'react';
import {BsFillCircleFill} from "react-icons/bs";
import Image from "next/image";
import photo from "@/image/Photo de profil.png";
import Cards from "@/components/Cards";

function Home() {
    return (
        <div>
            <nav className="py-10 flex justify-between">
                <h1 className={"text-2xl font-semibold font-poppins"}>
                    Jaoudat Portfolio
                </h1>
                <ul className={"flex items-center"}>
                    <li><BsFillCircleFill className={"cursor-pointer text-2xl mx-2"}/></li>
                    <li><a className={"bg-gradient-to-r from-amber-800 to-amber-700  text-amber-50 px-3 py-2 " +
                        "rounded-md mx-2"} href="">Resume</a></li>
                    <li><a className={"bg-gradient-to-r from-amber-800 to-amber-700 text-amber-50 px-3 py-2 " +
                        "rounded-md mx-2"} href="">Contact</a></li>
                </ul>
            </nav>
            <div className={"text-center p-10"}>
                <h2 className={"text-5xl text-amber-800 font-medium py-3"}>
                    Jaoudat SABALBAL
                </h2>
                <h3 className={"text-2xl font-medium py-2"}>
                    FrontEnd Developer and Ux Ui Designer
                </h3>
                <p className={"text-base py-5 leading-7"}>
                    Hi, my name is Jaoudat, a passionate and motivated UX/UI designer and Front-End developer.
                    I am specialized in creating attractive and intuitive designs for websites and
                    and mobile applications. I have a solid experience in user interface design and development,
                    and I love working in a team to implement designs that deliver an exceptional experience
                    for users.
                </p>
            </div>
            <div className={"flex"}>
                <Image src={photo} className="mx-auto w-36 h-36" alt=""/>
            </div>

            <h2 className={"text-2xl font-semibold"}>
                Project
            </h2>

            <Cards/>
        </div>
    );
}

export default Home;